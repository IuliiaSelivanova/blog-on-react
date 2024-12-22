import './post.css';
import postImg from '../../assets/images/postImage.jpg'
import { Link } from 'react-router';

const Post = (props) => {
  console.log(props)
  return (
    <div className='post'>
      <img className='postImg' src={postImg} alt="postImage" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle"><Link className='link' to="/post/:postId">{props.title}</Link></span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>{props.body}
      </p>
    </div>
  );
};

//typescript
// type Props = {
//   title: string
//   desc: string
// }

export default Post;