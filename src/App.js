import './todo.css';
import React, { Fragment, useState, useEffect } from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoListComponent';

function App() {

  const [todoList, setTodo] = useState([]);

  const addTodo = todoText => {
    setTodo([...todoList, todoText]);
  }

  const updateTodoStatus = (i, status) => {
    let newArray = [];
    
    todoList.forEach((todo, index) => {
      if( index == i ) {
        todo.done = status;
      }
      newArray.push(todo);
    });

    setTodo(newArray);
  }

  return (
    <Fragment>
      <h1>#todo</h1>

      <AddTodo saveTodo={todoText => {
        addTodo(todoText);
      }} ></AddTodo>

      <TodoList todoList={todoList} updateTodoStatus={updateTodoStatus}></TodoList>

    </Fragment>
  );
}

export default App;
