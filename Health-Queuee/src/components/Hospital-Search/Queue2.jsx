import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import React from "react";
function Queue2() {
    const { state } = useLocation();

    const { selectedHospital, selectedDepartment, optionChooseDoctor } = state || {};


    const steps = [1, 2, 3, 4];
    const currentStep = 2;
    const isStepActive = (stepNumber) => stepNumber <= currentStep;
    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <div className="mt-5 fs-4 text-center">
                    <div className="fw-bold fs-3 mb-2">ทำนัด</div>
                    <div className="d-flex gap-3">
                        <div className=" bg-primary-subtle rounded-2 px-3 py-2 mb-2" style={{ color: "#11248fff" }}>โรงพยาบาล{selectedHospital}</div>
                        <div className=" bg-primary-subtle rounded-2 px-2 py-2 mb-2" style={{ color: "#11248fff"}}>แผนก{selectedDepartment}</div>
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


                    
                </div>
            </div>
        </>
    )
}
export default Queue2