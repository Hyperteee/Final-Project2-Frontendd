import { useState } from "react";
import { User, CreditCard, Calendar, Lock, Shield, LogOut } from "lucide-react";

export default function Profile() {
  const [formData, setFormData] = useState({
    phone: "เบอร์โทรศัพท์",
    title: "นาย",
    firstName: "ประหยัด",
    lastName: "จันทร์โทรลา",
    nationalId: "1100897576431",
    birthDate: "2548-10-20",
    gender: "ชาย",
    email: "Prayard@gmail.com",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birth = new Date(birthdate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  };

  return (
    <div className="bg-light min-vh-100">
      <header
        className="py-3 shadow-lg sticky-top"
        style={{
          backgroundColor: "#020A1B",
          backdropFilter: "blur(12px)",
        }}
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

          <nav className="d-none d-md-flex align-items-center gap-4">
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

      <div className="container py-4">
        <h1 className="text-center mb-4 fw-semibold text-black">
          ข้อมูลของคุณ
        </h1>
        <div className="d-flex justify-content-center mb-4 ">
          <div
            style={{
              height: "4px",
              width: "100px",
              backgroundColor: "#001B45",
              borderRadius: "2px",
            }}
          ></div>
        </div>

        <div className="row g-4">
          <div className="col-lg-3">
            <div className="card shadow-sm border-0">
              <h1 className="fw-medium ">ข้อมูลส่วนตัว</h1>

              <div
                style={{
                  height: "4px",
                  width: "20px",
                  backgroundColor: "#001B45",
                  borderRadius: "2px",
                }}
              ></div>

              <div className="list-group list-group-flush mt-3">
                <button className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3">
                  <User size={20} />
                  <span>โปรไฟล์ของคุณ</span>
                </button>

                <button className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3">
                  <CreditCard size={20} />
                  <span>นัดหมาย</span>
                </button>

                <button className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3">
                  <Calendar size={20} />
                  <span>ประวัติการรักษา</span>
                </button>

                <button className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3">
                  <Lock size={20} />
                  <span>จัดการข้อมูลส่วนบุคคล</span>
                </button>

                <button className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3">
                  <Shield size={20} />
                  <span>จัดการข้อมูลส่วนบุคคล</span>
                </button>
              </div>

              <div className="card-footer bg-white border-top p-3">
                <button className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2">
                  <LogOut size={18} />
                  ออกจากระบบ
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4 p-lg-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label fw-medium text-secondary">
                      เบอร์โทรศัพท์
                    </label>
                    <div className="fs-5 fw-semibold text-success">
                      {formData.phone}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-medium text-secondary">
                      คำนำหน้าชื่อ
                    </label>
                    <select
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="นาย">นาย</option>
                      <option value="นาง">นาง</option>
                      <option value="นางสาว">นางสาว</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-medium text-secondary">
                      ชื่อ
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="กันโทร"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-medium text-secondary">
                      นามสกุล
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="รับสุคนธ์"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-medium text-secondary">
                      เลขบัตรประชาชน
                    </label>
                    <div className="fs-5 fw-semibold text-success">
                      {formData.nationalId}
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-8">
                      <label className="form-label fw-medium text-secondary">
                        วัน/เดือน/ปีเกิด
                      </label>
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-medium text-secondary">
                        อายุ
                      </label>
                      <div className="fs-5 fw-semibold text-success">
                        {calculateAge(formData.birthDate)} ปี
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-medium text-secondary">
                      เพศ
                    </label>
                    <div className="fs-5 fw-semibold text-success">
                      {formData.gender}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-medium text-secondary">
                      อีเมล
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="theepakorn3th@gmail.com"
                    />
                  </div>

                  <div className="d-flex justify-content-end mt-5">
                    <button
                      type="submit"
                      className="btn btn-success px-5 py-2 fw-medium"
                    >
                      บันทึก
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}
