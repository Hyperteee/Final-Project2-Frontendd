import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import React from "react";
import "./Queue1.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import hospitalMap from "../../data/hospitaldata.jsx/allhospitaldata";

function Queue1() {
  const { state } = useLocation();
  const { selectedHospital } = state || {};
  const [department, setDepartment] = useState(null);
  const [show, setShow] = useState(false);
  const [chooseDoctor, setChooseDoctor] = useState(null);
  const [departmentName, setDepartmentName] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  // ใช้ Optional Chaining ป้องกัน Error กรณีไม่มีข้อมูล
  const hospitalData = hospitalMap[selectedHospital]?.info || null;

  function handleNext(department, chooseDoctor, selectedHospital) {
    // หากเลือก "ไม่รู้แผนก" หรือเลือกแผนกแล้วและเลือก "ไม่เลือกแพทย์" ให้ข้ามไป Queue3 เลย
    if (department === "ไม่รู้แผนก" || chooseDoctor === "dontChoose") {
      // ✅ "ไม่รู้แผนก" หรือ "ไม่เลือกแพทย์" จะข้ามไปหน้าเลือกวันนัดทันที
      navigate("/queue3", {
        state: {
          selectedHospital,
          selectedDoctor: null,
          selectedDepartment: department,
          departmentName,
        },
      });
    } else if (chooseDoctor === "choose") {
      // ✅ เลือกแพทย์ ให้ไปหน้า Queue2
      navigate("/queue2", {
        state: {
          selectedDepartment: department,
          optionChooseDoctor: chooseDoctor,
          selectedHospital,
          departmentName,
        },
      });
    }
  }

  // --- Stepper Configuration ---
  const steps = [
    { id: 1, label: "เลือกแผนก" },
    { id: 2, label: "เลือกแพทย์" },
    { id: 3, label: "เลือกวันนัด" },
    { id: 4, label: "กรอกอาการ" },
  ];
  const currentStep = 1;
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
        <div
          className="fs-4 text-center "
          style={{ maxWidth: "600px", width: "100%", marginTop: "85px" }}
        >
          <div className="fw-bold fs-3 mb-2" style={{ color: "black" }}>
            ทำนัด
          </div>

          <div className="d-flex justify-content-center mb-4">
            <div
              className="bg-primary-subtle rounded-2 px-3 py-2 fw-semibold"
              style={{ color: "#11248f" }}
            >
              โรงพยาบาล{selectedHospital}
            </div>
          </div>

          {/* Stepper Section */}
          <div className="d-flex justify-content-center align-items-start px-3 mb-4">
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
        </div>

        <div
          className="d-flex flex-column align-items-center w-100 px-4"
          style={{ maxWidth: "900px" }}
        >
          <div className="zone-option d-flex flex-column mb-5 w-100">
            <div className="fw-bold mb-4 fs-5" style={{ color: "#001E6C" }}>
              1. เลือกศูนย์การรักษา/แผนก
            </div>
            <div className="d-flex justify-content-center gap-4 w-100">
              {/* เลือกศูนย์การรักษา/แผนกเฉพาะทาง */}
              <div
                className={`option ${
                  department !== null && department !== "ไม่รู้แผนก"
                    ? "option-active"
                    : ""
                }`}
                onClick={handleShow}
              >
                <i
                  className="bi bi-hospital fs-3 me-3"
                  style={{ color: "#001E6C" }}
                ></i>
                <div className="d-flex p-5 flex-column align-items-start">
                  <span className="fw-bold">
                    เลือกศูนย์การรักษา/แผนกเฉพาะทาง
                  </span>
                  {departmentName && department !== "ไม่รู้แผนก" ? (
                    <span className="small text-success">
                      เลือกแล้ว: {departmentName}
                    </span>
                  ) : (
                    <span className="small text-muted">
                      คลิกเพื่อเลือกจากรายชื่อแผนกทั้งหมด
                    </span>
                  )}
                </div>
              </div>

              {/* ไม่รู้แผนก */}
              <div
                className={`option ${
                  department === "ไม่รู้แผนก" ? "option-active" : ""
                }`}
                onClick={() => {
                  setDepartment("ไม่รู้แผนก");
                  setDepartmentName("ไม่รู้แผนก");
                  setChooseDoctor("dontChoose");
                }}
              >
                <i
                  className="bi bi-question-circle-fill fs-3 me-3"
                  style={{ color: "#001E6C" }}
                ></i>
                <div className="d-flex flex-column align-items-start ">
                  <span className="fw-bold">
                    ไม่รู้แผนก/ต้องการให้แพทย์คัดกรอง
                  </span>
                  <span className="small text-muted">
                    ระบบจะส่งไปยังแพทย์เวรเพื่อคัดกรองอาการ (ข้ามการเลือกแพทย์)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {department && department !== "ไม่รู้แผนก" && (
            <div className="zone-option d-flex flex-column mb-5 w-100">
              <div className="fw-bold mb-3 fs-5" style={{ color: "#001E6C" }}>
                2. ต้องการเลือกแพทย์เฉพาะเจาะจงหรือไม่
              </div>
              <div className="d-flex justify-content-center gap-4 w-100">
                {/* เลือกแพทย์เฉพาะทาง */}
                <div
                  className={`option ${
                    chooseDoctor === "choose" ? "option-active" : ""
                  }`}
                  onClick={() => setChooseDoctor("choose")}
                >
                  <i
                    className="bi bi-person-fill fs-3 me-3"
                    style={{ color: "#001E6C" }}
                  ></i>
                  <div className="d-flex flex-column align-items-start">
                    <span className="fw-bold">เลือกแพทย์เฉพาะทาง</span>
                    <span className="small text-muted">
                      นัดแพทย์ตามชื่อหรือความเชี่ยวชาญ
                    </span>
                  </div>
                </div>

                {/* ไม่เลือกแพทย์ */}
                <div
                  className={`option ${
                    chooseDoctor === "dontChoose" ? "option-active" : ""
                  }`}
                  onClick={() => setChooseDoctor("dontChoose")}
                >
                  <i
                    className="bi bi-people-fill fs-3 me-3"
                    style={{ color: "#001E6C" }}
                  ></i>
                  <div className="d-flex flex-column align-items-start">
                    <span className="fw-bold">
                      ไม่เลือกแพทย์ (แพทย์เวร/แผนกทั่วไป)
                    </span>
                    <span className="small text-muted">
                      ระบบจะเลือกแพทย์ที่มีตารางว่างให้
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Modal เลือกแผนก */}
          <Modal
            className="department-modal"
            size="lg"
            show={show}
            onHide={handleClose}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title className="fw-bold modal-title">
                เลือกแผนกที่ต้องการรักษา
              </Modal.Title>
            </Modal.Header>

            <Modal.Body className="modal-body department-grid-container">
              {" "}
              {/* เปลี่ยนชื่อคลาสเพื่อให้แยกสไตล์ได้ชัดเจน */}
              {/* เพิ่มข้อความแนะนำ เพื่อให้ UX ดีขึ้น */}
              <p className="text-center text-muted mb-4 department-instruction">
                กรุณาเลือกแผนกที่ตรงกับอาการของท่าน เพื่อดำเนินการขั้นตอนถัดไป
              </p>
              <div className="department-grid-list">
                {hospitalData?.departments
                  ?.filter((dep) => dep.name !== "ไม่รู้แผนก")
                  ?.map((dep) => (
                    <div
                      key={dep.id}
                      className="option-department"
                      onClick={() => {
                        setDepartment(dep.id);
                        setDepartmentName(dep.name);
                        setChooseDoctor(null); // Reset ตัวเลือกแพทย์เมื่อเลือกแผนกใหม่
                        handleClose();
                      }}
                    >
                      {/* ปรับขนาด Icon ให้ดูเด่นขึ้น */}
                      {dep.logo ? (
                        <img src={dep.logo} alt={`Icon for ${dep.name}`} />
                      ) : (
                        // Fallback icon กรณีไม่มีโลโก้ (ใช้ Bootstrap Icon)
                        <div className="default-icon-placeholder">
                          <i
                            className="bi bi-hospital fs-1"
                            style={{ color: "#001E6C" }}
                          ></i>
                        </div>
                      )}
                      <span className="fw-semibold">{dep.name}</span>
                    </div>
                  ))}
              </div>
            </Modal.Body>
          </Modal>
        </div>

        <div
          className="d-flex justify-content-end w-100 px-4"
          style={{ maxWidth: "900px" }}
        >
          <Button
            className="nextButton px-5 py-2 rounded-pill fw-bold shadow-lg"
            style={{ backgroundColor: "#001E6C", border: "none" }}
            onClick={() =>
              handleNext(department, chooseDoctor, selectedHospital)
            }
            // ปุ่ม Disabled เมื่อยังไม่เลือกแผนก หรือเลือกแผนกแล้วแต่ยังไม่เลือกแพทย์
            disabled={
              department === null ||
              (department !== "ไม่รู้แผนก" && chooseDoctor === null)
            }
          >
            <span>ต่อไป </span>
            <i className="bi bi-arrow-right ms-2"></i>
          </Button>
        </div>
      </div>

        <footer class="row row-cols-5 py-5 my-5 border-top text-white">
          <div class="col">
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-dark text-decoration-none " 
            >
              <svg class="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap" />
              </svg>
            </a>
            <p class="text-muted text-white">&copy; 2021</p>
          </div>

          <div class="col"></div>

          <div class="col">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>
        </footer>
    </div>
  );
}

export default Queue1;
