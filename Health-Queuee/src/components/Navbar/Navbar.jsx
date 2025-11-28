import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavigationBar() {
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
