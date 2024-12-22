import './post.css';
import postImg from '../../assets/images/postImage.jpg'
import { Link } from 'react-router';

const Post = ({post}) => {
  console.log(post)
  return (
    <div className='post'>
      <img className='postImg' src={postImg} alt="postImage" />
      <div className="postInfo">
        <div className="postCategories">
          {post.tags.map(tag => (
            <span className="postCat">{tag}</span>
          ))}
        </div>
        <Link className='link' to={`/post/${post.id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>{post.body}</p>
    </div>
  );
};

//typescript
// type Props = {
//   title: string
//   desc: string
// }

export default Post;