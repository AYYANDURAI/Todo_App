import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './TaskDetail.css';

const data = [
    {
      id: 1,
      text: "Buy groceries",
      completed: false,
      date: "2024-09-01T12:00:00Z",
    },
    {
      id: 2,
      text: "Walk the dog",
      completed: true,
      date: "2024-09-02T09:30:00Z",
    },
    {
      id: 3,
      text: "Read a book",
      completed: false,
      date: "2024-09-03T18:00:00Z",
    },
  ];


const TaskDetail = () => {
  const { id } = useParams();
  const todo = data.find(todo => todo.id === parseInt(id, 10));

  if (!todo) {
    return <div>Task not found</div>;
  }

  return (
    <div className="task-detail-container">
      <h1 className="task-detail-title">Task Details</h1>
      <div className="task-detail-info">
        <p><strong>Task:</strong> {todo.text}</p>
        <p><strong>Status:</strong> {todo.completed ? 'Completed' : 'Incomplete'}</p>
        <p><strong>Date:</strong> {new Date(todo.date).toLocaleString()}</p>
      </div>
      <Link to="/" className="back-button">Back to Dashboard</Link>
    </div>
  );
};

export default TaskDetail;
