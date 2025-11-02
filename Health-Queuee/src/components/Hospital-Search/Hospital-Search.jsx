import React from 'react'

export default function HospitalSearch() {
  return (
<div>
      {/* Hero Section */}
      <section
        className="position-relative mx-3 mt-3 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2d3561 0%, #1a1f3a 100%)",
          borderRadius: "2rem",
        }}
      >
        <div className="container-fluid px-5 py-5">
          <div className="row align-items-center" style={{ minHeight: "500px" }}>
            {/* Left Content */}
            <div className="col-6">
              <h1 className="display-1 fw-bold mb-4" style={{ color: "#c5d9f0", fontSize: "5rem" }}>
                Healthcare
              </h1>

              <div className="mb-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px", backgroundColor: "rgba(255,255,255,0.2)" }}
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-white fs-5">Reduce HbA1c</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px", backgroundColor: "rgba(255,255,255,0.2)" }}
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-white fs-5">No more medications</span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-white small lh-base" style={{ maxWidth: "400px" }}>
                  IF YOU'RE LOOKING FOR A CREATIVE AND
                  <br />
                  EASY WAY TO BUILD A WEBSITE, WOW!
                  <br />
                  IS THE PERFECT SOLUTION.
                </p>
              </div>
            </div>

            {/* Right Content - Doctor Image */}
            <div className="col-6 position-relative d-flex align-items-center justify-content-center">
              <img
                src="./images/doctor-oshi.png"
                alt="Healthcare Professional"
                className="position-relative"
                style={{ height: "500px", objectFit: "contain", zIndex: 10 }}
              />

              {/* Book Consultation Button */}
              <div className="position-absolute top-0 end-0 mt-4">
                <button
                  className="btn d-flex align-items-center gap-3 shadow-lg"
                  style={{
                    backgroundColor: "#c5d9f0",
                    color: "#2d3561",
                    borderRadius: "2rem",
                    padding: "0.75rem 1.5rem",
                  }}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span className="fw-semibold">Book Consultation</span>
                </button>
              </div>
            </div>
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

              <div className="position-absolute" style={{ bottom: "4rem", right: "2rem", opacity: 0.2 }}>
                <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                  <rect x="20" y="30" width="60" height="40" rx="4" stroke="#2d3561" strokeWidth="3" />
                  <path d="M35 45 L35 55 M45 45 L45 55" stroke="#2d3561" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="65" cy="50" r="8" stroke="#2d3561" strokeWidth="3" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

              <div className="position-absolute" style={{ bottom: "4rem", right: "2rem", opacity: 0.2 }}>
                <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                  <path d="M50 20 L50 45 M35 45 L65 45" stroke="#2d3561" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="50" cy="60" r="15" stroke="#2d3561" strokeWidth="3" />
                  <path d="M40 75 Q50 85 60 75" stroke="#2d3561" strokeWidth="3" strokeLinecap="round" fill="none" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

              <div className="position-absolute" style={{ bottom: "4rem", right: "2rem", opacity: 0.2 }}>
                <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                  <ellipse cx="45" cy="50" rx="15" ry="25" stroke="#2d3561" strokeWidth="3" />
                  <ellipse cx="65" cy="50" rx="15" ry="25" stroke="#2d3561" strokeWidth="3" />
                  <line x1="30" y1="50" x2="80" y2="50" stroke="#2d3561" strokeWidth="3" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

              <div className="position-absolute" style={{ bottom: "4rem", right: "2rem", opacity: 0.2 }}>
                <svg width="128" height="128" viewBox="0 0 100 100" fill="none">
                  <rect x="35" y="25" width="30" height="50" rx="2" stroke="#2d3561" strokeWidth="3" />
                  <line x1="35" y1="35" x2="65" y2="35" stroke="#2d3561" strokeWidth="3" />
                  <line x1="35" y1="45" x2="65" y2="45" stroke="#2d3561" strokeWidth="3" />
                  <circle cx="75" cy="65" r="8" stroke="#2d3561" strokeWidth="3" />
                  <path d="M80 70 L85 75" stroke="#2d3561" strokeWidth="3" strokeLinecap="round" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
</div>
  )
}
