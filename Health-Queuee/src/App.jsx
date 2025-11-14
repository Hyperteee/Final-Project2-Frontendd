import { BrowserRouter, Route, Routes } from "react-router-dom";

import layout from "./components/Layout/Layout";

import HealthcarePage from "./components/HealthcarePage";
import Navbar from "./components/Navbar/Navbar";
import HospitalSearch from "./components/Hospital-Search/Hospital-Search";
import ChatBot from "./components/ChatBot/ChatBot";
import PoppularDoc from "./components/PopularDoc/PoppularDoc";
import PackagePart from "./components/PackagePart/Package";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import LoginPage from "./login-Pages/Login-user";
import RegisterPage from "./Login-Pages/Register-User";
import Profile from "./Profile-User/Profile";
import Login2 from "./Login-Pages/Login2";
import ProfileBook from "./Profile-User/Profile-book";
import { Toaster, toast } from "react-hot-toast";

function App() {
  return (
    <>
      {/* <Toaster/> */}
      {/* <HealthcarePage />, */}
      {/* <Login2 />, */}
      {/* <Profile /> */}
      {/* <LoginPage />, */}
      {/* <RegisterPage /> */}
      {/* <Navbar /> */}
      {/* <Login /> */}
      <BrowserRouter basename="/Final-Project2-Frontendd/">
        <Routes>
          <Route path="Profile" element={<Profile />} />
          <Route path="ProfileBook" element={<ProfileBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
