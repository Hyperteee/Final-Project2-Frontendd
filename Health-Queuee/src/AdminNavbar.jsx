import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileUp,        // สำหรับ Export
  Search,        // สำหรับ Tracking
  Users,         // สำหรับจัดการ User
  Stethoscope,   // สำหรับจัดการหมอ
  LogOut 
} from 'lucide-react';
import './AdminNavbar.css';

const AdminNavbar = () => {
    const navigate = useNavigate()
    const location = useLocation(); 

    // ฟังก์ชันเช็ค Active Menu เพื่อเปลี่ยนสีพื้นหลัง
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    function handleLogout(){
        localStorage.removeItem('currentUser');
        navigate('/login')
    }
    return (
        <div className="admin-sidebar">
            
            {/* 1. ส่วนโปรไฟล์ */}
            <div className="sidebar-header">
                <div className="profile-img-wrapper">
                     <img src="https://via.placeholder.com/1200x400/eef2ff/001E6C?text=Admin+Dashboard+Banner+(Placeholder)" alt="" />
                </div>
                <div className="profile-info">
                    <h5 className="profile-name">แอดมิน</h5>
                </div>
            </div>

            <div className="sidebar-divider"></div>

            <div className="menu-label">งานประจำวัน</div>
            <div className="sidebar-menu">
                <Link to="/admin/dashboard" className={`menu-item ${isActive('/admin/dashboard')}`}>
                    <LayoutDashboard size={20} />
                    <span>ภาพรวมระบบ</span>
                </Link>

                <Link to="/admin/export" className={`menu-item ${isActive('/admin/export')}`}>
                    <FileUp size={20} />
                    <span>ส่งข้อมูลนัด (Export)</span>
                </Link>

                <Link to="/admin/tracking" className={`menu-item ${isActive('/admin/tracking')}`}>
                    <Search size={20} />
                    <span>ติดตามผล (Tracking)</span>
                </Link>
            </div>

            <div className="menu-label">จัดการข้อมูล</div>
            <div className="sidebar-menu">
                <Link to="/admin/users" className={`menu-item ${isActive('/admin/users')}`}>
                    <Users size={20} />
                    <span>จัดการผู้ใช้</span>
                </Link>

                <Link to="/admin/resources" className={`menu-item ${isActive('/admin/resources')}`}>
                    <Stethoscope size={20} />
                    <span>ข้อมูลแพทย์/แผนก</span>
                </Link>
            </div>

            <div className="sidebar-footer">
                <button className="logout-btn" onClick={()=>handleLogout()}>
                    <LogOut size={18} />
                    <span>ออกจากระบบ</span>
                </button>
            </div>

        </div>
    );
}

export default AdminNavbar;