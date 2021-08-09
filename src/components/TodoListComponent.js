import React, { Fragment } from 'react';

const TodoList = ({todoView, updateTodoStatus, viewOption, removeTodo}) => {

    const changeStatus = (index, e) => {
        updateTodoStatus(index, e.target.checked);
    }

    if(todoView == null){
        todoView = [];
    }
    return(
        <div>
            {todoView != null &&
            todoView.map((todo) => (
                <Fragment>
                    <div className="todo-checkbox" key={todo.id}>
                        <div class="todo-content">
                            <input type="checkbox"
                            className="check form-control"
                            name={"check" + todo.id} 
                            id={"check" + todo.id}
                            defaultChecked={todo.done}
                            onClick={(e) => changeStatus(todo.id, e)}/>
                            <p>{todo.text}</p>
                        </div>
                        
                        {todo.done == true && viewOption == 'completed' && 
                            <img className="delete-one" onClick={() => removeTodo(todo.id)} src={"/img/trash_icon_red.svg"}/>
                        }
                    </div>

                </Fragment>
            ))}

            {todoView.length > 0 && viewOption == 'completed' && 
                <button class="btn btn-danger pull-right delete-all" onClick={() => removeTodo('all')}>
                    <img src={"/img/trash_icon.svg"}/> Delete all
                </button>   
            }
        </div>
    )
}

export default TodoList;