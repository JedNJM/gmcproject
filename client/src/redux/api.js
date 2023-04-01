import axios from 'axios';
// api goes to the backend endpoint
const API = axios.create({ baseURL: 'http://localhost:5000' });
export const signIn = (formData)=> API.post("/users/signin",formData)