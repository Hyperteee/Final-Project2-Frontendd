import { useState, useEffect } from "react"; // เพิ่ม useEffect
import { User, CreditCard, Calendar, Shield, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap"; // ลบ Card และ Button ที่ไม่ได้ใช้

export default function ProfileHistory() {

  // ลบ formBooking และ handleSubmit ที่ไม่เกี่ยวข้องออก

  const navigate = useNavigate();

  // 1. State สำหรับเก็บข้อมูลผู้ใช้ปัจจุบัน
  const [currentUser, setCurrentUser] = useState(null);
    
  useEffect(() => {
    // โหลดข้อมูล User ที่กำลัง Login จาก localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(loggedInUser);
    // ไม่จำเป็นต้องเก็บ users ทั้งหมด หรือ setUsers
  }, []);

  // 2. ดึงข้อมูลประวัติการรักษา: ถ้ามี currentUser และมี medicalHistory ให้ใช้ข้อมูลนั้น ไม่งั้นใช้ []
  const medicalHistory = currentUser?.medicalHistory || [];

  function handleLogout(){
    localStorage.removeItem('currentUser');
    navigate('/login')
  }

  // ฟังก์ชันป้องกันการ submit (ถ้ามี form)
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
                  // เพิ่ม class active เพื่อเน้นเมนู
                  className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 active" 
                >
                  <Calendar size={20} />
                  <span>ประวัติการรักษา</span>
                </button>

                <button 
                onClick={() => navigate("/ProfilePrivacy")}
                className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3">
                  <Shield size={20} />
                  <span>จัดการข้อมูลส่วนบุคคล</span>
                </button>
              </div>

              <div className="card-footer bg-white border-top p-3">
                <button className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2" onClick={handleLogout}>
                  <LogOut size={18} />
                  ออกจากระบบ
                </button>
              </div>
            </div>
          </div>

          {/* เนื้อหาหลัก: ประวัติการรักษา */}
          <div className="col-lg-9">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4 p-lg-5">
                                      <label className="form-label fw-medium text-secondary">
                        ประวัติการรักษา
                      </label>
                <hr />

                {/* ส่วนแสดงผลประวัติการรักษา / ไม่มีประวัติการรักษา */}
                {medicalHistory.length > 0 ? (
                  // ถ้ามีประวัติการรักษา ให้วนลูปแสดงผล
                  medicalHistory.map((history, index) => (
                    <div key={index} className="mb-4 p-3 border rounded shadow-sm bg-white">
                      <div className="d-flex justify-content-between align-items-start mb-3 border-bottom pb-2">
                        <h5 className="mb-0 fw-bold text-primary">
                          การเข้าตรวจวันที่: {history.visitDate}
                        </h5>
                        <span className="badge bg-success py-2">
                          เข้าตรวจแล้ว
                        </span>
                      </div>

                      <Row className="g-3">
                        <Col md={6}>
                            <p className="mb-1 text-muted small">โรงพยาบาล:</p>
                            <p className="fs-5 mb-0">{history.hospital || 'ไม่ระบุ'}</p>
                        </Col>
                        <Col md={6}>
                            <p className="mb-1 text-muted small">แพทย์ผู้รักษา:</p>
                            <p className="fs-5 mb-0">{history.doctor || 'ไม่ระบุ'}</p>
                        </Col>
                        <Col md={6}>
                            <p className="mb-1 text-muted small">เวลาเข้าตรวจ:</p>
                            <p className="fs-5 mb-0">{history.time || 'ไม่ระบุ'} น.</p>
                        </Col>
                        <Col xs={12}>
                            <p className="mb-1 text-muted small">อาการ/ผลการรักษาโดยสรุป:</p>
                            <p className="fs-6 mb-0 text-break fst-italic">{history.symptom || 'ไม่มีข้อมูลสรุปอาการ'}</p>
                        </Col>
                      </Row>
                    </div>
                  ))
                ) : (
                  // *** แสดงผลเมื่อไม่มีประวัติการรักษา ***
                  <div className="text-center p-5 border rounded bg-light">
                    <Calendar size={48} className="text-secondary mb-3" />
                    <h4 className="text-muted fw-normal">
                      ไม่มีประวัติการรักษา
                    </h4>
                    <p className="text-muted">เมื่อคุณมีการเข้าตรวจแล้ว ประวัติจะปรากฏที่นี่</p>
                  </div>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------- */}

      <div className="container">
        <footer className="row row-cols-5 py-5 my-5 border-top">
          <div className="col">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <svg className="bi me-2" width="40" height="32">
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
            <p className="text-muted">&copy; 2021</p>
          </div>

          <div className="col"></div>

          <div className="col">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
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