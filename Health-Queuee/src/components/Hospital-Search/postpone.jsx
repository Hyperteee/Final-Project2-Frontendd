import { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import React from "react";
import hospitalMap from "../../data/hospitaldata.jsx/allhospitaldata";
import { HospitalScheduleContext } from "../../data/context/allSchedule";
import "react-calendar/dist/Calendar.css";
import "./Queue3.css";
import Button from "react-bootstrap/esm/Button";
import Calendar from "react-calendar";
import Modal from "react-bootstrap/Modal";
import { UserAppointment } from "../../data/context/appointment";
const thaiDays = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
const thaiMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

const Postpone = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { appointmentData } = state || {};
    if (!appointmentData) return <div>ไม่มีข้อมูลนัดหมาย</div>;
    console.log(appointmentData)
    const { addAppointment, cancelAppointment } = useContext(UserAppointment);
    const { hospitalSchedules, setHospitalSchedules } = useContext(HospitalScheduleContext);
    const [show, setShow] = useState(false);
    const dateObj = new Date(appointmentData.date);
    const displayDate = `${dateObj.getDate()} ${thaiMonths[dateObj.getMonth()]} ${dateObj.getFullYear() + 543}`
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const hospitalData = Object.values(hospitalMap).find(h => h.info.id === appointmentData.hospitalID)?.info || {};
    const departmentData = hospitalData.departments?.find(d => d.id === appointmentData.departmentID) || {};
    const doctorData = departmentData.doctors?.find(d => d.id === appointmentData.doctorID) || {};
    const departmentSchedule = hospitalSchedules[hospitalData.name]?.find(d => d.departmentId === appointmentData.departmentID);
    const doctorSchedule = departmentSchedule?.doctors?.find(d => d.doctorId === appointmentData.doctorID);
    const userPassword = "1234"
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableTimes, setAvailableTimes] = useState([appointmentData.time]);
    const [selectedTime, setSelectedTime] = useState(null);
    const appointmentDate = new Date(appointmentData.date);
    const [currentWeekStart, setCurrentWeekStart] = useState(getStartOfWeek(appointmentDate));
    const [showConfirm, setShowConfirm] = useState(false);
    const [weekDays, setWeekDays] = useState([]);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const thaiDays = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
    console.log(departmentData.name)
    useEffect(() => {
        if (showSuccessModal) {
            const timer = setTimeout(() => {
                setShowSuccessModal(false);
                navigate("/profilebook");
            }, 1500); // 1.5 seconds
            return () => clearTimeout(timer);
        }
    }, [showSuccessModal]);



    function getThaiDayName(date) {
        return thaiDays[date.getDay()];
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
        // if (!doctorSchedule) return false;\
        const dayName = getThaiDayName(date);
        const dateKey = formatDateKey(date)

        if (departmentData.name == "ไม่รู้แผนก") {
            console.log("ไม่รู้แผนก")
            const hasBookingForDate = departmentSchedule?.bookings[dateKey] !== undefined
            const regularWorkDay = departmentSchedule?.workingDays.includes(dayName)
            return hasBookingForDate || regularWorkDay
        }

        const worksToday = doctorSchedule.workingDays.includes(dayName);


        const bookingsForDate = doctorSchedule.bookings?.[dateKey] || {};
        const hasAvailableSlot = Object.values(bookingsForDate).some(slotArr => slotArr.length < 10);


        return worksToday;
    }


    function handleDateClick(date) {
        setSelectedDate(date);
        const dateKey = formatDateKey(date);
        const dayName = getThaiDayName(date)

        if (departmentData.name == "ไม่รู้แผนก") {
            const weekdayBookings = departmentSchedule.bookings[dayName]
            if (!weekdayBookings) {
                setAvailableTimes([]);
                return;
            }
            const available = Object.entries(weekdayBookings)
                .filter(([slot, bookings]) => bookings.length < 10)
                .map(([slot]) => slot);

            console.log(available);
            setAvailableTimes(available);
            return
        }
        const weekdayBookings = doctorSchedule.bookings?.[dateKey] || {};
        const available = doctorSchedule.timeSlots.filter(slot => {
            const bookings = weekdayBookings[slot] || [];
            return bookings.length < 10;
        });

        setAvailableTimes(available);
        setSelectedTime(available[0] || null);
    }


    function handleTimeClick(time) {
        setSelectedTime(time);
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


    console.log(selectedDate)
    console.log(selectedTime)


    // const handleConfirmPostpone = () => {
    //     cancelAppointment(appointmentData.id)
    //     const updatedSchedules = { ...hospitalSchedules };

    //     const departmentSchedule = updatedSchedules[hospitalData.name]
    //         ?.find(dep => dep.departmentId === appointmentData.departmentID);

    //     if (!departmentSchedule) {
    //         console.error("Department not found!");
    //         return;
    //     }

    //     const doctorSchedule = departmentSchedule.doctors?.find(d => d.doctorId === appointmentData.doctorID);

    //     if (!doctorSchedule) {
    //         console.error("Doctor not found!");
    //         return;
    //     }

    //     const dateKey = formatDateKey(selectedDate);
    //     if (!doctorSchedule.bookings[dateKey]) doctorSchedule.bookings[dateKey] = {};
    //     if (!doctorSchedule.bookings[dateKey][selectedTime]) doctorSchedule.bookings[dateKey][selectedTime] = [];
    //     doctorSchedule.bookings[dateKey][selectedTime].push({ id: Date.now(), user: "currentUser" });

    //     setHospitalSchedules(updatedSchedules);


    //     addAppointment({
    //         hospitalID: hospitalData.id,
    //         departmentID: appointmentData.departmentID,
    //         doctorID: appointmentData.doctorID,
    //         date: selectedDate,
    //         time: selectedTime,
    //         symptom: appointmentData.symptom
    //     });

    //     // navigate("/profilebook");

    // };
    const handleConfirmPostpone = () => {
    cancelAppointment(appointmentData.id); // remove old appointment
    const updatedSchedules = { ...hospitalSchedules };

    const departmentSchedule = updatedSchedules[hospitalData.name]
        ?.find(dep => dep.departmentId === appointmentData.departmentID);

    if (!departmentSchedule) {
        console.error("Department not found!");
        return;
    }

    const dateKey = formatDateKey(selectedDate);

    if (departmentData.name === "ไม่รู้แผนก") {
        // No specific doctor
        if (!departmentSchedule.bookings[dateKey]) departmentSchedule.bookings[dateKey] = {};
        if (!departmentSchedule.bookings[dateKey][selectedTime]) departmentSchedule.bookings[dateKey][selectedTime] = [];

        departmentSchedule.bookings[dateKey][selectedTime].push({
            id: Date.now(),
            user: "currentUser",
            symptom: appointmentData.symptom,
            files: appointmentData.files || []
        });
    } else {
        // With specific doctor
        const doctorSchedule = departmentSchedule.doctors?.find(d => d.doctorId === appointmentData.doctorID);

        if (!doctorSchedule) {
            console.error("Doctor not found!");
            return;
        }

        if (!doctorSchedule.bookings[dateKey]) doctorSchedule.bookings[dateKey] = {};
        if (!doctorSchedule.bookings[dateKey][selectedTime]) doctorSchedule.bookings[dateKey][selectedTime] = [];

        doctorSchedule.bookings[dateKey][selectedTime].push({
            id: Date.now(),
            user: "currentUser",
            symptom: appointmentData.symptom,
            files: appointmentData.files || []
        });
    }

    setHospitalSchedules(updatedSchedules);

    addAppointment({
        hospitalID: hospitalData.id,
        departmentID: appointmentData.departmentID,
        doctorID: departmentData.name === "ไม่รู้แผนก" ? null : appointmentData.doctorID,
        date: selectedDate,
        time: selectedTime,
        symptom: appointmentData.symptom,
        files: appointmentData.files || []
    });
};

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="mt-5 fs-4 text-center">
                <div className="fw-bold fs-3 mb-2">เลื่อนนัดแพทย์</div>
                <div className="d-flex justify-content-center gap-3">
                    <div className="bg-primary-subtle rounded-2 px-3 py-2 mb-2" style={{ color: "#11248fff" }}>
                        โรงพยาบาล{hospitalData.name}
                    </div>
                    <div className="bg-primary-subtle rounded-2 px-2 py-2 mb-2" style={{ color: "#11248fff" }}>
                        {departmentData?.name == "ไม่รู้แผนก" ? "คัดกรอง" : `แผนก ${departmentData?.name}`}
                    </div>
                </div>

            </div>

            <div className="d-flex gap-5 mt-5">
                <div>
                    <p className="fw-bold fs-5">ข้อมูลทำนัดปัจจุบัน</p>
                    <div className="doctor-card__avatar mb-3"><span className="fw-semibold">รูป</span></div>
                    <p><b>ชื่อแพทย์ : </b>{doctorData.name}</p>
                    <p><b>ศูนย์การรักษา : </b>{departmentData.name}</p>
                    <p><b>วันนัดหมาย : </b>{displayDate}</p>
                    <p><b>เวลานัดหมาย : </b>{appointmentData.time}</p>
                </div>

                <div className="flex-column">
                    <div className="d-flex justify-content-between mb-3">
                        <div className="fw-bold fs-4">กรุณาเลือกวันที่ต้องการนัด</div>
                        <Button variant="outline-primary" onClick={() => setShow(true)}>เลือกวัน*</Button>
                    </div>

                    <div className="week-selector">
                        <button onClick={handlePrevWeek} className="arrow-btn">〈</button>
                        <div className="days-container">
                            {weekDays.map((date) => {
                                const d = new Date(date);
                                d.setHours(0, 0, 0, 0);

                                const appt = new Date(appointmentDate);
                                appt.setHours(0, 0, 0, 0);

                                // Normalize selected date
                                const sel = new Date(selectedDate);
                                sel.setHours(0, 0, 0, 0);
                                const disabled = d.getTime() < appt.getTime() || !isDoctorWorking(d);
                                const active = d.getTime() === sel.getTime();
                                const isOriginal = d.getTime() === appt.getTime();
                                return (
                                    <button
                                        key={date}
                                        onClick={() => !disabled && handleDateClick(d)}
                                        disabled={disabled}
                                        className={`day-btn ${active ? "active" : ""} 
                                        ${isOriginal ? "original-date" : ""} 
                                        ${disabled ? "disabled" : ""}`}
                                    >
                                        <div>{getThaiDayName(date)}</div>
                                        <div>{date.getDate()} {thaiMonths[date.getMonth()]}</div>
                                    </button>
                                );
                            })}
                        </div>
                        <button onClick={handleNextWeek} className="arrow-btn">〉</button>
                    </div>

                    <div className="time-section mt-3">
                        <strong className="fw-bold fs-5">เวลานัดหมายแพทย์ได้*</strong>
                        <div className="times d-flex flex-wrap gap-2 mt-2">
                            {availableTimes.length > 0 ? (
                                availableTimes.map((t) => (
                                    <div key={t} className={selectedTime === t ? "time-btn-selected" : "time-btn"} onClick={() => handleTimeClick(t)}>{t}</div>
                                ))
                            ) : (
                                <div className="text-muted small">
                                    {selectedDate ? "ไม่มีเวลาว่างในวันนี้" : "เลือกวันที่แพทย์มีเวลาทำงาน"}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={() => setShow(false)} centered>
                <Calendar
                    onChange={(date) => { handleDateClick(date); setShow(false); }}
                    value={selectedDate || new Date()}
                    minDate={new Date()}
                    tileDisabled={({ date }) => date < appointmentDate || !isDoctorWorking(date)}
                    tileClassName={({ date }) => {
                        if (date.toDateString() === appointmentDate.toDateString()) return "original-date-calendar";
                        return isDoctorWorking(date) ? "working-day" : "non-working-day";
                    }}
                />
            </Modal>
            <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered
                className="text-center">


                <Modal.Body>
                    <h3 className="fw-bold mt-3 mb-4">ยืนยันเลื่อนนัดหมาย ?</h3>
                    <p>
                        วันนัดเดิม:{" "}
                        <span className="text-danger">
                            {displayDate}{" "}
                            เวลา {appointmentData.time}
                        </span>
                    </p>
                    <p>
                        วันที่เลือกใหม่:{" "}
                        <span className="text-success fw-semibold">
                            {selectedDate
                                ? `${selectedDate.getDate()} ${thaiMonths[selectedDate.getMonth()]} ${selectedDate.getFullYear() + 543}`
                                : "ยังไม่ได้เลือกวันที่"}
                            {selectedDate && selectedTime ? ` เวลา  ${selectedTime}` : ""}
                        </span>
                    </p>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowConfirm(false)}>
                        ยกเลิก
                    </Button>
                    <Button variant="primary" onClick={() => {
                        setPasswordInput(""); // reset
                        setPasswordError("");
                        setShowPasswordModal(true),
                            setShowConfirm(false)
                    }}>
                        ยืนยัน
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
                <Modal.Body className="text-center">
                    <h3 className="fw-bold">เลื่อนนัดเสร็จสิ้น</h3>
                    <img src="images/check.png" alt="" style={{ width: "80px" }} />
                </Modal.Body>
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
                                handleConfirmPostpone(); // call your function to update appointment
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

            <div className="d-flex justify-content-end mt-3 gap-5">
                <Button
                    variant="outline-primary"
                    className="backButton px-5 py-2"
                    onClick={() => navigate(-1)}

                >
                    <i className="bi bi-arrow-left"></i>&nbsp;<span>ยกเลิก</span>
                </Button>
                <Button
                    variant={selectedDate && selectedTime ? "primary" : "outline-secondary"}
                    className="nextButton px-5 py-2"
                    onClick={() => setShowConfirm(true)}
                    disabled={!(selectedDate && selectedTime)}
                >
                    <span>ต่อไป</span> &nbsp;<i className="bi bi-arrow-right"></i>
                </Button>
            </div>
        </div>
    );
};

export default Postpone;
