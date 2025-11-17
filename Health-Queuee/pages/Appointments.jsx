import React, { useState, useMemo } from 'react';

const initialAppointmentData = [
    { name: 'นายเอบีซี', phone: '0942513799', type: 'ติดตามอาการ', time: '08.00-09.00' },
    { name: 'นายเอบีซี', phone: '0942513799', type: 'อายุรกรรม', time: '08.00-09.00' },
    { name: 'นายเอบีซี', phone: '0942513799', type: 'จิตเวช', time: '08.00-09.00' },
    { name: 'นายเอบีซี', phone: '0942513799', type: 'แพคเกจตรวจสุขภาพ', time: '08.00-09.00' },
    { name: 'นายเอบีซี', phone: '0942513799', type: 'ติดตามอาการ', time: '08.00-09.00' },
    { name: 'นายเอบีซี', phone: '0942513799', type: 'ศัลยกรรม', time: '09.00-10.00' },
    { name: 'นายเอบีซี', phone: '0942513799', type: 'ติดตามอาการ', time: '10.00-11.00' },
    { name: 'นายเอบีซี', phone: '0942513799', type: 'ติดตามอาการ', time: '11.00-12.00' },
];

const notificationData = [
    { id: 1, name: 'นาย-----------------------', note: 'ขอยกเลิกนัด', date: '17/11/2568', status: 'Canceled' },
    { id: 2, name: 'นาย-----------------------', note: 'เลื่อนนัด', date: '19/11/2568', status: 'Rescheduled' },
    { id: 3, name: 'นาย-----------------------', note: 'คิวใหม่', date: '19/11/2568', status: 'New' },
    { id: 4, name: 'นาย-----------------------', note: 'เลื่อนนัด', date: '20/11/2568', status: 'Rescheduled' },
];


const StatusCard = ({ iconClass, label, count, colorClass }) => (
    <div className={`card shadow-sm border-start border-4 ${colorClass}`}>
        <div className="card-body">
            <div className="d-flex align-items-center">
                <i className={`${iconClass} fs-3 me-3 ${colorClass.replace('border-', 'text-')}`}></i>
                <div>
                    <p className="text-muted mb-0 fw-medium">{label}</p>
                    <p className="h4 fw-bold text-dark">{count}</p>
                </div>
            </div>
        </div>
    </div>
);


const Appointments = () => {
    const today = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(today);
    const [filterText, setFilterText] = useState('');

    const filteredAppointments = useMemo(() => {
        const lowerCaseFilter = filterText.toLowerCase();
        if (!lowerCaseFilter) return initialAppointmentData;

        return initialAppointmentData.filter(app =>
            app.name.toLowerCase().includes(lowerCaseFilter) ||
            app.phone.includes(lowerCaseFilter) ||
            app.type.toLowerCase().includes(lowerCaseFilter) ||
            app.time.includes(lowerCaseFilter)
        );
    }, [filterText]);

    // Calculate 
    const waitingQueues = 5; 
    const canceledQueues = notificationData.filter(n => n.status === 'Canceled').length;
    const rescheduledQueues = notificationData.filter(n => n.status === 'Rescheduled').length;

    // Handle 
    const handleDetailsClick = (appointment) => {
        console.log('Viewing details for:', appointment);
        console.log(`รายละเอียดการนัดหมาย\nชื่อ: ${appointment.name}\nประเภท: ${appointment.type}\nเวลา: ${appointment.time}`);
    };

    return (
        <div className="min-vh-100 bg-light py-4">
            <div className="container-xxl p-3">
                
                <div className="mb-4">
                    <label htmlFor="allQueueDate" className="form-label visually-hidden">All Queue Date</label>
                    <input
                        id="allQueueDate"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="form-control form-control-lg fw-bold shadow-sm"
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
                <div className="card shadow-lg mb-5">
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
                                    {notificationData.map((notification) => (
                                        <tr key={notification.id} className={notification.status === 'Canceled' ? 'table-danger' : 'table-light'}>
                                            <td className="text-center">{notification.id}</td>
                                            <td>{notification.name}</td>
                                            <td className={`fw-semibold ${
                                                notification.status === 'Canceled' ? 'text-danger' :
                                                notification.status === 'Rescheduled' ? 'text-primary' : 'text-success'
                                            }`}>
                                                {notification.note}
                                            </td>
                                            <td>{notification.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <h2 className="h4 text-secondary mb-3">ตารางนัดหมาย</h2>
                <div className="card shadow-lg mb-5">
                    <div className="card-body">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="ค้นหา (ชื่อ, เบอร์โทร, ประเภท, เวลา)..."
                                className="form-control form-control-md"
                                value={filterText}
                                onChange={(e) => setFilterText(e.target.value)}
                                style={{ maxWidth: '300px' }}
                            />
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
                                    {filteredAppointments.length > 0 ? (
                                        filteredAppointments.map((appointment, index) => (
                                            <tr key={index}>
                                                <td>{appointment.name}</td>
                                                <td className="d-none d-sm-table-cell">{appointment.phone}</td>
                                                <td className="d-none d-md-table-cell">{appointment.type}</td>
                                                <td>{appointment.time}</td>
                                                <td className="text-end">
                                                    <button
                                                        onClick={() => handleDetailsClick(appointment)}
                                                        className="btn btn-outline-primary btn-sm"
                                                    >
                                                        <i className="bi bi-info-circle-fill me-1"></i> Details
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
                </div>


            </div>
        </div>
    );
}

export default Appointments;