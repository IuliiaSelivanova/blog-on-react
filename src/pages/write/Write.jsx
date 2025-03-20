import "./write.css";
// import writeImg from '../../assets/images/postImage.jpg';
import { useContext, useState } from "react";
import { urlAddPost } from "../../urls";
import axios from "axios";
import { UserContext } from "../../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      userId: user.id,
      body: desc,
      username: user.username,
    };

    //формирование имя файла, отправка на сервер (на тестовом сревере картинка не принимается в posts)
    // if(file) {
    //   const data = new FormData();
    //   const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   data.append("file", file);
    //   newPost.photo = filename;
    // }

    try {
      await axios.post(urlAddPost, newPost);
      //добавить модал - пост опубликован
      //после публикации поста -> переход на главную страницу (поскольку БД тестовая, новые посты не сохраняются)
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write">
      {file && (
        <img
          className="write__img"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form className="write__form" onSubmit={handleSubmit}>
        <div className="write__form-group">
          <label htmlFor="fileInput">
            <i className="write__icon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="write__input"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="write__form-group">
          <textarea
            placeholder="Tell your story..."
            type="text"
            rows={15}
            className="write__input write__text"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="write__submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
