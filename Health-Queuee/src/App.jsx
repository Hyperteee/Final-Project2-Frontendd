import { BrowserRouter, Route, Router, Routes } from "react-router"
import Admin from "../Layout/Adminlayout"
import HealthcarePage from "./components/HealthcarePage"
import Adminlayout from "../Layout/Adminlayout"
import ManagePatients from "../pages/ManagePatients"
import ManageTheDocter from "../pages/ManageTheDocter"
import Other from "../pages/Other"
import Appointments from "../pages/Appointments"


function App() {
  return (
    <BrowserRouter basename="/Health-Queuee/">
      <Routes>
        <Route element={<Adminlayout />}>
          <Route path="/appointments" element={<Appointments/>}/>
          <Route path="/managepatients" element={<ManagePatients/>}/>
          <Route path="/managethedocter" element={<ManageTheDocter/>}/>
          <Route path="*" element={<Other/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )

}

export default App
