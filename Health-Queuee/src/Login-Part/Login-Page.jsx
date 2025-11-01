import React from "react";
import Login from "./Login";

export default function LoginPage() {
  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#d4dce6" }}
    >
      <div className="text-center" style={{ width: "500px" }}>
        <div className="mb-4">
          <div className="d-flex justify-content-center align-items-center mb-0">
            <img
              src="./images/HFU-Logo.png"
              alt="HFU"
              className="h-60 w-auto "
            />
          </div>

          <p className="text-muted">กรุณาเลือกเข้าสู่ระบบ</p>
        </div>

        <div
          className="d-flex flex-column gap-3"
          style={{ maxWidth: "400px", margin: "0 auto" }}
        >
          <a
            href="./login/login"
            className="btn btn-lg text-white"
            style={{ backgroundColor: "#3d5a73", borderRadius: "25px" }}
          >
            เข้าสู่ระบบ
          </a>

          <a
            href="/login-family"
            className="btn btn-lg"
            style={{
              backgroundColor: "#f5f5f0",
              color: "#5a5a5a",
              borderRadius: "25px",
            }}
          >
            สมัครผู้ใช้งาน
          </a>
        </div>

        <p className="mt-4 text-muted small">Welcome to Our Website</p>
      </div>
    </div>
  );
}
