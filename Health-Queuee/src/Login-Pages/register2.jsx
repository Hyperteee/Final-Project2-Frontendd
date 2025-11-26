import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Register2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register attempt:", { email, password, confirmPassword, rememberMe });
    
    if (password !== confirmPassword) {
        alert("รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน!");
        return;
    }

    // ส่วนนี้สามารถเพิ่ม Logic ในการเรียก API สมัครสมาชิก
    // toast.success("สมัครสมาชิกสำเร็จ!");
    
    alert("สมัครสมาชิกสำเร็จ! กำลังพาไปหน้า Login");
    // navigate('/login'); // สามารถเปลี่ยนเส้นทางไปหน้า Login หลังสมัครสำเร็จ
  };


  return (
    <>
      <div
        style={{
          backgroundColor: "#020A1B",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          overflow: "hidden",
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
                      filter:
                        "drop-shadow(0 10px 30px rgba(168, 85, 247, 0.2))",
                    }}
                  />
                </div>
              </Col>
              
              {/* --- ฟอร์มถูกย้ายมาทางขวา (Col md={5}) --- */}
              <Col
                md={5}
                className="position-relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #071164ff 0%, #2527afff 50%, #7d7bffff 100%)",
                }}
              >
                <div
                  className="position-absolute"
                  style={{
                    top: 0,
                    right: 0,
                    width: "150%",
                    height: "150%",
                    opacity: 0.1,
                  }}
                >
                  <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="300" fill="white" />
                    <circle cx="600" cy="100" r="200" fill="white" />
                    <circle cx="100" cy="600" r="250" fill="white" />
                  </svg>
                </div>

                <div className="position-absolute top-0 start-0 p-4 d-flex justify-content-between align-items-center w-100">
                  <div className="d-flex align-items-center">
                    <span className="text-white fw-bold fs-5">
                      Health For U
                    </span>
                  </div>
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center h-100 position-relative px-5">
                    <div className="w-100" style={{ maxWidth: 400 }}>
                      <h1 className="text-white text-center mb-2 fw-bold">
                        REGISTER
                      </h1>
                      <p className="text-white text-center mb-4 opacity-75">
                        สร้างบัญชีผู้ใช้งานใหม่
                      </p>

                      <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="registerEmail">
                          <Form.Control
                            type="text"
                            size="lg"
                            placeholder="อีเมล หรือ เบอร์โทรศัพท์"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                              borderRadius: 8,
                              border: "none",
                            }}
                          />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="registerPassword">
                          <Form.Control
                            type="password"
                            size="lg"
                            placeholder="รหัสผ่าน"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                              borderRadius: 8,
                              border: "none",
                            }}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="confirmPassword">
                          <Form.Control
                            type="password"
                            size="lg"
                            placeholder="ยืนยันรหัสผ่าน"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            style={{
                              borderRadius: 8,
                              border: "none",
                            }}
                          />
                        </Form.Group>


                        <Form.Check
                          className="mb-4"
                          id="rememberMe"
                          type="checkbox"
                          label={
                            <span className="text-white">Remember Me</span>
                          }
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
                          Register
                        </Button>
                        
                        <p className="text-white text-center mt-3 small">
                          มีบัญชีอยู่แล้ว?{" "}
                          <a
                            onClick={() => navigate("/login")} 
                            href="#"
                            className="text-white fw-semibold text-decoration-underline"
                          >
                            เข้าสู่ระบบ
                          </a>
                        </p>
                        
                      </Form>
                    </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}