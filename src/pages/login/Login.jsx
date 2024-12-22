import { Link } from 'react-router';
import './login.css';

const Login = () => {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input className='loginInput' type="text" placeholder='Enter your email' autoComplete='true'/>
          <label>Password</label>
          <input className='loginInput' type="password" placeholder='Enter your password' autoComplete='true'/>
          <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegisterButton'>
          <Link className='link' to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;