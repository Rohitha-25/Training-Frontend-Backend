import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        department: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New student added:", formData);
        navigate("/");
    };

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
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
                </div>
                <div>
                    <input
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <input
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    />
                </div>
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudent;