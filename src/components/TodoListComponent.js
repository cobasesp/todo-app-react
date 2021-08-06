import React from 'react';

const TodoList = ({todoList}) => {

    return(
        <div>
            {todoList.map(todo => (
                <p key={todo}>{todo}</p>
            ))}
        </div>
    )
}

export default TodoList;