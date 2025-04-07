import "./write.css";
import { useContext, useState } from "react";
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
      userId: user._id,
      description: desc,
      username: user.username,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.image = filename;

      try {
        await axios.post("/api/upload", data);
      } catch (error) {
        console.error("Error in uploading:", error);
      }
    }

    try {
      console.log(newPost);
      const res = await axios.post("/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="write">
      {file && (
        <img
          className="write__img"
          src={URL.createObjectURL(file)}
          alt="image for post"
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
            placeholder="Название"
            className="write__input"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="write__form-group">
          <textarea
            placeholder="Расскажите свою историю..."
            type="text"
            rows={15}
            className="write__input write__text"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="write__submit" type="submit">
          Опубликовать
        </button>
      </form>
    </div>
  );
};

export default Write;
