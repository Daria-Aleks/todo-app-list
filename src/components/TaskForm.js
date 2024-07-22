import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit, clearEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDueDate(taskToEdit.dueDate);
      setIsEditing(true);
    } else {
      setTitle('');
      setDescription('');
      setDueDate('');
      setIsEditing(false);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && dueDate) {
      const newTask = {
        title,
        description,
        dueDate,
        id: isEditing ? taskToEdit.id : Date.now(),
        completed: new Date(dueDate) < new Date(),  // Отметить как завершенную, если дата прошедшая
      };
      if (isEditing) {
        editTask(newTask);
        clearEdit();
      } else {
        addTask(newTask);
      }
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Название задачи" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Описание задачи" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      <button type="submit">{isEditing ? 'Обновить задачу' : 'Добавить задачу'}</button>
    </form>
  );
};

export default TaskForm;