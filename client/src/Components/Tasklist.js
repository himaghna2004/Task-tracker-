import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onUpdate, onDelete, onToggleComplete }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;
