import React, { useState } from "react";
import LoginPage from "./Login-Page";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password });
    // Add your login logic here
  };

  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#d4dce6" }}
    >
      <div className="text-center" style={{ width: "500px" }}>
        <div className="mb-4">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <svg width="60" height="60" viewBox="0 0 60 60" className="me-2">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="#f4c430"
                stroke="#2c3e50"
                strokeWidth="2"
              />
              <text
                x="25"
                y="32"
                fontSize="16"
                fontWeight="bold"
                textAnchor="middle"
                fill="#2c3e50"
              >
                EGA
              </text>
              <circle
                cx="45"
                cy="20"
                r="12"
                fill="none"
                stroke="#8b9db8"
                strokeWidth="2"
              />
              <path
                d="M 40 20 Q 45 15 50 20 Q 45 25 40 20"
                fill="none"
                stroke="#8b9db8"
                strokeWidth="2"
              />
            </svg>
          </div>
          <h1 className="display-4 fw-bold" style={{ color: "#2c4a6b" }}>
            Health
          </h1>
          <p className="text-muted">ผู้ปฏิบัติงาน กฟผ.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ width: "400px", margin: "0 auto" }}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="ชื่อผู้ใช้งาน"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ borderRadius: "10px", border: "2px solid #a8c5e0" }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="รหัสผ่าน"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: "10px", border: "2px solid #a8c5e0" }}
            />
          </div>

          <div className="mb-3 d-flex justify-content-center gap-3 small">
            <a href="#" className="text-decoration-none" style={{ color: "#5a5a5a" }}>
              สมัครสมาชิก
            </a>
            <span style={{ color: "#5a5a5a" }}>|</span>
            <a href="#" className="text-decoration-none" style={{ color: "#5a5a5a" }}>
              เปลี่ยนรหัสผ่าน
            </a>
            <span style={{ color: "#5a5a5a" }}>|</span>
            <a href="#" className="text-decoration-none" style={{ color: "#5a5a5a" }}>
              ลงทะเบียน
            </a>
          </div>

          <div className="d-flex flex-column gap-3">
            <button
              type="submit"
              className="btn btn-lg text-white"
              style={{ backgroundColor: "#3d5a73", borderRadius: "25px" }}
            >
              เข้าสู่ระบบ
            </button>
            <a
              href="/"
              className="btn btn-lg"
              style={{
                backgroundColor: "#f5f5f0",
                color: "#5a5a5a",
                borderRadius: "25px",
              }}
            >
              กลับหน้าหลัก
            </a>
          </div>
        </form>

        <p className="mt-4 text-muted small">ฝ่ายแพทย์และอนามัย</p>
      </div>
    </div>
  );
}
