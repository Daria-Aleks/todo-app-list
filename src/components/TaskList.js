import React from 'react';
import TaskItem from './TaskItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TaskList = ({ tasks, deleteTask, startEditing, filter, sortOrder }) => {
  const currentDate = new Date();

  const filteredTasks = tasks.filter(task => {
    const taskDate = new Date(task.dueDate);
    if (taskDate < currentDate) {
      task.completed = true;  // Отметить задачу как завершенную
    }
    if (filter === 'completed') {
      return task.completed;
    }
    if (filter === 'pending') {
      return !task.completed;
    }
    return true;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortOrder === 'asc') {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    return new Date(b.dueDate) - new Date(a.dueDate);
  });

  return (
    <TransitionGroup className="task-list">
      {sortedTasks.map((task) => (
        <CSSTransition key={task.id} timeout={500} classNames="task">
          <TaskItem task={task} deleteTask={deleteTask} startEditing={startEditing} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TaskList;