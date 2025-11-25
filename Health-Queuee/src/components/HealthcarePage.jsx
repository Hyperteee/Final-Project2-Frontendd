import { useEffect, useRef, useState, useMemo } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

import stateData from "../data/liststate";
import hospitalData from "../data/listhospital";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTopDoctors } from "../utils/doctorUtils";
import { getDoctorAvatarPath } from "../utils/doctorUtils";
export default function HealthcarePage() {
  const [currentOrgSlide, setCurrentOrgSlide] = useState(0);
  const [currentPackageSlide, setCurrentPackageSlide] = useState(0);
  const [letterSearch, setLetterSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const searchSection = useRef(null);
  const navigate = useNavigate();
  const hospitalThai = "โรงพยาบาล";

  const doctors = [
    { id: 1, name: "นพ. สมชาย ใจดี", specialty: "อายุรแพทย์" },
    { id: 2, name: "พญ. สมหญิง รักษา", specialty: "กุมารแพทย์" },
    { id: 3, name: "นพ. วิชัย สุขภาพ", specialty: "ศัลยแพทย์" },
    { id: 4, name: "พญ. นิภา ดูแล", specialty: "สูติ-นรีแพทย์" },
  ];

  const packages = [
    { id: 1, title: "แพ็กเกจตรวจสุขภาพทั่วไป", category: "ตรวจสุขภาพ" },
    { id: 2, title: "แพ็กเกจดูแลผิวพรรณ", category: "ความงาม" },
    { id: 3, title: "วัคซีนป้องกันโรค", category: "วัคซีน" },
    { id: 4, title: "ตรวจสุขภาพผู้สูงอายุ", category: "ตรวจสุขภาพ" },
    { id: 5, title: "แพ็กเกจลดน้ำหนัก", category: "ความงาม" },
    { id: 6, title: "วัคซีนไข้หวัดใหญ่", category: "วัคซีน" },
  ];

  const filteredStates = stateData.filter((state) =>
    state.toLowerCase().includes(letterSearch.toLowerCase())
  );

  const filteredHospitals = hospitalData.filter(
    (hospital) =>
      hospital.name.toLowerCase().includes(letterSearch.toLowerCase()) ||
      hospitalThai.includes(letterSearch)
  );

  function handleSelect(state) {
    setSelectedState(state);
    console.log(state);
    navigate("/hospitals", {
      state: { selectedstate: state, showDropdown: false },
    });
  }

  function handleHospital(hospital) {
    setSelectedHospital(hospital.name);
    navigate("/queue1", {
      state: { selectedHospital: hospital.name, showDropdown: false },
    });
  }

  useEffect(() => {
    function closedropdown(event) {
      if (
        searchSection.current &&
        !searchSection.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", closedropdown);
    return () => {
      document.removeEventListener("mousedown", closedropdown);
    };
  }, []);

  const NAVY_BLUE = "#004080";

  const DOCTORS_PER_SLIDE = 4;
  const allDoctors = useMemo(() => getTopDoctors(12), []);
  const totalSlides = Math.ceil(allDoctors.length / DOCTORS_PER_SLIDE);
  const currentDoctors = allDoctors.slice(
  currentOrgSlide * DOCTORS_PER_SLIDE,
  (currentOrgSlide + 1) * DOCTORS_PER_SLIDE
  );

  return (
    <>
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <header
          className="py-3 shadow-lg sticky-top"
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

        <section
          className="position-relative py-5"
          style={{
            background: "linear-gradient(180deg, #020A1B 0%, #000000 100%)",
            minHeight: "500px",
          }}
        >
          <div className="container py-5">
            <div className="row align-items-center">
              {/* ===== Left Text ===== */}
              <div className="col-lg-5 mb-5 mb-lg-0">
                <h2 className="Headtext display-4 fw-bold mb-4 text-white">
                  Health
                  <br />
                  <span className="SecHead text-primary">Queue</span>
                </h2>

                <p className="textPro text-white mb-4 lh-lg">
                  พร้อมระบบแชทบอทประเมินอาการ เบื้องต้น
                </p>
              </div>

              {/* ===== Right Image ===== */}
              <div className="picphone col-lg-6 text-center">
                <img
                  src="./images/PhoneHQ.png"
                  alt="Phone Mockup"
                  className="img-fluid phone-hero"
                />
              </div>
            </div>

            {/* ===== Hospital Search Bar ===== */}
            <div className="search-row">
              <div className="search-col">
                <div ref={searchSection} className="search-wrapper">
                  <div className="search-input-container">
                    {/* search-icon ถูกปรับปรุงใน Home.css ให้ดูเรียบหรู */}
                    <i className="bi bi-search search-icon"></i>
                    <input
                      type="text"
                      placeholder="ค้นหาจากชื่อโรงพยาบาล หรือ จังหวัด"
                      className="search-input"
                      onFocus={() => setShowDropdown(true)}
                      onChange={(e) => setLetterSearch(e.target.value)}
                      value={letterSearch}
                    />
                    {/* ใช้ Deep Navy Blue สำหรับปุ่ม */}
                    <Button
                      style={{
                        backgroundColor: NAVY_BLUE,
                        borderColor: NAVY_BLUE,
                        color: "white",
                        // ปรับให้ปุ่มดูทันสมัยขึ้นเล็กน้อย
                        borderRadius: "0 12px 12px 0",
                      }}
                      onClick={() => handleSelect(letterSearch)}
                    >
                      ค้นหา
                    </Button>
                  </div>
                  {showDropdown && (
                    <ul className="search-dropdown">
                      {letterSearch ? (
                        <>
                          {filteredHospitals.length > 0 &&
                            filteredHospitals.map((hospital, index) => {
                              const name = hospital.name;
                              const search = letterSearch.toLowerCase();
                              const startIndex = name
                                .toLowerCase()
                                .indexOf(search);

                              let before = name;
                              let match = "";
                              let after = "";
                              if (startIndex !== -1) {
                                before = name.slice(0, startIndex);
                                match = name.slice(
                                  startIndex,
                                  startIndex + search.length
                                );
                                after = name.slice(startIndex + search.length);
                              }

                              return (
                                <li
                                  key={`hospital-${index}`}
                                  onClick={() => handleHospital(hospital)}
                                  className="dropdown-item"
                                >
                                  โรงพยาบาล{before}
                                  {match && (
                                    <span className="highlight">{match}</span>
                                  )}
                                  {after}{" "}
                                  <span className="state-text">
                                    ({hospital.state})
                                  </span>
                                </li>
                              );
                            })}
                          {filteredStates.map((state, index) => {
                            const search = letterSearch.toLowerCase();
                            const startIndex = state
                              .toLowerCase()
                              .indexOf(search);

                            let before = state;
                            let match = "";
                            let after = "";
                            if (startIndex !== -1) {
                              before = state.slice(0, startIndex);
                              match = state.slice(
                                startIndex,
                                startIndex + search.length
                              );
                              after = state.slice(startIndex + search.length);
                            }

                            return (
                              <li
                                key={`state-${index}`}
                                onClick={() => handleSelect(state)}
                                className="dropdown-item"
                              >
                                {before}
                                {match && (
                                  <span className="highlight">{match}</span>
                                )}
                                {after}
                              </li>
                            );
                          })}
                        </>
                      ) : (
                        filteredStates.map((state, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              handleSelect(state), setSelectedState(state);
                            }}
                            className="dropdown-item"
                          >
                            {state}
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button className="btn btn-primary btn-lg px-5 py-3 shadow mx-2">
                เริ่มสนทนา
              </button>
              <button className="btn btn-primary btn-lg px-5 py-3 shadow mx-2">
                เริ่มสนทนา
              </button>
              <button className="btn btn-primary btn-lg px-5 py-3 shadow mx-2">
                เริ่มสนทนา
              </button>
            </div>
          </div>
          <div
            className="position-absolute rounded-circle"
            aria-hidden="true"
            style={{
              top: "80px",
              left: "40px",
              width: "80px",
              height: "80px",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          ></div>
          <div
            className="position-absolute rounded-circle"
            aria-hidden="true"
            style={{
              bottom: "80px",
              right: "40px",
              width: "128px",
              height: "128px",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          ></div>
        </section>
      </div>

      <svg viewBox="0 0 100 15" preserveAspectRatio="none" className="bl_g0">
        <ellipse
          cx="50"
          cy="-5"
          fill="var(--rich-black, #000000)"
          rx="100"
          ry="15"
        ></ellipse>
      </svg>

      <section
        id="doctors"
        className=""
        style={{
          background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)",
        }}
      >
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-end mb-5">
            <div>
              <h2 className="display-5 fw-bold mb-2">แพทย์ยอดนิยม</h2>
              <div
                style={{
                  height: "4px",
                  width: "80px",
                  backgroundColor: "#2563eb",
                  borderRadius: "2px",
                }}
              ></div>
            </div>
            <button
              onClick={() => navigate("/doctors")}
              className="btn btn-link text-primary text-decoration-none fw-medium"
            >
              ดูทั้งหมด
            </button>
          </div>

          <div className="row g-4 mb-4">
            {currentDoctors.map((doctor) => {
              const avatarPath = getDoctorAvatarPath(doctor.name);
              const avatarSrc = avatarPath ? resolveAssetPath(avatarPath) : "";
              const avatarClassName = `rounded-4 mb-3 d-flex align-items-center justify-content-center overflow-hidden${avatarSrc ? "" : " bg-light"}`;
              return (
              <div key={doctor.id} className="col-sm-6 col-lg-3">
                <div
                  className="card border rounded-4 h-100 shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 8px rgba(0,0,0,0.1)";
                  }}
                >
                  <div className="card-body p-4">
                    <div
                      className={avatarClassName}
                      style={{
                        width: "100%",
                        aspectRatio: "1",
                        background: avatarSrc
                          ? "transparent"
                          : "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
                      }}
                    >
                      {avatarSrc ? (
                        <img
                          src={avatarSrc}
                          alt={doctor.name || "Doctor avatar"}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      ) : (
                        <span className="fw-semibold text-primary" style={{ fontSize: "32px" }}>
                          {getInitials(doctor.name)}
                        </span>
                      )}
                    </div>
                    <div className="text-center">
                      <h5 className="fw-bold mb-1">{doctor.name}</h5>
                      <p className="text-primary small fw-medium mb-3">
                        {doctor.specialization}
                      </p>
                      <button className="btn btn-primary w-100 rounded-3">
                        นัดหมาย
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>

          <div className="d-flex gap-3 justify-content-center">
            <button
              onClick={handlePrevDoctors}
              className="btn btn-outline-secondary rounded-circle"
              style={{ width: "48px", height: "48px" }}
              aria-label="หมอป่หน้า"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNextDoctors}
              className="btn btn-outline-secondary rounded-circle"
              style={{ width: "48px", height: "48px" }}
              aria-label="ถัดไป"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "120px",
        }}
      >
        <path
          fill="url(#waveGradient)"
          fillOpacity="1"
          d="M0,160L48,154.7C96,149,192,139,288,122.7C384,107,480,85,576,85.3C672,85,768,107,864,133.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14b8c4" />
            <stop offset="100%" stopColor="#14B8C4" />
          </linearGradient>
        </defs>
      </svg>

      <section
        id="packages"
        className="py-5"
        style={{
          background:
            "linear-gradient(to bottom, #14B8C4 0%, #0F4CA3 40%, #001B45 75%, #000000 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container py-4">
          <div className="mb-5">
            <h2 className="display-5 fw-bold text-white mb-2">
              แพ็กเกจ <span style={{ color: "#001B45" }}>และโปรโมชั่น</span>
            </h2>
            <div
              style={{
                height: "4px",
                width: "80px",
                backgroundColor: "#001B45",
                borderRadius: "2px",
              }}
            ></div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <label className="form-label text-white fw-medium">
                เลือกประเภท
              </label>
              <select className="form-select form-select-lg rounded-3">
                <option>ทั้งหมด</option>
                <option>ตรวจสุขภาพ</option>
                <option>ความงาม</option>
                <option>วัคซีน</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label text-white fw-medium">ค้นหา</label>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-white border-0">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control border-0 rounded-end"
                  placeholder="ค้นหาแพ็กเกจ..."
                />
              </div>
            </div>
          </div>

          <div className="row g-4 mb-4">
            {packages.map((pkg) => (
              <div key={pkg.id} className="col-md-6 col-lg-4">
                <div
                  className="card border-0 rounded-4 h-100 overflow-hidden"
                  style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 32px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      height: "192px",
                      background:
                        "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <svg
                      width="80"
                      height="80"
                      fill="none"
                      stroke="#60a5fa"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="card-body p-4">
                    <span className="badge bg-primary bg-opacity-10 text-primary mb-3">
                      {pkg.category}
                    </span>
                    <h5 className="fw-bold mb-4">{pkg.title}</h5>
                    <div className="d-flex gap-2">
                      <button className="btn btn-light flex-fill">
                        รายละเอียด
                      </button>
                      <button className="btn btn-primary flex-fill">
                        จองเลย
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex gap-3 justify-content-center">
            <button
              onClick={() =>
                setCurrentPackageSlide(Math.max(0, currentPackageSlide - 1))
              }
              className="btn rounded-circle"
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
              }}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => setCurrentPackageSlide(currentPackageSlide + 1)}
              className="btn rounded-circle"
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
              }}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <div>
        <footer
          id="contact"
          className="custom-footer py-5"
          style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
        >
          <div className="row mb-5 ms-5 me-5">
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <div className="d-flex align-items-center mb-4">
                <span className="h3 fw-bold text-white mb-0">HFU</span>
              </div>
              <p className="text-light small opacity-75 mb-4">
                Health Queue Management System
              </p>

              <h5 className="fw-bold fs-5 mb-3">Contact</h5>
              <ul className="list-unstyled small contact-list">
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-geo-alt-fill"></i>
                  <p className="mb-0">
                    123 Bangkhen, Sripatum, Bangkok, Thailand 10110
                  </p>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-telephone-fill"></i>
                  <a href="tel:+6621234567">(66) 9 999 9999</a>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-envelope-fill"></i>
                  <a href="mailto:support@hfu.co">support@hfu.co.th</a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <h4 className="fw-bold fs-5 mb-4">Products</h4>
              <ul className="list-unstyled space-y-3">
                <li>
                  <a href="#">Queue Management</a>
                </li>
                <li>
                  <a href="#">Appointment System</a>
                </li>
                <li>
                  <a href="#">Analytics Dashboard</a>
                </li>
                <li>
                  <a href="#">Mobile App</a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <h4 className="fw-bold fs-5 mb-4">Company</h4>
              <ul className="list-unstyled space-y-3">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog & News</a>
                </li>
                <li>
                  <a href="#">Our Vision</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 col-lg-4 mt-4 mt-md-0">
              <h4 className="fw-bold fs-5 mb-4">Support & Legal</h4>
              <ul className="list-unstyled space-y-3">
                <li>
                  <a href="#">Help Center (FAQ)</a>
                </li>
                <li>
                  <a href="#">API Documentation</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-top border-secondary-subtle pt-4 mt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="text-light opacity-50 small mb-3 mb-md-0">
              &copy; 2025 HFU Healthcare Technologies. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
