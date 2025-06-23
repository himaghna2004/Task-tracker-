import React from 'react';

function TaskItem({ task, onToggleComplete, onDelete }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate}</p>
      <button onClick={() => onToggleComplete(task._id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
