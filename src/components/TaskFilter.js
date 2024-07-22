import React from 'react';

const TaskFilter = ({ filter, setFilter }) => (
  <div className="task-filter">
    <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Все задачи</button>
    <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Завершенные</button>
    <button onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active' : ''}>В процессе</button>
  </div>
);

export default TaskFilter;