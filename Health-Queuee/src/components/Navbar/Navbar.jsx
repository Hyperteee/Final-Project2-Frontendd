import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavigationBar() {
  return (
        <header
          className="py-3 shadow-lg sticky-top"
          style={{ backgroundColor: "#020A1B", backdropFilter: "blur(12px)" }}
        >
          <div className="container d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <div
                className="d-flex align-items-center justify-content-center bg-primary rounded-3"
                style={{ width: "50px", height: "50px" }}
              >
                <span className="text-white fw-bold fs-4">H</span>
              </div>
              <div>
                <h1 className="text-white fw-bold fs-5 mb-0">HFU</h1>
                <p className="text-light small mb-0 opacity-75">Health Queue</p>
              </div>
            </div>

            <nav className="d-none d-md-flex align-items-center gap-4 ">
              <a href="#services" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                บริการ
              </a>
              <a href="#doctors" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                แพทย์
              </a>
              <a href="#packages" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                แพ็กเกจ
              </a>
              <a href="#contact" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                ติดต่อ
              </a>
            </nav>

            <button className="btn btn-primary px-4 py-2 fw-semibold">เข้าสู่ระบบ</button>
          </div>
        </header>
  );
}
