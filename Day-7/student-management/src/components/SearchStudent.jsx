import React, { useState } from 'react'

const SearchStudent = () => {

    const [students] = useState([
        { id: 1, name: "Lakshh", department: "CSE", email: "lakshh7@gmail.com", phone: "1234567890" },
        { id: 2, name: "Ro", department: "CSD", email: "ro25@gmail.com", phone: "9876543210" },
        { id: 3, name: "Jayshh", department: "CSM", email: "jayshh17@gmail.com", phone: "8976543210" },
        { id: 4, name: "Vini", department: "CSE", email: "vini6@gmail.com", phone: "7986543210" },
        { id: 5, name: "Rohitha", department: "MECH", email: "rohitha7@gmail.com", phone: "2134567890"}
    ]);

    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState([]);

    const handleSearch = () => {
        const result = students.filter(
            (student) => 
                student.id.toString() === query || 
                student.name.toLowerCase().includes(query.toLowerCase())
        );
        setFiltered(result);
    };

    return (
        <div>
            <h2>Search Student</h2>
            <input type='text' placeholder='Enter id or name' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SearchStudent;