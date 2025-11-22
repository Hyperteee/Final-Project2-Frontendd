import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import React from "react";
import hospitalMap from "../../data/hospitaldata.jsx/allhospitaldata";
import "./Queue2.css";
import Button from "react-bootstrap/esm/Button";

function Queue2() {
  const { state } = useLocation();
  const { selectedHospital, selectedDepartment, optionChooseDoctor } =
    state || {};
  const hospitalData = hospitalMap[selectedHospital]?.info || null;
  const navigate = useNavigate();

  const departmentData = hospitalData?.departments.find(
    (dep) => dep.id === selectedDepartment
  );

  function handleBook(selectedHospital, selectedDoctor, selectedDepartment) {
    // ดึงชื่อแผนกที่ถูกส่งมาด้วย
    const departmentName = departmentData?.name;

    // ค้นหาชื่อแพทย์
    const doctor = departmentData?.doctors.find(
      (doc) => doc.id === selectedDoctor
    );
    const doctorName = doctor?.name;

    navigate("/queue3", {
      state: {
        selectedHospital,
        selectedDoctor,
        selectedDepartment,
        departmentName,
        doctorName,
      },
    });
  }

  // --- Stepper Config ---
  const steps = [
    { id: 1, label: "เลือกแผนก" },
    { id: 2, label: "เลือกแพทย์" },
    { id: 3, label: "เลือกวันนัด" },
    { id: 4, label: "กรอกอาการ" },
  ];
  const currentStep = 2;
  const isStepActive = (stepNumber) => stepNumber <= currentStep;

  return (
    <div>
      <header
        className="py-3 shadow-lg"
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

      <div className="d-flex flex-column align-items-center bg-light min-vh-100 pb-5">
        {/* Header Section */}
        <div
          className="mt-5 fs-4 text-center w-100"
          style={{ maxWidth: "800px" }}
        >
          <div
            className="fw-bold fs-3 mb-2"
            style={{ color: "black", marginTop: "55px" }}
          >
            ทำนัด
          </div>

          <div className="d-flex justify-content-center gap-3 mb-4">
            <div
              className="bg-primary-subtle rounded-2 px-3 py-2 fw-semibold"
              style={{ color: "#001E6C" }}
            >
              โรงพยาบาล{selectedHospital}
            </div>
            <div
              className="bg-primary-subtle rounded-2 px-2 py-2 fw-semibold"
              style={{ color: "#001E6C" }}
            >
              แผนก{departmentData?.name}
            </div>
          </div>

          {/* Stepper Section */}
          <div
            className="d-flex justify-content-center align-items-start px-3 mb-4 mx-auto"
            style={{ maxWidth: "600px", width: "100%" }}
          >
            {steps.map((step, index) => {
              const active = isStepActive(step.id);
              return (
                <React.Fragment key={step.id}>
                  <div
                    className="d-flex flex-column align-items-center"
                    style={{ zIndex: 2, minWidth: "80px" }}
                  >
                    <div
                      className={`step ${
                        active ? "step-active" : "step-inactive"
                      }`}
                    >
                      {step.id}
                    </div>
                    <span
                      className="mt-2 small text-nowrap"
                      style={{
                        color: active ? "#001E6C" : "#9ca3af",
                        fontWeight: active ? "bold" : "normal",
                        fontSize: "14px",
                      }}
                    >
                      {step.label}
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      style={{
                        flexGrow: 1,
                        minWidth: "20px",
                        height: "2px",
                        backgroundColor: isStepActive(steps[index + 1].id)
                          ? "#001E6C"
                          : "#e5e7eb",
                        marginTop: "19px",
                        alignSelf: "flex-start",
                      }}
                    ></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <h4 className="fw-bold mb-4" style={{ color: "#001E6C" }}>
            เลือกแพทย์ที่ต้องการนัดหมาย
          </h4>
        </div>

        {/* Doctor Selection Section */}
        <div
          className="doctor-results-panel"
          style={{ width: "100%", maxWidth: "900px", padding: "0 15px" }}
        >
          <div className="row g-4">
            {departmentData?.doctors.map((doctor) => {
              return (
                <div className="col-md-6" key={doctor.id}>
                  <div className="card border-0 shadow-sm rounded-4 position-relative h-100 doctor-card">
                    <div className="card-body text-center pt-4 pb-4 d-flex flex-column align-items-center doctor-card__body">
                      <div className="doctor-card__avatar">
                        <i className="bi bi-person-fill fs-2"></i>
                      </div>
                      <p className="fw-semibold mt-3 mb-1 text-truncate w-100">
                        {doctor.name || "Unnamed doctor"}
                      </p>
                      <p className="small mb-1 doctor-card__subtitle">
                        {doctor.department}
                      </p>
                      {doctor.specialization && (
                        <p className="small text-secondary mb-3">
                          {doctor.specialization}
                        </p>
                      )}
                      <div className="d-grid gap-2 w-100 mt-auto doctor-card__actions">
                        <button
                          className="btn btn-primary rounded-pill py-2"
                          style={{ backgroundColor: "#001E6C", border: "none" }}
                          onClick={() => {
                            handleBook(
                              selectedHospital,
                              doctor.id,
                              selectedDepartment
                            );
                          }}
                        >
                          นัดหมาย
                        </button>
                        <button className="btn btn-outline-secondary rounded-pill py-2">
                          รายละเอียด
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* แก้ไขปุ่มย้อนกลับให้เป็น Outline Primary และมี Icon */}
        <div className="mt-5">
          <Button
            variant="outline-primary"
            className="rounded-pill px-4 py-2 fw-bold"
            style={{ borderColor: "#001E6C", color: "#001E6C" }}
            onClick={() => navigate(-1)}
          >
            <i className="bi bi-arrow-left me-2"></i>
            ย้อนกลับ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Queue2;
