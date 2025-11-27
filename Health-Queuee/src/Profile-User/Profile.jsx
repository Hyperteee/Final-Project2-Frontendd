import { useEffect, useState } from "react";
import { User, CreditCard, Calendar, Lock, Shield, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
    const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(loggedInUser);
  }, []);

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birth = new Date(birthdate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    const handleLogout = () => {
      localStorage.removeItem("currentUser");
      navigate("/login");
    };

    return age;
  };

  const navigate = useNavigate();

  return (
    <div className="bg-light min-vh-100">
      <header
        className="py-3 shadow-lg sticky-top"
        style={{
          backgroundColor: "#020A1B",
          backdropFilter: "blur(12px)",
        }}
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

          <nav className="d-none d-md-flex align-items-center gap-4">
            <a
              href="#services"
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

          <button className="btn btn-primary px-4 py-2 fw-semibold">
            เข้าสู่ระบบ
          </button>
        </div>
      </header>

      <div className="container py-4">
        <h1 className="text-center mb-4 fw-semibold text-black">
          ข้อมูลของคุณ
        </h1>
        <div className="d-flex justify-content-center mb-4 ">
          <div
            style={{
              height: "4px",
              width: "100px",
              backgroundColor: "#001B45",
              borderRadius: "2px",
            }}
          ></div>
        </div>

        <div className="row g-4">
          <div className="col-lg-3">
            <div className="card shadow-sm border-0">
              <h1 className="fw-medium ">ข้อมูลส่วนตัว</h1>

              <div
                style={{
                  height: "4px",
                  width: "20px",
                  backgroundColor: "#001B45",
                  borderRadius: "2px",
                }}
              ></div>

              <div className="list-group list-group-flush mt-3">
                <button
                  onClick={() => navigate("/Profile")}
                  className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3"
                >
                  <User size={20} />
                  <span>โปรไฟล์ของคุณ</span>
                </button>

                <button
                  onClick={() => navigate("/ProfileBook")}
                  className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3"
                >
                  <CreditCard size={20} />
                  <span>นัดหมาย</span>
                </button>

                <button
                  onClick={() => navigate("/ProfileHistory")}
                  className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3"
                >
                  <Calendar size={20} />
                  <span>ประวัติการรักษา</span>
                </button>

                <button
                  onClick={() => navigate("/ProfilePrivacy")}
                  className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3"
                >
                  <Shield size={20} />
                  <span>จัดการข้อมูลส่วนบุคคล</span>
                </button>
              </div>

              <div className="card-footer bg-white border-top p-3">
                <button className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2">
                  <LogOut size={18} />
                  ออกจากระบบ
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <form onSubmit="user-Profile">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4 p-lg-5">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="form-label fw-medium text-secondary">
                        เบอร์โทรศัพท์
                      </label>
                      <div className="fs-5 fw-semibold text-success">
                        {currentUser?.phone || "ไม่พบข้อมูล"}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-medium text-secondary">
                        คำนำหน้าชื่อ
                      </label>
                      <p className="form-control border rounded px-2 py-2 bg-light">
                        {currentUser?.title || "ไม่พบข้อมูล"}
                      </p>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-medium text-secondary">
                        ชื่อ
                      </label>
                      <p className="form-control border rounded px-2 py-2 bg-light">
                        {currentUser?.name || "ไม่พบข้อมูล"}
                      </p>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-medium text-secondary">
                        นามสกุล
                      </label>
                      <p className="form-control border rounded px-2 py-2 bg-light">
                        {currentUser?.lastname || "ไม่พบข้อมูล"}
                      </p>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-medium text-secondary">
                        เลขบัตรประชาชน
                      </label>
                      <p className="form-control border rounded px-2 py-2 bg-light">
                        {currentUser?.identificationNumber || "ไม่พบข้อมูล"}
                      </p>
                    </div>

                    <div className="row mb-4">
                      <div className="col-md-8">
                        <label className="form-label fw-medium text-secondary">
                          วัน/เดือน/ปีเกิด
                        </label>
                        <p className="form-control border rounded px-2 py-2 bg-light">
                          {currentUser?.birthDate || "ไม่พบข้อมูล"}
                        </p>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-medium text-secondary">
                          อายุ
                        </label>
                        <div className="fs-5 fw-semibold text-success">
                          {calculateAge(currentUser?.birthDate)} ปี
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-medium text-secondary">
                        เพศ
                      </label>
                      <div className="fs-5 fw-semibold text-success">
                        {currentUser?.gender}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-medium text-secondary">
                        อีเมล
                      </label>
                      <p className="form-control border rounded px-2 py-2 bg-light">
                        {currentUser?.email || "ไม่พบข้อมูล"}
                      </p>
                    </div>

                    <div className="d-flex justify-content-end mt-5"></div>
                  </form>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="container">
        <footer class="row row-cols-5 py-5 my-5 border-top">
          <div class="col">
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <svg class="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap" />
              </svg>
            </a>
            <p class="text-muted">&copy; 2021</p>
          </div>

          <div class="col"></div>

          <div class="col">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
