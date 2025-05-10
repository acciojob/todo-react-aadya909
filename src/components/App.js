
import React, { useState } from 'react';
import Todo from './Todo';
import '../styles/App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTodoList([...todoList, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  return (
    <div className="app">
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Todo</button>

      <Todo todoList={todoList} deleteTask={deleteTask} />
    </div>
  );
};

export default App;

