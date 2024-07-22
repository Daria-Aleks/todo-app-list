import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import TaskSort from './components/TaskSort';
import './App.scss';

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const startEditing = (task) => {
    setTaskToEdit(task);
  };

  const clearEdit = () => {
    setTaskToEdit(null);
  };

  return (
    <div className="app">
      <Header />
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} clearEdit={clearEdit} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskSort sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <TaskList tasks={tasks} deleteTask={deleteTask} startEditing={startEditing} filter={filter} sortOrder={sortOrder} />
    </div>
  );
};

export default App;