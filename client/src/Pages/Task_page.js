import React, { useEffect, useState } from 'react';
import TaskForm from '../Components/Taskform';
import TaskList from '../Components/Tasklist';
import FilterSortBar from '../Components/Filter_sort_bar';
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask
} from '../Services/api';
import { useNavigate } from 'react-router-dom';

function TaskPage() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('dueDate');

  useEffect(() => {
    if (!userId) return navigate('/login');
    fetchTasks(userId).then((res) => setTasks(res.data));
  }, []);

  const handleAddTask = async (task) => {
    const newTask = { ...task, userId };
    const res = await createTask(newTask);
    setTasks([...tasks, res.data]);
  };

  const handleUpdateTask = async (updatedTask) => {
    const res = await updateTask(updatedTask._id, updatedTask);
    const updatedTasks = tasks.map((task) =>
      task._id === res.data._id ? res.data : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  const handleToggleComplete = async (id) => {
    const task = tasks.find((t) => t._id === id);
    const updated = { ...task, completed: !task.completed };
    await handleUpdateTask(updated);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    return filter === 'completed' ? task.completed : !task.completed;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) =>
    new Date(a.dueDate) - new Date(b.dueDate)
  );

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div>
      <h2>My Tasks</h2>
      <button onClick={handleLogout}>Logout</button>
      <FilterSortBar filter={filter} setFilter={setFilter} setSortBy={setSortBy} />
      <TaskForm onAdd={handleAddTask} />
      <TaskList
        tasks={sortedTasks}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
}

export default TaskPage;
