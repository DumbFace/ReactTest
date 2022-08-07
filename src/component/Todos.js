import React from 'react'
import { render } from 'react-dom'

import ToDoItem from './TodoItem';

function Todos(props) {
    return (
        <div>
            <ul>
                {
                    props.todos.map(todo => (
                        <ToDoItem
                            key={todo.id}
                            todo={todo}
                            handleChange={props.handleChange}
                            handleDeleteTodo={props.handleDeleteTodo}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default Todos