import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { UserContext } from "../../context/Context";
import { Link } from "react-router";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `/api/posts?user=${user.username}`,
      );
      setPosts(res.data);
    };
    fetchPosts();
  }, [user.username]);
  return (
    <>
      <Header />
      <div className="home">
        {posts ? (
          <Posts posts={posts} />
        ) : (
          <>
            <span>Вы еще не создали ни одного поста.</span>
            <Link to="/write">Создать новый пост</Link>
          </>
        )}
        <Sidebar />
      </div>
    </>
  );
};

export default MyPosts;
