import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Listsearch from "./listsearch";
import React from "react";
import "./Queue1.css"
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/esm/Button";

import chulalongkorn from "../../data/hospitaldata.jsx/chula";
function Queue1() {
    const { state } = useLocation();
    const { selectedHospital } = state || {};
    const [department, setDepartment] = useState(null)
    const [show, setShow] = useState(false);
    const [chooseDoctor, setChooseDoctor] = useState(null)
    const [hospitalData, setHospitalData] = useState(null)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //////////////////////////////// stepper ////////////////////////

    const steps = [1, 2, 3, 4];
    const currentStep = 1;
    console.log(department)
    const isStepActive = (stepNumber) => stepNumber <= currentStep;
    useEffect(() => {
        if (!selectedHospital) return;

        switch (selectedHospital) {
            case "จุฬาลงกรณ์":
                setHospitalData(chulalongkorn);
                break;
            case "ศิริราช":
                setHospitalData(siriraj);
                break;
            default:
                setHospitalData(null);
        }
    }, [selectedHospital]);
    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <div className="mt-5 fs-4 text-center">
                    <div className="fw-bold fs-3 mb-2">ทำนัด</div>
                    <div className=" bg-primary-subtle rounded-2 px-3 py-2 mb-2" style={{ color: "#11248fff" }}>โรงพยาบาล{selectedHospital}</div>
                    <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
                        {steps.map((stepNumber, index) => (
                            <React.Fragment key={stepNumber}>
                                <div
                                    className={`step ${isStepActive(stepNumber) ? "step-active" : "step-inactive"
                                        }`}
                                >
                                    {stepNumber}
                                </div>

                                {/* Connector Line */}
                                {index < steps.length - 1 && (
                                    <div
                                        className={`connector ${isStepActive(steps[index + 1]) ? "connector-active" : ""
                                            }`}
                                    ></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="zone-option d-flex flex-column">
                    <div>ศูนย์การรักษา</div>
                    <div className="d-flex">
                        <div className="option" onClick={handleShow}>
                            <Form.Check
                                type="radio"
                                id="choose-department"
                                name="chooseDepartment"
                                value="choose-Department"
                                onClick={handleShow}
                                checked={department !== null && department !== "dontChoose"}
                                onChange={() => { }}
                            />{
                                department == null || department == "dontChoose" ? "เลือกแผนกเอง" : department
                            }
                        </div>
                        <div className="option" onClick={() => setDepartment("dontChoose")}>
                            <Form.Check
                                type="radio"
                                id="no-department"
                                name="chooseDepartment"
                                value="no-Department"
                                onChange={() => setDepartment("dontChoose")}
                            />ไม่แน่ใจ
                        </div>
                    </div>
                    <div className="zone-option d-flex flex-column">
                        <div>เลือกแพทย์</div>
                        <div className="d-flex">
                            <div className="option">
                                <Form.Check
                                    type="radio"
                                    id="choose-Doctor"
                                    name="doctorChoice"
                                    value="choose-Doctor"
                                    checked={chooseDoctor !== null && chooseDoctor !== "dontChoose"}
                                    onChange={(e) => setChooseDoctor("choose")}
                                />ต้องการเลือกแพทย์เอง
                            </div>

                            <div className="option">
                                <Form.Check
                                    type="radio"
                                    id="no-Doctor"
                                    name="doctorChoice"
                                    value="no-Doctor"
                                    checked={chooseDoctor !== null && chooseDoctor !== "choose"}
                                    onChange={(e) => setChooseDoctor("dontChoose")}

                                />เลือกแพทย์ให้ฉัน
                            </div>
                        </div>


                    </div>

                    <Modal className="department-modal" size="lg" show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title className="fw-semibold modal-title">เลือกแผนกที่ต้องการรักษา</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="modal-body department-grid">
                            {hospitalData?.departments?.map((department) => (
                                <div
                                    key={department.name}
                                    className="option-department"
                                    onClick={() => { setDepartment(department.name), handleClose() }}
                                >
                                    <img src={department.logo} alt="department icon" />
                                    {department.name}
                                </div>
                            ))}
                        </Modal.Body>


                    </Modal>


                </div>
                <div className="d-flex justify-content-end">
                    <Button className="nextButton px-5 py-2">
                        <span>ต่อไป   </span>
                        <i className="bi bi-arrow-right"></i>
                    </Button>
                </div>

            </div>
        </>
    )
}
export default Queue1