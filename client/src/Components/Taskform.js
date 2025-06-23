import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      _id: Date.now().toString(),
      title,
      description,
      priority,
      dueDate,
      completed: false
    };
    onAdd(newTask);
    setTitle('');
    setDescription('');
    setPriority('low');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} required onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
