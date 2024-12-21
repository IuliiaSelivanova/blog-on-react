import Post from '../post/Post';
import './posts.css';
import {getPosts} from '../../js/api.js';
import { useState,useEffect } from 'react';

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/?userId=4`) //${props.id}
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='posts'>
      {posts.map(post => {
        return <Post title={post.title} desc={post.body}/>
      })}
    </div>
  );
}; 

export default Posts;