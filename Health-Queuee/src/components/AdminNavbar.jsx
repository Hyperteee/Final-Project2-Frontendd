import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './AdminNavbar.css';

const AdminNavbar = () => {

    const location = useLocation(); 

    const getButtonClass = (path) => {
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
                
                <Link to="/managepatients" className="nav-link-wrapper">
                    <Button variant="light" className={`nav-button ${getButtonClass('/patients')}`}>
                        จัดการคนไข้
                    </Button>
                </Link>
                
                <Link to="/managethedocter" className="nav-link-wrapper">
                    <Button variant="light" className={`nav-button ${getButtonClass('/doctors')}`}>
                        จัดการหมอ
                    </Button>
                </Link>
                
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