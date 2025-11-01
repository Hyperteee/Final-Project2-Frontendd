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
import Login from "./Login-Part/Login-Page";

function App() {
  return (
    // <HealthcarePage />
    // <Navbar />
    // <Login />
    <BrowserRouter basename="/Final-Project2-Frontendd/">
      <Routes>
        <Route path="Layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
