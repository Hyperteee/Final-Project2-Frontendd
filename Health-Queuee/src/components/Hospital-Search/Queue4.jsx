import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router"
import hospitalMap from "../../data/hospitaldata.jsx/allhospitaldata";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/esm/Button";
import { UserAppointment } from "../../data/context/appointment";
import Modal from 'react-bootstrap/Modal'
import "./Queue4.css"; 

const Queue4 = () => {

    const { state } = useLocation()
    const navigate = useNavigate()
    
    // ดึงข้อมูลจาก State ที่ส่งมาจากหน้า Queue3
    const { selectedHospital, selectedDepartment, selectedDoctor, priority1Date, priority2Date, departmentName, doctorName } = state || {};
    
    const hospitalData = hospitalMap[selectedHospital]?.info || null;
    
    const formatDateThai = (date) => {
        if (!date) return "-";
        const d = new Date(date);
        const thaiMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
        // แปลงปีเป็น พ.ศ. (d.getFullYear() + 543)
        return `${d.getDate()} ${thaiMonths[d.getMonth()]} ${d.getFullYear() + 543}`;
    };

    const [symptom, setSymptom] = useState("");
    const [files, setFiles] = useState([]);
    const [show, setShow] = useState(false);

    const { addAppointment } = useContext(UserAppointment)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const steps = [
        { id: 1, label: "เลือกแผนก" },
        { id: 2, label: "เลือกแพทย์" },
        { id: 3, label: "เลือกวันนัด" },
        { id: 4, label: "กรอกอาการ" }
    ];
    const currentStep = 4; 
    const isStepActive = (stepNumber) => stepNumber <= currentStep;

    const handleFileSelect = (e) => {
        if(e.target.files) {
            const newFiles = Array.from(e.target.files);
            setFiles(prev => [...prev, ...newFiles]); 
        }
    };

    const handleRemoveFile = (index) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    // --- LOGIC บันทึกข้อมูล ---
    const handleConfirm = () => {
        
        // 1. ระบุประเภทเคส
        let bookingCase = "DEPT_ONLY";
        if (selectedDepartment === "ไม่รู้แผนก") {
            bookingCase = "SCREENING";
        } else if (selectedDoctor) {
            bookingCase = "SPECIFIC_DOC";
        }

        const now = new Date().toISOString();

        // 2. สร้างใบคำขอ
        const newAppointment = {
            id: `BK-${Date.now()}`,
            userId: "U001", 
            
            // ข้อมูลสถานที่
            hospitalId: hospitalData?.id || selectedHospital,
            hospitalName: selectedHospital,
            departmentId: selectedDepartment === "ไม่รู้แผนก" ? null : selectedDepartment,
            departmentName: departmentName,
            doctorId: selectedDoctor || null,
            doctorName: doctorName,

            // ข้อมูลการจอง
            bookingCase: bookingCase,
            priority1Date: priority1Date,
            priority2Date: priority2Date,
            
            // ข้อมูลอาการ
            symptom: symptom,
            files: files.map(file => ({ name: file.name, size: file.size, type: file.type })), // เก็บเฉพาะ metadata ของไฟล์

            // สถานะเริ่มต้น = รอส่ง
            status: "NEW", 
            
            createdAt: now, 
            updatedAt: now, 
            
            // เตรียมไว้สำหรับผลลัพธ์
            batchId: null,
            confirmedDate: null,
            resultNote: null
        };
        addAppointment(newAppointment);
        
        handleShow();
    };

    const handleFinished = () => {
        // เมื่อจองเสร็จแล้ว ให้ไปที่หน้าประวัติการจอง
        navigate("/profilebook");
    };

    return (
        <div className="d-flex flex-column align-items-center bg-light min-vh-100 pb-5">
            
            {/* Header */}
            <div className="mt-5 fs-4 text-center w-100" style={{ maxWidth: '800px' }}>
                <div className="fw-bold fs-3 mb-2" style={{ color: 'black' }}>ทำนัด</div>
                
                {/* Header Info (ปรับปรุงสีและ fw-semibold) */}
                <div className="d-flex justify-content-center gap-3 mb-4">
                    <div className="bg-primary-subtle rounded-2 px-3 py-2 fw-semibold" style={{ color: "#001E6C" }}>
                        โรงพยาบาล{selectedHospital}
                    </div>
                    <div className="bg-primary-subtle rounded-2 px-2 py-2 fw-semibold" style={{ color: "#001E6C" }}>
                        {departmentName || (selectedDepartment === "ไม่รู้แผนก" ? "คัดกรอง" : "แผนกทั่วไป")}
                    </div>
                </div>

                {/* Stepper */}
                <div 
                    className="d-flex justify-content-center align-items-start px-3 mb-4 mx-auto" 
                    style={{ maxWidth: '600px', width: '100%' }}
                >
                    {steps.map((step, index) => {
                        const active = isStepActive(step.id);
                        return (
                            <React.Fragment key={step.id}>
                                <div className="d-flex flex-column align-items-center" style={{ zIndex: 2, minWidth: '80px' }}>
                                    <div className={`step ${active ? "step-active" : "step-inactive"}`}>
                                        {step.id}
                                    </div>
                                    <span className="mt-2 small text-nowrap" style={{ color: active ? '#001E6C' : '#9ca3af', fontWeight: active ? 'bold' : 'normal', fontSize: '14px' }}>
                                        {step.label}
                                    </span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div style={{ flexGrow: 1, minWidth: '20px', height: '2px', backgroundColor: isStepActive(steps[index + 1].id) ? '#001E6C' : '#e5e7eb', marginTop: '19px', alignSelf: 'flex-start' }}></div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>

            {/* Content Card */}
            <div className="container bg-white shadow-lg rounded-4 p-5 mt-4" style={{ maxWidth: '900px' }}>
                <div className="row">
                    
                    {/* Left Column: Summary (ปรับปรุง Icon และสี) */}
                    <div className="col-md-5 border-end pe-4">
                        <h5 className="fw-bold mb-4 text-dark border-bottom pb-2">สรุปข้อมูลการนัด</h5>
                        
                        <div className="d-flex flex-column align-items-center text-center mb-4">
                            <div className="doctor-card__avatar">
                                {/* ใช้ Icon ของ Bootstrap */}
                                {selectedDoctor ? 
                                    <i className="bi bi-person-fill fs-2 text-secondary"></i> : 
                                    <i className="bi bi-hospital-fill fs-2 text-secondary"></i>
                                }
                            </div>
                            <h6 
                                className="fw-bold mb-1" 
                                style={{ color: '#001E6C' }} // ใช้สีธีมหลัก
                            >
                                {doctorName || (selectedDepartment === "ไม่รู้แผนก" ? "เจ้าหน้าที่คัดกรอง" : "แพทย์เวร")}
                            </h6>
                            <small className="text-muted">{departmentName || "ไม่ระบุ"}</small>
                        </div>

                        <div className="info-group mb-3">
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">วันนัดหลัก (P1):</span>
                                <span className="fw-semibold text-dark">{formatDateThai(priority1Date)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">วันนัดรอง (P2):</span>
                                <span className="fw-semibold text-dark">{formatDateThai(priority2Date)}</span>
                            </div>
                        </div>
                        
                        <div className="alert alert-primary d-flex align-items-center" role="alert">
                            <i className="bi bi-info-circle-fill me-2"></i>
                            <div className="small">
                                กรุณารอการยืนยันจากโรงพยาบาล <br/>
                                ภายใน 24-48 ชั่วโมง
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="col-md-7 ps-md-5 pt-3 pt-md-0">
                        <h5 className="fw-bold mb-3">อธิบายอาการเบื้องต้น <span className="text-danger">*</span></h5>
                        <Form>
                            <Form.Group className="mb-4">
                                <Form.Control 
                                    as="textarea" 
                                    rows={6} 
                                    placeholder="พิมพ์อาการหรือปัญหาสุขภาพของท่าน..." 
                                    value={symptom}
                                    onChange={(e) => setSymptom(e.target.value)} 
                                />
                                <Form.Text className="text-muted mt-2">
                                    <i className="bi bi-exclamation-triangle-fill text-warning me-1"></i> กรุณากรอกรายละเอียดอาการให้ชัดเจน
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="fw-semibold">แนบไฟล์ หรือรูปภาพประกอบ (ถ้ามี)</Form.Label>
                                <div className="d-flex gap-2">
                                    <Form.Control type="file" multiple onChange={handleFileSelect} className="form-control-sm" />
                                </div>
                            </Form.Group>

                            {files.length > 0 && (
                                <div className="mb-3">
                                    <p className="small text-muted mb-1">ไฟล์ที่เลือก:</p>
                                    <div className="file-list">
                                        {files.map((file, index) => (
                                            <div key={index} className="file-list-item d-flex justify-content-between align-items-center border p-2 mb-1 rounded">
                                                <span><i className="bi bi-file-earmark-text me-2"></i> {file.name}</span>
                                                <button type="button" className="btn-close" style={{fontSize: '0.7rem'}} onClick={() => handleRemoveFile(index)}></button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </Form>
                    </div>
                </div>
            </div>

            {/* Buttons (ปรับปรุง) */}
            <div className="d-flex justify-content-between w-100 mt-4 px-4" style={{ maxWidth: '900px' }}>
                <Button 
                    variant="outline-primary" 
                    className="rounded-pill px-4 py-2 fw-bold" 
                    style={{ borderColor: '#001E6C', color: '#001E6C' }} // Outline Primary
                    onClick={() => navigate(-1)}
                >
                    <i className="bi bi-arrow-left me-2"></i>
                    ย้อนกลับ
                </Button>
                <Button
                    variant="primary"
                    className="rounded-pill px-5 py-2 fw-bold shadow-sm"
                    style={{ backgroundColor: '#001E6C', border: 'none' }} // Solid Primary
                    onClick={handleConfirm}
                    disabled={!symptom.trim()}
                >
                    ยืนยันการจอง <i className="bi bi-check-circle ms-2"></i>
                </Button>
            </div>

            {/* Modal */}
            <Modal 
                show={show} 
                onHide={handleClose} 
                backdrop="static" 
                keyboard={false} 
                centered
                className="success-modal"
            >
                <Modal.Body className="p-0">
                    <div className="success-modal-content text-center">
                        
                        {/* ส่วน Icon Animation */}
                        <div className="success-icon-wrapper mb-4">
                            <div className="success-icon-circle">
                                <i className="bi bi-check-lg"></i>
                            </div>
                            <div className="success-icon-ripple"></div>
                        </div>

                        {/* ส่วนเนื้อหา */}
                        <h3 className="fw-bold mb-3" style={{ color: '#001E6C' }}>จองสำเร็จ!</h3>
                        <p className="text-muted mb-4 px-4">
                            ระบบได้รับข้อมูลการนัดหมายของท่านเรียบร้อยแล้ว
                            ท่านสามารถตรวจสอบสถานะได้ที่เมนูประวัติการจอง
                        </p>

                        {/* ปุ่มกด (ใช้สีธีมหลัก) */}
                        <Button 
                            variant="primary" 
                            className="success-btn rounded-pill px-5 py-2 fw-bold" 
                            style={{ backgroundColor: '#001E6C', border: 'none' }} 
                            onClick={handleFinished} 
                        >
                            ตกลง
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    );
}

export default Queue4;