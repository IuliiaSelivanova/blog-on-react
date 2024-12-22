import { Link } from 'react-router';
import './register.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { urlRegister } from '../../urls';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post(urlRegister, { username, email, password });
      res.data && window.location.replace('/login');
    } catch(err){
      console.error('Authentification failed:', err.response.data.error);
      setError(err.response.data.error);
    }
  }

  return (
    <div className='register'>
      <div className="registerWrapper">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            className='registerInput' 
            type="text" 
            placeholder='Enter your username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input 
            className='registerInput' 
            type="text" 
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input 
            className='registerInput' 
            type="password" 
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='registerButton'>Register</button>
        </form>
        <button className='registerLoginButton'>
          <Link className='link' to="/login">Login</Link>
        </button>
        
        <span style={{marginTop:"15px", color: 'rebeccapurple'}}>{error}</span>
      </div>
    </div>
  );
};

export default Register;