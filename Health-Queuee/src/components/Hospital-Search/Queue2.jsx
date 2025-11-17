import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import React from "react";
import hospitalMap from "../../data/hospitaldata.jsx/allhospitaldata";
import './Queue2.css'


function Queue2() {
    const { state } = useLocation();

    const { selectedHospital, selectedDepartment, optionChooseDoctor } = state || {};
    const hospitalData = hospitalMap[selectedHospital].info || null

    const navigate = useNavigate()



    const steps = [1, 2, 3, 4];
    const currentStep = 2;
    const isStepActive = (stepNumber) => stepNumber <= currentStep;

    const departmentData = hospitalData?.departments.find(
        (dep) => dep.id === selectedDepartment
    )

    function handleBook(selectedHospital, selectedDoctor, selectedDepartment){
        navigate("/queue3", 
            { state: { selectedHospital , selectedDoctor, selectedDepartment} })
    }
    console.log(optionChooseDoctor)

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <div className="mt-5 fs-4 text-center">
                    <div className="fw-bold fs-3 mb-2">ทำนัด</div>
                    <div className="d-flex justify-content-center gap-3">
                        <div className=" bg-primary-subtle rounded-2 px-3 py-2 mb-2" style={{ color: "#11248fff" }}>โรงพยาบาล{selectedHospital}</div>
                        <div className=" bg-primary-subtle rounded-2 px-2 py-2 mb-2" style={{ color: "#11248fff" }}>แผนก{departmentData.name}</div>
                    </div>

                    <div className="justify-content-center" style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
                        {steps.map((stepNumber, index) => (
                            <React.Fragment key={stepNumber}>
                                <div
                                    className={`step ${isStepActive(stepNumber) ? "step-active" : "step-inactive"
                                        }`}
                                >
                                    {stepNumber}
                                </div>
                                {index < steps.length - 1 && (
                                    <div
                                        className={`connector ${isStepActive(steps[index + 1]) ? "connector-active" : ""
                                            }`}
                                    ></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                        <div className="doctor-results-panel">
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
                                                    <button className="btn btn-primary rounded-pill py-2" onClick={()=>{handleBook(selectedHospital, doctor.id, selectedDepartment)}}>นัดหมาย</button>
                                                    <button className="btn btn-outline-secondary rounded-pill py-2">รายละเอียด</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                         
                
                
                
                </div>
            </div>
        </>
    )
}
export default Queue2