import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Login-Pages/data-login/AuthContext.jsx";

export default function Login2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth(); // 👈 ดึงฟังก์ชัน login จาก context

  const handleLogin = (e) => {
    e.preventDefault();

    let userRole = null;

    const adminEmails = ["thee@gmail.com", "mook@gmail.com"];

    // 🔥 เช็ค role
    if (adminEmails.includes(email) && password === "4444") {
      userRole = "admin";
    } else if (email === "user@gmail.com" && password === "1234") {
      userRole = "user";
    } else {
      alert("เข้าสู่ระบบไม่สำเร็จ: อีเมลหรือรหัสผ่านไม่ถูกต้อง!");
      return;
    }


    login({ email, role: userRole });

    if (userRole === "admin") {
      alert("เข้าสู่ระบบสำเร็จ! (Admin)");
      navigate("/admin/dashboard");
    } else {
      alert("เข้าสู่ระบบสำเร็จ!");
      navigate("/");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#020A1B",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "1100px",
          height: "650px",
          backgroundColor: "white",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
        }}
      >
        <Container fluid className="h-100 p-0">
          <Row className="g-0 h-100">
            {/* LEFT PANEL */}
            <Col
              md={5}
              className="position-relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #071164ff 0%, #2527afff 50%, #7d7bffff 100%)",
              }}
            >
              <div className="position-absolute top-0 start-0 p-4 w-100">
                <span className="text-white fw-bold fs-5">Health For U</span>
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center h-100 px-5">
                <div className="w-100" style={{ maxWidth: 400 }}>
                  <h1 className="text-white text-center mb-2 fw-bold">LOGIN</h1>

                  <p className="text-white text-center mb-4 opacity-75">
                    เข้าสู่ระบบหรือสมัครสมาชิก
                  </p>

                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        size="lg"
                        placeholder="อีเมล หรือ เบอร์โทรศัพท์"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ borderRadius: 8, border: "none" }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="password"
                        size="lg"
                        placeholder="รหัสผ่าน"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ borderRadius: 8, border: "none" }}
                      />
                    </Form.Group>

                    <Form.Check
                      className="mb-4"
                      type="checkbox"
                      label={<span className="text-white">Remember Me</span>}
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-100 text-white fw-semibold"
                      style={{
                        backgroundColor: "rgba(107, 50, 241, 0.8)",
                        borderRadius: 8,
                        border: "none",
                      }}
                    >
                      Login
                    </Button>

                    <p className="text-white text-center mt-3 small">
                      ยังไม่มีบัญชีใช่มั้ย?{" "}
                      <span
                        onClick={() => navigate("/register")}
                        className="text-white fw-semibold text-decoration-underline"
                        style={{ cursor: "pointer" }}
                      >
                        สมัครสมาชิก
                      </span>
                    </p>
                  </Form>
                </div>
              </div>
            </Col>

            {/* RIGHT PANEL */}
            <Col
              md={7}
              className="bg-white d-flex align-items-center justify-content-center"
            >
              <div className="text-center">
                <img
                  src="./images/Login-BG.jpeg"
                  alt="Background-Hospital"
                  style={{
                    maxWidth: "100%",
                    height: "650px",
                    filter: "drop-shadow(0 10px 30px rgba(168, 85, 247, 0.2))",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
