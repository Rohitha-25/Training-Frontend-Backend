import React, { useEffect, useState } from 'react'
import { getAllStudents } from '../services/StudentService';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getAllStudents().then((res) => {
            setStudents(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <React.Fragment>
            <div>
                <h2>Students List</h2>
                <ul>
                    {students.map(s => (
                        <li key={s.id}>
                            {s.name} - {s.dob} - {s.age} - {s.department} - {s.email} - {s.phone}
                        </li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    );
};

export default StudentList;