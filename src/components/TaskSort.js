import React from 'react';

const TaskSort = ({ sortOrder, setSortOrder }) => (
  <div className="task-sort">
    <button onClick={() => setSortOrder('asc')} className={sortOrder === 'asc' ? 'active' : ''}>Сортировать по дате по возрастанию</button>
    <button onClick={() => setSortOrder('desc')} className={sortOrder === 'desc' ? 'active' : ''}>Сортировать по дате по убыванию</button>
  </div>
);

export default TaskSort;