import "./post.css";
import { Link } from "react-router";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.image && (
        <img
          className="postImg"
          src={`/images/${post.image}`}
          alt="post image"
        />
      )}

      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((category) => (
            <span className="postCat" key={category._id}>
              {category.name}
            </span>
          ))}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />

        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
};

export default Post;
