import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const StudentList = () => {

    const navigate = useNavigate();

    const [students, setStudents] = useState([
        { id: 1, name: "Lakshh", department: "CSE", email: "lakshh7@gmail.com", phone: "1234567890" },
        { id: 2, name: "Ro", department: "CSD", email: "ro25@gmail.com", phone: "9876543210" },
        { id: 3, name: "Jayshh", department: "CSM", email: "jayshh17@gmail.com", phone: "8976543210" },
        { id: 4, name: "Vini", department: "CSE", email: "vini6@gmail.com", phone: "7986543210" },
        { id: 5, name: "Rohitha", department: "MECH", email: "rohitha7@gmail.com", phone: "2134567890"}
    ]);

    const handleDelete = (id) => {
        setStudents(students.filter((s) => s.id !== id));
    };

    const handleEdit = (student) => {
        navigate("/edit", { state: { student } });
    };

    return (
        <div>
            <h2 style={{textAlign: "center"}}>Student List</h2>
            <div>
                <Link to="/add">
                    <button>Add Student</button>
                </Link>
            </div> <br/>
            <div>
                <table border="1">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.department}</td>
                        <td>{student.email}</td>
                        <td>{student.phone}</td>
                        <td>
                            <button onClick={() => handleEdit(student)}>Edit</button>{" "}
                            <button onClick={() => handleDelete(student.id)}>Delete</button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentList;