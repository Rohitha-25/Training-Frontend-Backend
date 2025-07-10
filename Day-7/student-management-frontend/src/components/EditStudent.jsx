import React, { useState } from 'react'

const EditStudent = () => {
    const [id, setId] = useState("");
    const [student, setStudent] = useState({
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
        updateStudent(id, student)
        .then(() => {
            setMessage("Student updated successfully!");
            setId("");
            setStudent({name: "", email: "", phone: ""});
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
                    <input type='text' name='name' placeholder='Name' value={student.name} onChange={handleChange} />
                    <input type='text' name='email' placeholder='Email' value={student.email} onChange={handleChange} />
                    <input type='text' name='phone' placeholder='Phone' value={student.phone} onChange={handleChange} />
                </form>
            </div>
        </React.Fragment>
    );
};

export default EditStudent;