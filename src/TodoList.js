import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/todos')
            .then(res => res.json())
            .then(data => {
                console.log("Data received:", data);
                setTodos(data);
            })
            .catch(error => {
                console.log("Error fetching data:", error);
            });
    }, []);

    console.log("Render todos:", todos);

    return (
        <div className="todolist">
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <div className="todo-each" key={todo.id}>
                        <h2>{todo.value}</h2>
                        <Link to={`/delete/${todo.id}`}>
                            <button><i className="fa-solid fa-trash"></i></button>
                        </Link>
                    </div>
                ))
            ) : (
                <p>No todos available</p>
            )}
            
        </div>
    );
}

export default TodoList;
