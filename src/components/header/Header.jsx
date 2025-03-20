import "./header.css";
import BackgroundImg from "../../assets/images/background.gif";

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <span className="header__title--small">React</span>
        <span className="header__title--large">Blog</span>
      </div>
      <img
        className="header__img"
        src={BackgroundImg}
        alt="background"
      />
    </div>
  );
};

export default Header;
