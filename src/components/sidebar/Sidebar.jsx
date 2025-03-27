import "./sidebar.css";
import sidebarProfile from "../../assets/images/sidebarProfile.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/api/categories");
      setCategories(res.data);
    };
    getCategories();
  }, []);
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
        <span className="sidebar__title">Категории</span>
        <ul id="contacts" className="sidebar__list">
          {categories &&
            categories.map((category) => (
              <Link
                to={`/?category=${category.name}`}
                key={category._id}
                className="link"
              >
                <li className="sidebar__list__item">
                  {category.name}
                </li>
              </Link>
            ))}
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
