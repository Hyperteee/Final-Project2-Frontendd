import React, { useState, useMemo, useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
// Import ไอคอนต่างๆ จาก lucide-react สำหรับใช้ใน UI
import {
  Search, CheckCircle2, XCircle, Clock,
  FileText, AlertCircle, Save, X, FileSpreadsheet, Download,
  Calendar as CalendarIcon, Filter, AlertTriangle, RotateCcw,
  ChevronLeft, ChevronRight
} from "lucide-react";

// Import ไฟล์ CSS สำหรับจัดสไตล์
import "./Export.css";
import "./Tracking.css";

// Import Context เพื่อดึงข้อมูลนัดหมายและฟังก์ชันจัดการข้อมูลจากส่วนกลาง
import { UserAppointment } from "../src/data/context/appointment";

// ==========================================
// ส่วนที่ 1: Helper Components (ส่วนเสริม)
// ==========================================

// --- 1.1 StatusBadge: ป้ายแสดงสถานะ (สีและไอคอน) ---
const StatusBadge = ({ status }) => {
  const styles = {
    SENT: { bg: "#fff3cd", color: "#856404", label: "รอผลตอบกลับ", icon: Clock },
    CONFIRMED: { bg: "#d1e7dd", color: "#0f5132", label: "ยืนยันนัดแล้ว", icon: CheckCircle2 },
    REJECTED: { bg: "#f8d7da", color: "#842029", label: "ปฏิเสธ/เลื่อน", icon: XCircle },
    CANCELLED: { bg: "#e2e3e5", color: "#6c757d", label: "ยกเลิก", icon: XCircle },
  };
  const s = styles[status] || styles.SENT;
  const Icon = s.icon;
  return (
    <span className="badge rounded-pill d-inline-flex align-items-center gap-1"
      style={{ backgroundColor: s.bg, color: s.color, padding: "6px 12px", fontWeight: 500 }}>
      <Icon size={14} /> {s.label}
    </span>
  );
}

// --- 1.2 SLA Calculator: คำนวณความล่าช้าของงาน (Urgency) ---
const getSLAStatus = (createdDate, status) => {
  if (status !== 'SENT') return null;

  const created = new Date(createdDate);
  const now = new Date();
  const diffHours = (now - created) / (1000 * 60 * 60);

  if (diffHours > 48) {
    return (
      <span className="badge bg-danger-subtle text-danger border border-danger-subtle ms-2 d-inline-flex align-items-center gap-1" title="รอนานเกิน 2 วัน">
        <AlertTriangle size={10} /> ล่าช้า ({Math.floor(diffHours / 24)} วัน)
      </span>
    );
  } else if (diffHours > 24) {
    return (
      <span className="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle ms-2" title="รอนานเกิน 24 ชม.">
        ⏳ เกิน 24 ชม.
      </span>
    );
  }
  return null;
};

// --- 1.3 BatchProgress: หลอดแสดงความคืบหน้าของ Batch ---
const BatchProgress = ({ items }) => {
  if (!items || items.length === 0) return null;

  const total = items.length;
  const confirmed = items.filter(i => i.status === 'CONFIRMED').length;
  const rejected = items.filter(i => i.status === 'REJECTED').length;
  const pending = items.filter(i => i.status === 'SENT').length;

  const successPercent = (confirmed / total) * 100;
  const rejectPercent = (rejected / total) * 100;
  const pendingPercent = (pending / total) * 100;

  return (
    <div className="progress mt-2" style={{ height: '6px' }}>
      <div className="progress-bar bg-success" style={{ width: `${successPercent}%` }}></div>
      <div className="progress-bar bg-danger" style={{ width: `${rejectPercent}%` }}></div>
      <div className="progress-bar bg-warning" style={{ width: `${pendingPercent}%` }}></div>
    </div>
  );
}

// --- 1.4 Date Card Helper: แปลงวันที่ให้สวยงามสำหรับ Modal ---
const formatDateCard = (dateString) => {
  if (!dateString) return { day: "-", date: "-" };
  const d = new Date(dateString);
  return {
    day: d.toLocaleDateString('th-TH', { weekday: 'long' }), // จันทร์, อังคาร
    date: d.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' }) // 20 พ.ย. 68
  };
};

// --- 🔥 1.5 Custom Date Picker (ปฏิทินทำเอง) ---
const CustomDatePicker = ({ value, onChange, placeholder = "เลือกวันที่..." }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(value ? new Date(value) : new Date());
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const thaiMonths = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
  const thaiDaysShort = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
    setCurrentDate(newDate);
  };

  const handleDateClick = (day) => {
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const offset = selectedDate.getTimezoneOffset();
    const localDate = new Date(selectedDate.getTime() - (offset * 60 * 1000));
    onChange(localDate.toISOString().split('T')[0]);
    setIsOpen(false);
  };

  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const firstDay = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());
  
  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const displayValue = value ? new Date(value).toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' }) : "";

  return (
    <div className="position-relative" ref={containerRef}>
      <div 
        className="form-control bg-white d-flex align-items-center justify-content-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer' }}
      >
        <span className={displayValue ? "text-dark" : "text-muted"}>
          {displayValue || placeholder}
        </span>
        <CalendarIcon size={18} className="text-primary" />
      </div>

      {isOpen && (
        <div className="custom-calendar-popup shadow-lg rounded border p-3 bg-white">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <button className="btn btn-sm btn-light rounded-circle" onClick={(e) => { e.stopPropagation(); changeMonth(-1); }}>
              <ChevronLeft size={20} />
            </button>
            <span className="fw-bold text-primary" style={{ fontSize: '1.1rem' }}>
              {thaiMonths[currentDate.getMonth()]} {currentDate.getFullYear() + 543}
            </span>
            <button className="btn btn-sm btn-light rounded-circle" onClick={(e) => { e.stopPropagation(); changeMonth(1); }}>
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="calendar-grid mb-2">
            {thaiDaysShort.map(d => <div key={d} className="text-center text-muted small fw-bold">{d}</div>)}
          </div>
          <div className="calendar-grid">
            {days.map((day, index) => {
              if (!day) return <div key={index}></div>;
              const isSelected = value && new Date(value).getDate() === day && new Date(value).getMonth() === currentDate.getMonth() && new Date(value).getFullYear() === currentDate.getFullYear();
              const isToday = new Date().getDate() === day && new Date().getMonth() === currentDate.getMonth() && new Date().getFullYear() === currentDate.getFullYear();
              
              return (
                <div 
                  key={index} 
                  className={`calendar-day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                  onClick={(e) => { e.stopPropagation(); handleDateClick(day); }}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// ส่วนที่ 2: Main Component (หน้าหลัก)
// ==========================================
export default function AdminTracking() {
  const { appointments, batches, updateAppointmentStatus } = useContext(UserAppointment);
  const location = useLocation();

  // --- States ---
  const [activeTab, setActiveTab] = useState("ACTION");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const [showFilters, setShowFilters] = useState(false);
  const [filterHospital, setFilterHospital] = useState("ALL");
  const [filterUrgentOnly, setFilterUrgentOnly] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [updateForm, setUpdateForm] = useState({
    status: "CONFIRMED",
    confirmedDate: "",
    confirmedTime: "09:00",
    note: "",
    newProposedDate: ""
  });

  const [selectedBatchId, setSelectedBatchId] = useState(null);
  const [selectedItemIds, setSelectedItemIds] = useState([]);

  // --- Effects ---
  useEffect(() => {
    if (location.state?.filterMode === 'TODAY') {
      setActiveTab("HISTORY");
      const today = new Date().toISOString().slice(0, 10);
      setFilterDate(today);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  // --- Data Logic ---
  const trackingData = useMemo(() => {
    return appointments.filter(a => a.status !== "NEW");
  }, [appointments]);

  const hospitalOptions = useMemo(() => {
    const hospitals = trackingData.map(item => item.hospitalName).filter(Boolean);
    return ["ALL", ...new Set(hospitals)];
  }, [trackingData]);

  const stats = useMemo(() => {
    return {
      pending: trackingData.filter(a => a.status === "SENT").length,
      confirmed: trackingData.filter(a => a.status === "CONFIRMED").length,
      issues: trackingData.filter(a => a.status === "REJECTED").length,
    };
  }, [trackingData]);

  const filteredList = useMemo(() => {
    if (activeTab === 'BATCH') return [];
    let targetStatus = [];
    if (activeTab === "ACTION") targetStatus = ["SENT", "REJECTED"];
    else if (activeTab === "HISTORY") targetStatus = ["CONFIRMED", "CANCELLED"];

    return trackingData.filter(item => {
      if (!targetStatus.includes(item.status)) return false;
      if (filterDate && item.priority1Date !== filterDate) return false;

      const term = searchTerm.toLowerCase();
      const matchSearch =
        (item.name && item.name.toLowerCase().includes(term)) ||
        (item.hospitalName && item.hospitalName.toLowerCase().includes(term)) ||
        (item.hn && item.hn.toLowerCase().includes(term)) ||
        (item.doctorName && item.doctorName.toLowerCase().includes(term)) ||
        (item.batchId && item.batchId.toLowerCase().includes(term));

      if (!matchSearch) return false;
      if (filterHospital !== "ALL" && item.hospitalName !== filterHospital) return false;
      if (filterUrgentOnly && item.status === 'SENT') {
        const diffHours = (new Date() - new Date(item.createdAt)) / 36e5;
        if (diffHours < 24) return false;
      }
      return true;
    });
  }, [trackingData, searchTerm, activeTab, filterDate, filterHospital, filterUrgentOnly]);

  const filteredBatches = useMemo(() => {
    if (activeTab !== 'BATCH') return [];
    return batches.filter(b => b.id.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [batches, searchTerm, activeTab]);

  useEffect(() => {
    if (activeTab === 'BATCH' && !selectedBatchId && batches.length > 0) {
      setSelectedBatchId(batches[0].id);
    }
  }, [activeTab, batches, selectedBatchId]);

  const currentBatchInfo = batches.find(b => b.id === selectedBatchId);
  const currentBatchItems = useMemo(() => {
    if (!selectedBatchId) return [];
    return appointments.filter(a => a.batchId === selectedBatchId);
  }, [appointments, selectedBatchId]);

  // --- Handlers ---
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const pendingItems = currentBatchItems
        .filter(i => i.status === 'SENT' || i.status === 'REJECTED')
        .map(i => i.id);
      setSelectedItemIds(pendingItems);
    } else {
      setSelectedItemIds([]);
    }
  };

  const handleSelectItem = (id) => {
    setSelectedItemIds(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const handleOpenUpdate = (item) => {
    setSelectedTask(item);
    const defaultDate = item.priority1Date
      ? new Date(item.priority1Date).toISOString().split('T')[0]
      : "";

    setUpdateForm({
      status: "CONFIRMED",
      confirmedDate: defaultDate,
      confirmedTime: "09:00",
      note: "",
      newProposedDate: ""
    });
    setShowModal(true);
  };

  const handleSaveUpdate = () => {
    if (selectedTask) {
      updateAppointmentStatus(selectedTask.id, updateForm.status, {
        confirmedDate: updateForm.status === 'CONFIRMED' ? updateForm.confirmedDate : null,
        confirmedTime: updateForm.status === 'CONFIRMED' ? updateForm.confirmedTime : null,
        rejectReason: updateForm.status === 'REJECTED' ? updateForm.note : null,
        note: updateForm.note
      });
      setSelectedTask(null);
    }
    else if (selectedItemIds.length > 0) {
      selectedItemIds.forEach(id => {
        const originalItem = appointments.find(a => a.id === id);
        const targetDate = updateForm.status === 'CONFIRMED' ? (originalItem?.priority1Date || updateForm.confirmedDate) : null;
        updateAppointmentStatus(id, updateForm.status, {
          confirmedDate: targetDate,
          confirmedTime: updateForm.status === 'CONFIRMED' ? updateForm.confirmedTime : null,
          rejectReason: updateForm.status === 'REJECTED' ? updateForm.note : null,
          note: updateForm.note
        });
      });
      setSelectedItemIds([]);
    }
    setShowModal(false);
  };

  const handleOpenBulkUpdate = (status) => {
    setSelectedTask(null);
    setUpdateForm({
      status: status,
      confirmedDate: "",
      confirmedTime: "09:00",
      note: "",
      newProposedDate: ""
    });
    setShowModal(true);
  };

  return (
    <div className="export-container">
      {/* 3.1 Header & Stats Cards */}
      <div className="export-header">
        <h2>🔎 ติดตามผลการนัด (Tracking)</h2>
        <p>ตรวจสอบสถานะและอัปเดตผลตอบกลับจากโรงพยาบาล</p>
      </div>

      <div className="row mb-4 g-3">
        <div className="col-md-4"><div className="stats-card"><div className="d-flex justify-content-between align-items-center"><div><h3 className="mb-0 text-warning">{stats.pending}</h3><small className="text-muted">รอผลตอบกลับ (Pending)</small></div><div className="icon-bg bg-warning-light"><Clock className="text-warning" size={24} /></div></div></div></div>
        <div className="col-md-4"><div className="stats-card"><div className="d-flex justify-content-between align-items-center"><div><h3 className="mb-0 text-danger">{stats.issues}</h3><small className="text-muted">ต้องแก้ไข/ปฏิเสธ (Issues)</small></div><div className="icon-bg bg-danger-light"><AlertCircle className="text-danger" size={24} /></div></div></div></div>
        <div className="col-md-4"><div className="stats-card"><div className="d-flex justify-content-between align-items-center"><div><h3 className="mb-0 text-success">{stats.confirmed}</h3><small className="text-muted">ยืนยันนัดแล้ว (Confirmed)</small></div><div className="icon-bg bg-success-light"><CheckCircle2 className="text-success" size={24} /></div></div></div></div>
      </div>

      {/* 3.2 Tab Navigation */}
      <div className="d-flex gap-4 mb-3 border-bottom px-2">
        <button className={`btn pb-2 rounded-0 ${activeTab === 'ACTION' ? 'border-bottom border-primary border-3 text-primary fw-bold' : 'text-muted'}`} onClick={() => setActiveTab('ACTION')}>ต้องจัดการ {(stats.pending + stats.issues) > 0 && <span className="badge bg-danger ms-2 rounded-pill">{stats.pending + stats.issues}</span>}</button>
        <button className={`btn pb-2 rounded-0 ${activeTab === 'HISTORY' ? 'border-bottom border-primary border-3 text-primary fw-bold' : 'text-muted'}`} onClick={() => setActiveTab('HISTORY')}>ประวัติรายคน (History)</button>
        <button className={`btn pb-2 rounded-0 ${activeTab === 'BATCH' ? 'border-bottom border-primary border-3 text-primary fw-bold' : 'text-muted'}`} onClick={() => setActiveTab('BATCH')}>ประวัติราย Batch</button>
      </div>

      {/* --- Content Area --- */}
      {activeTab !== 'BATCH' && (
        <>
          <div className="filter-card py-3 mb-3">
            <div className="d-flex gap-3 align-items-center">
              <div className="position-relative flex-grow-1">
                <Search size={18} className="text-muted position-absolute top-50 start-0 translate-middle-y ms-3" />
                <input type="text" className="form-control ps-5" placeholder="ค้นหาชื่อคนไข้, โรงพยาบาล, ชื่อแพทย์..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              </div>
              <div className="position-relative" style={{ width: '180px' }}>
                <input type="date" className="form-control" value={filterDate} onChange={e => setFilterDate(e.target.value)} />
                {filterDate && (<button className="btn-close position-absolute top-50 end-0 translate-middle-y me-2 small" style={{ fontSize: '0.7rem' }} onClick={() => setFilterDate("")}></button>)}
              </div>
              <button className={`btn d-flex align-items-center gap-2 ${showFilters ? 'btn-primary' : 'btn-outline-secondary'}`} onClick={() => setShowFilters(!showFilters)}>
                <Filter size={18} /> ตัวกรอง
              </button>
            </div>

            {showFilters && (
              <div className="mt-3 p-4 bg-white border rounded shadow-sm animate-slide-up position-relative">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold text-dark m-0 d-flex align-items-center gap-2">
                    <Filter size={16} className="text-primary" /> ตัวกรองแบบละเอียด
                  </h6>
                  <button className="btn btn-link text-muted btn-sm text-decoration-none d-flex align-items-center gap-1"
                    onClick={() => { setFilterHospital("ALL"); setFilterUrgentOnly(false); setFilterDate(""); setSearchTerm(""); }}
                  >
                    <RotateCcw size={14} /> ล้างค่าทั้งหมด
                  </button>
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small text-muted fw-bold">โรงพยาบาล</label>
                    <select className="form-select" value={filterHospital} onChange={(e) => setFilterHospital(e.target.value)}>
                      {hospitalOptions.map((h, index) => (
                        <option key={index} value={h}>{h === "ALL" ? "ทั้งหมด" : h}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small text-muted fw-bold">ความเร่งด่วน</label>
                    <div className={`d-flex align-items-center p-2 px-3 rounded border cursor-pointer transition-all ${filterUrgentOnly ? 'border-danger bg-danger-subtle' : 'border-secondary-subtle bg-light'}`}
                      onClick={() => setFilterUrgentOnly(!filterUrgentOnly)} style={{ cursor: 'pointer', transition: 'all 0.2s' }}>
                      <div className={`rounded-circle p-2 me-3 d-flex align-items-center justify-content-center ${filterUrgentOnly ? 'bg-danger text-white' : 'bg-secondary text-white'}`} style={{ width: '36px', height: '36px' }}>
                        <AlertTriangle size={18} />
                      </div>
                      <div className="flex-grow-1">
                        <div className={`fw-bold small ${filterUrgentOnly ? 'text-danger' : 'text-dark'}`}>เฉพาะงานล่าช้า (Urgent)</div>
                        <div className="text-muted" style={{ fontSize: '0.75rem' }}>กรองเฉพาะรายการที่รอนานเกิน 24 ชม.</div>
                      </div>
                      <div className="ms-2">
                        {filterUrgentOnly ? <CheckCircle2 size={20} className="text-danger" /> : <div className="border rounded-circle" style={{ width: 20, height: 20 }}></div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="preview-card mt-0">
            <div className="table-responsive">
              <table className="export-table">
                <thead>
                  <tr>
                    <th>Batch ID</th>
                    <th>คนไข้</th>
                    <th>โรงพยาบาล/แพทย์</th>
                    <th>วันที่จอง (Booking)</th>
                    <th>สถานะ</th>
                    <th className="text-end">จัดการ</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredList.length === 0 ? (
                    <tr><td colSpan="6" className="text-center py-5 text-muted">ไม่พบข้อมูล</td></tr>
                  ) : filteredList.map((item) => (
                    <tr key={item.id}>
                      <td><span className="font-monospace text-muted small">{item.batchId || "-"}</span></td>
                      <td><div className="fw-bold">{item.name}</div><div className="small text-muted">{item.userId || "No ID"}</div></td>
                      <td><div>{item.hospitalName}</div><div className="small text-primary">{item.doctorName || "-"}</div></td>
                      <td>
                        <div className="d-flex flex-column">
                          <span className="fw-bold text-dark d-flex align-items-center">
                            {item.createdAt ? new Date(item.createdAt).toLocaleDateString('th-TH') : "-"}
                            {getSLAStatus(item.createdAt, item.status)}
                          </span>
                          <span className="text-muted small" style={{ fontSize: '0.75rem' }}>
                            เวลา {item.createdAt ? new Date(item.createdAt).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }) : "-"} น.
                          </span>
                        </div>
                      </td>
                      <td><StatusBadge status={item.status} /></td>
                      <td className="text-end">
                        {activeTab === 'ACTION' && (<button className="btn btn-primary btn-sm rounded-pill px-3" onClick={() => handleOpenUpdate(item)}>{item.status === 'REJECTED' ? 'แก้ไขงาน' : '📝 อัปเดตผล'}</button>)}
                        {activeTab === 'HISTORY' && (<button className="btn btn-outline-secondary btn-sm rounded-pill px-3" disabled>ดูรายละเอียด</button>)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === 'BATCH' && (
        <div className="row g-4 fade-in">
          <div className="col-md-4">
            <div className="bg-white p-3 rounded-top border-bottom">
              <div className="position-relative"><Search size={16} className="text-muted position-absolute top-50 start-0 translate-middle-y ms-3" /><input type="text" className="form-control ps-5 form-control-sm" placeholder="ค้นหาเลข Batch..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} /></div>
            </div>
            <div className="bg-white rounded-bottom shadow-sm overflow-auto" style={{ maxHeight: '70vh', border: '1px solid #dee2e6' }}>
              {filteredBatches.length === 0 ? (<div className="text-center p-4 text-muted small">ไม่พบประวัติ</div>) : filteredBatches.map(batch => {
                const batchItems = appointments.filter(a => a.batchId === batch.id);
                return (
                  <div key={batch.id} className={`p-3 border-bottom batch-item ${selectedBatchId === batch.id ? 'bg-blue-light border-start-primary' : ''}`} onClick={() => setSelectedBatchId(batch.id)} style={{ cursor: 'pointer', borderLeft: selectedBatchId === batch.id ? '4px solid #0d6efd' : '4px solid transparent' }}>
                    <div className="d-flex justify-content-between align-items-start mb-1"><span className="fw-bold text-primary small" style={{ fontSize: '0.8rem' }}>{batch.id}</span><span className="text-muted small" style={{ fontSize: '0.75rem' }}>{new Date(batch.date).toLocaleDateString('th-TH')}</span></div>
                    <div className="d-flex justify-content-between small text-muted mb-1"><span>{batch.totalItems} รายการ</span>{batch.status === 'COMPLETED' ? (<span className="text-success d-flex align-items-center gap-1"><CheckCircle2 size={12} /> เสร็จสิ้น</span>) : (<span className="text-warning d-flex align-items-center gap-1"><Clock size={12} /> รอผล</span>)}</div>
                    <BatchProgress items={batchItems} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-md-8">
            {currentBatchInfo ? (
              <div className="preview-card mt-0 h-100">
                <div className="preview-header border-bottom pb-3 mb-3">
                  <div>
                    <div className="d-flex align-items-center gap-2"><FileSpreadsheet className="text-primary" size={24} /><h5 className="mb-0 fw-bold">รายละเอียด {currentBatchInfo.id}</h5></div>
                    <small className="text-muted ms-1">ส่งเมื่อ: {new Date(currentBatchInfo.date).toLocaleString('th-TH')}</small>
                  </div>
                  {selectedItemIds.length > 0 ? (
                    <div className="d-flex gap-2 animate-slide-up">
                      <button className="btn btn-success btn-sm d-flex align-items-center gap-1" onClick={() => handleOpenBulkUpdate('CONFIRMED')}><CheckCircle2 size={16} /> ยืนยัน ({selectedItemIds.length})</button>
                      <button className="btn btn-danger btn-sm d-flex align-items-center gap-1" onClick={() => handleOpenBulkUpdate('REJECTED')}><XCircle size={16} /> ปฏิเสธ ({selectedItemIds.length})</button>
                    </div>
                  ) : (
                    <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2" onClick={() => alert("จำลองการดาวน์โหลด")}><Download size={16} /> ดาวน์โหลดไฟล์ซ้ำ</button>
                  )}
                </div>

                <div className="d-flex gap-3 mb-4">
                  <div className="badge bg-success-subtle text-success p-2 px-3 rounded-pill border border-success-subtle">สำเร็จ: {currentBatchItems.filter(i => i.status === 'CONFIRMED').length}</div>
                  <div className="badge bg-danger-subtle text-danger p-2 px-3 rounded-pill border border-danger-subtle">ปฏิเสธ: {currentBatchItems.filter(i => i.status === 'REJECTED').length}</div>
                  <div className="badge bg-warning-subtle text-warning-emphasis p-2 px-3 rounded-pill border border-warning-subtle"> รอผล: {currentBatchItems.filter(i => i.status === 'SENT').length}</div>
                </div>

                <div className="table-responsive">
                  <table className="export-table">
                    <thead>
                      <tr>
                        <th style={{ width: '40px' }}><input type="checkbox" onChange={handleSelectAll} checked={selectedItemIds.length > 0 && selectedItemIds.length === currentBatchItems.filter(i => i.status === 'SENT').length} /></th>
                        <th>คนไข้</th>
                        <th>โรงพยาบาล</th>
                        <th>วันนัด (P1)</th>
                        <th>สถานะ</th>
                        <th className="text-end">จัดการ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentBatchItems.map((item) => (
                        <tr key={item.id} className={selectedItemIds.includes(item.id) ? 'bg-light-blue' : ''}>
                          <td>{(item.status === 'SENT' || item.status === 'REJECTED') ? (<input type="checkbox" checked={selectedItemIds.includes(item.id)} onChange={() => handleSelectItem(item.id)} />) : <CheckCircle2 size={16} className="text-muted" />}</td>
                          <td><div className="fw-bold">{item.name}</div><div className="small text-muted">{item.userId}</div></td>
                          <td>{item.hospitalName}</td>
                          <td>{new Date(item.priority1Date).toLocaleDateString('th-TH')}</td>
                          <td><StatusBadge status={item.status} /></td>
                          <td className="text-end">{(item.status === 'SENT' || item.status === 'REJECTED') && (<button className="btn btn-outline-primary btn-sm rounded-pill px-2 py-1" style={{ fontSize: '0.8rem' }} onClick={() => handleOpenUpdate(item)}>อัปเดต</button>)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="h-100 d-flex flex-column align-items-center justify-content-center text-muted border rounded bg-white p-5">
                <FileSpreadsheet size={48} className="mb-3 opacity-25" /><p>กรุณาเลือก Batch ทางซ้ายเพื่อดูรายละเอียด</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3.7 Update Modal (Custom Date Picker Integration) */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content-custom animate-slide-up">
            <div className="d-flex justify-content-between align-items-start mb-4 border-bottom pb-3">
              <div>
                <h5 className="mb-1 fw-bold">
                  {selectedTask ? "อัปเดตผลการนัดหมาย" : `อัปเดตผลแบบกลุ่ม (${selectedItemIds.length} รายการ)`}
                </h5>
                {selectedTask && <p className="mb-0 text-muted small">คนไข้: {selectedTask.name}</p>}
              </div>
              <button className="btn-close-custom" onClick={() => setShowModal(false)}><X size={20} /></button>
            </div>

            <div className="modal-body">
              {selectedTask && (
                <div className="mb-4">
                  <div className="d-flex gap-2 bg-light p-1 rounded-pill" style={{ border: '1px solid #dee2e6' }}>
                    <button
                      className={`btn rounded-pill flex-grow-1 d-flex align-items-center justify-content-center gap-2 ${updateForm.status === 'CONFIRMED' ? 'btn-success shadow-sm' : 'text-muted'}`}
                      onClick={() => setUpdateForm({ ...updateForm, status: 'CONFIRMED' })}
                      style={{ transition: 'all 0.2s' }}
                    >
                      <CheckCircle2 size={18} /> ยืนยันนัด
                    </button>
                    <button
                      className={`btn rounded-pill flex-grow-1 d-flex align-items-center justify-content-center gap-2 ${updateForm.status === 'REJECTED' ? 'btn-danger shadow-sm' : 'text-muted'}`}
                      onClick={() => setUpdateForm({ ...updateForm, status: 'REJECTED' })}
                      style={{ transition: 'all 0.2s' }}
                    >
                      <XCircle size={18} /> ปฏิเสธ/เลื่อน
                    </button>
                  </div>
                </div>
              )}

              {updateForm.status === 'CONFIRMED' ? (
                <div className="animate-slide-up">
                  <label className="small text-muted mb-2 fw-bold">เลือกวันที่ต้องการยืนยัน</label>
                  {selectedTask && (
                    <div className="d-flex gap-3 mb-4">
                      <div
                        className={`date-select-card flex-grow-1 ${updateForm.confirmedDate === new Date(selectedTask.priority1Date).toISOString().split('T')[0] ? 'active' : ''}`}
                        onClick={() => setUpdateForm({ ...updateForm, confirmedDate: new Date(selectedTask.priority1Date).toISOString().split('T')[0] })}
                      >
                        <div className="badge bg-primary mb-1">ตัวเลือกที่ 1 (หลัก)</div>
                        <h5 className="mb-0 fw-bold text-dark">{formatDateCard(selectedTask.priority1Date).date}</h5>
                        <small className="text-muted">{formatDateCard(selectedTask.priority1Date).day}</small>
                        {updateForm.confirmedDate === new Date(selectedTask.priority1Date).toISOString().split('T')[0] && <div className="selected-check"><CheckCircle2 size={16} /></div>}
                      </div>

                      {selectedTask.priority2Date ? (
                        <div
                          className={`date-select-card flex-grow-1 ${updateForm.confirmedDate === new Date(selectedTask.priority2Date).toISOString().split('T')[0] ? 'active' : ''}`}
                          onClick={() => setUpdateForm({ ...updateForm, confirmedDate: new Date(selectedTask.priority2Date).toISOString().split('T')[0] })}
                        >
                          <div className="badge bg-secondary mb-1">ตัวเลือกที่ 2 (รอง)</div>
                          <h5 className="mb-0 fw-bold text-dark">{formatDateCard(selectedTask.priority2Date).date}</h5>
                          <small className="text-muted">{formatDateCard(selectedTask.priority2Date).day}</small>
                          {updateForm.confirmedDate === new Date(selectedTask.priority2Date).toISOString().split('T')[0] && <div className="selected-check"><CheckCircle2 size={16} /></div>}
                        </div>
                      ) : (
                        <div className="date-select-card flex-grow-1 disabled bg-light text-muted border-dashed d-flex align-items-center justify-content-center">
                          <small>ไม่มีวันนัดสำรอง</small>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="bg-light p-3 rounded border">
                    <div className="row g-3">
                      <div className="col-6">
                        <label className="small text-muted mb-1">วันที่ (กำหนดเอง)</label>
                        {/* 🔥 ใช้ Custom Date Picker ตรงนี้แทน input date เดิม 🔥 */}
                        <CustomDatePicker 
                          value={updateForm.confirmedDate} 
                          onChange={(date) => setUpdateForm({ ...updateForm, confirmedDate: date })} 
                        />
                      </div>
                      <div className="col-6">
                        <label className="small text-muted mb-1">เวลาที่นัด</label>
                        <input
                          type="time"
                          className="form-control bg-white"
                          value={updateForm.confirmedTime}
                          onChange={e => setUpdateForm({ ...updateForm, confirmedTime: e.target.value })}
                        />
                      </div>
                      <div className="col-12">
                        <label className="small text-muted mb-1">หมายเหตุเพิ่มเติม (Note)</label>
                        <textarea className="form-control bg-white" rows="2" value={updateForm.note} onChange={e => setUpdateForm({ ...updateForm, note: e.target.value })} placeholder="ระบุสิ่งที่คนไข้ต้องเตรียมตัว..."></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-danger-soft p-3 rounded border border-danger-subtle animate-slide-up">
                  <div className="mb-3">
                    <label className="small text-muted mb-1 fw-bold">สาเหตุการปฏิเสธ</label>
                    <select className="form-select" onChange={e => setUpdateForm({ ...updateForm, note: e.target.value })}>
                      <option value="">-- กรุณาเลือกสาเหตุ --</option>
                      <option value="คิวแพทย์เต็ม">คิวแพทย์เต็มในวันดังกล่าว</option>
                      <option value="แพทย์ลา/ไม่สะดวก">แพทย์ติดภารกิจ/ลาพักร้อน</option>
                      <option value="คนไข้ปฏิเสธ">ติดต่อแล้ว คนไข้ขอยกเลิกเอง</option>
                      <option value="อื่นๆ">อื่นๆ</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="small text-muted mb-1 fw-bold">เสนอวันนัดใหม่ (ถ้ามี)</label>
                    {/* 🔥 ใช้ Custom Date Picker ตรงนี้ด้วย 🔥 */}
                    <CustomDatePicker 
                      value={updateForm.newProposedDate} 
                      onChange={(date) => setUpdateForm({ ...updateForm, newProposedDate: date })} 
                      placeholder="เสนอวันใหม่..."
                    />
                  </div>
                  <div className="col-12">
                    <label className="small text-muted mb-1">รายละเอียดเพิ่มเติม</label>
                    <textarea className="form-control" rows="2" placeholder="เช่น แนะนำให้จองใหม่เดือนหน้า..."></textarea>
                  </div>
                </div>
              )}
            </div>
            <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
              <button className="btn btn-light text-muted px-3" onClick={() => setShowModal(false)}>ยกเลิก</button>
              <button className="btn btn-primary px-4 shadow-sm" onClick={handleSaveUpdate}><Save size={18} className="me-2" /> บันทึกผล</button>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
}