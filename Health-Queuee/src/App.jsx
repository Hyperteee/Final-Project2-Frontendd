import { BrowserRouter, Route, Router, Routes } from "react-router"
import LoginPages from "../Login-Pages/Login-user"
import RegisterPage from "../Login-Pages/Register-User"
import AdminLayout from "../Layout/AdminLayout"
import Dashboard from "../pages/Dashboard"
import Export from "../pages/Export"
import Main from "../pages/Main"
import Manage from "../pages/Manage"
import ManagePatients from "../pages/ManagePatients"
import ManageTheDocter from "../pages/ManageTheDocter"
import Other from "../pages/Other"
import Tracking from "../pages/Tracking"





function App() {
  return (

    <BrowserRouter basename="/Health-Queuee/">
      <Routes>
        <Route element={<AdminLayout /> }>
          <Route path="/manage" element={<Manage/>}/>
          <Route path="/managepatients" element={<ManagePatients/>}/>
          <Route path="/managesthedocter" element={<ManageTheDocter/>}/>
          <Route path="other" element={<Other />} />
          <Route path="dashboard" element={<Dashboard/> } />
          <Route path="/export" element={<Export/>}/>
          <Route path="/tracking" element={<Tracking/>}/>
          <Route path="*" element={<Main/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    // <BrowserRouter basename="/Health-Queuee/">
    //   <Routes>
    //     <Route element={<Adminlayout />}>
    //       <Route path="/other" element={<Other/>}/>
    //       <Route path="/managepatients" element={<ManagePatients/>}/>
    //       <Route path="/managethedocter" element={<ManageTheDocter/>}/>
    //       <Route path="/appointments" element={<Appointments />} />
    //       <Route path="*" element={<Main/> } />
    //     </Route>

    //   </Routes>
    // </BrowserRouter>
  )

}

export default App
