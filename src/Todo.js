import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    let todoStatus;
    if(todo.complete === true)
        todoStatus = 'Task Completed';
    else
        todoStatus = 'Task NOT Completed';

    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
                Completed:{todoStatus} ---- Id:{todo.id} ---- Name:{todo.name}
            </label>
            
        </div>
    )
}
