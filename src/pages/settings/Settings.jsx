import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
import settingsProfileImg from '../../assets/images/cat1.png';

const Settings = () => {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={settingsProfileImg} alt="settings profile" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id='fileInput' style={{display:'none'}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder='Iuliia'/>
          <label>Email</label>
          <input type="email" placeholder='iuliia@mail.ru'/>
          <label>Password</label>
          <input type="password"/>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  );
};

export default Settings;