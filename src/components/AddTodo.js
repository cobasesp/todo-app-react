import React from 'react';

const AddTodo = ({saveTodo}) => {

    const save = (e) => {
        let text = e.target.value;
        if(e.keyCode == 13 && text != ""){
            saveTodo({
                'text': text,
                'done': false
            });
            e.target.value = "";
        }
    }

    const saveFromButton = () => {
        let text = document.querySelector('.todo-box').value;
        if(text != ""){
            saveTodo({
                'text': text,
                'done': false
            });

            document.querySelector('.todo-box').value = "";
        }
    }

    return(
        <div id="todo-input">
            <input 
            type="text" 
            className="form-control todo-box" 
            placeholder="Escribe una tarea..." 
            onKeyUp={save}/>
            <button onClick={saveFromButton}>Add</button>
        </div>
    );

}

export default AddTodo;