import React, { useState, useMemo, useEffect } from 'react';

// จำนวนรายการต่อหนึ่งหน้าสำหรับตารางนัดหมายหลัก
const ITEMS_PER_PAGE = 5;
// จำนวนรายการต่อหนึ่งหน้าสำหรับตารางแจ้งเตือน
const NOTIFICATION_ITEMS_PER_PAGE = 4;

// ข้อมูลนัดหมายเริ่มต้น
const initialAppointmentData = [
    { name: 'นายเอบีซี', phone: '0942513799', type: 'ติดตามอาการ', time: '08.00-09.00', details: 'ผู้ป่วยมีไข้และไอต่อเนื่อง 3 วัน' },
    { name: 'นางสาวดีอีเอฟ', phone: '0812345678', type: 'อายุรกรรม', time: '09.00-10.00', details: 'นัดตรวจเลือดและติดตามผล' },
    { name: 'นายจีเอชไอ', phone: '0654321098', type: 'จิตเวช', time: '10.00-11.00', details: 'นัดพูดคุยกับนักบำบัด' },
    { name: 'นางสาวเจเคแอล', phone: '0998765432', type: 'แพคเกจตรวจสุขภาพ', time: '11.00-12.00', details: 'แพคเกจพื้นฐานประจำปี' },
    { name: 'นายเอ็มเอ็นโอ', phone: '0911223344', type: 'ติดตามอาการ', time: '13.00-14.00', details: 'อาการปวดหลังเรื้อรัง' },
    { name: 'นางสาวพีคิวอาร์', phone: '0887766554', type: 'ศัลยกรรม', time: '14.00-15.00', details: 'นัดปรึกษาการผ่าตัดเล็ก' },
    { name: 'นายเอสทีที', phone: '0663322110', type: 'ติดตามอาการ', time: '15.00-16.00', details: 'นัดตรวจแผลหลังผ่าตัด' },
    { name: 'นางสาววีดับเบิ้ลยู', phone: '0901020304', type: 'ติดตามอาการ', time: '16.00-17.00', details: 'อาการภูมิแพ้กำเริบ' },
    { name: 'นายแซดวายเอ็กซ์', phone: '0855554444', type: 'ผิวหนัง', time: '17.00-18.00', details: 'นัดตรวจผื่นแพ้' },
    { name: 'นายหนึ่งสองสาม', phone: '0977778888', type: 'ทันตกรรม', time: '18.00-19.00', details: 'นัดอุดฟัน' },
    { name: 'นางสาวสี่ห้าหก', phone: '0611112222', type: 'เวชศาสตร์ฟื้นฟู', time: '19.00-20.00', details: 'ทำกายภาพบำบัด' },
    { name: 'นายเจ็ดแปดเก้า', phone: '0922223333', type: 'ติดตามอาการ', time: '20.00-21.00', details: 'ตรวจความดันโลหิต' },
];

// ข้อมูลแจ้งเตือน
const notificationData = [
    { id: 1, name: 'นายดำรงค์ มีลาภ', note: 'ขอยกเลิกนัด', date: '17/11/2568', status: 'Canceled' },
    { id: 2, name: 'นางสาวสมศรี ใจดี', note: 'เลื่อนนัด', date: '19/11/2568', status: 'Rescheduled' },
    { id: 3, name: 'เด็กชายธนากร อ่อนใส', note: 'คิวใหม่', date: '19/11/2568', status: 'New' },
    { id: 4, name: 'นางจันทร์เพ็ญ งามยิ่ง', note: 'เลื่อนนัด', date: '20/11/2568', status: 'Rescheduled' },
    { id: 5, name: 'นายโชคดี มีชัย', note: 'คิวใหม่', date: '21/11/2568', status: 'New' },
];

/**
 * Component แสดงสถานะรวม
 */
const StatusCard = ({ iconClass, label, count, colorClass }) => (
    <div className={`card shadow-sm border-start border-4 ${colorClass} h-100 rounded-lg transform transition-all duration-300 hover:shadow-md`}>
        <div className="card-body">
            <div className="d-flex align-items-center">
                <i className={`${iconClass} fs-3 me-3 ${colorClass.replace('border-', 'text-')}`}></i>
                <div>
                    <p className="text-muted mb-0 fw-medium text-sm">{label}</p>
                    <p className="h4 fw-bold text-dark mb-0">{count}</p>
                </div>
            </div>
        </div>
    </div>
);

/**
 * Component Modal สำหรับแสดงรายละเอียดนัดหมาย
 */
