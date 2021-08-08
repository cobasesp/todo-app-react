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

    return(
        <div id="todo-input">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Escribe una tarea..." 
            onKeyUp={save}/>
        </div>
    );

}

export default AddTodo;