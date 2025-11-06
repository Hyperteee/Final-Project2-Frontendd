import { useState } from "react"

export default function HealthcarePage() {
  const [currentOrgSlide, setCurrentOrgSlide] = useState(0)
  const [currentPackageSlide, setCurrentPackageSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [chatMessage, setChatMessage] = useState("")

  const doctors = [
    { id: 1, name: "นพ. สมชาย ใจดี", specialty: "อายุรแพทย์" },
    { id: 2, name: "พญ. สมหญิง รักษา", specialty: "กุมารแพทย์" },
    { id: 3, name: "นพ. วิชัย สุขภาพ", specialty: "ศัลยแพทย์" },
    { id: 4, name: "พญ. นิภา ดูแล", specialty: "สูติ-นรีแพทย์" },
  ]

  const packages = [
    { id: 1, title: "แพ็กเกจตรวจสุขภาพทั่วไป", category: "ตรวจสุขภาพ" },
    { id: 2, title: "แพ็กเกจดูแลผิวพรรณ", category: "ความงาม" },
    { id: 3, title: "วัคซีนป้องกันโรค", category: "วัคซีน" },
    { id: 4, title: "ตรวจสุขภาพผู้สูงอายุ", category: "ตรวจสุขภาพ" },
    { id: 5, title: "แพ็กเกจลดน้ำหนัก", category: "ความงาม" },
    { id: 6, title: "วัคซีนไข้หวัดใหญ่", category: "วัคซีน" },
  ]

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
        async
      ></script>

      <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
    <header
      className="py-3 shadow-lg sticky-top"
      style={{
        backgroundColor: "#020A1B", // สีเทาเข้มโปร่งใส (เทียบกับ bg-slate-900)
        backdropFilter: "blur(12px)", // เบลอพื้นหลัง
        WebkitBackdropFilter: "blur(12px)", // รองรับ Safari,
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <div className="d-flex align-items-center gap-3">
          <div
            className="d-flex align-items-center justify-content-center bg-primary rounded-3"
            style={{ width: "50px", height: "50px" }}
          >
            <span className="text-white fw-bold fs-4">H</span>
          </div>
          <div>
            <h1 className="text-white fw-bold fs-5 mb-0">HealthCare</h1>
            <p className="text-light small mb-0 opacity-75">Your Health Partner</p>
          </div>
        </div>

        {/* Nav */}
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

        {/* Button */}
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
            <div className="text-center mb-5">
              <h2 className="display-3 fw-bold text-white mb-4">
                ดูแลสุขภาพของคุณ
                <br />
                <span style={{ color: "#60a5fa" }}>ด้วยใจ</span>
              </h2>
              <p className="fs-5 text-light mb-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
                บริการด้านสุขภาพครบวงจร พร้อมทีมแพทย์ผู้เชี่ยวชาญ และเทคโนโลยีที่ทันสมัย
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card shadow-lg border-0 rounded-4">
                  <div className="card-body p-2">
                    <div className="input-group">
                      <span className="input-group-text bg-white border-0 ps-4">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        className="form-control border-0 py-3"
                        placeholder="ค้นหาแพทย์, แพ็กเกจ, หรือบริการ..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ fontSize: "1rem" }}
                      />
                      <button className="btn btn-primary px-5 rounded-3" type="button">
                        ค้นหา
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div
            className="position-absolute rounded-circle"
            style={{
              top: "80px",
              left: "40px",
              width: "80px",
              height: "80px",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              filter: "blur(40px)",
            }}
          ></div>
          <div
            className="position-absolute rounded-circle"
            style={{
              bottom: "80px",
              right: "40px",
              width: "128px",
              height: "128px",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              filter: "blur(40px)",
            }}
          ></div>


          <div className="container">
            <div className="text-center mb-5">
              <h3 className="h2 fw-bold mt-5 text-white">พันธมิตรทางการแพทย์ชั้นนำ</h3>
            </div>

            <div className="row g-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="col-6 col-md-4 col-lg-2">
                  <div
                    className="card border rounded-3 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      minHeight: "100px",
                      backgroundColor: "#f8f9fa",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)"
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow = "none"
                    }}
                  >
                    <div className="card-body text-center">
                      <span className="text-muted fw-semibold">Partner {i}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="container py-20">
            <div className="row g-5 align-items-center">
              {/* Left Content */}
              <div className="col-lg-6">
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">AI Assistant</span>
                <h2 className="display-4 fw-bold mb-4 text-white">
                  Chat Bot
                  <br />
                  <span className="text-primary">Doctor</span>
                </h2>
                <p className="fs-5 text-white mb-4 lh-lg ">
                  ปรึกษาอาการเบื้องต้นกับแชทบอทอัจฉริยะ รับคำแนะนำด้านสุขภาพก่อนพบแพทย์ พร้อมบริการตลอด 24 ชั่วโมง
                </p>
                <button className="btn btn-primary btn-lg px-5 py-3 shadow">เริ่มสนทนา</button>
              </div>

              {/* Right - Chat Interface */}
              <div className="col-lg-6">
                <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                  <div
                    className="card-header text-white p-3"
                    style={{ background: "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)" }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "40px", height: "40px", backgroundColor: "rgba(255,255,255,0.2)" }}
                      >
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h6 className="mb-0 fw-semibold">AI Doctor</h6>
                        <small style={{ color: "#bfdbfe" }}>ออนไลน์</small>
                      </div>
                    </div>
                  </div>

                  <div className="card-body p-4 bg-light" style={{ height: "320px", overflowY: "auto" }}>
                    <div className="d-flex gap-3 mb-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: "32px", height: "32px", backgroundColor: "#2563eb" }}
                      >
                        <span className="text-white small fw-bold">AI</span>
                      </div>
                      <div
                        className="card border-0 shadow-sm"
                        style={{ maxWidth: "75%", borderRadius: "1rem 1rem 1rem 0.25rem" }}
                      >
                        <div className="card-body p-3">
                          <p className="mb-0 text-dark">สวัสดีครับ ผม AI Doctor พร้อมให้คำปรึกษาเบื้องต้นเกี่ยวกับสุขภาพของคุณ</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-3 justify-content-end">
                      <div
                        className="card bg-primary text-white border-0 shadow-sm"
                        style={{ maxWidth: "75%", borderRadius: "1rem 1rem 0.25rem 1rem" }}
                      >
                        <div className="card-body p-3">
                          <p className="mb-0">สวัสดีครับ</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-footer bg-white border-top p-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border rounded-3"
                        placeholder="พิมพ์ข้อความ..."
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        style={{ borderRadius: "0.75rem 0 0 0.75rem" }}
                      />
                      <button
                        className="btn btn-primary rounded-3"
                        type="button"
                        style={{ borderRadius: "0 0.75rem 0.75rem 0" }}
                      >
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
<svg viewBox="0 0 100 15" preserveAspectRatio="none" className="bl_g0">
  <ellipse cx="50" cy="-5" fill="var(--rich-black, #000000)" rx="100" ry="15"></ellipse>
