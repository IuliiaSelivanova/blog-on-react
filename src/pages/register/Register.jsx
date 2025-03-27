import { Link } from "react-router";
import "./register.css";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`/api/auth/register`, {
        username,
        email,
        password,
      });
      // todo автоматический вход после регистрации, перенаправлять не на страницу с входом, а на write или мои посты
      res.data && window.location.replace("/login");
    } catch (err) {
      console.error(
        "Authentification failed:",
        err.response.data.error,
      );
      setError(true);
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <span className="registerTitle">Регистрация</span>
        <form
          className="registerForm"
          onSubmit={handleSubmit}
        >
          <label>Логин</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Введите свой логин"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Введите свой email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Пароль</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Введите пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="registerButton">
            Зарегистрироваться
          </button>
        </form>
        {/* <button className='registerLoginButton'>
          <Link className='link' to="/login">Login</Link>
        </button> */}

        {error && (
          <span
            style={{
              marginTop: "15px",
              color: "rebeccapurple",
            }}
          >
            Что-то пошло не так
          </span>
        )}
      </div>
    </div>
  );
};

export default Register;
