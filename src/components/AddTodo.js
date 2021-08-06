import React from 'react';

const AddTodo = ({saveTodo}) => {

    const save = (e) => {
        if(e.keyCode == 13){
            console.log(e.target.value);
            saveTodo(e.target.value);
        }
    }

    return(
        <input type="text" placeholder="Escribe una tarea..." onKeyUp={save}/>
    );

}

export default AddTodo;