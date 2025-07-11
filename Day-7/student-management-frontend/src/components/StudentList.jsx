import React, { useEffect, useState } from 'react'
import { getAllStudents } from '../services/StudentService';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getAllStudents().then((res) => {
            //console.log('API response:', res);
            setStudents(res.data.data);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <React.Fragment>
            <div>
                <h2 style={{textAlign: "center"}}>Students List</h2>
                <table border="2" cellPadding="20" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Age</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((s) => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.dob}</td>
                                <td>{s.age}</td>
                                <td>{s.department}</td>
                                <td>{s.email}</td>
                                <td>{s.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export default StudentList;