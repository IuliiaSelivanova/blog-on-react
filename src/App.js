import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, } from "react-router";
import './app.css';
import { useContext } from "react";
import { UserContext } from "./context/Context";
import MyPosts from "./pages/myposts/MyPosts";

function App() {
  const {user} = useContext(UserContext);
  return (
    <BrowserRouter basename="/blog-on-react">
      <TopBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home/> : <Register/>}/>
          <Route path="/login" element={user ? <Home/> : <Login/>} />
          <Route path="/write" element={user ? <Write/> : <Login/>} />
          <Route path="/myposts" element={user ? <MyPosts/> : <Login/>} />
          <Route path="/settings" element={user ? <Settings/> : <Login/>} />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
