import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './AdminNavbar.css';

const AdminNavbar = () => {
    // Hook นี้จะทำงานได้ก็ต่อเมื่อ AdminNavbar อยู่ในขอบเขตของ <Router>
    const location = useLocation(); 

    // สร้างฟังก์ชันเพื่อกำหนด className ของปุ่มที่ถูกเลือก
    const getButtonClass = (path) => {
        // location.pathname คือ URL ปัจจุบัน เช่น /doctors
        return location.pathname === path ? 'active-nav-button' : '';
    };

    return (
        <div className="admin-navbar-container">
            {/* ส่วนข้อมูลผู้ใช้/โรงพยาบาล */}
            <div className="profile-section">
                <div className="profile-image-wrapper">
                    <img src="https://via.placeholder.com/80" alt="Profile" className="profile-image" />
                </div>
                <div className="profile-text">
                    <p className="profile-name">ชื่อ-นามสกุล</p>
                    <p className="profile-hospital">ชื่อโรงพยาบาล</p>
                </div>
                <hr className="divider" />
            </div>

            {/* ส่วนปุ่มนำทาง */}
            <div className="nav-buttons-section">
                {/* ปุ่ม 'รายการนัด' */}
                <Link to="/appointments" className="nav-link-wrapper">
                    <Button variant="light" className={`nav-button ${getButtonClass('/appointments')}`}>
                        รายการนัด
                    </Button>
                </Link>
                {/* ปุ่ม 'จัดการคนไข้' */}
                <Link to="/managepatients" className="nav-link-wrapper">
                    <Button variant="light" className={`nav-button ${getButtonClass('/patients')}`}>
                        จัดการคนไข้
                    </Button>
                </Link>
                {/* ปุ่ม 'จัดการหมอ' (ตัวอย่างปุ่มที่ถูกเลือกในรูป) */}
                <Link to="/managethedocter" className="nav-link-wrapper">
                    <Button variant="light" className={`nav-button ${getButtonClass('/doctors')}`}>
                        จัดการหมอ
                    </Button>
                </Link>
                {/* ปุ่ม 'จัดการข้อมูลอื่นๆ' */}
                <Link to="/other" className="nav-link-wrapper">
                    <Button variant="light" className={`nav-button ${getButtonClass('/other-data')}`}>
                        จัดการข้อมูลอื่นๆ
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default AdminNavbar;