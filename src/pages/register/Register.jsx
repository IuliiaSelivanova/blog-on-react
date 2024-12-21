import './register.css';

const Register = () => {
  return (
    <div className='register'>
      <div className="registerWrapper">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input className='registerInput' type="text" placeholder='Enter your username' />
          <label>Email</label>
          <input className='registerInput' type="text" placeholder='Enter your email' />
          <label>Password</label>
          <input className='registerInput' type="password" placeholder='Enter your password' />
          <button className='registerButton'>Register</button>
        </form>
        <button className='registerLoginButton'>Login</button>
      </div>
    </div>
  );
};

export default Register;