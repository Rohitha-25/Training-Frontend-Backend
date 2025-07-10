import React, { useState } from 'react'
import { addStudent } from '../services/StudentService';

const AddStudent = async(student) => {
    const [student, setStudent] = useState({
        name: "",
        dob: "",
        department: "",
        email: "",
        phone: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setStudent({...student, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent().then(() => {
            setMessage("Student added successfully");
            setStudent({
                name: "",
                dob: "",
                department: "",
                email: "",
                phone: ""
            })
        })
        .catch((err) => {
            console.log(err);
            setMessage("Error adding student");
        });
    };

    return (
        <React.Fragment>
            <div>
                <h2>Add Student</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='Name' value={student.name} onChange={handleChange} />
                    <input type='text' name='dob' placeholder='DOB' value={student.dob} onChange={handleChange} />
                    <input type='text' name='department' placeholder='Department' value={student.department} onChange={handleChange} />
                    <input type='text' name='email' placeholder='Email' value={student.email} onChange={handleChange} />
                    <input type='text' name='phone' placeholder='Phone' value={student.phone} onChange={handleChange} />
                </form>
            </div>
        </React.Fragment>
    );
};

export default AddStudent;