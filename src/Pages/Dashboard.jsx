import React, { useState } from "react";
import FilterTodo from "./FilterList";
import SortTodo from "./SortList";
import TodoList from "./TodoList";
import useAxios from "../Components/useAxios";
import "../App.css";


const Dashboard = ({ data }) => {
  const [todos, setTodos] = useState(data);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sortOption, setSortOption] = useState("date"); 

  const { data: todosData, loading, error } = useAxios('https://dummyjson.com/todos');

  console.log(todosData);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleToggleComplete = (id) => {
    const newTodos = todos.map((todo, i) =>
      id === todo.id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true; // 'all'
  });

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const sortedTodos = filteredTodos.sort((a, b) => {
    if (sortOption === "date") {
      return new Date(b.date) - new Date(a.date); // Descending by date
    } else if (sortOption === "title") {
      return a.text.localeCompare(b.text); // Ascending by title
    }
    return 0;
  });

  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const incompleteCount = todos.length - completedCount;

  return (
    <>
      <button onClick={handleThemeToggle} className="theme-toggle-button">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="dashboard-container">
        <h1 className="dashboard-title">To-Do Dashboard</h1>
        <div className="dashboard-summary">
          <div className="summary-item">Total Tasks: {todos.length}</div>
          <div className="summary-item">Completed: {completedCount}</div>
          <div className="summary-item">Incomplete: {incompleteCount}</div>
        </div>
      </div>
      <div className={`todo-container ${isDarkMode ? "dark" : "light"}`}>
        <h1 className="todo-title">My To-Do List</h1>
        <div className="todo-input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="todo-input"
            placeholder="Add a new task"
          />
          <button onClick={handleAddTodo} className="todo-button">
            Add
          </button>
        </div>
        <FilterTodo handleFilterChange={handleFilterChange} filter={filter} />
        <SortTodo handleSortChange={handleSortChange} sortOption={sortOption} />
        <TodoList
          handleRemoveTodo={handleRemoveTodo}
          handleToggleComplete={handleToggleComplete}
          filteredTodos={filteredTodos}
        />
      </div>
    </>
  );
};

export default Dashboard;
