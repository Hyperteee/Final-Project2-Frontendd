import React from "react";

export default function HospitalSearch() {
  return (
    <div>
      {/* Hero Section */}
      <section
  className="position-relative mx-3 mt-3 overflow-hidden"
  style={{
    backgroundImage: "url('./images/BG-Mainpage.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "2rem",
  }}
>
  <div className="container-fluid px-5 py-5">
    <div className="row align-items-center" style={{ minHeight: "500px" }}>
      {/* Left Content */}
      <div className="col-6">{/* add เนื้อหา */}</div>

      {/* Right Content */}
      <div className="col-6 d-flex align-items-center justify-content-center">
        {/* add เนื้อหา */}
      </div>
    </div>
  </div>


  <div
    className="position-absolute start-50 translate-middle-x"
    style={{
      bottom: "20px",
      width: "80%",
      maxWidth: "600px",
      zIndex: 20,
    }}
  >
    <div className="bg-white rounded-pill shadow-lg px-4 py-3 d-flex align-items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-secondary me-2"
        viewBox="0 0 24 24"
      >
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        placeholder="ค้นหา"
        className="form-control border-0 shadow-none flex-grow-1"
      />
      <button
        className="btn text-white rounded-pill px-3"
        style={{ backgroundColor: "#000066" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M14 5l7 7-7 7M21 12H3" />
        </svg>
      </button>
    </div>
  </div>
</section>



      {/* Service Cards Section */}
      <section className="container-fluid px-3 py-4">
        <div className="row g-3">
          {/* Instant Video Consultation Card */}
          <div className="col-3">
            <div
              className="position-relative overflow-hidden d-flex flex-column justify-content-between p-4"
              style={{
                background: "linear-gradient(135deg, #f4e87c 0%, #e8d84f 100%)",
                borderRadius: "2rem",
                minHeight: "320px",
              }}
            >
              <div className="position-relative" style={{ zIndex: 10 }}>
                <h3 className="fs-4 fw-bold mb-2" style={{ color: "#2d3561" }}>
                  Instant Video
                  <br />
                  Consultation
                </h3>
                <p className="small mb-4" style={{ color: "#2d3561" }}>
                  Connect within 60 secs
                </p>
              </div>

              <div
                className="position-absolute"
                style={{ bottom: "4rem", right: "2rem", opacity: 0.2 }}
              >
                <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                  <rect
                    x="20"
                    y="30"
                    width="60"
                    height="40"
                    rx="4"
                    stroke="#2d3561"
                    strokeWidth="3"
                  />
                  <path
                    d="M35 45 L35 55 M45 45 L45 55"
                    stroke="#2d3561"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="65"
                    cy="50"
                    r="8"
                    stroke="#2d3561"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              <button
                className="btn rounded-circle d-flex align-items-center justify-content-center position-relative"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#2d3561",
                  zIndex: 10,
                }}
              >
                <svg
                  className="text-white"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Find Doctors Card */}
          <div className="col-3">
            <div
              className="position-relative overflow-hidden d-flex flex-column justify-content-between p-4"
              style={{
                background: "linear-gradient(135deg, #a8dcc5 0%, #7ecaa8 100%)",
                borderRadius: "2rem",
                minHeight: "320px",
              }}
            >
              <div className="position-relative" style={{ zIndex: 10 }}>
                <h3 className="fs-4 fw-bold mb-2" style={{ color: "#2d3561" }}>
                  Find Doctors
                  <br />
                  near you
                </h3>
                <p className="small mb-4" style={{ color: "#2d3561" }}>
                  Confirmed appointments
                </p>
              </div>

              <div
                className="position-absolute"
                style={{ bottom: "4rem", right: "2rem", opacity: 0.2 }}
              >
                <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                  <path
                    d="M50 20 L50 45 M35 45 L65 45"
                    stroke="#2d3561"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="60"
                    r="15"
                    stroke="#2d3561"
                    strokeWidth="3"
                  />
                  <path
                    d="M40 75 Q50 85 60 75"
                    stroke="#2d3561"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>

              <button
                className="btn rounded-circle d-flex align-items-center justify-content-center position-relative"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#2d3561",
                  zIndex: 10,
                }}
              >
                <svg
                  className="text-white"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* 24/7 Medicines Card */}
          <div className="col-3">
            <div
              className="position-relative overflow-hidden d-flex flex-column justify-content-between p-4"
              style={{
                background: "linear-gradient(135deg, #f4c5d9 0%, #e89bb8 100%)",
                borderRadius: "2rem",
                minHeight: "320px",
              }}
            >
              <div className="position-relative" style={{ zIndex: 10 }}>
                <h3 className="fs-4 fw-bold mb-2" style={{ color: "#2d3561" }}>
                  24/7
                  <br />
                  Medicines
                </h3>
                <p className="small mb-4" style={{ color: "#2d3561" }}>
                  Essentials at your doorstep
                </p>
              </div>

              <div
                className="position-absolute"
                style={{ bottom: "4rem", right: "2rem", opacity: 0.2 }}
              >
                <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                  <ellipse
                    cx="45"
                    cy="50"
                    rx="15"
                    ry="25"
                    stroke="#2d3561"
                    strokeWidth="3"
                  />
                  <ellipse
                    cx="65"
                    cy="50"
                    rx="15"
                    ry="25"
                    stroke="#2d3561"
                    strokeWidth="3"
                  />
                  <line
                    x1="30"
                    y1="50"
                    x2="80"
                    y2="50"
                    stroke="#2d3561"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              <button
                className="btn rounded-circle d-flex align-items-center justify-content-center position-relative"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#2d3561",
                  zIndex: 10,
                }}
              >
                <svg
                  className="text-white"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Lab Tests Card */}
          <div className="col-3">
            <div
              className="position-relative overflow-hidden d-flex flex-column justify-content-between p-4"
              style={{
                background: "linear-gradient(135deg, #a8c5e8 0%, #7ea8d4 100%)",
                borderRadius: "2rem",
                minHeight: "320px",
              }}
            >
              <div className="position-relative" style={{ zIndex: 10 }}>
                <h3 className="fs-4 fw-bold mb-2" style={{ color: "#2d3561" }}>
                  Lab
                  <br />
                  Tests
                </h3>
                <p className="small mb-4" style={{ color: "#2d3561" }}>
                  Sample pickup at your home
                </p>
              </div>

              <div
                className="position-absolute"
                style={{ bottom: "4rem", right: "2rem", opacity: 0.2 }}
              >
                <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                  <rect
                    x="35"
                    y="25"
                    width="30"
                    height="50"
                    rx="2"
                    stroke="#2d3561"
                    strokeWidth="3"
                  />
                  <line
                    x1="35"
                    y1="35"
                    x2="65"
                    y2="35"
                    stroke="#2d3561"
                    strokeWidth="3"
                  />
                  <line
                    x1="35"
                    y1="45"
                    x2="65"
                    y2="45"
                    stroke="#2d3561"
                    strokeWidth="3"
                  />
                  <circle
                    cx="75"
                    cy="65"
                    r="8"
                    stroke="#2d3561"
                    strokeWidth="3"
                  />
                  <path
                    d="M80 70 L85 75"
                    stroke="#2d3561"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <button
                className="btn rounded-circle d-flex align-items-center justify-content-center position-relative"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#2d3561",
                  zIndex: 10,
                }}
              >
                <svg
                  className="text-white"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
