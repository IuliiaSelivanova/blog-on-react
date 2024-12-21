import './post.css';
import postImg from '../../assets/images/postImage.jpg'
import { Link } from 'react-router';

const Post = () => {
  return (
    <div className='post'>
      <img className='postImg' src={postImg} alt="postImage" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle"><Link className='link' to="/post/:postId">Lorem ipsum, dolor sit amet</Link></span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut culpa architecto qui pariatur consequatur, minima magni ipsa officia porro incidunt eos. Distinctio reiciendis obcaecati ipsa earum numquam pariatur praesentium soluta?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut culpa architecto qui pariatur consequatur, minima magni ipsa officia porro incidunt eos. Distinctio reiciendis obcaecati ipsa earum numquam pariatur praesentium soluta?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut culpa architecto qui pariatur consequatur, minima magni ipsa officia porro incidunt eos. Distinctio reiciendis obcaecati ipsa earum numquam pariatur praesentium soluta?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut culpa architecto qui pariatur consequatur, minima magni ipsa officia porro incidunt eos. Distinctio reiciendis obcaecati ipsa earum numquam pariatur praesentium soluta?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut culpa architecto qui pariatur consequatur, minima magni ipsa officia porro incidunt eos. Distinctio reiciendis obcaecati ipsa earum numquam pariatur praesentium soluta?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut culpa architecto qui pariatur consequatur, minima magni ipsa officia porro incidunt eos. Distinctio reiciendis obcaecati ipsa earum numquam pariatur praesentium soluta?
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