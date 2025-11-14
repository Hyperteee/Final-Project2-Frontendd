import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Toaster, toast } from "react-hot-toast"; // ✅ เพิ่มตรงนี้

export default function Login2() {
  const [showOtp, setShowOtp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));

  const otpRefs = useRef([]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });

    // เช็ค login กับ backend
    // login ผ่านแล้วค่อยไปหน้า OTP
    setShowOtp(true);

    // แสดง Toast ว่าส่ง OTP 
    toast.success("ส่ง OTP ไปยังเบอร์/อีเมลของคุณแล้ว");
  };

  const handleOtpChange = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    if (digit && index < otp.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        otpRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    console.log("OTP submit:", code);

    //  สมมติว่าตรงนี้ไป verify OTP กับ backend
    // ถ้า success:
    toast.success("ยืนยัน OTP สำเร็จ! กำลังพาไปหน้า Dashboard");
    // ถ้า fail :
    // toast.error("OTP ไม่ถูกต้อง ลองใหม่อีกครั้ง");

    alert(`Entered OTP: ${code}`);
  };

  const showSuccess = () => {
    toast.success("บันทึกข้อมูลสำเร็จ!");
  };

  const showError = () => {
    toast.error("เกิดข้อผิดพลาด!");
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

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
                  {!showOtp ? (
                    <div className="w-100" style={{ maxWidth: 400 }}>
                      <h1 className="text-white text-center mb-2 fw-bold">
                        LOGIN
                      </h1>
                      <p className="text-white text-center mb-4 opacity-75">
                        เข้าสู่ระบบหรือสมัครสมาชิก
                      </p>

                      <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="loginEmail">
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
                          Login
                        </Button>
                      </Form>
                    </div>
                  ) : (
                    <div className="w-100" style={{ maxWidth: 400 }}>
                      <h1 className="text-white text-center mb-2 fw-bold">
                        LOGIN
                      </h1>
                      <p className="text-white text-center mb-2 fw-semibold">
                        ยืนยันตัวตนผ่าน เบอร์โทรศัพท์
                      </p>
                      <p className="text-white text-center mb-4 small opacity-75">
                        กรอก OTP 6 หลักที่คุณได้รับจากเบอร์โทรศัพท์
                      </p>

                      <Form onSubmit={handleOtpSubmit}>
                        <div
                          className="d-flex mb-3 gap-2"
                          style={{ marginLeft: "-11px" }}
                        >
                          {otp.map((digit, index) => (
                            <Form.Control
                              key={index}
                              ref={(el) => (otpRefs.current[index] = el)}
                              type="text"
                              maxLength={1}
                              size="lg"
                              className="text-center fs-3 fw-bold"
                              value={digit}
                              onChange={(e) =>
                                handleOtpChange(index, e.target.value)
                              }
                              onKeyDown={(e) => handleOtpKeyDown(index, e)}
                              style={{
                                width: 60,
                                height: 60,
                                borderRadius: 12,
                                border: "none",
                                backgroundColor: "white",
                              }}
                            />
                          ))}
                        </div>

                        <p className="text-white text-center mb-4 small">
                          หากยังไม่ได้รับ Otp{" "}
                          <a
                            href="#"
                            className="text-white text-decoration-underline"
                          >
                            ส่งอีกครั้ง
                          </a>
                        </p>

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
                          เข้าสู่ระบบ
                        </Button>
                      </Form>
                    </div>
                  )}
                </div>
              </Col>

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
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
