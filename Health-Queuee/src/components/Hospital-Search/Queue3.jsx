import { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import React from "react";
import hospitalMap from "../../data/hospitaldata.jsx/allhospitaldata";
import { HospitalScheduleContext } from "../../data/context/allSchedule";
import "react-calendar/dist/Calendar.css";
import "./Queue3.css";
import Button from "react-bootstrap/esm/Button";
import Calendar from "react-calendar";
import Modal from "react-bootstrap/Modal";
import "react-calendar/dist/Calendar.css";

const thaiDays = [
  "อาทิตย์",
  "จันทร์",
  "อังคาร",
  "พุธ",
  "พฤหัสบดี",
  "ศุกร์",
  "เสาร์",
];
const thaiMonths = [
  "ม.ค.",
  "ก.พ.",
  "มี.ค.",
  "เม.ย.",
  "พ.ค.",
  "มิ.ย.",
  "ก.ค.",
  "ส.ค.",
  "ก.ย.",
  "ต.ค.",
  "พ.ย.",
  "ธ.ค.",
];
const Queue3 = () => {
  const { state } = useLocation();
  const { selectedHospital, selectedDoctor, selectedDepartment } = state || {};
  const [show, setShow] = useState(false);
  const hospitalData = hospitalMap[selectedHospital].info || null;
  const [availableTimes, setAvailableTimes] = useState([]);
  const [currentWeekStart, setCurrentWeekStart] = useState(
    getStartOfWeek(new Date())
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [weekDays, setWeekDays] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const { hospitalSchedules } = useContext(HospitalScheduleContext);

  const [currentDepartmentId, setCurrentDepartmentId] =
    useState(selectedDepartment);

  const [selectedDoctorForAppointment, setSelectedDoctorForAppointment] =
    useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(selectedDepartment);
    if (selectedDepartment == "ไม่รู้แผนก") {
      const dontKnowDept = hospitalData.departments.find(
        (d) => d.name == "ไม่รู้แผนก"
      );
      if (dontKnowDept) {
        setCurrentDepartmentId(dontKnowDept.id); // store ID in state
      }
    } else {
      setCurrentDepartmentId(selectedDepartment); // for other departments
    }
  }, []);

  useEffect(() => {
    console.log("UPDATED currentDepartmentId =", currentDepartmentId);
  }, [currentDepartmentId]);

  // ////////////////////// หาตารางหมอในแผนกที่เลือก
  const departmentSchedule = hospitalSchedules[selectedHospital]?.find(
    (dep) => dep.departmentId === currentDepartmentId
  );
  console.log(departmentSchedule);
  // /////////////////////// หาข้อมูลแผนก
  const selectedDepartmentData = hospitalData.departments.find(
    (d) => d.id === currentDepartmentId
  );

  // //////////////////////////// arrayเก็บชื่อหมอในแผนก
  const allDoctors = selectedDepartmentData?.doctors || [];

  // ////////////////////////// array เก็บตารางเวลาหมอทุกคน
  const allDoctorSchedules = departmentSchedule?.doctors || [];

  // ///////////// ถ้าเลือกหมอ ให้หาตารางหมอคนนั้น ถ้าไม่ก็null
  const doctorSchedule =
    selectedDoctor != null
      ? departmentSchedule?.doctors?.find(
          (doc) => doc.doctorId === selectedDoctor
        )
      : null;
  // ///////////// ถ้าเลือกหมอ ให้หาข้อมูลหมอคนนั้น ถ้าไม่ก็null
  const DoctorData =
    selectedDoctor != null
      ? selectedDepartmentData?.doctors?.find(
          (doctor) => doctor.id === selectedDoctor
        )
      : null;

  // //////////// แสดงหมอคนไหน ถ้าเลือกก็แสดงคนนั้น แต่ถ้าไม่ให้เลือกคนตามวันเวลา
  const doctorToShow =
    selectedDoctor != null ? DoctorData : selectedDoctorForAppointment;

  function getThaiDayName(date) {
    const dayIndex = date.getDay();
    return thaiDays[dayIndex];
  }
  function formatDateKey(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  function getStartOfWeek(date) {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay());
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
    const dateKey = formatDateKey(date);
    const dontKnowDept = hospitalData.departments.find(
      (d) => d.name === "ไม่รู้แผนก"
    );
    if (selectedDepartment == "ไม่รู้แผนก") {
      console.log("ไม่รู้แผนก");
      const hasBookingForDate =
        departmentSchedule?.bookings[dateKey] !== undefined;
      const regularWorkDay = departmentSchedule?.workingDays.includes(dayName);
      return hasBookingForDate || regularWorkDay;
    } else {
      console.log("ไม่รู้แผนก2");
    }

    if (DoctorData) {
      const hasBookingForDate = doctorSchedule?.bookings[dateKey] !== undefined;
      const regularWorkDay = doctorSchedule?.workingDays.includes(dayName);
      return hasBookingForDate || regularWorkDay;
    } else {
      return allDoctorSchedules?.some((docSchedule) => {
        const hasBookingForDate = docSchedule.bookings?.[dateKey] !== undefined;
        const regularWorkDay = docSchedule.workingDays.includes(dayName);
        return hasBookingForDate || regularWorkDay;
      });
    }
  }

  function handleDateClick(date) {
    setSelectedDate(date);

    const dayName = getThaiDayName(date);

    if (selectedDepartment == "ไม่รู้แผนก") {
      const weekdayBookings = departmentSchedule.bookings[dayName];
      if (!weekdayBookings) {
        setAvailableTimes([]);
        return;
      }
      const available = Object.entries(weekdayBookings)
        .filter(([slot, bookings]) => bookings.length < 10)
        .map(([slot]) => slot);

      console.log(available);
      setAvailableTimes(available);
      return;
    }
    if (DoctorData) {
      const weekdayBookings = doctorSchedule.bookings[dayName];
      if (!weekdayBookings) {
        setAvailableTimes([]);
        return;
      }

      const available = Object.entries(weekdayBookings)
        .filter(([slot, bookings]) => bookings.length < 10)
        .map(([slot]) => slot);

      console.log(available);
      setAvailableTimes(available);
    } else {
      const times = new Set();

      allDoctorSchedules.forEach((docSchedule) => {
        if (!docSchedule.workingDays.includes(dayName)) return;

        const weekdayBookings = docSchedule.bookings[dayName];
        if (!weekdayBookings) return;

        Object.entries(weekdayBookings).forEach(([slot, bookings]) => {
          if (bookings.length < 10) times.add(slot);
        });
      });

      setAvailableTimes(Array.from(times));
    }
  }

  function handleTimeClick(time) {
    setSelectedTime(time);
    if (selectedDate) {
      chooseDoctorForAppointment(selectedDate, time);
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
  function chooseDoctorForAppointment(date, time) {
    const dateKey = formatDateKey(date);
    let bestDoctor = null;
    let maxSlots = -1;

    allDoctors.forEach((doctor) => {
      const docSchedule = departmentSchedule?.doctors?.find(
        (d) => d.doctorId === doctor.id
      );
      if (!docSchedule) return;

      const dayName = getThaiDayName(date);
      if (!docSchedule.workingDays.includes(dayName)) return;

      if (!docSchedule.bookings?.[dateKey]) {
        docSchedule.bookings = docSchedule.bookings || {};
        docSchedule.bookings[dateKey] = {};
        docSchedule.timeSlots.forEach((slot) => {
          docSchedule.bookings[dateKey][slot] = [];
        });
      }

      const bookedSlots = docSchedule.bookings[dateKey][time]?.length || 0;
      const availableSlots = 10 - bookedSlots;

      if (availableSlots > maxSlots) {
        maxSlots = availableSlots;
        bestDoctor = doctor;
      }
    });

    setSelectedDoctorForAppointment(bestDoctor);
  }
  const finalDoctor =
    selectedDoctor != null ? selectedDoctor : selectedDoctorForAppointment?.id;

  useEffect(() => {
    setWeekDays(generateWeekDays(currentWeekStart));
  }, [currentWeekStart]);

  const steps = [1, 2, 3, 4];
  const currentStep = 3;
  const isStepActive = (stepNumber) => stepNumber <= currentStep;

  function handleNext(
    selectedDate,
    selectedTime,
    selectedHospital,
    selectedDepartment,
    selectedDoctor
  ) {
    const FormattedSelectedday = formatDateKey(selectedDate);
    console.log(FormattedSelectedday);
    console.log(selectedTime);
    console.log(selectedHospital);
    console.log(selectedDepartment);
    console.log(selectedDoctor);
    navigate("/queue4", {
      state: {
        selectedHospital,
        selectedDepartment: currentDepartmentId,
        selectedDoctor: finalDoctor,
        appointmentDate: formatDateKey(selectedDate),
        appointmentTime: selectedTime,
      },
    });
  }

  return (
    <div>
      <header
        className="py-3 shadow-lg sticky-top"
        style={{ backgroundColor: "#020A1B", backdropFilter: "blur(12px)" }}
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

          <nav className="d-none d-md-flex align-items-center gap-4 ">
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
      <div className="d-flex flex-column align-items-center">
        <div className="mt-5 fs-4 text-center">
          <div className="fw-bold fs-3 mb-2">ทำนัด</div>
          <div className="d-flex justify-content-center gap-3">
            <div
              className="bg-primary-subtle rounded-2 px-3 py-2 mb-2"
              style={{ color: "#11248fff" }}
            >
              โรงพยาบาล{selectedHospital}
            </div>
            <div
              className="bg-primary-subtle rounded-2 px-2 py-2 mb-2"
              style={{ color: "#11248fff" }}
            >
              {selectedDepartment !== "ไม่รู้แผนก"
                ? `แผนก ${selectedDepartmentData?.name}`
                : "คัดกรอง"}
            </div>
          </div>

          <div
            className="justify-content-center"
            style={{ display: "flex", alignItems: "center", padding: "20px" }}
          >
            {steps.map((stepNumber, index) => (
              <React.Fragment key={stepNumber}>
                <div
                  className={`step ${
                    isStepActive(stepNumber) ? "step-active" : "step-inactive"
                  }`}
                >
                  {stepNumber}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`connector ${
                      isStepActive(steps[index + 1]) ? "connector-active" : ""
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {selectedDoctor !== null ? (
          <>
            <div className="d-flex gap-5">
              <div>
                <div className="doctor-card__avatar">
                  <span className="fw-semibold">รูป</span>
                </div>
                <p className="fw-semibold mt-3 mb-1 text-truncate w-100">
                  {DoctorData?.name || "Unnamed doctor"}
                </p>
                <p className="small mb-1 doctor-card__subtitle">
                  {selectedDepartmentData?.name}
                </p>
              </div>

              <div className="flex-column">
                <div className="d-flex justify-content-between mb-3">
                  <div className="fw-bold fs-4">ตารางออกตรวจ</div>
                  <Button variant="outline-primary" onClick={handleShow}>
                    เลือกวัน*
                  </Button>
                </div>

                <div className="week-selector">
                  <button onClick={handlePrevWeek} className="arrow-btn">
                    〈
                  </button>
                  <div className="days-container">
                    {weekDays.map((date) => {
                      const tomorrow = new Date();
                      tomorrow.setDate(tomorrow.getDate() + 1);
                      tomorrow.setHours(0, 0, 0, 0);
                      const disabled =
                        date < tomorrow || !isDoctorWorking(date);
                      const active =
                        selectedDate &&
                        date.toDateString() === selectedDate.toDateString();
                      return (
                        <button
                          key={date}
                          onClick={() => handleDateClick(date)}
                          disabled={disabled}
                          className={`day-btn ${active ? "active" : ""} ${
                            disabled ? "disabled" : ""
                          }`}
                        >
                          <div>{getThaiDayName(date)}</div>
                          <div>
                            {date.getDate()} {thaiMonths[date.getMonth()]}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <button onClick={handleNextWeek} className="arrow-btn">
                    〉
                  </button>
                </div>

                <div className="time-section mt-3">
                  <strong className="fw-bold fs-5">เวลานัดหมายแพทย์ได้*</strong>
                  <div className="times d-flex flex-wrap gap-2 mt-2">
                    {availableTimes.length > 0 ? (
                      availableTimes.map((t) => (
                        <div
                          key={t}
                          className={
                            selectedTime == t ? "time-btn-selected" : "time-btn"
                          }
                          onClick={() => handleTimeClick(t)}
                        >
                          {t}
                        </div>
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
                  handleDateClick(date);
                  handleClose();
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
                variant={
                  selectedDate && selectedTime != null
                    ? "primary"
                    : "outline-secondary"
                }
                className="nextButton px-5 py-2"
                onClick={() =>
                  handleNext(
                    selectedDate,
                    selectedTime,
                    selectedHospital,
                    selectedDepartment,
                    selectedDoctor
                  )
                }
                disabled={!(selectedDate && selectedTime != null)}
              >
                <span>ต่อไป</span>
                &nbsp;<i className="bi bi-arrow-right"></i>
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="d-flex gap-5">
              {selectedDepartment !== "ไม่รู้แผนก" && (
                <div>
                  <div className="doctor-card__avatar">
                    <span className="fw-semibold">รูป</span>
                  </div>
                  <p className="fw-semibold mt-3 mb-1 text-truncate w-100">
                    {doctorToShow?.name || "เลือกวันและเวลา"}
                  </p>
                  <p className="small mb-1 doctor-card__subtitle">
                    {selectedDepartmentData?.name}
                  </p>
                </div>
              )}

              <div className="flex-column">
                <div className="d-flex justify-content-between mb-3">
                  <div className="fw-bold fs-4">ตารางออกตรวจ</div>
                  <Button
                    variant="outline-primary"
                    onClick={() => setShow(true)}
                  >
                    เลือกวัน*
                  </Button>
                </div>

                <div className="week-selector">
                  <button onClick={handlePrevWeek} className="arrow-btn">
                    〈
                  </button>
                  <div className="days-container">
                    {weekDays.map((date) => {
                      const tomorrow = new Date();
                      tomorrow.setDate(tomorrow.getDate() + 1);
                      tomorrow.setHours(0, 0, 0, 0);
                      const disabled =
                        selectedDepartment !== "ไม่รู้แผนก"
                          ? date < tomorrow ||
                            !allDoctors.some((doc) =>
                              isDoctorWorking(date, doc)
                            )
                          : date < tomorrow || !isDoctorWorking(date);

                      const active =
                        selectedDate &&
                        date.toDateString() === selectedDate.toDateString();
                      return (
                        <button
                          key={date}
                          onClick={() => handleDateClick(date)}
                          disabled={disabled}
                          className={`day-btn ${active ? "active" : ""} ${
                            disabled ? "disabled" : ""
                          }`}
                        >
                          <div>{getThaiDayName(date)}</div>
                          <div>
                            {date.getDate()} {thaiMonths[date.getMonth()]}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <button onClick={handleNextWeek} className="arrow-btn">
                    〉
                  </button>
                </div>

                <div className="time-section mt-3">
                  <strong className="fw-bold fs-5">เวลานัดหมายแพทย์ได้*</strong>
                  <div className="times d-flex flex-wrap gap-2 mt-2">
                    {availableTimes.length > 0 ? (
                      availableTimes.map((t) => (
                        <div
                          key={t}
                          className={
                            selectedTime === t
                              ? "time-btn-selected"
                              : "time-btn"
                          }
                          onClick={() => handleTimeClick(t)}
                        >
                          {t}
                        </div>
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

            {/* Calendar Modal */}
            <Modal show={show} onHide={() => setShow(false)} centered>
              <Calendar
                onChange={(date) => {
                  handleDateClick(date);
                  setShow(false);
                }}
                value={selectedDate || new Date()}
                minDate={new Date()}
                tileDisabled={({ date }) =>
                  !allDoctors.some((doc) => isDoctorWorking(date, doc))
                }
                tileClassName={({ date }) =>
                  allDoctors.some((doc) => isDoctorWorking(date, doc))
                    ? "working-day"
                    : "non-working-day"
                }
              />
            </Modal>

            {/* Next Button */}
            <div className="d-flex justify-content-end mt-3">
              <Button
                variant={
                  selectedDate && selectedTime ? "primary" : "outline-secondary"
                }
                className="nextButton px-5 py-2"
                onClick={() =>
                  handleNext(
                    selectedDate,
                    selectedTime,
                    selectedHospital,
                    currentDepartmentId,
                    selectedDoctor
                  )
                }
                disabled={!(selectedDate && selectedTime)}
              >
                <span>ต่อไป</span> &nbsp;<i className="bi bi-arrow-right"></i>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Queue3;
