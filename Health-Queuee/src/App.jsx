import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; // เพิ่ม Navigate ตรงนี้แล้ว

import HealthcarePage from "./components/HealthcarePage";
import Listsearch from "./components/Hospital-Search/listsearch";
import Queue1 from "./components/Hospital-Search/Queue1";
import LoginPage from "../Login-Pages/Login-user";
import RegisterPage from "../Login-Pages/Register-User";
import Queue2 from "./components/Hospital-Search/Queue2";
import Queue3 from "./components/Hospital-Search/Queue3";
import Queue4 from "./components/Hospital-Search/Queue4";
import Testdata from "./components/Hospital-Search/testdata";
import Profile from "../src/Profile-User/Profile";
import ProfileBook from "../src/Profile-User/Profile-book";
import ChatBot from "../src/components/ChatBot"

// Context
import { HospitalScheduleProvider } from "../data/context/allSchedule";
import { UserAppointmentProvider } from "../data/context/appointment";

// Admin Imports
import Adminlayout from "../Layout/Adminlayout";
import AdminDashboard from "../pages/Dashboard";
import AdminExport from "../pages/Export";
import AdminTracking from "../pages/Tracking";
import AdminDataManagement from "../pages/Manage";
import AdminPatients from "../pages/ManagePatients";

function App() {
  return (
    <HospitalScheduleProvider>
      <UserAppointmentProvider>
        <BrowserRouter basename="/Health-Queuee">
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<HealthcarePage />} />
            <Route path="hospitals" element={<Listsearch />} />
            <Route path="queue1" element={<Queue1 />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="queue2" element={<Queue2 />} />
            <Route path="queue3" element={<Queue3 />} />
            <Route path="queue4" element={<Queue4 />} />
            <Route path="testdata" element={<Testdata />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profilebook" element={<ProfileBook />} />

            {/* Admin Routes */}
            <Route element={<Adminlayout />}>
              <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />

              <Route path="/admin/export" element={<AdminExport />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/tracking" element={<AdminTracking />} />
              <Route path="/admin/resources" element={<AdminDataManagement />} />
              <Route path="/admin/users" element={<AdminPatients />} />
            </Route>

            {/* Fallback: ถ้าพิมพ์มั่วๆ ให้ขึ้น 404 (ช่วยให้รู้ว่า Route ไม่พัง แต่แค่หาหน้าไม่เจอ) */}
            <Route path="*" element={<div style={{ padding: 20 }}>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </UserAppointmentProvider>
    </HospitalScheduleProvider>
  );
}

export default App;