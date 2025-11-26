import { BrowserRouter, Route, Router, Routes } from "react-router"
import LoginPages from "../Login-Pages/Login-user"
import RegisterPage from "../Login-Pages/Register-User"


function App() {
  return (

    <BrowserRouter basename="/Health-Queuee/">
      <Routes>
        <Route path="/" element={<LoginPages/>} />
        <Route path="/register" element={<RegisterPage />} />
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
