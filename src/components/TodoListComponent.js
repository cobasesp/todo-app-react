import React from 'react';

const TodoList = ({todoView, updateTodoStatus}) => {

    const changeStatus = (index, e) => {
        updateTodoStatus(index, e.target.checked);
    }

    return(
        <div>
            {todoView.map((todo) => (
                <div className="todo-checkbox" key={todo.id}>
                    <input type="checkbox"
                    className="check form-control"
                    name={"check" + todo.id} 
                    id={"check" + todo.id}
                    defaultChecked={todo.done}
                    onClick={(e) => changeStatus(todo.id, e)}/>
                    <p>{todo.text}</p>
                </div>
            ))}
        </div>
    )
}

export default TodoList;