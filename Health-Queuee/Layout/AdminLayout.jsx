import { Outlet } from "react-router";
import AdminHeader from "../src/components/AdminHeader";
import AdminNavbar from "../src/components/AdminNavbar";

const Adminlayout = () => {
    return (
        <>
            {/* <AdminHeader /> */}
            <div style={{ display: 'flex' }}>
                <AdminNavbar /> 

                <div style={{ marginLeft: '260px', flex: 1, backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
                    <Outlet /> 
                </div>
            </div>
        </>
    );
}

export default Adminlayout;