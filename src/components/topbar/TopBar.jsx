import "./topbar.css";
import { Link } from "react-router";
import { UserContext } from "../../context/Context";
import { useContext, useState } from "react";
import { HashLink } from "react-router-hash-link";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, dispatch } = useContext(UserContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="container">
      <div
        onClick={() => setIsOpen(false)}
        className={`layout ${isOpen ? "open" : ""}`}
      ></div>
      <div className="top">
        <div className="top__left">
          <i className="top__icon fa-brands fa-square-facebook"></i>
          <i className="top__icon fa-brands fa-square-twitter"></i>
          <i className="top__icon fa-brands fa-square-pinterest"></i>
          <i className="top__icon fa-brands fa-square-instagram"></i>
        </div>
        <div className="top__center">
          <button
            className="top__menuBtn"
            onClick={() => setIsOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul
            className={`top__list nav ${
              isOpen ? "open" : ""
            }`}
          >
            <button
              className="nav__close"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-xmark fa-xl"></i>
            </button>
            <li className="top__list__item link">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="top__list__item">
              <Link className="link" to="/myposts">
                My Posts
              </Link>
            </li>
            <li className="top__list__item">
              <HashLink
                smooth
                className="link"
                // to="/#contacts"
                to="/"
              >
                Contacts
              </HashLink>
            </li>
            <li className="top__list__item">
              <Link className="link" to="/write">
                Write
              </Link>
            </li>
            <li
              className="top__list__item"
              onClick={handleLogout}
            >
              {user && "Logout"}
            </li>
          </ul>
        </div>
        <div className="top__right">
          {user ? (
            <Link to="/settings">
              <img
                className="topImage"
                src={user.image}
                alt="profile-photo"
              />
            </Link>
          ) : (
            <ul className="top__list">
              <li className="top__list__item">
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li className="top__list__item">
                <Link className="link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
