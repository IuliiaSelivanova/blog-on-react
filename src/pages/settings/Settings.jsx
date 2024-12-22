import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/Context';
import axios from 'axios';
import { urlUsers } from '../../urls';

const Settings = () => {
  const {user, dispatch} = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    dispatch({type: "UPDATE_START"});
    e.preventDefault();
    const updatedUser = {
      username,
      email,
      password,
    }

    //формирование имя файла (аватарка), отправка на сервер
    if(file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      console.log(file)
      updatedUser.image = filename;
      //необходима выгрузка новой аватарки на сервер, для дальнейшей загрузки обновленного фото на сайте
      // try {
      //   await axios.post('/', data);
      // } catch (error) {}
    }

    try{
      const res = await axios.put(`${urlUsers}/${user.id}`, updatedUser);
      setSuccess(true);
      console.log(res.data)
      dispatch({type: "UPDATE_SUCCESS", payload: res.data});
    } catch(err){
      dispatch({type: "UPDATE_FAILURE", payload: err || "Update failed"});
    }
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`${urlUsers}/${user.id}`);
      dispatch({type: "LOGOUT"});
      window.location.replace("/");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle" onClick={handleDelete}>Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={file ? URL.createObjectURL(file) : user.image} alt="settings profile" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id='fileInput' style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)}/>
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          <button className="settingsSubmit" type='submit'>Update</button>
          {success && <span style={{color: 'green', textAlign: 'center', marginTop: '20px'}}>Profile has been updated</span>}
        </form>
      </div>
      <Sidebar/>
    </div>
  );
};

export default Settings;