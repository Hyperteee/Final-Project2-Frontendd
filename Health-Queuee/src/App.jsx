import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "./components/Layout/layout"

import HealthcarePage from "./components/HealthcarePage"
import Navbar from "./components/Navbar/Navbar"
import HospitalSearch from "./components/Hospital-Search/Hospital-Search"
import ChatBot from "./components/ChatBot/ChatBot"
import PoppularDoc from "./components/PopularDoc/PoppularDoc"
import PackagePart from "./components/PackagePart/Package"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <HealthcarePage />
  // <BrowserRouter>
  //   <Routes>
  //     <Routes element= {<Layout />}>
  //       <Route path={'/'} element={<Navbar />}></Route>
  //     </Routes>
  //   </Routes>
  //  </BrowserRouter>
  )
}

export default App
