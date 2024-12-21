import './singlePost.css';
import SinglePostImage from '../../assets/images/postImage.jpg';

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src={SinglePostImage} alt="single post" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit atem.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <b>Iuliia</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum impedit earum sed, nisi dolores, perspiciatis ratione rem blanditiis aut ab tempore inventore eius, iusto sit voluptate suscipit iste ad officiis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum impedit earum sed, nisi dolores, perspiciatis ratione rem blanditiis aut ab tempore inventore eius, iusto sit voluptate suscipit iste ad officiis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum impedit earum sed, nisi dolores, perspiciatis ratione rem blanditiis aut ab tempore inventore eius, iusto sit voluptate suscipit iste ad officiis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum impedit earum sed, nisi dolores, perspiciatis ratione rem blanditiis aut ab tempore inventore eius, iusto sit voluptate suscipit iste ad officiis.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;