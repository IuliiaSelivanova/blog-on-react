import './post.css';
import postImg from '../../assets/images/postImage.jpg'

const Post = () => {
  return (
    <div className='post'>
      <img className='postImg' src={postImg} alt="postImage" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit soluta dolore autem quas, distinctio nisi vel amet animi impedit nesciunt eligendi dolores molestiae molestias quos repudiandae quia officia, numquam maxime!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit soluta dolore autem quas, distinctio nisi vel amet animi impedit nesciunt eligendi dolores molestiae molestias quos repudiandae quia officia, numquam maxime!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit soluta dolore autem quas, distinctio nisi vel amet animi impedit nesciunt eligendi dolores molestiae molestias quos repudiandae quia officia, numquam maxime!
      </p>
    </div>
  );
};

export default Post;