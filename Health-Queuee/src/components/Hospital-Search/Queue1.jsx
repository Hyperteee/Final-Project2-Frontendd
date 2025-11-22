import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import React from "react";
import "./Queue1.css"
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/esm/Button";
import hospitalMap from "../../data/hospitaldata.jsx/allhospitaldata";

function Queue1() {
    const { state } = useLocation();
    const { selectedHospital } = state || {};
    const [department, setDepartment] = useState(null)
    const [show, setShow] = useState(false);
    const [chooseDoctor, setChooseDoctor] = useState(null)
    const [departmentName, setDepartmentName] = useState(null)
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()

    // ใช้ Optional Chaining ป้องกัน Error กรณีไม่มีข้อมูล
    const hospitalData = hospitalMap[selectedHospital]?.info || null;

    function handleNext(department, chooseDoctor, selectedHospital) {
        if (department === "ไม่รู้แผนก" || department === "") {
            navigate("/queue3", { state: { selectedHospital, selectedDoctor: null, selectedDepartment: department } })
        } else if (chooseDoctor === "choose") {
            navigate("/queue2", {
                state: {
                    selectedDepartment: department,
                    optionChooseDoctor: chooseDoctor,
                    selectedHospital
                }
            });
        } else if (chooseDoctor === "dontChoose") {
            navigate("/queue3", { state: { selectedHospital, selectedDoctor: null, selectedDepartment: department } })
        }
    }

    // --- Stepper Configuration ---
    const steps = [
        { id: 1, label: "เลือกแผนก" },
        { id: 2, label: "เลือกแพทย์" },
        { id: 3, label: "เลือกวันนัด" },
        { id: 4, label: "กรอกอาการ" }
    ]
    const currentStep = 1;
    const isStepActive = (stepNumber) => stepNumber <= currentStep;

    return (
        // ✅ เพิ่ม bg-light min-vh-100 pb-5 ให้เหมือน Queue3
        <div className="d-flex flex-column align-items-center bg-light min-vh-100 pb-5">
            
            {/* Header Section */}
            {/* ✅ เพิ่ม w-100 และ maxWidth เพื่อให้จัดกึ่งกลางสวยงาม */}
            <div className="mt-5 fs-4 text-center " style={{ maxWidth: '600px', width: '100%' }}>
                <div className="fw-bold fs-3 mb-2" style={{ color: 'black' }}>ทำนัด</div>
                
                <div className="d-flex justify-content-center mb-4">
                    <div className="bg-primary-subtle rounded-2 px-3 py-2" style={{ color: "#11248fff" }}>
                        โรงพยาบาล{selectedHospital}
                    </div>
                </div>

                {/* Stepper Section (Copy จาก Queue3 เพื่อความเป๊ะ) */}
                <div className="d-flex justify-content-center align-items-start px-3 mb-4">
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

            {/* Content Section (Logic เดิมของคุณ) */}
            <div className="d-flex flex-column align-items-center w-100" style={{ maxWidth: '800px' }}>
                <div className="zone-option d-flex flex-column mb-4">
                    <div>ศูนย์การรักษา</div>
                    <div className="d-flex flex-wrap gap-3">
                        <div className="option" onClick={handleShow}>
                            <Form.Check
                                type="radio"
                                id="choose-department"
                                name="chooseDepartment"
                                value="choose-Department"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleShow();
                                }}
                                checked={department !== null && department !== "ไม่รู้แผนก"}
                                onChange={() => { }}
                            />
                            {department == null || department == "ไม่รู้แผนก" ? "เลือกแผนกเอง" : departmentName}
                        </div>
                        <div className="option" onClick={() => { setDepartment("ไม่รู้แผนก"); setDepartmentName("ไม่รู้แผนก"); setChooseDoctor(null); }}>
                            <Form.Check
                                type="radio"
                                id="no-department"
                                name="chooseDepartment"
                                value="no-Department"
                                checked={department !== null && department === "ไม่รู้แผนก"}
                                onChange={() => { }}
                                onClick={(e) => e.stopPropagation()}
                            />
                            ไม่แน่ใจ
                        </div>
                    </div>

                    {department && department !== "ไม่รู้แผนก" && (
                        <div className="zone-option d-flex flex-column mt-4">
                            <div>เลือกแพทย์</div>
                            <div className="d-flex flex-wrap gap-3">
                                <div className="option" onClick={() => setChooseDoctor("choose")}>
                                    <Form.Check
                                        type="radio"
                                        id="choose-Doctor"
                                        name="doctorChoice"
                                        value="choose-Doctor"
                                        checked={chooseDoctor !== null && chooseDoctor !== "dontChoose"}
                                        onChange={() => setChooseDoctor("choose")}
                                    />
                                    ต้องการเลือกแพทย์เอง
                                </div>

                                <div className="option" onClick={() => setChooseDoctor("dontChoose")}>
                                    <Form.Check
                                        type="radio"
                                        id="no-Doctor"
                                        name="doctorChoice"
                                        value="no-Doctor"
                                        checked={chooseDoctor !== null && chooseDoctor !== "choose"}
                                        onChange={() => setChooseDoctor("dontChoose")}
                                    />
                                    เลือกแพทย์ให้ฉัน
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Modal เลือกแผนก */}
                    <Modal className="department-modal" size="lg" show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title className="fw-semibold modal-title">
                                เลือกแผนกที่ต้องการรักษา
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modal-body department-grid">
                            {hospitalData?.departments
                                ?.filter((dep) => dep.name !== "ไม่รู้แผนก")
                                ?.map((dep) => (
                                    <div
                                        key={dep.id}
                                        className="option-department"
                                        onClick={() => {
                                            setDepartment(dep.id);
                                            setDepartmentName(dep.name);
                                            handleClose();
                                        }}
                                    >
                                        <img src={dep.logo} alt="icon" />
                                        <span>{dep.name}</span>
                                    </div>
                                ))
                            }
                        </Modal.Body>
                    </Modal>
                </div>

                <div className="d-flex justify-content-end w-100 px-3">
                    <Button 
                        className="nextButton px-5 py-2 rounded-pill fw-bold shadow-sm" 
                        style={{ backgroundColor: '#001E6C', border: 'none' }}
                        onClick={() => handleNext(department, chooseDoctor, selectedHospital)}
                    >
                        <span>ต่อไป </span>
                        <i className="bi bi-arrow-right ms-2"></i>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Queue1;