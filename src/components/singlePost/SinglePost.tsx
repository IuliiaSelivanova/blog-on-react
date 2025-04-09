import "./singlePost.css";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router";
import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { UserContext } from "../../context/Context";
import { IPost } from "../../types/interface";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState<IPost | null>(null);
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get("/api/posts/" + path);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.description);
      } catch (error) {
        console.error("Ошибка загрузки поста:", error);
        navigate("/");
      }
    };
    getPost();
  }, [path, navigate]);

  const handleDelete = async () => {
    if (!user) return;

    try {
      await axios.delete(`/api/posts/${path}`, {
        data: {
          username: user.username,
        },
      });
      navigate("/");
    } catch (error) {
      console.error("Ошибка удаления поста:", error);
    }
  };

  const handleUpdate = async () => {
    if (!user) return;

    try {
      await axios.put(`/api/posts/${path}`, {
        title,
        description: desc,
        username: user.username,
      });
      setUpdateMode(false);

      // Обновляем пост после изменения
      const res = await axios.get<IPost>(
        `/api/posts/${path}`,
      );
      setPost(res.data);
    } catch (error) {
      console.error("Ошибка обновления поста:", error);
    }
  };

  if (!post) {
    return <div className="singlePost">Загрузка...</div>;
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.image && (
          <img
            src={`/images/${post.image}`}
            alt="single post"
            className="singlePostImg"
          />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-regular fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-solid fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Автор:
            <Link
              to={`/?user=${post.username}`}
              className="link"
            >
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button
            className="singlePostButton"
            onClick={handleUpdate}
          >
            Изменить
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
