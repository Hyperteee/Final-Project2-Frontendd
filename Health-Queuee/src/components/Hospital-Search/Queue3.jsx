
import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router";
import React from "react";
import hospitalMap from "../../data/hospitaldata.jsx/allhospitaldata";
import { HospitalScheduleContext } from "../../data/context/allSchedule";
import "react-calendar/dist/Calendar.css";
import "./Queue3.css";
import Button from "react-bootstrap/esm/Button";
import Calendar from "react-calendar";
import Modal from 'react-bootstrap/Modal';
import "react-calendar/dist/Calendar.css";

const thaiDays = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
const thaiMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]
const Queue3 = () => {
  const { state } = useLocation();
  const { selectedHospital, selectedDoctor, selectedDepartment } = state || {};
  const [show, setShow] = useState(false);
  const hospitalData = hospitalMap[selectedHospital].info || null;
  const [clickDay, setClickDay] = useState(new Date());
  const [availableTimes, setAvailableTimes] = useState([]);
  const [currentWeekStart, setCurrentWeekStart] = useState(getStartOfWeek(new Date()));
  const [selectedDate, setSelectedDate] = useState(null);
  const [weekDays, setWeekDays] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  const [selectedTime, setSelectedTime] = useState(null)
  const { hospitalSchedules } = useContext(HospitalScheduleContext);

  const departmentSchedule = hospitalSchedules[selectedHospital]?.find(
    (dep) => dep.departmentId === selectedDepartment
  );
  const doctorSchedule = departmentSchedule?.doctors?.find(
    (doc) => doc.doctorId === selectedDoctor
  );

  const selectedDepartmentData = hospitalData.departments.find(
    (d) => d.id === selectedDepartment
  );
  const DoctorData = selectedDepartmentData?.doctors.find(
    (doctor) => doctor.id === selectedDoctor
  );

  function getThaiDayName(date) {
    const dayIndex = date.getDay();
    return thaiDays[dayIndex];
  }

  function getStartOfWeek(date) {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay())
    start.setHours(0, 0, 0, 0);
    return start;
  }

  function generateWeekDays(startDate) {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);
      days.push(d);
    }
    return days;
  }

  function isDoctorWorking(date) {
    const dayName = getThaiDayName(date);
    return doctorSchedule?.workingDays.includes(dayName);
  }

  function handleDateClick(date) {
    setSelectedDate(date);

    setCurrentWeekStart(getStartOfWeek(date));

    const dayName = getThaiDayName(date);
    if (isDoctorWorking(date)) {
      setAvailableTimes(
        doctorSchedule.bookings[dayName]
          ? Object.keys(doctorSchedule.bookings[dayName])
          : []
      );
    } else {
      setAvailableTimes([]);
    }
  }


  function handleNextWeek() {
    const next = new Date(currentWeekStart);
    next.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(next);
  }

  function handlePrevWeek() {
    const prev = new Date(currentWeekStart);
    prev.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(prev);
  }

  useEffect(() => {
    setWeekDays(generateWeekDays(currentWeekStart));
  }, [currentWeekStart]);

  const steps = [1, 2, 3, 4];
  const currentStep = 3;
  const isStepActive = (stepNumber) => stepNumber <= currentStep;

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="mt-5 fs-4 text-center">
        <div className="fw-bold fs-3 mb-2">ทำนัด</div>
        <div className="d-flex justify-content-center gap-3">
          <div className="bg-primary-subtle rounded-2 px-3 py-2 mb-2" style={{ color: "#11248fff" }}>
            โรงพยาบาล{selectedHospital}
          </div>
          <div className="bg-primary-subtle rounded-2 px-2 py-2 mb-2" style={{ color: "#11248fff" }}>
            แผนก{selectedDepartmentData?.name}
          </div>
        </div>

        <div className="justify-content-center" style={{ display: "flex", alignItems: "center", padding: "20px" }}>
          {steps.map((stepNumber, index) => (
            <React.Fragment key={stepNumber}>
              <div className={`step ${isStepActive(stepNumber) ? "step-active" : "step-inactive"}`}>{stepNumber}</div>
              {index < steps.length - 1 && (
                <div
                  className={`connector ${isStepActive(steps[index + 1]) ? "connector-active" : ""}`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="d-flex gap-5">
        <div>
          <div className="doctor-card__avatar"><span className="fw-semibold">รูป</span></div>
          <p className="fw-semibold mt-3 mb-1 text-truncate w-100">{DoctorData?.name || "Unnamed doctor"}</p>
          <p className="small mb-1 doctor-card__subtitle">{selectedDepartmentData?.name}</p>
        </div>



        <div className="flex-column">
          <div className="d-flex justify-content-between mb-3">
            <div className="fw-bold fs-4">
              ตารางออกตรวจ
            </div>
            <Button variant="outline-primary" onClick={handleShow}>
              เลือกวัน
            </Button>
          </div>

          <div className="week-selector">
            <button onClick={handlePrevWeek} className="arrow-btn">〈</button>
            <div className="days-container">
              {weekDays.map((date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const disabled = date < today || !isDoctorWorking(date);
                const active =
                  selectedDate && date.toDateString() === selectedDate.toDateString();
                return (
                  <button
                    key={date}
                    onClick={() => handleDateClick(date)}
                    disabled={disabled}
                    className={`day-btn ${active ? "active" : ""} ${disabled ? "disabled" : ""
                      }`}
                  >
                    <div>{getThaiDayName(date)}</div>
                    <div>{date.getDate()} {thaiMonths[date.getMonth()]}</div>
                  </button>
                );
              })}
            </div>
            <button onClick={handleNextWeek} className="arrow-btn">〉</button>
          </div>

          {/* Time Slots */}
          <div className="time-section mt-3">
            <strong className="fw-bold fs-5">เวลานัดหมายแพทย์ได้*</strong>
            <div className="times d-flex flex-wrap gap-2 mt-2">
              {availableTimes.length > 0 ? (
                availableTimes.map((t) => (
                  <div key={t} className={selectedTime == t ? "time-btn-selected" : "time-btn"} onClick={() => setSelectedTime(t)}>{t}</div>
                ))
              ) : (
                <div className="text-muted small">
                  {selectedDate
                    ? "ไม่มีเวลาว่างในวันนี้"
                    : "เลือกวันที่แพทย์มีเวลาทำงาน"}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>

        <Calendar
          onChange={(date) => {
            handleDateClick(date)
            handleClose()
          }}
          value={selectedDate || new Date()}
          minDate={new Date()}
          tileDisabled={({ date }) => !isDoctorWorking(date)}
          tileClassName={({ date }) =>
            isDoctorWorking(date) ? "working-day" : "non-working-day"
          }
        />

      </Modal>
      <div className="d-flex justify-content-end">
        <Button
        variant={selectedDate && selectedTime != null ? "primary" : "outline-secondary"}
          className="nextButton px-5 py-2"
          onClick={() => handleNext(department, chooseDoctor, selectedHospital)}
          disabled={!(selectedDate && selectedTime != null)}
        >
          <span>ต่อไป</span>
          &nbsp;<i className="bi bi-arrow-right"></i>
        </Button>
      </div>

    </div>


  );
};

export default Queue3;
