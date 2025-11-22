import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import hospitalMap from "../../data/hospitaldata.jsx/allhospitaldata";
import { HospitalScheduleContext } from "../../data/context/allSchedule";
import Button from "react-bootstrap/esm/Button";
import Modal from 'react-bootstrap/Modal';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Queue3.css"; 

const thaiDays = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];

const Queue3 = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // --- Data & Context ---
  const { selectedHospital, selectedDoctor, selectedDepartment } = state || {};
  const { hospitalSchedules } = useContext(HospitalScheduleContext);
  const hospitalData = hospitalMap[selectedHospital]?.info || null;

  const [show, setShow] = useState(false);
  const [currentDepartmentId, setCurrentDepartmentId] = useState(selectedDepartment);
  const [priority1Date, setPriority1Date] = useState(null);
  const [priority2Date, setPriority2Date] = useState(null);
  const [activeField, setActiveField] = useState(null);

  useEffect(() => {
    if (selectedDepartment === "ไม่รู้แผนก") {
      const dontKnowDept = hospitalData?.departments.find(d => d.name === "ไม่รู้แผนก" || d.name === "แผนก 0");
      setCurrentDepartmentId(dontKnowDept ? dontKnowDept.id : "BKK001-D00");
    } else {
      setCurrentDepartmentId(selectedDepartment);
    }
  }, [selectedDepartment, hospitalData]);

  const currentHospitalSchedule = hospitalSchedules[selectedHospital] || [];
  const departmentSchedule = currentHospitalSchedule.find((dep) => dep.departmentId === currentDepartmentId);

  const selectedDepartmentData = selectedDepartment === "ไม่รู้แผนก"
    ? null
    : hospitalData?.departments.find((d) => d.id === currentDepartmentId);

  const DoctorData = selectedDoctor != null
    ? selectedDepartmentData?.doctors?.find((doctor) => doctor.id === selectedDoctor)
    : null;

  // --- Handlers ---
  const handleClose = () => setShow(false);
  const handleShow = (field) => {
    setActiveField(field);
    setShow(true);
  };

  function getThaiDayName(date) {
    const dayIndex = date.getDay();
    return thaiDays[dayIndex];
  }

  const formatDateDisplay = (date) => {
    if (!date) return "";
    return date.toLocaleDateString('th-TH', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  function isDoctorWorking(date) {
    const dayName = getThaiDayName(date);
    if (departmentSchedule) {
      return departmentSchedule.workingDays?.includes(dayName);
    }
    return false;
  }


  const getMinDate = () => {
    const today = new Date();
    const minBookingDate = new Date(today);
    minBookingDate.setDate(today.getDate() + 7);

    if (activeField === 'P1') return minBookingDate;
    
    if (activeField === 'P2' && priority1Date) {
      const minP2Date = new Date(priority1Date);
      minP2Date.setDate(priority1Date.getDate() + 3);
      return minP2Date;
    }
    return minBookingDate;
  };

  function handleDateClick(date) {
    if (activeField === 'P1') {
      setPriority1Date(date);
      if (priority2Date && date >= priority2Date) setPriority2Date(null);
    } else if (activeField === 'P2') {
      setPriority2Date(date);
    }
    handleClose();
  }

  const handleNext = () => {
    navigate("/queue4", {
      state: {
        ...state,
        priority1Date,
        priority2Date,
        departmentName: selectedDepartmentData?.name || "คัดกรอง/ทั่วไป",
        doctorName: DoctorData?.name || (selectedDepartment === "ไม่รู้แผนก" ? "-" : "แพทย์เวร")
      }
    });
  }

  // --- Stepper Config ---
  const steps = [
    { id: 1, label: "เลือกแผนก" },
    { id: 2, label: "เลือกแพทย์" },
    { id: 3, label: "เลือกวันนัด" },
    { id: 4, label: "กรอกอาการ" }
  ];
  
  const currentStep = 3; 
  const isStepActive = (stepNumber) => stepNumber <= currentStep;

  return (
    <div className="d-flex flex-column align-items-center bg-light min-vh-100 pb-5">

      <div className="mt-5 fs-4 text-center w-100" style={{ maxWidth: '600px', width: '100%' }}>
        <div className="fw-bold fs-3 mb-2" style={{ color: 'black' }}>ทำนัด</div>
        
        <div className="d-flex justify-content-center gap-3 mb-4">
          <div className="bg-primary-subtle rounded-2 px-3 py-2" style={{ color: "#11248fff" }}>
            โรงพยาบาล{selectedHospital}
          </div>
          <div className="bg-primary-subtle rounded-2 px-2 py-2" style={{ color: "#11248fff" }}>
            {selectedDepartment === "ไม่รู้แผนก" ? "คัดกรอง" : `แผนก ${selectedDepartmentData?.name || selectedDepartment}`}
          </div>
        </div>


        <div className="d-flex justify-content-center align-items-start px-3">
          {steps.map((step, index) => {
            const active = isStepActive(step.id);
            return (
              <React.Fragment key={step.id}>
                <div className="d-flex flex-column align-items-center" style={{ zIndex: 2, minWidth: '80px' }}>
                  <div className={`step ${active ? "step-active" : "step-inactive"}`}>
                    {step.id}
                  </div>
                  <span 
                    className="mt-2 small text-nowrap" 
                    style={{ 
                      color: active ? '#001E6C' : '#9ca3af',
                      fontWeight: active ? 'bold' : 'normal',
                      fontSize: '14px'
                    }}
                  >
                    {step.label}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div 
                    style={{ 
                      flexGrow: 1, 
                      minWidth: '20px',
                      height: '2px', 
                      backgroundColor: isStepActive(steps[index + 1].id) ? '#001E6C' : '#e5e7eb',
                      marginTop: '19px', 
                      alignSelf: 'flex-start'
                    }} 
                  ></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Content Card */}
      <div className="container bg-white shadow-lg rounded-4 p-5 mt-4" style={{ maxWidth: '900px' }}>
        <div className="row">
          
          {/* Left: Doctor Info */}
          <div className="col-md-5 d-flex flex-column align-items-center text-center border-end pe-4">
            <div className="doctor-avatar shadow-sm mb-3">
              {selectedDoctor ? <span className="fs-1">👨‍⚕️</span> : selectedDepartment !== "ไม่รู้แผนก" ? <span className="fs-1">🏥</span> : <span className="fs-1">📋</span>}
            </div>
            
            <h4 className="fw-bold text-dark mb-1">
              {selectedDoctor ? DoctorData?.name : (selectedDepartment === "ไม่รู้แผนก" ? "เจ้าหน้าที่คัดกรอง" : "แพทย์เวรประจำวัน")}
            </h4>
            
            <p className="text-muted small mb-3">
              {selectedDepartment === "ไม่รู้แผนก" ? "โรงพยาบาลจะทำการคัดกรองให้" : `สาขา: ${selectedDepartmentData?.name || ""}`}
            </p>

            <div className="alert alert-info border-0 bg-info-subtle text-info-emphasis w-100 py-2 small mb-1">
              <i className="bi bi-clock me-1"></i> ต้องจองล่วงหน้าอย่างน้อย 7 วัน
            </div>

            {selectedDoctor && (
              <div className="alert alert-warning border-0 bg-warning-subtle text-warning-emphasis w-100 py-2 small">
                <i className="bi bi-info-circle me-1"></i> วันนัดอ้างอิงตามตารางแผนก
              </div>
            )}
          </div>

          {/* Right: Inputs */}
          <div className="col-md-7 ps-4 d-flex flex-column justify-content-center">
            
            <div className="mb-4">
              <label className="form-label fw-bold text-dark">เลือกวันที่ต้องการนัดหลัก</label>
              <div className="input-group input-group-lg shadow-sm" onClick={() => handleShow('P1')} style={{ cursor: 'pointer' }}>
                <span className="input-group-text bg-white border-end-0"><i className="bi bi-calendar-event text-primary"></i></span>
                <input 
                  type="text" 
                  className="form-control bg-light border-start-0" 
                  placeholder="เลือกวัน (ล่วงหน้า 7 วัน)" 
                  value={formatDateDisplay(priority1Date)} 
                  readOnly 
                  style={{ cursor: 'pointer' }} 
                />
              </div>
            </div>

            <div className="mb-2">
              <label className="form-label fw-bold text-dark">เลือกวันที่ต้องการนัดรอง</label>
              <div 
                className={`input-group input-group-lg shadow-sm ${!priority1Date ? 'opacity-50' : ''}`} 
                onClick={() => priority1Date && handleShow('P2')} 
                style={{ cursor: priority1Date ? 'pointer' : 'not-allowed' }}
              >
                <span className="input-group-text bg-white border-end-0"><i className="bi bi-calendar-plus text-secondary"></i></span>
                <input 
                  type="text" 
                  className="form-control bg-light border-start-0" 
                  placeholder={priority1Date ? "ต้องห่างจากวันหลัก 3 วัน" : "กรุณาเลือกวันหลักก่อน"} 
                  value={formatDateDisplay(priority2Date)} 
                  readOnly 
                  style={{ cursor: priority1Date ? 'pointer' : 'not-allowed' }} 
                  disabled={!priority1Date} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-between w-100 mt-4 px-4" style={{ maxWidth: '900px' }}>
        <Button variant="outline-dark" className="rounded-pill px-4 py-2" onClick={() => navigate(-1)}>
          &lt; เริ่มใหม่
        </Button>
        <Button
          variant="primary"
          className="rounded-pill px-5 py-2 fw-bold"
          style={{ backgroundColor: '#001E6C' }}
          onClick={handleNext}
          disabled={!priority1Date || !priority2Date}
        >
          ต่อไป &gt;
        </Button>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered className="custom-calendar-modal">
        <Modal.Header closeButton>
          <Modal.Title>
            {activeField === 'P1' ? "📅 เลือกวันนัดหลัก (ล่วงหน้า 7 วัน)" : "🗓️ เลือกวันนัดรอง"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <Calendar
            onChange={handleDateClick}
            value={activeField === 'P1' ? (priority1Date || getMinDate()) : (priority2Date || getMinDate())}
            minDate={getMinDate()} 
            tileDisabled={({ date }) => !isDoctorWorking(date)}
            tileClassName={({ date }) => isDoctorWorking(date) ? "working-day" : "non-working-day"}
            locale="th-TH"
            prev2Label={null}
            next2Label={null}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Queue3;
