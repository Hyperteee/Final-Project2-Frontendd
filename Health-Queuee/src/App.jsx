import { BrowserRouter, Route, Router, Routes } from "react-router"
import Admin from "../Layout/Adminlayout"
import HealthcarePage from "./components/HealthcarePage"
import Adminlayout from "../Layout/Adminlayout"
import Appointments from "../pages/Appoinment"
import ManagePatients from "../pages/ManagePatients"
import ManageTheDocter from "../pages/ManageTheDocter"
import Other from "../pages/Other"


function App() {
  return (
    <BrowserRouter basename="/Health-Queuee/">
      <Routes>
        <Route element={<Adminlayout />}>
          <Route path="รายการนัด" element={<Appointments/>}/>
          <Route path="จัดการคนไข้" element={<ManagePatients/>}/>
          <Route path="จัดการหมอ" element={<ManageTheDocter/>}/>
          <Route path="จัดการข้อมูลอื่นๆ" element={<Other/>}/>
          <Route path="*" element={<Appointments/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
