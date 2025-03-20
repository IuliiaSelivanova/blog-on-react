import "./sidebar.css";
import sidebarProfile from "../../assets/images/sidebarProfile.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title">About me</span>
        <img src={sidebarProfile} alt="sidebar profile" />
        <p>
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quos sed at magni officia harum
          accusamus repudiandae porro a nesciunt quod.
        </p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">Categories</span>
        <ul id="contacts" className="sidebar__list">
          <li className="sidebar__list__item">Life</li>
          <li className="sidebar__list__item">Music</li>
          <li className="sidebar__list__item">Style</li>
          <li className="sidebar__list__item">Sport</li>
          <li className="sidebar__list__item">Tech</li>
          <li className="sidebar__list__item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span>Follow us</span>
        <div className="sidebar__social">
          <i className="sidebar__icon fa-brands fa-square-facebook"></i>
          <i className="sidebar__icon fa-brands fa-square-twitter"></i>
          <i className="sidebar__icon fa-brands fa-square-pinterest"></i>
          <i className="sidebar__icon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
