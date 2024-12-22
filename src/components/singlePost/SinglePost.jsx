import './singlePost.css';
import SinglePostImage from '../../assets/images/postImage.jpg';
import { useLocation } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import { urlPosts} from '../../urls';
import axios from 'axios';
import { UserContext } from '../../context/Context';

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const {user} = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(urlPosts + `/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.body);
    }
    getPost();
  },[path]);

  const handleDelete = async () => {
    try {
      await axios.delete(urlPosts + `/${path}`);
      window.location.replace("/");
    } catch (error) {
      console.log(error)
    }
  };

  const handleUpdate = async() => {
    try {
      await axios.put(`${urlPosts}/${path}`, {title, body: desc});
      setUpdateMode(false);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src={SinglePostImage} alt="single post" className="singlePostImg" />
        {
          updateMode ? <input type="text" value={title} className='singlePostTitleInput' autoFocus onChange={(e)=>setTitle(e.target.value)}/> 
          : (
          <h1 className="singlePostTitle">
            {title}
            {post.userId === user?.id && (
              <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Views: <b>{post.views}</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        {updateMode ? (<textarea className='singlePostDescInput' value={desc} onChange={(e)=>setDesc(e.target.value)}/>) 
        : (<p className='singlePostDesc'>{desc}</p>)}
        {updateMode && <button className="singlePostButton" onClick={handleUpdate}>Update</button>}        
      </div>
    </div>
  );
};

export default SinglePost;