import React from 'react'
import { Outlet } from 'react-router'

import Navbar from '../Navbar/Navbar'
import HospitalSearch from '../Hospital-Search/Hospital-Search'
import ChatBot from '../ChatBot/ChatBot'
import PoppularDoc from '../PopularDoc/PoppularDoc'
import PackagePart from '../PackagePart/Package'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div>
        <Navbar />
        <HospitalSearch />
        <ChatBot />
        <PackagePart />
        <PoppularDoc />
        <Outlet />
        <Footer />
    </div>
  )
}
