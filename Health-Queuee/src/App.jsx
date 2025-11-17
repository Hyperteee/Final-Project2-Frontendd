import { BrowserRouter, Route, Routes } from "react-router-dom";

import layout from "./components/Layout/Layout";

import HealthcarePage from "./components/HealthcarePage";
import Navbar from "./components/Navbar/Navbar";
import ChatBot from "./components/ChatBot/ChatBot";
import PoppularDoc from "./components/PopularDoc/PoppularDoc";
import PackagePart from "./components/PackagePart/Package";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Listsearch from "./components/Hospital-Search/listsearch";
import Queue1 from "./components/Hospital-Search/Queue1";
import LoginPage from "./login-Pages/Login-user";
import Queue2 from "./components/Hospital-Search/Queue2";
import Queue3 from "./components/Hospital-Search/Queue3";
import Queue4 from "./components/Hospital-Search/Queue4";
import hospitalMap from "./data/hospitaldata.jsx/allhospitaldata";
import { HospitalScheduleProvider } from "./data/context/allSchedule";
import { UserAppointmentProvider } from "./data/context/appointment";
import Testdata from "./components/Hospital-Search/testdata";
import Profile from "./Profile-User/Profile";
import ProfileBook from "./Profile-User/Profile-book";
function App() {
  return (
    <HospitalScheduleProvider>
      <UserAppointmentProvider>
      <BrowserRouter basename="/Final-Project2-Frontendd/">
        <Routes>
          <Route path="/" element={<HealthcarePage />} />
          <Route path="hospitals" element={<Listsearch />} />
          <Route path="queue1" element={<Queue1 />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="queue2" element={<Queue2 />} />
          <Route path="queue3" element={<Queue3 />} />
          <Route path="queue4" element={<Queue4 />} />
          <Route path="testdata" element={<Testdata />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profilebook" element={<ProfileBook />} />
        </Routes>
      </BrowserRouter>
      </UserAppointmentProvider>
    </HospitalScheduleProvider>
  );
}

export default App;
