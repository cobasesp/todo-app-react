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
        <input type="text" placeholder="Escribe una tarea..." onKeyUp={save}/>
    );

}

export default AddTodo;