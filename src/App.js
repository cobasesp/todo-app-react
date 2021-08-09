import './todo.css';
import React, { Fragment, useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoListComponent';

function App() {

  // Define useStates
  const [todoList, setTodo] = useState([]);
  const [todoView, setTodoView] = useState([]);
  const [viewOption, setViewOption] = useState('all');

  // Init once the todoList from local storage
  useEffect(() => {
    let todos = localStorage.getItem('todolist');
    if(todos != null || typeof todos != 'undefined'){
      setTodo(JSON.parse(todos));
    }
  }, []);

  // Syncronize todoView with current todoList in any todo or view, changes
  useEffect(() => {
    switch(viewOption){
      case 'all':
        setTodoView(todoList);
        break;
      
      case 'active':
        setTodoView(todoList.filter((todo) => {return todo.done == false}));
        break;

      case 'completed':
        setTodoView(todoList.filter((todo) => {return todo.done == true}));
        break;
    }
    
  }, [todoList, viewOption])

  // Function to add todo to the useState and save it in local storage
  const addTodo = todoText => {
    let nextId = null;
    if(todoList.length > 0){
      nextId = todoList[todoList.length - 1].id + 1;
    }else{
      nextId = todoList.length + 1;
    }
    todoText = {...todoText, 'id': nextId}
    setTodo([...todoList, todoText]);
    localStorage.setItem('todolist', JSON.stringify([...todoList, todoText]));
  }

  // Function that deletes from the todo array an item
  const removeTodo = id => {
    Swal.fire({
      title: '¿Seguro que quieres eliminar esto?',
      text: "No podrás recuperarlo después",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, eliminar!',
      cancelmButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if(id === 'all'){
          let newList = todoList.filter((todo) => {return todo.done != true});
          setTodo(newList);
          localStorage.setItem('todolist', JSON.stringify(newList));
        }else{
          let newList = todoList.filter((todo) => {return todo.id != id});
          setTodo(newList);
          localStorage.setItem('todolist', JSON.stringify(newList));
        }
        Swal.fire(
          '¡Eliminado!',
          '',
          'success'
        )
      }
    })
  }

  // Update todo status when checkbox is clicked
  const updateTodoStatus = (id, status) => {
    let newArray = [];
    
    todoList.forEach((todo) => {
      if( todo.id == id ) {
        todo.done = status;
      }
      newArray.push(todo);
    });

    setTodo(newArray);
    localStorage.setItem('todolist', JSON.stringify(newArray));
  }

  // Change active options view
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

      <TodoList 
        todoView={todoView} 
        updateTodoStatus={updateTodoStatus}
        viewOption={viewOption}
        removeTodo={removeTodo}
        >
      </TodoList>

    </Fragment>
  );
}

export default App;
