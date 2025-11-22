import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import React from "react";
import hospitalMap from "../../data/hospitaldata.jsx/allhospitaldata";
import './Queue2.css'
import Button from "react-bootstrap/esm/Button";

function Queue2() {
    const { state } = useLocation();
    const { selectedHospital, selectedDepartment, optionChooseDoctor } = state || {};
    const hospitalData = hospitalMap[selectedHospital]?.info || null;
    const navigate = useNavigate();

    const departmentData = hospitalData?.departments.find(
        (dep) => dep.id === selectedDepartment
    );

    function handleBook(selectedHospital, selectedDoctor, selectedDepartment) {
        navigate("/queue3", { 
            state: { selectedHospital, selectedDoctor, selectedDepartment } 
        });
    }

    // --- Stepper Config ---
    const steps = [
        { id: 1, label: "เลือกแผนก" },
        { id: 2, label: "เลือกแพทย์" },
        { id: 3, label: "เลือกวันนัด" },
        { id: 4, label: "กรอกอาการ" }
    ];
    const currentStep = 2;
    const isStepActive = (stepNumber) => stepNumber <= currentStep;

    return (
        <div className="d-flex flex-column align-items-center bg-light min-vh-100 pb-5">
            
            {/* Header Section */}
            <div className="mt-5 fs-4 text-center w-100" style={{ maxWidth: '800px' }}>
                <div className="fw-bold fs-3 mb-2" style={{ color: 'black' }}>ทำนัด</div>
                
                <div className="d-flex justify-content-center gap-3 mb-4">
                    <div className="bg-primary-subtle rounded-2 px-3 py-2" style={{ color: "#11248fff" }}>
                        โรงพยาบาล{selectedHospital}
                    </div>
                    <div className="bg-primary-subtle rounded-2 px-2 py-2" style={{ color: "#11248fff" }}>
                        แผนก{departmentData?.name}
                    </div>
                </div>

                {/* Stepper Section */}
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

            {/* Doctor Selection Section (Restore Original Code) */}
            {/* ใช้โครงสร้างเดิมของคุณ ไม่มีการเปลี่ยน Class หรือ Layout */}
            <div className="doctor-results-panel" style={{ width: '100%', maxWidth: '900px', padding: '0 15px' }}>
                <div className="row g-4">
                    {departmentData?.doctors.map((doctor) => {
                        return (
                            <div className="col-12 col-md-6" key={doctor.id}>
                                <div className="card border-0 shadow-sm rounded-4 position-relative h-100 doctor-card">
                                    <div className="card-body text-center pt-4 pb-4 d-flex flex-column align-items-center doctor-card__body">
                                        <div className="doctor-card__avatar">
                                            <span className="fw-semibold">รูป</span>
                                        </div>
                                        <p className="fw-semibold mt-3 mb-1 text-truncate w-100">{doctor.name || "Unnamed doctor"}</p>
                                        <p className="small mb-1 doctor-card__subtitle">{doctor.department}</p>
                                        {doctor.specialization && <p className="small text-secondary mb-3">{doctor.specialization}</p>}
                                        <div className="d-grid gap-2 w-100 mt-auto doctor-card__actions">
                                            <button className="btn btn-primary rounded-pill py-2" onClick={() => { handleBook(selectedHospital, doctor.id, selectedDepartment) }}>นัดหมาย</button>
                                            <button className="btn btn-outline-secondary rounded-pill py-2">รายละเอียด</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            <div className="mt-5">
                <Button variant="outline-dark" className="rounded-pill px-4 py-2" onClick={() => navigate(-1)}>
                    &lt; ย้อนกลับ
                </Button>
            </div>

        </div>
    )
}

export default Queue2;