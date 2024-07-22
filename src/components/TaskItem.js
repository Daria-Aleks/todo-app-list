import React from 'react';

const TaskItem = ({ task, deleteTask, startEditing }) => (
  <div className="task-item">
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <p>До: {task.dueDate}</p>
    <button onClick={() => startEditing(task)}>Редактировать</button>
    <button onClick={() => deleteTask(task.id)}>Удалить задачу</button>
  </div>
);

export default TaskItem;