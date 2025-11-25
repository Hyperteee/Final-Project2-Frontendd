import React from 'react';

const ManagePatients = () => {

    return (
        <div className="container-fluid min-vh-100 p-4" style={{ backgroundColor: '#f4f6f9' }}>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="text-start">
                    <h1 className="fw-bold mb-0">ภาพรวมระบบ</h1>
                    <p className="text-muted">ข้อมูล ณ วันที่ 24/11/2568</p>
                </div>
                <button className="btn btn-light shadow-sm rounded-circle p-2">
                    <i className="fs-5 text-secondary"></i>
                </button>
            </div>

            <div className="row mb-4 g-4">

                <div className="col-12 col-md-6 col-xl-3">
                    <div className="card shadow-sm p-3 h-100 border-0" style={{ borderLeft: '5px solid #6610f2' }}>
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <div className="text-center me-3 p-3 rounded-circle d-flex justify-content-center align-items-center"
                                    style={{ backgroundColor: '#e6e6fa', color: '#6610f2', width: '60px', height: '60px' }}>
                                    <i className="bi bi-file-earmark-arrow-up-fill fs-4"></i>
                                </div>
                                <div>
                                    <h2 className="fw-bold mb-0">0</h2>
                                </div>
                            </div>
                            <p className="text-muted mb-2">คำขอจองใหม่</p>
                            <a href="#" className="text-decoration-none fw-bold small" style={{ color: '#6610f2' }}>
                                ไปหน้า Export <i className="bi bi-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-xl-3">
                    <div className="card shadow-sm p-3 h-100 border-0" style={{ borderLeft: '5px solid #ffc107' }}>
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <div className="text-center me-3 p-3 rounded-circle d-flex justify-content-center align-items-center"
                                    style={{ backgroundColor: '#fff3cd', color: '#ffc107', width: '60px', height: '60px' }}>
                                    <i className="bi bi-clock-fill fs-4"></i>
                                </div>
                                <div>
                                    <h2 className="fw-bold mb-0">0</h2>
                                </div>
                            </div>
                            <p className="text-muted mb-2">Batch รอผล</p>
                            <a href="#" className="text-decoration-none fw-bold small" style={{ color: '#ffc107' }}>
                                ไปหน้า Tracking <i className="bi bi-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-xl-3">
                    <div className="card shadow-sm p-3 h-100 border-0" style={{ borderLeft: '5px solid #dc3545' }}>
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <div className="text-center me-3 p-3 rounded-circle d-flex justify-content-center align-items-center"
                                    style={{ backgroundColor: '#f8d7da', color: '#dc3545', width: '60px', height: '60px' }}>
                                    <i className="bi bi-person-circle fs-4"></i>
                                </div>
                                <div>
                                    <h2 className="fw-bold mb-0">3</h2>
                                </div>
                            </div>
                            <p className="text-muted mb-2">ผู้ใช้รออนุมัติ</p>
                            <a href="#" className="text-decoration-none fw-bold small" style={{ color: '#dc3545' }}>
                                ตรวจสอบ <i className="bi bi-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-xl-3">
                    <div className="card shadow-sm p-3 h-100 border-0" style={{ borderLeft: '5px solid #198754' }}>
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <div className="text-center me-3 p-3 rounded-circle d-flex justify-content-center align-items-center"
                                    style={{ backgroundColor: '#d1e7dd', color: '#198754', width: '60px', height: '60px' }}>
                                    <i className="bi bi-check2-circle fs-4"></i>
                                </div>
                                <div>
                                    <h2 className="fw-bold mb-0">0</h2>
                                </div>
                            </div>
                            <p className="text-muted mb-2">นัดหมายวันนี้</p>
                            <a href="#" className="text-decoration-none fw-bold small" style={{ color: '#198754' }}>
                                ดูรายชื่อ <i className="bi bi-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row g-4">

                <div className="col-lg-8 col-xl-8">
                    <div className="card shadow-sm h-100 border-0 p-3">
                        <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center px-0 pb-3">
                            <h5 className="mb-0 fw-bold d-flex align-items-center">
                                <i className="bi bi-box-seam me-2 text-primary"></i>
                                สถานะการนำส่งล่าสุด
                            </h5>
                            <a href="#" className="text-primary text-decoration-none fw-bold small">ดูทั้งหมด</a>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive rounded">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-light">
                                        <tr className="text-secondary small text-uppercase">
                                            <th className="py-3 ps-3">Batch ID</th>
                                            <th className="py-3">โรงพยาบาล</th>
                                            <th className="py-3">วันที่</th>
                                            <th className="py-3">สถานะ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan="4" className="text-center text-muted py-5 bg-light">
                                                ยังไม่มีรายการนำส่ง
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-xl-4">
                    <div className="card shadow-sm h-100 border-0 p-3">
                        <div className="card-header bg-white border-0 px-0 pb-3">
                            <h5 className="mb-0 fw-bold d-flex align-items-center">
                                <i className="bi bi-bell-fill me-2 text-warning"></i>
                                การแจ้งเตือน
                            </h5>
                        </div>
                        <div className="card-body p-0 d-flex flex-column gap-3">

                            <div className="p-3 rounded border bg-white shadow-sm d-flex flex-column" style={{ borderLeft: '5px solid #dc3545 !important' }}>
                                <div className="d-flex justify-content-between">
                                    <span className="fw-bold text-danger">งานล่าช้า: Batch #005</span>
                                </div>
                                <p className="text-muted small mb-0 mt-1">รพ. จุฬาฯ ยังไม่ตอบกลับมาเกิน 24 ชม. แล้ว กรุณาโทรติดตาม</p>
                            </div>

                            <div className="p-3 rounded border bg-white shadow-sm d-flex flex-column" style={{ borderLeft: '5px solid #198754 !important' }}>
                                <span className="fw-bold text-success">Batch #004 เสร็จสมบูรณ์</span>
                                <p className="text-muted small mb-0 mt-1">บันทึกผลครบถ้วนแล้ว ระบบส่งอีเมลแจ้งคนไข้เรียบร้อย</p>
                            </div>

                            <div className="p-3 rounded border bg-white shadow-sm d-flex flex-column" style={{ borderLeft: '5px solid #0dcaf0 !important' }}>
                                <span className="fw-bold text-info">ผู้ใช้ใหม่: สมชาย ใจดี</span>
                                <p className="text-muted small mb-0 mt-1">ลงทะเบียนในระบบเรียบร้อยแล้ว รอการอนุมัติ</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ManagePatients;