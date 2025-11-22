import React from 'react'
import { Outlet } from 'react-router'

// import Navbar from '../Navbar/Navbar'
import NavigationBar from '../Navbar/Navbar'
import ChatBot from '../ChatBot/ChatBot'
import PoppularDoc from '../PopularDoc/PoppularDoc'
import PackagePart from '../PackagePart/Package'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div>
        <NavigationBar />
        <ChatBot />
        <PoppularDoc />
        <PackagePart />
        <Outlet />
        <Footer />
    </div>
  )
}
