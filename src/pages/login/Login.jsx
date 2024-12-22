import { Link } from 'react-router';
import './login.css';
import { useContext, useRef } from 'react';
import axios from 'axios';
import { urlLogin } from '../../urls';
import { UserContext } from '../../context/Context';

const Login = () => {
  const usernameRef = useRef('');
  const passwordRef = useRef('');
  const { dispatch, isFetching, error} = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try{
      const res = await axios.post(urlLogin, {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type: "LOGIN_SUCCESS", payload: res.data});
      console.log(res.data)
    } catch(err){
      dispatch({type: "LOGIN_FAILURE", payload: err || "Login failed"});
    };
  }

  return (
    <div className='login'>
      <div className="loginWrapper">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input 
            className='loginInput' 
            type="text" 
            placeholder='Enter your username'
            ref={usernameRef}
            required
          />
          <label>Password</label>
          <input 
            className='loginInput' 
            type="password" 
            placeholder='Enter your password'
            ref={passwordRef}
            required
          />
          <button className='loginButton' type='submit' disabled={isFetching}>Login</button>
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