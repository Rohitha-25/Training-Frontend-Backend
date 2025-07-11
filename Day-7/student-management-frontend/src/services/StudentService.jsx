import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/students";

export const getAllStudents = async() => await axios.get(API_URL);
export const getStudentById = async(id) => await axios.get(`${API_URL}/${id}`);
export const addStudent = async(student) => await axios.post(`${API_URL}/add`, student);
export const updateStudent = async(id, student) => await axios.put(`${API_URL}/update/${id}`, student);
export const deleteStudent = async(id) => await axios.delete(`${API_URL}/delete/${id}`);