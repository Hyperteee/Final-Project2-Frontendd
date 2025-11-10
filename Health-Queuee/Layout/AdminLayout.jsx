import { Outlet, Router } from "react-router";
import AdminHeader from "../src/components/AdminHeader";
import AdminNavbar from "../src/components/AdminNavbar";

const Adminlayout = () => {
    return (
        <>
            <AdminHeader/>
            <AdminNavbar/>
            <Outlet/>
        </>
    );
}

export default Adminlayout;