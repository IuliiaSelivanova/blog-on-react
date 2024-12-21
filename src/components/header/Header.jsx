import "./header.css";
import BackgroundImg from "../../assets/images/background.gif";

const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className='headerImg' src={BackgroundImg} alt="background" />
    </div>
  );
};

export default Header;