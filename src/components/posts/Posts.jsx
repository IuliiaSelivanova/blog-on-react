import Post from '../post/Post';
import './posts.css';

const Posts = ({posts}) => {
  return (
    <div className='posts'>
      {posts.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </div>
  );
}; 

export default Posts;