import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router"
import hospitalMap from "../../data/hospitaldata.jsx/allhospitaldata";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/esm/Button";
import { UserAppointment } from "../../data/context/appointment";
import Modal from 'react-bootstrap/Modal'
import { HospitalScheduleContext } from "../../data/context/allSchedule";

const Queue4 = () => {

    const { state } = useLocation()
    const navigate = useNavigate()
    const { selectedHospital, selectedDepartment, selectedDoctor, appointmentDate, appointmentTime } = state
    const hospitalData = hospitalMap[selectedHospital].info || null;
    const thaiMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]
    const dateObj = new Date(appointmentDate);
    const displayDate = `${dateObj.getDate()} ${thaiMonths[dateObj.getMonth()]} ${dateObj.getFullYear() + 543}`
    const [symptom, setSymptom] = useState(null)
    const [files, setFiles] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([])
    const { addAppointment } = useContext(UserAppointment)
    const [show, setShow] = useState(false);
    const { hospitalSchedules, setHospitalSchedules } = useContext(HospitalScheduleContext);




    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const selectedDepartmentData = hospitalData.departments.find(
        (d) => d.id === selectedDepartment
    );
    const DoctorData = selectedDepartmentData?.doctors.find(
        (doctor) => doctor.id === selectedDoctor
    );

    console.log(selectedHospital)
    console.log(selectedDepartment)
    console.log(selectedDoctor)
    console.log(appointmentDate)
    console.log(appointmentTime)


    const steps = [1, 2, 3, 4];
    const currentStep = 4;
    const isStepActive = (stepNumber) => stepNumber <= currentStep;

    const handleFileSelect = (e) => {
        setSelectedFiles(Array.from(e.target.files));
    };


    const handleAddFiles = () => {
        setFiles(prev => [...prev, ...selectedFiles]);
        setSelectedFiles([])
    };

    const handleConfirm = () => {
        const updatedSchedules = { ...hospitalSchedules };
        const doctorSchedule = updatedSchedules[selectedHospital]
            ?.find(dep => dep.departmentId === selectedDepartment)
            ?.doctors.find(doc => doc.doctorId === selectedDoctor);

        if (!doctorSchedule.bookings[appointmentDate]) {
            doctorSchedule.bookings[appointmentDate] = {};
        }
        if (!doctorSchedule.bookings[appointmentDate][appointmentTime]) {
            doctorSchedule.bookings[appointmentDate][appointmentTime] = [];
        }
        doctorSchedule.bookings[appointmentDate][appointmentTime].push({ symptom, files });
        setHospitalSchedules(updatedSchedules);

        const newAppointment = {
            hospitalID: hospitalData.id,
            departmentID: selectedDepartment,
            doctorID: selectedDoctor,
            date: appointmentDate,
            time: appointmentTime,
            symptom,
            files
        }
        addAppointment(newAppointment);
        console.log("Appointment added:", newAppointment);
        handleShow()

    }
    function handleFinished() {
        navigate("/testdata")
        // เดี๋ยวเปลี่บยเป็นไปหน้าโปรไฟล์
    }

    return (<>
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
                    <p className="fw-bold fs-5">ข้อมูลทำนัด</p>
                    <div className="doctor-card__avatar"><span className="fw-semibold">รูป</span></div>
                    <p className="mt-3 text-truncate w-100"><b>ชื่อแพทย์ : </b>{DoctorData?.name || "Unnamed doctor"}</p>
                    <p><b>ศูนย์การรักษา : </b>{selectedDepartmentData?.name}</p>
                    <p><b>วันนัดหมาย : </b>{displayDate}</p>
                    <p><b>เวลานัดหมาย : </b>{appointmentTime}</p>
                </div>
                <div className="Input" style={{ width: "500px" }}>
                    <p className="fw-bold fs-5">อธิบายอาการเบื้องต้น*</p>
                    <Form>
                        <Form.Control as="textarea" rows={10} placeholder="พิมพ์อาการหรือปัญหาสุขภาพของท่าน" onChange={(e) => setSymptom(e.target.value)} />
                        <p className="fw-bold fs-6 mt-2">แนบไฟล์ หรือรูปภาพประกอบ</p>
                        <Form.Control
                            type="file"
                            multiple
                            onChange={handleFileSelect}
                        />
                        <Button
                            className="mt-2"
                            onClick={handleAddFiles}
                            style={{ display: selectedFiles.length === 0 ? "none" : "inline-block" }}
                        >เพิ่มไฟล์นี้</Button>


                        <div className="mt-2">
                            <p>ไฟล์ที่เลือก:</p>
                            <ul>
                                {files.map((file, index) => (
                                    <li key={index}>{file.name}</li>
                                ))}
                            </ul>
                        </div>
                    </Form>
                </div >
            </div >
            <div className="d-flex justify-content-end">
                <Button
                    // variant={selectedDate && selectedTime != null ? "primary" : "outline-secondary"}
                    className="nextButton px-5 py-2"
                    onClick={() => handleConfirm()}
                    disabled={!(symptom != null)}
                >
                    <span>ยืนยันการจอง</span>
                    &nbsp;<i className="bi bi-arrow-right"></i>
                </Button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    จองสำเร็จ
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handleFinished()}>เสร็จสิ้น</Button>
                </Modal.Footer>
            </Modal>
        </div >
    </>);
}

export default Queue4;