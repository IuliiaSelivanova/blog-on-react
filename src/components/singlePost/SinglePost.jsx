import './singlePost.css';
import SinglePostImage from '../../assets/images/postImage.jpg';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { urlPosts, urlUsers } from '../../urls';
import axios from 'axios';

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  const userId = post.userId;
  const [userName, setUsername] = useState('');

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(urlPosts + path);
      setPost(res.data);
    }
    getPost();
  },[path]);

  useEffect(() => {
    if (userId) {
      const getAuthor = async () => {
        const res = await axios.get(urlUsers + userId);
        setUsername(res.data.username)
      }
      getAuthor()
    }
  },[userId]);

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src={SinglePostImage} alt="single post" className="singlePostImg" />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <b>{userName ? userName : ''}</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>{post.body}</p>
      </div>
    </div>
  );
};

export default SinglePost;