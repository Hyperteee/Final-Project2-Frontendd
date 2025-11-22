import { useEffect, useState, useContext } from "react";
import { User, CreditCard, Calendar, Shield, LogOut, MapPin, Clock, FileText, AlertCircle, CheckCircle2, XCircle, ArrowRightCircle, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Button, Modal } from "react-bootstrap";
import { UserAppointment } from "../data/context/appointment";
import "./Profile.css";



export default function ProfileBook() {
  const { appointments, cancelAppointment } = useContext(UserAppointment);
  const navigate = useNavigate();

  // --- Modal States ---
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showPostponeModal, setShowPostponeModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // --- Helper Functions ---
  function formatThaiDate(dateString) {
    if (!dateString) return "-";
    const thaiMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    const date = new Date(dateString);
    return `${date.getDate()} ${thaiMonths[date.getMonth()]} ${date.getFullYear() + 543}`;
  }

  // Status Badge Logic
  const getStatusBadge = (status) => {
    switch (status) {
      case "NEW":
        return <span className="status-badge status-new"><AlertCircle size={14}/> ส่งคำขอแล้ว</span>;
      case "SENT_TO_HOSPITAL":
        return <span className="status-badge status-new"><AlertCircle size={14}/> รอการยืนยัน</span>;
      case "CONFIRMED":
        return <span className="status-badge status-confirmed"><CheckCircle2 size={14}/> นัดหมายสำเร็จ</span>;
      case "FAILED":
      case "CANCELLED":
        return <span className="status-badge status-failed"><XCircle size={14}/> ยกเลิกแล้ว</span>;
      default:
        return <span className="status-badge status-new">{status}</span>;
    }
  };

  const isInactive = (status) => {
    return ['CANCELLED', 'FAILED', 'NO_SHOW'].includes(status);
  };

  const handleCancelClick = (appt) => {
    setSelectedAppointment(appt);
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    if (selectedAppointment) {
        cancelAppointment(selectedAppointment.id); 
        setShowCancelModal(false);
        setShowSuccessModal(true);
    }
  };

  // --- Handlers: Postpone (เลื่อนนัด) ---
  const handlePostponeClick = (appt) => {
    if (appt.status === 'NEW' || appt.status === 'SENT_TO_HOSPITAL') {
        setSelectedAppointment(appt);
        setShowPostponeModal(true);
    } else if (appt.status === 'CONFIRMED') {
        alert("รายการนี้ได้รับการยืนยันแล้ว กรุณาติดต่อเจ้าหน้าที่เพื่อเลื่อนนัดหมาย");
    }
  };

  const confirmPostpone = () => {
    if (selectedAppointment) {
        cancelAppointment(selectedAppointment.id);
        setShowPostponeModal(false);
        navigate("/queue3", {
            state: {
                selectedHospital: selectedAppointment.hospitalName, 
                selectedDepartment: selectedAppointment.departmentId,
                selectedDoctor: selectedAppointment.doctorId
            }
        });
    }
  };

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => setShowSuccessModal(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);

  return (
    <div className="bg-light min-vh-100">
      

      <header className="py-3 shadow-lg sticky-top" style={{ backgroundColor: "#020A1B" }}>
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center justify-content-center bg-primary rounded-3" style={{ width: "50px", height: "50px" }}>
              <span className="text-white fw-bold fs-4">H</span>
            </div>
            <div>
              <h1 className="text-white fw-bold fs-5 mb-0">HFU</h1>
              <p className="text-light small mb-0 opacity-75">Health Queue</p>
            </div>
          </div>
          <button className="btn btn-primary px-4 py-2 fw-semibold">ออกจากระบบ</button>
        </div>
      </header>

      <div className="container py-4">
        <h1 className="text-center mb-4 fw-semibold text-black">ข้อมูลของคุณ</h1>
        <div className="d-flex justify-content-center mb-4">
          <div style={{ height: "4px", width: "100px", backgroundColor: "#001B45", borderRadius: "2px" }}></div>
        </div>

        <div className="row g-4">
          
          {/* Sidebar */}
          <div className="col-lg-3">
            <div className="card shadow-sm border-0">
              <h1 className="fw-medium p-3 pb-0 fs-4">ข้อมูลส่วนตัว</h1>
              <div className="px-3">
                 <div style={{ height: "4px", width: "30px", backgroundColor: "#001B45", borderRadius: "2px" }}></div>
              </div>
              <div className="list-group list-group-flush mt-3">
                <button onClick={() => navigate("/Profile")} className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 border-0">
                  <User size={20} /> <span>โปรไฟล์ของคุณ</span>
                </button>
                <button onClick={() => navigate("/ProfileBook")} className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 border-0 active bg-primary-subtle text-primary fw-bold">
                  <CreditCard size={20} /> <span>นัดหมาย</span>
                </button>
                <button onClick={() => navigate("/ProfileHistory")} className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 border-0">
                  <Calendar size={20} /> <span>ประวัติการรักษา</span>
                </button>
                <button onClick={() => navigate("/ProfilePrivacy")} className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 border-0">
                  <Shield size={20} /> <span>จัดการข้อมูลส่วนบุคคล</span>
                </button>
              </div>
              <div className="card-footer bg-white border-top p-3">
                <button className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2">
                  <LogOut size={18} /> ออกจากระบบ
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4 p-lg-5">
                <div className="mb-4">
                   <label className="form-label fw-medium fs-5">นัดหมายของฉัน</label>
                </div>

                {appointments.length === 0 ? (
                  <div className="text-center py-5 text-muted">
                    <Calendar size={48} className="mb-3 opacity-25" />
                    <p>คุณยังไม่มีรายการนัดหมาย</p>
                    <Button variant="primary" className="rounded-pill px-4" onClick={() => navigate("/")}>เริ่มทำนัดใหม่</Button>
                  </div>
                ) : (
                  <div className="d-flex flex-column gap-3">
                    {appointments
                      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) 
                      .map((appt, index) => (
                        
                        <div 
                          key={index} 
                          className={`appointment-card ${isInactive(appt.status) ? 'card-inactive' : ''}`}
                        >
                          
                          <div className="appt-card-header">
                            <div className="appt-hospital-name">
                              <MapPin size={18} /> {appt.hospitalName}
                            </div>
                            {getStatusBadge(appt.status)}
                          </div>

                          <div className="appt-card-body">
                            <Row className="g-4">
                              <Col md={6}>
                                <div className="doctor-info">
                                  <div className="doctor-avatar-small">
                                    {appt.doctorName ? <User /> : <Shield />}
                                  </div>
                                  <div>
                                    <div className="text-muted small mb-1">แผนก/คลินิก</div>
                                    <h5 className="fw-bold text-dark mb-1">{appt.departmentName || "คัดกรองอาการ"}</h5>
                                    <p className="text-secondary mb-0 small">
                                      {appt.doctorName ? `แพทย์: ${appt.doctorName}` : "ยังไม่ระบุแพทย์"}
                                    </p>
                                  </div>
                                </div>
                              </Col>
                              <Col md={6}>
                                <div className="date-box">
                                  <div className="d-flex align-items-center mb-2 text-muted small">
                                    <Clock size={14} className="me-1"/> วันที่ขอจอง
                                  </div>
                                  <div className="date-row">
                                    <span className="label-p1">หลัก (P1)</span>
                                    <span className="fw-medium">{formatThaiDate(appt.priority1Date)}</span>
                                  </div>
                                  <div className="date-row">
                                    <span className="label-p2">รอง (P2)</span>
                                    <span className="text-muted">{formatThaiDate(appt.priority2Date)}</span>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            {appt.symptom && (
                              <div className="symptom-box">
                                <div className="d-flex align-items-center mb-1 fw-bold text-dark" style={{fontSize: '0.85rem'}}>
                                  <FileText size={14} className="me-1"/> อาการเบื้องต้น:
                                </div>
                                {appt.symptom}
                              </div>
                            )}
                          </div>

                          {!isInactive(appt.status) && (
                            <div className="appt-card-footer">
                              <Button 
                                variant="outline-danger" 
                                size="sm" 
                                className="rounded-pill px-3"
                                onClick={() => handleCancelClick(appt)}
                              >
                                ยกเลิกนัด
                              </Button>
                              
                              {/* ปุ่มเลื่อนนัด: เช็คสถานะตรงนี้ด้วย */}
                              {(appt.status === 'NEW' || appt.status === 'SENT_TO_HOSPITAL') ? (
                                <Button 
                                    variant="outline-primary" 
                                    size="sm" 
                                    className="rounded-pill px-3"
                                    onClick={() => handlePostponeClick(appt)}
                                >
                                    เลื่อนนัด
                                </Button>
                              ) : (
                                // ถ้าเป็น CONFIRMED ให้แสดงเป็นปุ่มโทรติดต่อแทน (ตัวอย่าง)
                                <Button 
                                    variant="outline-secondary" 
                                    size="sm" 
                                    className="rounded-pill px-3"
                                    onClick={() => alert("กรุณาติดต่อ 02-xxx-xxxx เพื่อเปลี่ยนแปลงนัดหมาย")}
                                >
                                    <Phone size={14} className="me-1"/> ติดต่อเจ้าหน้าที่
                                </Button>
                              )}
                            </div>
                          )}
                        </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal ยืนยันการยกเลิก */}
      <Modal show={showCancelModal} onHide={() => setShowCancelModal(false)} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold fs-5">ยืนยันการยกเลิก</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center pb-4">
          <p className="text-muted mb-3">คุณต้องการยกเลิกคำขอนัดหมายนี้ใช่หรือไม่?</p>
          {selectedAppointment && (
             <div className="bg-light p-3 rounded-3 mb-4 text-start mx-auto border" style={{maxWidth: '380px'}}>
                <div className="d-flex align-items-center mb-2">
                    <MapPin size={16} className="text-primary me-2 flex-shrink-0"/>
                    <span className="fw-bold text-dark text-truncate">{selectedAppointment.hospitalName}</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <FileText size={16} className="text-primary me-2 flex-shrink-0"/>
                    <span className="text-dark text-truncate">{selectedAppointment.departmentName || "แผนกคัดกรอง"}</span>
                </div>
             </div>
          )}
          <div className="d-flex justify-content-center gap-2">
            <Button variant="secondary" onClick={() => setShowCancelModal(false)} className="rounded-pill px-4">กลับ</Button>
            <Button variant="danger" onClick={confirmCancel} className="rounded-pill px-4">ยืนยันยกเลิก</Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* ✅ Modal ยืนยันการเลื่อนนัด (Postpone Modal) */}
      <Modal show={showPostponeModal} onHide={() => setShowPostponeModal(false)} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold fs-5 text-primary">ต้องการเลื่อนนัด?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center pb-4">
          <div className="text-primary mb-3">
             <ArrowRightCircle size={48} />
          </div>
          <p className="text-dark fw-medium">ระบบจะทำการ <span className="text-danger">ยกเลิกนัดหมายเดิม (สถานะรอตรวจสอบ)</span> <br/> และพาคุณไปเลือกวันนัดหมายใหม่</p>
          <p className="text-muted small">คุณต้องการดำเนินการต่อหรือไม่?</p>
          
          <div className="d-flex justify-content-center gap-2 mt-4">
            <Button variant="secondary" onClick={() => setShowPostponeModal(false)} className="rounded-pill px-4">ยกเลิก</Button>
            <Button variant="primary" onClick={confirmPostpone} className="rounded-pill px-4" style={{backgroundColor: '#001E6C'}}>ไปเลือกวันใหม่</Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Modal สำเร็จ */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered size="sm">
        <Modal.Body className="text-center py-4">
           <div className="text-success fs-1 mb-2"><CheckCircle2 /></div>
           <h5 className="fw-bold">ดำเนินการสำเร็จ</h5>
        </Modal.Body>
      </Modal>

    </div>
  );
}