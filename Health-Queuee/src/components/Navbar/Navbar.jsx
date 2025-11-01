import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavigationBar() {
  return (
    <Navbar bg="[#00002b]" expand="md" className="border-bottom py-1">
      <Container fluid className="px-4">
        <Navbar.Brand href="#" className="d-flex align-items-center text-white">
          <img src="./images/HFU-Logo.png" alt="HFU" className="h-32 w-auto" />
          {/* <span className="ms-3 fs-4 fw-semibold">HFU</span> */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-dropdown" />

        <Navbar.Collapse id="navbar-dropdown">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="text-white" active>
              Home
            </Nav.Link>

            {/* ✅ เปลี่ยนสี title และ items เป็น text-white */}
            <NavDropdown
              title={<span className="text-white">Dropdown</span>}
              id="dropdown-navbar"
              menuVariant="dark" // ทำให้พื้นหลัง dropdown เป็นสีเข้มด้วย
            >
              <NavDropdown.Item href="#" className="text-white">
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="text-white">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="text-white">
                Earnings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" className="text-white">
                Sign out
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" className="text-white">
              Services
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Pricing
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
