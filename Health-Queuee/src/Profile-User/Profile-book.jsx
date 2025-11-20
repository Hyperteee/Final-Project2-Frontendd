
import { useEffect, useState } from "react";
import { User, CreditCard, Calendar, Lock, Shield, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Button, ModalHeader } from "react-bootstrap";
import { useContext } from "react";
import { UserAppointment } from "../data/context/appointment";
import hospitalMap from "../data/hospitaldata.jsx/allhospitaldata";
import Modal from 'react-bootstrap/Modal'
export default function ProfileBook() {
  const { appointments, cancelAppointment } = useContext(UserAppointment);
  console.log(appointments)

  const [formData, setFormData] = useState({
    phone: "เบอร์โทรศัพท์",
    title: "นาย",
    firstName: "ประหยัด",
    lastName: "จันทร์โทรลา",
    nationalId: "1100897576431",
    birthDate: "2548-10-20",
    gender: "ชาย",
    email: "Prayard@gmail.com",
  });

  const [formBooking, setFormBooking] = useState({
    Bookingtime: "นัดหมายของฉัน",

    date: "วันที่",
    time: "เวลา",
    department: "แผนก",
    doctor: "แพทย์",
  });

  const [UserForm, setUserForm] = useState({
    fullName: "นาย ประหยัด จันทร์โทรลา",
    hospital: "โรงพยาบาลเปาโล",
    date: "17/11/68",
    time: "14:30",
    doctor: "ดร. หารร่วมน้อย",
    reason: "ตรวจสุขภาพ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birth = new Date(birthdate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  };

  const navigate = useNavigate();

  function getHospitalName(hospitalID) {
    const hospital = Object.values(hospitalMap).find(h => h.info.id === hospitalID);
    return hospital ? hospital.info.name : hospitalID;
  }

  function getDepartmentName(hospitalID, departmentID) {
    const hospital = Object.values(hospitalMap).find(h => h.info.id === hospitalID);
    if (!hospital) return departmentID;

    const department = hospital.info.departments.find(d => d.id === departmentID);
    if (department.name == "ไม่รู้แผนก") {
      return "คัดกรอง"
    }
    return department ? department.name : departmentID;
  }

  function getDoctorName(hospitalID, departmentID, doctorID) {
    if (!doctorID) return "-";

    const hospital = Object.values(hospitalMap).find(h => h.info.id === hospitalID);
    if (!hospital) return doctorID;

    const department = hospital.info.departments.find(d => d.id === departmentID);
    if (!department || !department.doctors) return doctorID;

    const doctor = department.doctors.find(doc => doc.id === doctorID);
    return doctor ? doctor.name : doctorID;
  }
  console.log("All appointments:", appointments);
  function formatThaiDate(dateString) {
    const thaiMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.",
      "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = thaiMonths[date.getMonth()]
    const year = date.getFullYear() + 543

    return `${day} ${month} ${year}`;
  }
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showPostponeModal, setShowPostponeModal] = useState(false)
  const [selectedPostponeAppointment, setSelectedPostponeAppointment] = useState(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const userPassword = "1234"
  const [showSuccessModal, setShowSuccessModal] = useState(false);


  const openCancelModal = (appt) => {
    setSelectedAppointment(appt);
    setShowCancelModal(true);
  };
  const handleConfirmPostpone = () => {
    setShowPostponeModal(false);

    navigate("/postpone", {
      state: {
        appointmentData: selectedPostponeAppointment
      }
    });
  }
  const closeCancelModal = () => {
    
    setShowCancelModal(false);
  };

  function handleConfirmDeleted(){
    cancelAppointment(selectedAppointment.id)
  }

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
        navigate("/profilebook")
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);


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
                  className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3">
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
                <button className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2">
                  <LogOut size={18} />
                  ออกจากระบบ
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4 p-lg-5">
                <form onSubmit={handleSubmit}>
                  <div className="">
                    <label className="form-label fw-medium">
                      นัดหมายที่กำลังมาถึง
                    </label>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex flex-column my-5">

                      {appointments.length === 0 ? (
                        <p>คุณยังไม่มีนัดหมาย</p>
                      ) : (
                        appointments
                          .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date ascending
                          .map((appt, index) => (
                            <Card
                              key={index}
                              className="shadow-sm mb-3"
                              style={{
                                width: "600px",
                                borderRadius: "24px",
                                borderWidth: "1.9px",
                                borderColor: "#000000",
                              }}
                            >
                              <Card.Body style={{ padding: "32px 40px" }}>
                                <h4 className="fw-bold mb-2" style={{ color: "#1f3bb3" }}>
                                  ศูนย์การรักษา {getDepartmentName(appt.hospitalID, appt.departmentID)}
                                </h4>

                                <div className="mb-3" style={{ fontSize: "16px" }}>
                                  โรงพยาบาล {getHospitalName(appt.hospitalID)}
                                </div>

                                <div
                                  className="mb-3"
                                  style={{ height: "1px", backgroundColor: "#000", width: "100%" }}
                                />

                                <div style={{ fontSize: "16px", lineHeight: 1.7 }}>
                                  <div className="d-flex justify-content-start gap-3 mb-3">
                                    <span className="fs-6 fw-bold bg-primary-subtle py-2 px-5 rounded-5" style={{ color: "#060e7cff" }}>
                                      <i className="bi bi-calendar"></i> {formatThaiDate(appt.date)}
                                    </span>
                                    <span className="fs-6 fw-bold bg-primary-subtle py-2 px-5 rounded-5" style={{ color: "#060e7cff" }}>
                                      <i className="bi bi-clock"></i> {appt.time}
                                    </span>
                                  </div>

                                  <Row>
                                    <Col xs={2} sm={2}>
                                      <span className="fw-semibold">แพทย์ :</span>
                                    </Col>
                                    <Col>{getDoctorName(appt.hospitalID, appt.departmentID, appt.doctorID) || "-"}</Col>
                                  </Row>
                                  <Row>
                                    <Col xs={2} sm={2}>
                                      <span className="fw-semibold">อาการ :</span>
                                    </Col>
                                    <Col>{appt.symptom}</Col>
                                  </Row>
                                </div>

                                <div className="d-flex justify-content-end mt-4 gap-3">
                                  <Button
                                    style={{
                                      backgroundColor: "#ff3131ff",
                                      borderColor: "#ff3131ff",
                                      borderRadius: "18px",
                                      minWidth: "140px",
                                    }}
                                    // onClick={() => { cancelAppointment(appt.id) }}
                                    onClick={() => openCancelModal(appt)}
                                  >
                                    <i className="bi bi-x-circle"></i> ยกเลิกนัดหมาย
                                  </Button>
                                  <Button
                                    style={{
                                      backgroundColor: "#3155ff",
                                      borderColor: "#3155ff",
                                      borderRadius: "18px",
                                      minWidth: "140px",
                                    }}
                                    onClick={() => {
                                      setSelectedPostponeAppointment(appt);
                                      setShowPostponeModal(true);
                                    }}
                                  >
                                    <i className="bi bi-pen"></i> เลื่อนนัดหมาย
                                  </Button>
                                </div>
                              </Card.Body>
                            </Card>
                          ))
                      )}
                      <Modal show={showCancelModal} onHide={closeCancelModal} centered>

                        <Modal.Body className="text-center">
                          <h3 className="fw-bold mt-3">ยืนยันยกเลิกนัดหมาย ?</h3>
                          {selectedAppointment && (
                            <div className="mt-5 text-danger">
                              <p><strong>โรงพยาบาล</strong>{getHospitalName(selectedAppointment.hospitalID)}</p>
                              <p><strong>แผนก</strong>{getDepartmentName(selectedAppointment.hospitalID, selectedAppointment.departmentID)}</p>
                              <p><strong>{formatThaiDate(selectedAppointment.date)} &nbsp;{selectedAppointment.time}</strong></p>

                            </div>
                          )}
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={closeCancelModal}>
                            ยกเลิก
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => {
                              setShowPasswordModal(true)
                              closeCancelModal();
                            }}
                          >
                            ยืนยันการยกเลิก
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      <Modal show={showPostponeModal} onHide={() => setShowPostponeModal(false)} centered>


                        <Modal.Body className="text-center mt-4 fs-4">
                          คุณต้องการเลื่อนนัดหมาย ?
                        </Modal.Body>

                        <Modal.Footer>
                          <Button variant="secondary" onClick={() => setShowPostponeModal(false)}>
                            ยกเลิก
                          </Button>
                          <Button variant="primary" onClick={handleConfirmPostpone}>
                            ต้องการ
                          </Button>
                        </Modal.Footer>
                      </Modal>



                      <Modal show={showPasswordModal} onHide={() => setShowPasswordModal(false)} centered>
                        <Modal.Body>
                          <h5 className="fw-bold mt-3 mb-4">กรุณาใส่รหัสผ่านเพื่อยืนยันการเลื่อนนัด</h5>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="รหัสผ่าน"
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                          />
                          {passwordError && <p className="text-danger mt-2">{passwordError}</p>}
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={() => setShowPasswordModal(false)}>
                            ยกเลิก
                          </Button>
                          <Button
                            variant="primary"
                            onClick={() => {
                              if (passwordInput === userPassword) {
                                handleConfirmDeleted();
                                setShowPasswordModal(false);
                                setShowSuccessModal(true)
                              } else {
                                setPasswordError("รหัสผ่านไม่ถูกต้อง");
                              }
                            }}
                          >
                            ยืนยัน
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
                        <Modal.Body className="text-center">
                          <h3 className="fw-bold">ยกเลิกนัดหมายเสร็จสิ้น</h3>
                          <img src="images/check.png" alt="" style={{ width: "80px" }} />
                        </Modal.Body>
                      </Modal>
                    </div>
                  </div>
                </form>
              </div>
            </div>
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
