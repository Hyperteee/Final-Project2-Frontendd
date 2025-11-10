import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import React from "react";
import hospitalMap from "../../data/hospitaldata.jsx/allhospitaldata";


const Queue3 = () => {

    const { state } = useLocation();
    const { selectedHospital, selectedDoctor, selectedDepartment } = state || {};
    const hospitalData = hospitalMap[selectedHospital] || null

    const selectedDepartmentData = hospitalData.departments.find((d) => {
        return d.id == selectedDepartment
    })


    const DoctorData = selectedDepartmentData?.doctors.find((doctor) => {
        return doctor.id === selectedDoctor
    })



    const steps = [1, 2, 3, 4];
    const currentStep = 3;
    const isStepActive = (stepNumber) => stepNumber <= currentStep;
    // console.log("selectedDepartment",selectedDepartment)
    // console.log("selectdepartmentdata",selectedDepartmentData)
    // console.log("selectedDoctor", selectedDoctor)
    // console.log("Doctor data", DoctorData)
    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <div className="mt-5 fs-4 text-center">
                    <div className="fw-bold fs-3 mb-2">ทำนัด</div>
                    <div className="d-flex justify-content-center gap-3">
                        <div className=" bg-primary-subtle rounded-2 px-3 py-2 mb-2" style={{ color: "#11248fff" }}>โรงพยาบาล{selectedHospital}</div>
                        <div className=" bg-primary-subtle rounded-2 px-2 py-2 mb-2" style={{ color: "#11248fff" }}>แผนก{selectedDepartmentData.name}</div>
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
                        <div className="d-flex">
                            <div className="col-12 col-md-6" key={DoctorData.id}>
                                <div className="card border-0 shadow-sm rounded-4 position-relative h-100 doctor-card">
                                    <div className="card-body text-center pt-4 pb-4 d-flex flex-column align-items-center doctor-card__body">
                                        <div className="doctor-card__avatar">
                                            <span className="fw-semibold">รูป</span>
                                        </div>
                                        <p className="fw-semibold mt-3 mb-1 text-truncate w-100">{DoctorData.name || "Unnamed doctor"}</p>
                                        <p className="small mb-1 doctor-card__subtitle">{DoctorData.department}</p>
                                        {DoctorData.specialization && <p className="small text-secondary mb-3">{DoctorData.specialization}</p>}
                                    </div>
                                </div>
                            </div>
                            <div>
                                ปฎิทิน


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Queue3;