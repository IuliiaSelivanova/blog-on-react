import './topbar.css';
import PropfileImage from '../../assets/images/cat1.png';
import { Link } from 'react-router';

const TopBar = () => {
  const isAuthentificated = true;
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
          <li className="topListItem"><Link className='link' to="/#about">About</Link></li>
          <li className="topListItem"><Link className='link' to="/#contacts">Contacts</Link></li>
          <li className="topListItem"><Link className='link' to="/write">Write</Link></li>
          <li className="topListItem">{isAuthentificated && "Logout"}</li>
          {/* <li className="topListItem">"Logout"</li> */}
        </ul>
      </div>
      <div className="topRight">
        {/* <ul className='topList'>
          <li className='topListItem'><Link className='link' to="/login">Login</Link></li>
          <li className='topListItem'><Link className='link' to="/register">Register</Link></li>              
        </ul> */}
        {
          isAuthentificated ?
          (<img className='topImage' src={PropfileImage} alt="profile-photo" />) 
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