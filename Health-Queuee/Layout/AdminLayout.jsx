import AdminHeader from "../src/components/AdminHeader";
import AdminNavbar from "../src/components/AdminNavbar";

import 'bootstrap/dist/css/bootstrap.min.css';

const AdminLayout = () => {
    // สไตล์สำหรับพื้นที่เนื้อหาสีขาว
    const contentStyle = {
        backgroundColor: '#FFFFFF',
        // ปรับ minHeight โดยใช้ค่าคงที่ของ HeaderNavbar (50px)
        minHeight: 'calc(100vh - 50px)',
        padding: '20px'
    };

    const pageContainerStyle = {
        margin: 0,
        padding: 0
    };

    return (
        <div className="container-fluid p-0" style={pageContainerStyle}>

            {/* 1. ส่วนหัว: ใช้คอมโพเนนต์ที่แยกออกมา */}
            <HeaderNavbar />

            {/* 2. พื้นที่เนื้อหาสีขาว */}
            <div className="row g-0">
                <div className="col-12" style={contentStyle}>
                    <h1>ยินดีต้อนรับสู่หน้าเว็บ</h1>
                    <p>นี่คือพื้นที่เนื้อหาส่วนใหญ่ของหน้าเว็บของคุณ</p>
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;