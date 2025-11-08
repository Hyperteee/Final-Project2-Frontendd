import { useEffect, useMemo, useState } from "react";
import NavigationBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import chulalongkorn from "../data/hospitaldata.jsx/chula";
import synphaetRamintra from "../data/hospitaldata.jsx/synphaet";
import phyathai from "../data/hospitaldata.jsx/phyathai";
import "./DoctorList.css";

const PAGE_SIZE = 8;
const ALL_DEPARTMENTS = "All departments";
const ALL_HOSPITALS = "All hospitals";

const hospitalsData = [chulalongkorn, synphaetRamintra, phyathai];

const normalizeDoctors = (hospitals) => {
  return hospitals.flatMap((hospital) => {
    const departments = hospital?.departments ?? [];
    return departments.flatMap((department) => {
      const doctors = department?.doctors ?? [];
      return doctors.map((doctor, idx) => ({
        id: doctor.id ?? `${hospital.id}-${department.name}-${idx}`,
        name: doctor.name ?? "",
        specialization: doctor.specialization ?? "",
        schedule: doctor.schedule ?? [],
        dept: department.name ?? "",
        hospital: hospital.name ?? "",
      }));
    });
  });
};

const getInitials = (text) => {
  if (!text) return "DR";
  const tokens = text
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((token) => token.charAt(0).toUpperCase());
  return tokens.join("") || "DR";
};

export default function DoctorList() {
  const doctorPool = useMemo(() => normalizeDoctors(hospitalsData), []);

  const departmentOptions = useMemo(() => {
    const names = doctorPool
      .map((doc) => doc.dept)
      .filter(Boolean);
    return [ALL_DEPARTMENTS, ...Array.from(new Set(names))];
  }, [doctorPool]);

  const hospitalOptions = useMemo(() => {
    const names = doctorPool
      .map((doc) => doc.hospital)
      .filter(Boolean);
    return [ALL_HOSPITALS, ...Array.from(new Set(names))];
  }, [doctorPool]);

  const [dept, setDept] = useState(departmentOptions[0]);
  const [hospital, setHospital] = useState(hospitalOptions[0]);
  const [q, setQ] = useState("");
  const [step, setStep] = useState(1);

  useEffect(() => {
    setStep(1);
  }, [dept, hospital, q]);

  const filteredDoctors = useMemo(() => {
    const term = q.trim().toLowerCase();
    return doctorPool
      .filter((doctor) => (dept === ALL_DEPARTMENTS ? true : doctor.dept === dept))
      .filter((doctor) => (hospital === ALL_HOSPITALS ? true : doctor.hospital === hospital))
      .filter((doctor) => {
        if (!term) return true;
        return (
          doctor.name.toLowerCase().includes(term) || doctor.specialization.toLowerCase().includes(term)
        );
      })
      .sort(
        (a, b) =>
          a.name.localeCompare(b.name, "th") ||
          a.hospital.localeCompare(b.hospital, "th") ||
          a.dept.localeCompare(b.dept, "th")
      );
  }, [doctorPool, dept, hospital, q]);

  const totalSteps = Math.max(1, Math.ceil(filteredDoctors.length / PAGE_SIZE));

  useEffect(() => {
    setStep((prev) => Math.min(prev, totalSteps));
  }, [totalSteps]);

  const startIndex = (step - 1) * PAGE_SIZE;
  const pageDoctors = filteredDoctors.slice(startIndex, startIndex + PAGE_SIZE);

  const handleNext = () => {
    if (step < totalSteps) setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  return (
    <>
      <NavigationBar />
      <section className="doctor-page py-5">
        <div className="doctor-wrapper">
          <div className="doctor-filter-card rounded-4 shadow-sm p-4 mb-4">
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label small">Department</label>
                <select className="form-select rounded-3" value={dept} onChange={(e) => setDept(e.target.value)}>
                  {departmentOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-12">
                <label className="form-label small">Hospital</label>
                <select className="form-select rounded-3" value={hospital} onChange={(e) => setHospital(e.target.value)}>
                  {hospitalOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-12">
                <label className="form-label small">Search</label>
                <div className="input-group rounded-3">
                  <span className="input-group-text bg-white border-end-0">
                    <i className="bi bi-search text-muted" />
                  </span>
                  <input
                    className="form-control border-start-0"
                    placeholder="Find doctor or specialty"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="doctor-summary d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="mb-0">Doctors</h5>
              <small>Found {filteredDoctors.length} doctors</small>
            </div>
            <div className="badge text-bg-light rounded-pill px-3 py-2">
              Page {step} / {totalSteps}
            </div>
          </div>

          <div className="doctor-results-panel">
            {pageDoctors.length > 0 ? (
              <div className="row g-4">
                {pageDoctors.map((doctor) => {
                  return (
                    <div className="col-12 col-md-6" key={doctor.id}>
                      <div className="card border-0 shadow-sm rounded-4 position-relative h-100 doctor-card">
                        <div className="card-body text-center pt-4 pb-4 d-flex flex-column align-items-center doctor-card__body">
                          <div className="doctor-card__avatar">
                            <span className="fw-semibold">{getInitials(doctor.name)}</span>
                          </div>
                          <p className="fw-semibold mt-3 mb-1 text-truncate w-100">{doctor.name || "Unnamed doctor"}</p>
                          <p className="small mb-1 doctor-card__subtitle">{doctor.dept}</p>
                          <p className="small mb-3 doctor-card__hospital">{doctor.hospital}</p>
                          {doctor.specialization && <p className="small text-secondary mb-3">{doctor.specialization}</p>}
                          <div className="d-grid gap-2 w-100 mt-auto doctor-card__actions">
                            <button className="btn btn-primary rounded-pill py-2">Book</button>
                            <button className="btn btn-outline-secondary rounded-pill py-2">View profile</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-center py-5 doctor-empty mb-0">No doctors match the current filters.</p>
            )}
          </div>

          <div className="doctor-pagination">
            <div className="doctor-pagination__panel shadow-sm p-3 d-flex gap-3 justify-content-between">
              <button className="btn btn-outline-secondary flex-fill rounded-pill" onClick={handlePrev} disabled={step === 1}>
                Previous
              </button>
              <button
                className="btn btn-primary flex-fill rounded-pill"
                onClick={handleNext}
                disabled={step === totalSteps || filteredDoctors.length === 0}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
