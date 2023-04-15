import axios from 'axios';
export const SignIn = async (email, password) => {
  return await axios.post('http://localhost:5000/login', { email, password });
}