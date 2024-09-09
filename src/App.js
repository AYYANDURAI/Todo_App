import Dashboard from './Pages/Dashboard'
import TaskDetail from './Pages/TaskDetail'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard data={data}/>} />
          <Route path="/task/:id" element={<TaskDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
