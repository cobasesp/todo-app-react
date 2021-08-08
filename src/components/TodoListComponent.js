import React from 'react';

const TodoList = ({todoList, updateTodoStatus}) => {

    const changeStatus = (index, e) => {
        updateTodoStatus(index, e.target.checked);
    }

    return(
        <div>
            {todoList.map((todo, index) => (
                <div className="todo-checkbox" key={todo}>
                    <input type="checkbox"
                    className="check form-control"
                    name={"check" + index} 
                    id={"check" + index} 
                    onClick={(e) => changeStatus(index, e)}/>
                    <p>{todo.text}</p>
                </div>
            ))}
        </div>
    )
}

export default TodoList;