import "./login.css";
import { useContext, useRef } from "react";
import axios from "axios";
import { UserContext } from "../../context/Context";

const Login = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const { dispatch, isFetching, error } =
    useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILURE",
      });
    }
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <span className="login__title">
          Войти в аккаунт
        </span>
        <form
          className="login__form"
          onSubmit={handleSubmit}
        >
          <label>Логин</label>
          <input
            className="login__input"
            type="text"
            placeholder="Введите свой логин"
            ref={usernameRef}
            required
          />
          <label>Пароль</label>
          <input
            className="login__input"
            type="password"
            placeholder="Введите свой пароль"
            ref={passwordRef}
            required
          />
          <button
            className="login__button"
            type="submit"
            disabled={isFetching}
          >
            Войти
          </button>
        </form>

        <span
          style={{
            marginTop: "15px",
            color: "rebeccapurple",
          }}
        >
          {error}
        </span>
      </div>
    </div>
  );
};

export default Login;
