import React, { useState, useEffect } from "react";
import Header from "../component/Layout/TodoHeader"
import Todos from "../component/Todos"
import AddTodo from "../component/AddToDo"
import { v4 as uuid } from "uuid";
import axios from "axios";
// import TodoFooter from "../component/Layout/TodoFooter";
import TodoFooter from "../store/containers/Footer";

function TodoApp() {
    // ...
    const [state, setState] = useState({
        todos: []
    });

    // const [todos, setTodos] = useState([]);

    const handleCheckboxChange = (id) => {
        setState({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    const handleDeleteToddo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(response =>
        setState({
                todos: state.todos.filter(todo => {
                    return todo.id !== id;
                })
            })
        )
    }

    const addTodo = title => {
        const todoData = {
            title: title,
            completed: false
        }
        axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
            .then(response => {
                setState({
                    todos: [...state.todos, response.data]
                })
            });

    };
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos", {
            params: {
                _limit: 10
            }
        })
            .then(response => setState({
                    todos: response.data
                }));
    }, [])

    return (
        <div className="container">
            <Header />
            <AddTodo
                addTodo={addTodo}
            />
            <Todos
                todos={state.todos}
                handleChange={handleCheckboxChange}
                handleDeleteTodo={handleDeleteToddo}
            />
            <TodoFooter/>
        </div>

    );
}

export default TodoApp;