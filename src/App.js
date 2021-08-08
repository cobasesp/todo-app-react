import './todo.css';
import React, { Fragment, useState, useEffect } from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoListComponent';

function App() {

  const [todoList, setTodo] = useState([]);
  const [todoView, setTodoView] = useState([]);
  const [viewOption, setViewOption] = useState('all');

  useEffect(() => {
    let todos = localStorage.getItem('todolist');
    if(todos != null || typeof todos != 'undefined'){
      setTodo(JSON.parse(todos));
    }
  }, []);

  useEffect(() => {
    switch(viewOption){
      case 'all':
        setTodoView(todoList);
        break;
      
      case 'active':
        setTodoView(getTodosByStatus(false));
        break;

      case 'completed':
        setTodoView(getTodosByStatus(true));
        break;
    }
    
  }, [todoList, viewOption])

  const addTodo = todoText => {
    let nextId = todoList.length + 1;
    todoText = {...todoText, 'id': nextId}
    setTodo([...todoList, todoText]);
    localStorage.setItem('todolist', JSON.stringify([...todoList, todoText]));
  }

  const updateTodoStatus = (id, status) => {
    let newArray = [];
    
    todoList.forEach((todo) => {
      if( todo.id == id ) {
        todo.done = status;
      }
      newArray.push(todo);
    });

    setTodo(newArray);
  }

  const getTodosByStatus = (status) => {
    let newArray = [];

    todoList.forEach((todo) => {
      if(todo.done == status){
        newArray.push(todo);
      }
    });

    return newArray;
  }

  const changeOption = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
  }

  return (
    <Fragment>
      <h1>#todo</h1>

      <div id="options">
        <div onClick={(e) => {setViewOption('all'); changeOption(e)}} className="active">All</div>
        <div onClick={(e) => {setViewOption('active'); changeOption(e)}}>Active</div>
        <div onClick={(e) => {setViewOption('completed'); changeOption(e)}}>Completed</div>
      </div>

      <AddTodo saveTodo={todoText => {
        addTodo(todoText);
      }} ></AddTodo>

      <TodoList todoView={todoView} updateTodoStatus={updateTodoStatus}></TodoList>

    </Fragment>
  );
}

export default App;
