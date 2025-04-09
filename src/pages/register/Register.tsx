import "./register.css";
import React, { useState } from "react";
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
      // todo автоматический вход после регистрации
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
      <div className="register__wrapper">
        <span className="register__title">Регистрация</span>
        <form
          className="register__form"
          onSubmit={handleSubmit}
        >
          <label>Логин</label>
          <input
            className="register__input"
            type="text"
            placeholder="Введите свой логин"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            className="register__input"
            type="text"
            placeholder="Введите свой email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Пароль</label>
          <input
            className="register__input"
            type="password"
            placeholder="Введите пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="register__button">
            Зарегистрироваться
          </button>
        </form>

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
