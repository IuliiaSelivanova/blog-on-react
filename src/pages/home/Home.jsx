import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';
import axios from 'axios';
import { urlPosts } from '../../urls';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () =>{
      const res = await axios.get(urlPosts);
      setPosts(res.data.posts);
    }
    fetchPosts()
  },[])
  return (
    <>
      <Header/>
      <div className='home'>
        <Posts posts={posts}/>
        <Sidebar/>
      </div>
    </>
  );
};

export default Home;