import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const TodoList = ({filteredTodos, handleRemoveTodo, handleToggleComplete}) => {
  return (
    <>
        <ul className="todo-list">
          {filteredTodos?.map((todo, index) => (
            <li key={index} className="todo-item">
              <Link to={`/task/${todo.id}`} className="todo-link">
                <span
                  className={`todo-text ${todo.completed ? "completed" : ""}`}
                >
                  {todo.text}
                </span>
              </Link>
              <button onClick={() => handleToggleComplete(todo.id)}>
                Complete
              </button>
              <button
                onClick={() => handleRemoveTodo(index)}
                className="todo-remove-button"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
    </>
  );
};

export default TodoList;
