import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, } from "react-router";
import './app.css';

function App() {
  const isAuthentificated = false;
  return (
    <BrowserRouter>
      <TopBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={isAuthentificated ? <Home/> : <Register/>}/>
          <Route path="/login" element={isAuthentificated ? <Home/> : <Login/>} />
          <Route path="/write" element={isAuthentificated ? <Write/> : <Login/>} />
          <Route path="/settings" element={isAuthentificated ? <Settings/> : <Login/>} />
          <Route path="/post/:postId" element={<Single />} />
          {/* <Route path="*" element={<ErrorPage errorCode={404} />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
