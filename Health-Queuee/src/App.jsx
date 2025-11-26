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
import DoctorList from "./doctor-list/doctor-list.jsx";
import hospitalMap from "./data/hospitaldata.jsx/allhospitaldata";
import { HospitalScheduleProvider } from "./data/context/allSchedule";
import { UserAppointmentProvider } from "./data/context/appointment";
import Testdata from "./components/Hospital-Search/testdata";
import Profile from "./Profile-User/Profile";
import ProfileBook from "./Profile-User/Profile-book";
import Login2 from "./Login-Pages/Login2";
import RegisterPage from "./Login-Pages/Register-User";
import Register2 from "./Login-Pages/register2.jsx";
// import Postpone from "./components/Hospital-Search/postpone";

function App() {
  return (
    <HospitalScheduleProvider>
      <UserAppointmentProvider>
      <BrowserRouter basename="/Final-Project2-Frontendd/">
        <Routes>
          <Route path="/" element={<HealthcarePage />} />
          <Route path="hospitals" element={<Listsearch />} />
          <Route path="queue1" element={<Queue1 />} />
          <Route path="Register" element={<Register2 />} />
          <Route path="login" element={<Login2 />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="queue2" element={<Queue2 />} />
          <Route path="queue3" element={<Queue3 />} />
          <Route path="queue4" element={<Queue4 />} />
          <Route path="doctors" element={<DoctorList />} />
          <Route path="testdata" element={<Testdata />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profilebook" element={<ProfileBook />} />
        </Routes>
      </BrowserRouter>
      </UserAppointmentProvider>

      <AuthProvider> {/* ห่อหุ้ม App ด้วย AuthProvider */}
        <Routes>
          {/* เส้นทางสาธารณะ */}
          <Route path="/login" element={<Login2 />} />
          <Route path="/register" element={<Register2 />} />
          
          {/* Protected Routes: ต้องล็อกอินเท่านั้น */}
          <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HealthcarePage />} /> {/* หน้าหลัก/User */}
          </Route>

          {/* Admin Protected Route: ต้องเป็น Admin เท่านั้น */}
          <Route element={<ProtectedRoute requiredRoles={['admin']} />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
          </Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </AuthProvider>
    </HospitalScheduleProvider>
  );
}

export default App;
