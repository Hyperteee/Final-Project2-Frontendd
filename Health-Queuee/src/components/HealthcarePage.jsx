import { useEffect, useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

import stateData from "../data/liststate";
import hospitalData from "../data/listhospital";

import "bootstrap/dist/css/bootstrap.min.css";
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
    navigate("/hospitals", { state: { selectedState: state, showDropdown: false } });
  }

  function handleHospital(hospital) {
    setSelectedHospital(hospital.name);
    navigate("/queue1", { state: { selectedHospital: hospital.name, showDropdown: false } });
  }

  useEffect(() => {
    function closedropdown(event) {
      if (searchSection.current && !searchSection.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", closedropdown);
    return () => {
      document.removeEventListener("mousedown", closedropdown);
    };
  }, []);

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
              <a href="#services" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                บริการ
              </a>
              <a href="#doctors" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                แพทย์
              </a>
              <a href="#packages" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                แพ็กเกจ
              </a>
              <a href="#contact" className="text-light text-decoration-none opacity-75 hover-opacity-100">
                ติดต่อ
              </a>
            </nav>

            <button className="btn btn-primary px-4 py-2 fw-semibold">เข้าสู่ระบบ</button>
          </div>
        </header>

        <section
          className="position-relative py-5"
          style={{ background: "linear-gradient(180deg, #020A1B 0%, #000000 100%)", minHeight: "500px" }}
        >
          <div className="container py-5">
            <Carousel className="rounded-4 overflow-hidden mb-5">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/smart-healthcare-dashboard.png"
                  alt="สไลด์ 1"
                  style={{ height: "500px", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/col2.jpg"
                  alt="สไลด์ 2"
                  style={{ height: "500px", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/BG-Hospital.jpg"
                  alt="สไลด์ 3"
                  style={{ height: "500px", objectFit: "cover" }}
                />
              </Carousel.Item>
            </Carousel>

            {/* ===== Hospital Search Bar ===== */}
            <div className="row justify-content-center mt-4">
              <div className="col-lg-8">
                <div ref={searchSection} className="d-flex border border-primary rounded-3" style={{ width: "100%", boxSizing: "border-box" }}>
                  <i
                    className="bi bi-search"
                    style={{
                      padding: "10px",
                      background: "dodgerblue",
                      color: "white",
                      minWidth: "50px",
                      textAlign: "center",
                    }}
                  ></i>
                  <input
                    type="text"
                    placeholder="ค้นหาจากชื่อโรงพยาบาล หรือ จังหวัด"
                    name="hospital"
                    onFocus={() => setShowDropdown(true)}
                    onChange={(e) => setLetterSearch(e.target.value)}
                    value={letterSearch}
                    style={{ width: "100%", padding: "10px", outline: "none" }}
                    className="form-control"
                  />
                  <Button variant="primary" onClick={() => handleSelect(letterSearch)}>
                    ค้นหา
                  </Button>
                </div>

                {showDropdown && (
                  <ul className="bg-white border border-gray-300 mt-2 rounded-xl max-h-48 overflow-y-auto shadow-lg text-left">
                    {letterSearch
                      ? filteredHospitals.map((hospital, index) => {
                        const name = hospital.name;
                        const search = letterSearch.toLowerCase();
                        const startIndex = name.toLowerCase().indexOf(search);
                        let before = name;
                        let match = "";
                        let after = "";
                        if (startIndex !== -1) {
                          before = name.slice(0, startIndex);
                          match = name.slice(startIndex, startIndex + search.length);
                          after = name.slice(startIndex + search.length);
                        }
                        return (
                          <li
                            key={`hospital-${index}`}
                            onClick={() => handleHospital(hospital)}
                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                          >
                            โรงพยาบาล{before}
                            {match && <span className="!text-blue-500 !font-bold">{match}</span>}
                            {after} <span className="!text-gray-500">({hospital.state})</span>
                          </li>

                        );
                      })
                      : filteredStates.map((state, index) => (
                        <li
                          key={`state-${index}`}
                          onClick={() => handleSelect(state)}
                          className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                        >
                          {state}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
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

          <div className="container mt-5" >
            {/* Trusted by */}
            <div className="text-center mt-5">
              <h3 className="h2 fw-bold text-white mb-4">
                Trusted by teams at
              </h3>
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
                <img
                  src="./images/Hos-Chula.svg"
                  alt="Chula"
                  width="180"
                  height="160"
                  loading="lazy"
                />
                <img
                  src="./images/Hos-Paolo.png"
                  alt="Paolo"
                  width="180"
                  height="160"
                  loading="lazy"
                />
                <img
                  src="./images/Hos-Bangkok.png"
                  alt="Bangkok"
                  width="180"
                  height="160"
                  loading="lazy"
                />
                <img
                  src="./images/Hos-Phyathai.png"
                  alt="Phyathai"
                  width="180"
                  height="160"
                  loading="lazy"
                />
                <img
                  src="./images/hos-samitivej.png"
                  alt="Samitivej"
                  width="180"
                  height="160"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="row g-5 align-items-center mt-5">
              <div className="col-lg-6">
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">
                  AI Assistant
                </span>
                <h2 className="display-4 fw-bold mb-4 text-white">
                  Chat Bot
                  <br />
                  <span className="text-primary">Doctor</span>
                </h2>
                <p className="fs-5 text-white mb-4 lh-lg">
                  ปรึกษาอาการเบื้องต้นกับแชทบอทอัจฉริยะ
                  รับคำแนะนำด้านสุขภาพก่อนพบแพทย์ พร้อมบริการตลอด 24 ชั่วโมง
                </p>
                <button className="btn btn-primary btn-lg px-5 py-3 shadow">
                  เริ่มสนทนา
                </button>
              </div>

              <div className="col-lg-6"></div>
            </div>
          </div>
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
            <a
              href="#"
              className="btn btn-link text-primary text-decoration-none fw-medium"
            >
              ดูทั้งหมด
            </a>
          </div>

          <div className="row g-4 mb-4">
            {doctors.map((doctor) => (
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
                      className="rounded-4 mb-3 d-flex align-items-center justify-content-center overflow-hidden"
                      style={{
                        width: "100%",
                        aspectRatio: "1",
                        background:
                          "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
                      }}
                    >
                      <svg
                        width="80"
                        height="80"
                        fill="none"
                        stroke="#93c5fd"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div className="text-center">
                      <h5 className="fw-bold mb-1">{doctor.name}</h5>
                      <p className="text-primary small fw-medium mb-3">
                        {doctor.specialty}
                      </p>
                      <button className="btn btn-primary w-100 rounded-3">
                        นัดหมาย
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
                setCurrentOrgSlide(Math.max(0, currentOrgSlide - 1))
              }
              className="btn btn-outline-secondary rounded-circle"
              style={{ width: "48px", height: "48px" }}
              aria-label="ก่อนหน้า"
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
              onClick={() => setCurrentOrgSlide(currentOrgSlide + 1)}
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

      <div class="container">
        <footer class="row row-cols-5 py-5 my-5 border-top">
          <div class="col">
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <svg class="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap" />
              </svg>
            </a>
            <p class="text-muted">&copy; 2021</p>
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

    </>
  );
}
