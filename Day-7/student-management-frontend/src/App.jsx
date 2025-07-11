import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import SearchStudent from './components/SearchStudent';
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
          <div className='app-container'>
            <Navbar />
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