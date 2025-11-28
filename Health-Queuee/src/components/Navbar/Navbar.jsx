import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";
import { User, LogOut, Shield } from "lucide-react";
import { useTranslation } from 'react-i18next';

 function handleLogout() {
    localStorage.removeItem("currentUser");
    setCurrentUser(null); // เคลียร์ State
    navigate("/login");
  }

  export default function NavigationBar() {
    const PRIMARY_BLUE = "#0040FF";
    const DARK_BLUE = "#020A1B";
    
    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
      const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
      if (loggedInUser) {
        setCurrentUser(loggedInUser);
      }
    }, []);
    
    const isAdmin = currentUser && currentUser.role === "admin";
  
    const displayName = currentUser
      ? currentUser.fullname || currentUser.name || currentUser.email
      : null;
      
        const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

    const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  return (
        <header
          className="py-3 shadow-lg sticky-top"
          style={{ backgroundColor: DARK_BLUE, backdropFilter: "blur(12px)" }}
        >
          <div className="container d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <div
                className="d-flex align-items-center justify-content-center bg-primary rounded-3"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: PRIMARY_BLUE,
                }}
              >
                <span className="text-white fw-bold fs-4">H</span>
              </div>
              <div>
                <h1 className="text-white fw-bold fs-5 mb-0">HFU</h1>
                <p className="text-light small mb-0 opacity-75">Health Queue</p>
              </div>
            </div>

            <nav className="d-none d-md-flex align-items-center gap-4">
              <a
                href="#services"
                onClick={() => navigate("/Profile")}
                className="text-light text-decoration-none opacity-75 hover-opacity-100"
              >
                บริการ
              </a>
              <a
                href="#doctors"
                className="text-light text-decoration-none opacity-75 hover-opacity-100"
              >
                แพทย์
              </a>
              <a
                onClick={() => navigate("/doctors")}
                href="#packages"
                className="text-light text-decoration-none opacity-75 hover-opacity-100"
              >
                แพ็กเกจ
              </a>
              <a
                href="#contact"
                className="text-light text-decoration-none opacity-75 hover-opacity-100"
              >
                ติดต่อ
              </a>
            </nav>

            <div className="d-flex align-items-center gap-2 " style={{marginLeft: "35rem"}}>
              <button
                onClick={() => changeLanguage('th')}
                className={`btn btn-sm ${i18n.language === 'th' ? 'btn-light' : 'btn-outline-light'} rounded-pill px-3`}
                style={{ fontSize: '0.8rem' }}
              >
                TH
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`btn btn-sm ${i18n.language === 'en' ? 'btn-light' : 'btn-outline-light'} rounded-pill px-3`}
                style={{ fontSize: '0.8rem' }}
              >
                EN
              </button>
            </div>


            {currentUser ? (
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="primary"
                  id="user-menu"
                  className="d-flex align-items-center gap-2 px-3 py-2 fw-semibold"
                >
                  <User size={18} />
                  {displayName || "บัญชีผู้ใช้"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {(currentUser?.role === "admin" ||
                    currentUser?.role === "super_admin") && (
                    <Dropdown.Item
                      onClick={() => navigate("/admin/dashboard")}
                      className="d-flex align-items-center gap-2 fw-semibold text-warning"
                    >
                      <Shield size={16} />
                      Admin Dashboard
                    </Dropdown.Item>
                  )}

                  <Dropdown.Item
                    onClick={() => navigate("/Profile")}
                    className="d-flex align-items-center gap-2"
                  >
                    <User size={16} />
                    ดูโปรไฟล์
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item
                    className="d-flex align-items-center gap-2 text-danger"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} />
                    ออกจากระบบ
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <button
                className="btn btn-primary px-4 py-2 fw-semibold"
                onClick={() => navigate("/login")}
              >
                เข้าสู่ระบบ
              </button>
            )}
          </div>
        </header>
  );
}
