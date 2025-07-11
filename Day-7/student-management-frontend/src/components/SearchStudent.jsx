import React, { useState } from 'react';
import { getStudentById } from '../services/StudentService';

const SearchStudent = () => {
    const [id, setId] = useState('');
    const [student, setStudent] = useState(null);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!id) {
            setMessage('Please enter a student Id');
            setStudent(null);
            return;
        }

        getStudentById(id)
            .then((res) => {
                setStudent(res.data.data);
                setMessage('');
            })
            .catch((err) => {
                console.error(err);
                setMessage('Student not found');
                setStudent(null);
            });
    };

    return (
        <React.Fragment>
            <div>
                <h2>Search Student by Id</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="id"
                        placeholder="Enter Student Id"
                        value={id}
                        onChange={handleChange}
                    />
                    <button type="submit">Search</button>
                </form>
                
                {message && <p>{message}</p>}

                {student && (
                    <div>
                        <h3>Student Details</h3>
                        <p><strong>Name:</strong> {student.name}</p>
                        <p><strong>DOB:</strong> {student.dob}</p>
                        <p><strong>Age:</strong> {student.age}</p>
                        <p><strong>Department:</strong> {student.department}</p>
                        <p><strong>Email:</strong> {student.email}</p>
                        <p><strong>Phone:</strong> {student.phone}</p>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default SearchStudent;