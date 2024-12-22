import { Link } from 'react-router';
import './login.css';
import { useState } from 'react';
import axios from 'axios';
import { urlLogin } from '../../urls';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post(urlLogin, {email, password});
      localStorage.setItem('token', res.data?.token);
      console.log(res.data)
    } catch(err){
      console.error('Authentification failed:', err.response.data.error);
      setError(err.response.data.error);
    }
  }

  return (
    <div className='login'>
      <div className="loginWrapper">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Email</label>
          <input 
            className='loginInput' 
            type="text" 
            placeholder='Enter your email'
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input 
            className='loginInput' 
            type="password" 
            placeholder='Enter your password'
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
          <button className='loginButton' type='submit'>Login</button>
        </form>
        <button className='loginRegisterButton'>
          <Link className='link' to="/register">Register</Link>
        </button>

        <span style={{marginTop:"15px", color: 'rebeccapurple'}}>{error}</span>
      </div>
    </div>
  );
};

export default Login;