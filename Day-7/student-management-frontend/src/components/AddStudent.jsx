import React, { useState } from 'react'
import { addStudent } from '../services/StudentService';

const AddStudent = () => {
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
        addStudent(student).then(() => {
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
                    <div>
                        <input type='text' name='name' placeholder='Name' value={student.name} onChange={handleChange} />
                    </div><br/>
                    <div>
                        <input type='date' name='dob' placeholder='DOB' value={student.dob} onChange={handleChange} />
                    </div><br/>
                    <div>
                        <select
                            name="department"
                            value={student.department}
                            onChange={handleChange}
                            >
                            <option value="">-- Select Department --</option>
                            <option value="CSE">CSE</option>
                            <option value="CSM">CSM</option>
                            <option value="CSD">CSD</option>
                            <option value="IT">IT</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="MECH">MECH</option>
                            <option value="CIVIL">CIVIL</option>
                        </select>
                    </div><br/>
                    <div>
                        <input type='text' name='email' placeholder='Email' value={student.email} onChange={handleChange} />
                    </div><br/>
                    <div>
                        <input type='text' name='phone' placeholder='Phone' value={student.phone} onChange={handleChange} />
                    </div><br/>
                    <button type='submit'>Add Student</button>

                </form>
                {message && <p>{message}</p>}
            </div>
        </React.Fragment>
    );
};

export default AddStudent;