</svg>


        
        <section id="doctors" className=""
          style={{ background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)" }}>
          <div className="container py-4">
            <div className="d-flex justify-content-between align-items-end mb-5">
              <div>
                <h2 className="display-5 fw-bold mb-2">แพทย์ยอดนิยม</h2>
                <div style={{ height: "4px", width: "80px", backgroundColor: "#2563eb", borderRadius: "2px" }}></div>
              </div>
              <a href="#" className="btn btn-link text-primary text-decoration-none fw-medium">
                ดูทั้งหมด
              </a>
            </div>

            <div className="row g-4 mb-4">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="col-sm-6 col-lg-3">
                  <div
                    className="card border rounded-4 h-100 shadow-sm"
                    style={{
                      background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)"
                      e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)"
                    }}
                  >
                    <div className="card-body p-4">
                      <div
                        className="rounded-4 mb-3 d-flex align-items-center justify-content-center overflow-hidden"
                        style={{
                          width: "100%",
                          aspectRatio: "1",
                          background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
                        }}
                      >
                        <svg width="80" height="80" fill="none" stroke="#93c5fd" viewBox="0 0 24 24">
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
                        <p className="text-primary small fw-medium mb-3">{doctor.specialty}</p>
                        <button className="btn btn-primary w-100 rounded-3">นัดหมาย</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex gap-3 justify-content-center">
              <button
                onClick={() => setCurrentOrgSlide(Math.max(0, currentOrgSlide - 1))}
                className="btn btn-outline-secondary rounded-circle"
                style={{ width: "48px", height: "48px" }}
                aria-label="ก่อนหน้า"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentOrgSlide(currentOrgSlide + 1)}
                className="btn btn-outline-secondary rounded-circle"
                style={{ width: "48px", height: "48px" }}
                aria-label="ถัดไป"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
          style={{  background: "linear-gradient(to bottom, #14B8C4 0%, #0F4CA3 40%, #001B45 75%, #000000 100%)",
    position: "relative",
    overflow: "hidden",}}
        >
          <div className="container py-4">
            <div className="mb-5">
              <h2 className="display-5 fw-bold text-white mb-2">
                แพ็กเกจ <span style={{ color: "#001B45" }}>และโปรโมชั่น</span>
              </h2>
              <div style={{ height: "4px", width: "80px", backgroundColor: "#001B45", borderRadius: "2px" }}></div>
            </div>

            {/* Filters */}
            <div className="row g-4 mb-5">
              <div className="col-md-6">
                <label className="form-label text-white fw-medium">เลือกประเภท</label>
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
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <input type="text" className="form-control border-0 rounded-end" placeholder="ค้นหาแพ็กเกจ..." />
                </div>
              </div>
            </div>

            {/* Package Cards */}
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
                      e.currentTarget.style.transform = "translateY(-8px)"
                      e.currentTarget.style.boxShadow = "0 16px 32px rgba(0,0,0,0.2)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow = "none"
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        height: "192px",
                        background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <svg width="80" height="80" fill="none" stroke="#60a5fa" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="card-body p-4">
                      <span className="badge bg-primary bg-opacity-10 text-primary mb-3">{pkg.category}</span>
                      <h5 className="fw-bold mb-4">{pkg.title}</h5>
                      <div className="d-flex gap-2">
                        <button className="btn btn-light flex-fill">รายละเอียด</button>
                        <button className="btn btn-primary flex-fill">จองเลย</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="d-flex gap-3 justify-content-center">
              <button
                onClick={() => setCurrentPackageSlide(Math.max(0, currentPackageSlide - 1))}
                className="btn rounded-circle"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                }}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

     <footer id="contact" className="bg-slate-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">HealthCare</h3>
                  <p className="text-gray-500 text-xs">Your Health Partner</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">ผู้นำด้านการบริการสุขภาพครบวงจร พร้อมดูแลคุณด้วยใจ</p>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">บริการ</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    ระบบจองคิว
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    นัดหมายแพทย์
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    ตรวจสุขภาพ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    แอปพลิเคชัน
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">เกี่ยวกับเรา</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    เกี่ยวกับบริษัท
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    ร่วมงานกับเรา
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    บล็อก
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    ข่าวสาร
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">ช่วยเหลือ</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    ศูนย์ช่วยเหลือ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    คู่มือการใช้งาน
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    ติดต่อเรา
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    นโยบายความเป็นส่วนตัว
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; 2025 HealthCare. สงวนลิขสิทธิ์.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
} 