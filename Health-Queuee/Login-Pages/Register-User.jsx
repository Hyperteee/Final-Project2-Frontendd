import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function RegisterPage() {
  const navigate = useNavigate();

  // 1. State สำหรับเก็บข้อมูลฟอร์ม
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    lastname : '',
    userID: '',
    email: '',
    identificationNumber: '',
    phone: '',
    birthDate: '',
    password: '',
    confirmPassword: '',
    role: '',
    nationality: '',
    gender: '',
  });

  // 2. ฟังก์ชันอัปเดตข้อมูลเมื่อมีการพิมพ์
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  // 3. ฟังก์ชันเมื่อกดปุ่มสมัครสมาชิก
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];


    if (formData.password !== formData.confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน!");
      return;
    }

    const foundUser = users.find((u) => u.email === formData.email);

    if (foundUser) {
      alert("มี email นี้ในระบบแล้ว");
      return;
    }

    const newUser = {
      userId: Date.now(),
      name: formData.name,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      identificationNumber: formData.identificationNumber,
      birthDate: formData.birthDate,
      password: formData.password,
      registeredAt: new Date().toLocaleString(),
      role : 'pending',
      nationality: formData.nationality
    };

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

    alert("สมัครสมาชิกสำเร็จ! กรุณารอแอดมินอนุมัติ");
    navigate("/login"); // เด้งไปหน้า Login
  };

  return (
    <div className="container-fluid vh-100 p-0">
      <div className="row g-0 h-100">
        {/* ส่วนรูปภาพด้านซ้าย */}
        <div
          className="col-md-6 text-white d-none d-md-flex flex-column justify-content-between p-5"
          style={{
            backgroundImage: "url('./images/login-bg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            {/* Logo หรือข้อความเพิ่มเติมวางตรงนี้ได้ */}
          </div>
        </div>

        {/* ส่วนฟอร์มด้านขวา */}
        <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <h2 className="mb-4">สมัครสมาชิก</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">ชื่อ</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="ชื่อ"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label fw-semibold">นามสกุล</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="ชื่อ"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="อีเมล"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="identificationNumber" className="form-label fw-semibold">เลขบัตรประชาชน</label>
                <input
                  type="tel"
                  className="form-control"
                  id="identificationNumber"
                  placeholder="เลขบัตรประชาชน"
                  value={formData.identificationNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label fw-semibold">เบอร์โทรศัพท์</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="เบอร์โทรศัพท์"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="birthDate" className="form-label fw-semibold">วันเดือนปีเกิด</label>
                <input
                  type="date"
                  className="form-control"
                  id="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                  <label htmlFor="nationality" className="form-label fw-semibold">สัญชาติ</label>
                  <select
                    className="form-select"
                    id="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>เลือกสัญชาติ...</option>
                    <option value="ไทย">ไทย</option>
                    <option value="ลาว">ลาว</option>
                    <option value="พม่า">พม่า</option>
                    <option value="จีน">จีน</option>
                    <option value="ญี่ปุ่น">ญี่ปุ่น</option>
                    <option value="เกาหลีใต้">เกาหลีใต้</option>
                    <option value="สหรัฐอเมริกา">สหรัฐอเมริกา</option>
                    <option value="สหราชอาณาจักร">สหราชอาณาจักร</option>
                    <option value="ออสเตรเลีย">ออสเตรเลีย</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                  </select>
                </div>
              
            
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="รหัสผ่าน"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="ยืนยันรหัสผ่าน"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <button type="submit" className="btn btn-primary w-100">
                  สมัครสมาชิก
                </button>
              </div>

              <div className="mb-4 text-center">
                <small>
                  มีบัญชีอยู่แล้ว?{" "}
                  <Link to="/login" className="text-primary text-decoration-none">เข้าสู่ระบบ</Link>
                </small>
              </div>
            </form>

            <div className="mt-5 text-center">
              <small className="text-muted">ติดต่อสอบถาม:</small>
              <div className="mt-2">
                <i className="bi bi-telephone me-2"></i>
                <span>+66 1234 5678</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}