import { useEffect } from "react";
import Post from "../post/Post";
import "./posts.css";
import { Link } from "react-router";

const Posts = ({ posts }) => {
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <div className="posts">
      {posts.length ? (
        posts.map((post) => (
          <Post key={post._id} post={post} />
        ))
      ) : (
        <div>
          <p>Вы пока не написали ни одного поста.</p>
          <button className="noPosts">
            <Link to="/write">Написать пост</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Posts;
