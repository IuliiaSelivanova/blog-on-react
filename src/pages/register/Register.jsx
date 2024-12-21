import { Link } from 'react-router';
import './register.css';

const Register = () => {
  return (
    <div className='register'>
      <div className="registerWrapper">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input
            className='registerInput' 
            type="text" 
            placeholder='Enter your username'
          />
          <label>Email</label>
          <input 
            className='registerInput' 
            type="text" 
            placeholder='Enter your email'
          />
          <label>Password</label>
          <input 
            className='registerInput' 
            type="password" 
            placeholder='Enter your password'
          />
          <button className='registerButton'>Register</button>
        </form>
        <button className='registerLoginButton'>
          <Link className='link' to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Register;