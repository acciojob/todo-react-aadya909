import React from 'react';

const Todo = ({ todoList, deleteTask }) => {
  return (
    <ul>
      {todoList.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
