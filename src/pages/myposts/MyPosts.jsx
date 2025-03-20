import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { urlPosts } from "../../urls";
import { UserContext } from "../../context/Context";
import { Link } from "react-router";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${urlPosts}/user/${user.id}`,
      );
      setPosts(res.data.posts);
    };
    fetchPosts();
  }, [user.id]);
  return (
    <>
      <Header />
      <div className="home">
        {posts ? (
          <Posts posts={posts} />
        ) : (
          <>
            <span>
              You haven't created a single post yet.
            </span>
            <Link to="/write">Create new post</Link>
          </>
        )}
        <Sidebar />
      </div>
    </>
  );
};

export default MyPosts;
