import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import "./App.css";
import SearchStudent from './components/SearchStudent';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <div className='app-container'>
            <h1>Student Management System</h1>
            <Link to="/">Home</Link>
            <Link to="/add">Add Student</Link>
            <Link to="/search">Search</Link>
          </div>
        </nav>
        <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/edit" element={<EditStudent />} />
            <Route path="/search" element={<SearchStudent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;