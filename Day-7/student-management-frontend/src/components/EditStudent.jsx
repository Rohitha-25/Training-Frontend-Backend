import React, { useState } from 'react'
import { updateStudent } from '../services/StudentService';

const EditStudent = () => {
    const [student, setStudent] = useState({
        id: "",
        name: "",
        email: "",
        phone: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setStudent({...student, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(student.id, student)
        .then(() => {
            setMessage("Student updated successfully!");
            setStudent({id: "", name: "", email: "", phone: ""});
        })
        .catch((err) => {
            console.error(err);
            setMessage("Error updating student");
        });
    };

    return (
        <React.Fragment>
            <div>
                <h2>Edit Student</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type='text' name='id' placeholder='Id' value={student.id} onChange={handleChange} />
                    </div><br/>
                    <div>
                        <input type='text' name='name' placeholder='Name' value={student.name} onChange={handleChange} />
                    </div><br/>
                    <div>
                        <input type='text' name='email' placeholder='Email' value={student.email} onChange={handleChange} />
                    </div><br/>
                    <div>
                        <input type='text' name='phone' placeholder='Phone' value={student.phone} onChange={handleChange} />
                    </div><br/>
                    <button type='submit'>Edit Student</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </React.Fragment>
    );
};

export default EditStudent;