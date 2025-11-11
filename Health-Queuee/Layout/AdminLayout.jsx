import { Outlet } from "react-router";
import AdminHeader from "../src/components/AdminHeader";
import AdminNavbar from "../src/components/AdminNavbar";

const Adminlayout = () => {
    return (
        <>
            <AdminHeader />
            <div className="d-flex ">
                <AdminNavbar />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Adminlayout;