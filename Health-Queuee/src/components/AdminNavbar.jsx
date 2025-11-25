import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './AdminNavbar.css';

const AdminNavbar = () => {

    const location = useLocation();

    const getButtonClass = (path) => {
        // ใช้ startsWith เพื่อให้ครอบคลุม path ย่อยๆ ด้วย หรือใช้ === ถ้าต้องการเป๊ะๆ
        return location.pathname === path ? 'active-nav-button' : '';
    };

    return (
        <div className="admin-navbar-container">
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


            <div className="nav-buttons-section">

                <Link to="/main" className="nav-link-wrapper">
                    <Button variant="light" className={`nav-button ${getButtonClass('/main')}`}>
                        หน้าแรก
                    </Button>
                </Link>

                <Link to="/appointments" className="nav-link-wrapper">
                    <Button variant="light" className={`nav-button ${getButtonClass('/appointments')}`}>
                        รายการนัด
                    </Button>
                </Link>

                {/* --- แก้ตรงนี้ให้ path ตรงกัน --- */}
                <Link to="/managepatients" className="nav-link-wrapper">
                    <Button variant="light" className={`nav-button ${getButtonClass('/managepatients')}`}>
                        จัดการผู้ใช้
                    </Button>
                </Link>

                {/* --- แก้ตรงนี้ให้ path ตรงกัน --- */}
                <Link to="/managethedocter" className="nav-link-wrapper">
                    <Button variant="light" className={`nav-button ${getButtonClass('/managethedocter')}`}>
                        จัดการหมอ
                    </Button>
                </Link>

                {/* --- แก้ตรงนี้ให้ path ตรงกัน --- */}
                <Link to="/other" className="nav-link-wrapper">
                    <Button variant="light" className={`nav-button ${getButtonClass('/other')}`}>
                        จัดการข้อมูลอื่นๆ
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default AdminNavbar;