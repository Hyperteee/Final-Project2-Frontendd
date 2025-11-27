import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function LoginPage() {

  const navigate = useNavigate();

  //email admin
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });


  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find((u) => u.email === inputs.email);

    if (inputs.email === "admin@gmail.com" && inputs.password === "1234") {
      const superAdminUser = {
        fullname: "Super Admin",
        email: "admin@gmail.com",
        role: "super_admin",
        adminScope: "all"
      };
      localStorage.setItem('currentUser', JSON.stringify(superAdminUser));

      alert("ยินดีต้อนรับ Super Admin!");
      navigate("/admin");
      return;
    }
    if (!foundUser) {
      alert("ข้อมูลผิด")
      return
    }
    if (foundUser.password !== inputs.password) {
      alert("รหัสผ่านไม่ถูกต้อง");
      return;
    }

    if (foundUser.role === "admin") {
      alert("ยินดีต้อนรับ Admin!");
      localStorage.setItem('currentUser', JSON.stringify(foundUser))
      navigate("/admin");
    } else if (foundUser.role === "pending") {
      alert("กรุณารอแอดมินยืนยันบัญชีของท่านก่อน")
    } else if (foundUser.role === "user") {
      alert("เข้าสู่ระบบสำเร็จ!");
      navigate("/");
      localStorage.setItem('currentUser', JSON.stringify(foundUser))
    } else {
      alert("ข้อมูลผิด")
    }
  };

  return (
    <div className="container-fluid vh-100 p-0">
      <div className="row g-0 h-100">
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

          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <h2 className="mb-4">ยินดีต้อนรับ!</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Login
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="ชื่อผู้ใช้งาน"
                  value={inputs.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="รหัสผ่าน"
                  value={inputs.password}
                  onChange={handleChange}
                  required
                />

                {/* sign in */}
                <div
                  className="d-grid gap-2"
                  style={{
                    marginTop: "20px",
                  }}
                >
                  <button
                    type="submit"
                    className=" border d-flex align-items-center justify-content-center gap-2 py-2"
                    style={{
                      backgroundColor: "#3b77fa",
                      color: "#fff",
                      borderRadius: "8px",
                    }}
                  >
                    <span className="fw-semibold text-white">Sign In</span>
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <small>
                  หากท่านยังไม่มีบัญชี{" "}
                  <button
                    type="button"
                    className="text-primary text-decoration-none btn-link border-0 bg-transparent p-0"
                    onClick={() => navigate('/register')}
                  >
                    กดตรงนี้
                  </button>
                  {/* <a href="#" className="text-primary text-decoration-none">
                    กดตรงนี้
                  </a> */}
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