const AppointmentDetailModal = ({ appointment, onClose }) => {
    if (!appointment) return null;

    return (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content rounded-lg shadow-xl">
                    <div className="modal-header bg-primary text-white rounded-t-lg">
                        <h5 className="modal-title font-semibold">ข้อมูลนัดหมาย: {appointment.name}</h5>
                        <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                    </div>
                    <div className="modal-body p-4">
                        <p className="mb-2"><strong>ชื่อคนไข้:</strong> {appointment.name}</p>
                        <p className="mb-2"><strong>เบอร์โทรศัพท์:</strong> {appointment.phone}</p>
                        <p className="mb-2">
                            <strong>ประเภทการจอง:</strong> <span className="badge bg-info text-dark font-medium px-2 py-1 rounded-pill">{appointment.type}</span>
                        </p>
                        <p className="mb-4">
                            <strong>วันเวลา:</strong> <span className="badge bg-secondary font-medium px-2 py-1 rounded-pill">{appointment.time}</span>
                        </p>
                        <hr />
                        <p className="fw-bold text-muted mb-1 text-sm">รายละเอียดเพิ่มเติม:</p>
                        <div className="alert alert-light border p-3 rounded-lg bg-gray-50 text-gray-700">
                            {appointment.details || "ไม่มีรายละเอียดเพิ่มเติม"}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary rounded-pill px-4" onClick={onClose}>ปิด</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

/**
 * Component หลัก: แดชบอร์ดการนัดหมาย
 */
const Appointments = () => {
    const today = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(today);
    const [filterText, setFilterText] = useState('');
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    // 1. State สำหรับ Pagination ตารางหลัก
    const [currentPage, setCurrentPage] = useState(1);

    // 1. State สำหรับ Pagination แจ้งเตือน
    const [notificationCurrentPage, setNotificationCurrentPage] = useState(1);


    // 2. ใช้ useMemo สำหรับกรองข้อมูลตารางหลัก
    const filteredData = useMemo(() => {
        // เมื่อมีการค้นหาใหม่ จะแสดงผลเฉพาะรายการที่ตรงกับคำค้นหา
        const lowerCaseFilter = filterText.toLowerCase();
        if (!lowerCaseFilter) return initialAppointmentData;

        return initialAppointmentData.filter(app =>
            app.name.toLowerCase().includes(lowerCaseFilter) ||
            app.phone.includes(lowerCaseFilter) ||
            app.type.toLowerCase().includes(lowerCaseFilter) ||
            app.time.includes(lowerCaseFilter)
        );
    }, [filterText]);

    // 3. คำนวณข้อมูล Pagination ตารางหลัก
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // ข้อมูลที่แสดงผลในหน้าปัจจุบัน
    const currentAppointments = filteredData.slice(startIndex, endIndex);

    // 3. คำนวณข้อมูล Pagination แจ้งเตือน
    const notificationTotalPages = Math.ceil(notificationData.length / NOTIFICATION_ITEMS_PER_PAGE);
    const notificationStartIndex = (notificationCurrentPage - 1) * NOTIFICATION_ITEMS_PER_PAGE;
    const notificationEndIndex = notificationStartIndex + NOTIFICATION_ITEMS_PER_PAGE;

    // ข้อมูลแจ้งเตือนที่แสดงผลในหน้าปัจจุบัน
    const currentNotifications = notificationData.slice(notificationStartIndex, notificationEndIndex);

    // รีเซ็ตหน้าปัจจุบันเป็นหน้า 1 เมื่อมีการเปลี่ยนแปลงการค้นหา
    useEffect(() => {
        setCurrentPage(1);
    }, [filterText]);

    // ฟังก์ชันจัดการการเปลี่ยนหน้าตารางหลัก
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // ฟังก์ชันจัดการการเปลี่ยนหน้าตารางแจ้งเตือน
    const handleNotificationPageChange = (page) => {
        if (page >= 1 && page <= notificationTotalPages) {
            setNotificationCurrentPage(page);
        }
    };

    // คำนวณจำนวนคิวสถานะ
    const waitingQueues = 5; // ตัวเลขสมมติ
    const canceledQueues = notificationData.filter(n => n.status === 'Canceled').length;
    const rescheduledQueues = notificationData.filter(n => n.status === 'Rescheduled').length;

    const handleDetailsClick = (appointment) => {
        setSelectedAppointment(appointment);
    };

    const handleCloseModal = () => {
        setSelectedAppointment(null);
    };

    // ฟังก์ชันสร้างชุดปุ่ม Pagination (ตารางหลัก)
    const renderPaginationButtons = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <button
                        className="page-link shadow-none"
                        onClick={() => handlePageChange(i)}
                        aria-label={`Go to page ${i}`}
                    >
                        {i}
                    </button>
                </li>
            );
        }
        return pageNumbers;
    };

    // ฟังก์ชันสร้างชุดปุ่ม Pagination (แจ้งเตือน)
    const renderNotificationPaginationButtons = () => {
        const pageNumbers = [];
        const maxPagesToShow = 3; // แสดงน้อยลงสำหรับตารางขนาดเล็ก
        let startPage = Math.max(1, notificationCurrentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(notificationTotalPages, startPage + maxPagesToShow - 1);

        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <li key={i} className={`page-item ${notificationCurrentPage === i ? 'active' : ''}`}>
                    <button
                        className="page-link shadow-none"
                        onClick={() => handleNotificationPageChange(i)}
                        aria-label={`Go to notification page ${i}`}
                    >
                        {i}
                    </button>
                </li>
            );
        }
        return pageNumbers;
    };


    return (
        // แก้ไข: ลบแท็ก <head> ที่ทำให้เกิด DOM Nesting Error ออกไป
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet" />
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
                body { font-family: 'Inter', sans-serif; }
                .card { border-radius: 0.75rem; }
                .table-dark th { background-color: #343a40; color: white; }
                .page-link { border-radius: 0.5rem !important; margin: 0 2px; }
                .page-item.active .page-link { background-color: #0d6efd; border-color: #0d6efd; color: white; }
                `}
            </style>
            <div className="min-vh-100 bg-light py-4">
                <div className="container-xxl p-3">

                    <div className="mb-4">
                        <h1 className="h3 mb-2 fw-bold text-dark">ระบบจัดการการนัดหมาย</h1>
                        <label htmlFor="allQueueDate" className="form-label text-muted">เลือกวันที่แสดงนัดหมาย</label>
                        <input
                            id="allQueueDate"
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="form-control form-control-lg fw-bold shadow-sm rounded-lg"
                            style={{ width: '300px' }}
                        />
                    </div>

                    <h2 className="h4 text-secondary mb-3 mt-4">สรุปสถานะคิว</h2>
                    <div className="row g-3 mb-5">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <StatusCard
                                iconClass="bi bi-hourglass-split"
                                label="Waiting Queues (คิวกำลังรอ)"
                                count={waitingQueues}
                                colorClass="border-warning text-warning"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <StatusCard
                                iconClass="bi bi-x-circle-fill"
                                label="Canceled Visited (ยกเลิกนัด)"
                                count={canceledQueues}
                                colorClass="border-danger text-danger"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <StatusCard
                                iconClass="bi bi-calendar-check-fill"
                                label="เลื่อนนัด (Rescheduled)"
                                count={rescheduledQueues}
                                colorClass="border-primary text-primary"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <StatusCard
                                iconClass="bi bi-person-check-fill"
                                label="คิวรวมทั้งหมด"
                                count={initialAppointmentData.length}
                                colorClass="border-success text-success"
                            />
                        </div>
                    </div>

                    <h2 className="h4 text-secondary mb-3">แจ้งเตือนหมอ (คิวใหม่, ขอยกเลิกนัด, เลื่อนนัด)</h2>
                    <div className="card shadow-lg mb-5 rounded-lg">
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col" className="text-muted fw-medium text-center" style={{ width: '80px' }}>
                                                ลำดับ
                                            </th>
                                            <th scope="col" className="text-muted fw-medium">
                                                รายชื่อ
                                            </th>
                                            <th scope="col" className="text-muted fw-medium">
                                                หมายเหตุ
                                            </th>
                                            <th scope="col" className="text-muted fw-medium">
                                                วันที่เปลี่ยน
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentNotifications.length > 0 ? (
                                            currentNotifications.map((notification) => (
                                                <tr
                                                    key={notification.id}
                                                    className={notification.status === 'Canceled' ? 'table-danger' : 'table-light'}
                                                >
                                                    <td className="text-center">{notification.id}</td>
                                                    <td>{notification.name}</td>
                                                    <td className={`fw-semibold ${notification.status === 'Canceled' ? 'text-danger' :
                                                        notification.status === 'Rescheduled' ? 'text-primary' : 'text-success'
                                                        }`}>
                                                        {notification.note}
                                                    </td>
                                                    <td>{notification.date}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="text-center text-muted py-3">
                                                    ไม่พบรายการแจ้งเตือน
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Notification Pagination Controls */}
                        {notificationTotalPages > 1 && (
                            <div className="card-footer bg-light d-flex justify-content-center py-3 rounded-b-lg">
                                <nav>
                                    <ul className="pagination pagination-sm m-0 shadow-sm">
                                        {/* ปุ่ม Previous */}
                                        <li className={`page-item ${notificationCurrentPage === 1 ? 'disabled' : ''}`}>
                                            <button
                                                className="page-link shadow-none"
                                                onClick={() => handleNotificationPageChange(notificationCurrentPage - 1)}
                                                aria-label="Previous Notification Page"
                                            >
                                                <span aria-hidden="true">&laquo; ก่อนหน้า</span>
                                            </button>
                                        </li>

                                        {/* ปุ่มเลขหน้า */}
                                        {renderNotificationPaginationButtons()}

                                        {/* ปุ่ม Next */}
                                        <li className={`page-item ${notificationCurrentPage === notificationTotalPages ? 'disabled' : ''}`}>
                                            <button
                                                className="page-link shadow-none"
                                                onClick={() => handleNotificationPageChange(notificationCurrentPage + 1)}
                                                aria-label="Next Notification Page"
                                            >
                                                <span aria-hidden="true">ถัดไป &raquo;</span>
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        )}
                    </div>

                    <h2 className="h4 text-secondary mb-3">ตารางนัดหมาย (ทั้งหมด {filteredData.length} รายการ)</h2>
                    <div className="card shadow-lg mb-5 rounded-lg">
                        <div className="card-body">
                            <div className="mb-4 d-flex justify-content-between align-items-center flex-wrap">
                                <input
                                    type="text"
                                    placeholder="ค้นหา (ชื่อ, เบอร์โทร, ประเภท, เวลา)..."
                                    className="form-control form-control-md rounded-pill"
                                    value={filterText}
                                    onChange={(e) => setFilterText(e.target.value)}
                                    style={{ maxWidth: '350px' }}
                                />
                                <span className="text-muted mt-2 mt-md-0 text-sm">
                                    แสดง {startIndex + 1} - {Math.min(endIndex, filteredData.length)} จาก {filteredData.length} รายการ
                                </span>
                            </div>

                            <div className="table-responsive">
                                <table className="table table-striped table-hover mb-0">
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col">ชื่อคนไข้</th>
                                            <th scope="col" className="d-none d-sm-table-cell">เบอร์โทรศัพท์</th>
                                            <th scope="col" className="d-none d-md-table-cell">ประเภทการจอง</th>
                                            <th scope="col">วันเวลา</th>
                                            <th scope="col" className="text-end">รายละเอียด</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentAppointments.length > 0 ? (
                                            currentAppointments.map((appointment, index) => (
                                                <tr key={startIndex + index}>
                                                    <td>{appointment.name}</td>
                                                    <td className="d-none d-sm-table-cell">{appointment.phone}</td>
                                                    <td className="d-none d-md-table-cell"><span className="badge bg-light text-dark border">{appointment.type}</span></td>
                                                    <td><span className="badge bg-dark">{appointment.time}</span></td>
                                                    <td className="text-end">
                                                        <button
                                                            onClick={() => handleDetailsClick(appointment)}
                                                            className="btn btn-primary btn-sm rounded-pill px-3 shadow-sm transition-all duration-200 hover:bg-blue-700"
                                                        >
                                                            <i className="bi bi-info-circle-fill me-1"></i> รายละเอียด
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="text-center text-muted py-3">
                                                    ไม่พบรายการนัดหมายที่ตรงกับคำค้นหา
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="card-footer bg-light d-flex justify-content-center py-3 rounded-b-lg">
                                <nav>
                                    <ul className="pagination pagination-sm m-0 shadow-sm">
                                        {/* ปุ่ม Previous */}
                                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                            <button
                                                className="page-link shadow-none"
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                aria-label="Previous"
                                            >
                                                <span aria-hidden="true">&laquo; ก่อนหน้า</span>
                                            </button>
                                        </li>

                                        {/* ปุ่มเลขหน้า */}
                                        {renderPaginationButtons()}

                                        {/* ปุ่ม Next */}
                                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                            <button
                                                className="page-link shadow-none"
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                aria-label="Next"
                                            >
                                                <span aria-hidden="true">ถัดไป &raquo;</span>
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        )}

                    </div>
                </div>

                {selectedAppointment && (
                    <AppointmentDetailModal
                        appointment={selectedAppointment}
                        onClose={handleCloseModal}
                    />
                )}
            </div>
        </>
    );
}

export default Appointments;