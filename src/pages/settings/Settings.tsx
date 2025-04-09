import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/Context";
import axios from "axios";

interface UpdatedUser {
  userId: string;
  username: string;
  email: string;
  password: string;
  profilePicture?: string;
}

const Settings = () => {
  const { user, dispatch } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [success, setSuccess] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (!user) return;

    dispatch({ type: "UPDATE_START" });
    e.preventDefault();

    const updatedUser: UpdatedUser = {
      userId: user._id,
      username: username || user.username,
      email: email || user.email,
      password,
    };

    //формирование имя файла (аватарка), отправка на сервер
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;

      try {
        await axios.post("/api/upload", data);
      } catch (error) {
        dispatch({
          type: "UPDATE_FAILURE",
          payload: "Ошибка загрузки картинки",
        });
      }
    }

    try {
      const res = await axios.put(
        `/api/users/${user._id}`,
        updatedUser,
      );
      setSuccess(true);
      dispatch({
        type: "UPDATE_SUCCESS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "UPDATE_FAILURE",
        payload: axios.isAxiosError(err)
          ? err.response?.data?.message ||
            "Ошибка обновления данных пользователя"
          : "Ошибка обновления данных пользователя",
      });
    }
  };

  const handleDelete = async () => {
    if (!user) return;

    try {
      await axios.delete(`/api/users/${user._id}`);
      dispatch({ type: "LOGOUT" });
      window.location.replace("/");
    } catch (error) {
      console.error("Ошибка удаление пользователя", error);
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="settings__title">
          <span className="settings__updateTitle">
            Изменить аккаунт
          </span>
          <span
            className="settings__deleteTitle"
            onClick={handleDelete}
          >
            Удалить аккаунт
          </span>
        </div>
        <form
          className="settings__form"
          onSubmit={handleSubmit}
        >
          <label>Фото</label>
          <div className="settings__picture">
            <div className="settings__controls">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : user?.profilePicture
                    ? `/images/${user.profilePicture}`
                    : "/images/defaultAvatar.jpg"
                }
                alt="settings profile"
              />

              <label htmlFor="fileInput">
                <i className="settings__pictureIcon fa-regular fa-circle-user"></i>
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
            <button
              className="settings__logoutBtn"
              onClick={handleLogout}
            >
              {user && "Выйти"}
            </button>
          </div>
          <label>Логин</label>
          <input
            className="settings__input"
            type="text"
            placeholder={user?.username && user.username}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>,
            ) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            className="settings__input"
            type="email"
            placeholder={user?.email && user.email}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>,
            ) => setEmail(e.target.value)}
          />
          <label>Пароль</label>
          <input
            className="settings__input"
            type="password"
            placeholder={`${"*".repeat(6)}`}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>,
            ) => setPassword(e.target.value)}
          />
          <button
            className="settings__submit"
            type="submit"
          >
            Обновить
          </button>
          {success && (
            <span
              style={{
                color: "green",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Данные обновлены
            </span>
          )}
        </form>
      </div>
      <div className="sidebar-container">
        <Sidebar />
      </div>
    </div>
  );
};

export default Settings;
