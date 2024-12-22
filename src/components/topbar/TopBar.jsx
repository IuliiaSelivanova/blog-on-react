import './topbar.css';
import { Link } from 'react-router';
import { UserContext } from '../../context/Context';
import { useContext } from 'react';

const TopBar = () => {
  const {user, dispatch} = useContext(UserContext);

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  }
  
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className='topList'>
          <li className="topListItem link"><Link className='link' to="/">Home</Link></li>
          <li className="topListItem"><Link className='link' to="/myposts">My Posts</Link></li>
          <li className="topListItem"><Link className='link' to="/#contacts">Contacts</Link></li>
          <li className="topListItem"><Link className='link' to="/write">Write</Link></li>
          <li className="topListItem" onClick={handleLogout}>{user && "Logout"}</li>
        </ul>
      </div>
      <div className="topRight">
        
        {user ?
          (<Link to="/settings"><img className='topImage' src={user.image} alt="profile-photo" /></Link>) 
          : (<ul className='topList'>
              <li className='topListItem'><Link className='link' to="/login">Login</Link></li>
              <li className='topListItem'><Link className='link' to="/register">Register</Link></li>              
            </ul>)
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;