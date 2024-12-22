import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/Context';

const Settings = () => {
  const {user} = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      title,
      userId: user.id,
      body: desc,
      username: user.username,
    }

    //формирование имя файла, отправка на сервер (на тестовом сревере картинка не принимается в posts)
    // if(file) {
    //   const data = new FormData();
    //   const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   data.append("file", file);
    //   newPost.photo = filename;
    // }

    try{
      console.log(newPost)
      const res = await axios.post(urlAddPost, newPost);
      console.log('success', res.data)
      //добавить модал - пост опубликован
      //после публикации поста -> переход на главную страницу (поскольку БД тестовая новые посты не сохраняются)
      window.location.replace("/");
    } catch(err){
      console.log(err);
    }
  }

  
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
            <img src={user.image} alt="settings profile" />
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