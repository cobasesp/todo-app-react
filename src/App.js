import './App.css';
import React, { Fragment, useState, useEffect } from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoListComponent';

function App() {

  const [todoList, setTodo] = useState([]);

  const addTodo = todoText => {
    setTodo([...todoList, todoText]);
  }

  console.log(todoList);

  return (
    <Fragment>
      <h1>#todo</h1>

      <AddTodo saveTodo={todoText => {
        addTodo(todoText);
      }} ></AddTodo>

      <TodoList todoList={todoList}></TodoList>

    </Fragment>
  );
}

export default App;
