import { Timer } from 'lucide-react';
import React, { useState, useMemo } from 'react';

// Data Mockup (Keep data structure as close to original as possible)
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

/**
 * Helper component for the Queue Status boxes, styled with Tailwind CSS.
 * Uses Lucide icons (equivalent to Bootstrap Icons used in the original attempt).
 */
const StatusCard = ({ icon: Icon, label, count, colorClass, borderClass }) => (
    <div className={`p-4 bg-white rounded-xl shadow-md transition duration-300 hover:shadow-lg border-l-4 ${borderClass}`}>
        <div className="flex items-center space-x-4">
            {/* The icon component (e.g., CalendarCheck, XCircle, Hourglass) */}
            <Icon className={`w-8 h-8 ${colorClass}`} strokeWidth={2.5} />
            <div>
                <p className="text-sm font-medium text-gray-500 mb-0">{label}</p>
                <p className="text-2xl font-bold text-gray-800">{count}</p>
            </div>
        </div>
    </div>
);

// Lucide icons equivalent to the Bootstrap Icons used
const Hourglass = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 22V4m-2 2a4 4 0 0 1 4 4v.5a.5.5 0 0 0 1 0v-.5c0-2.2-.8-4-3-4m-2 16a4 4 0 0 0 4-4v-.5a.5.5 0 0 1 1 0v.5c0 2.2-.8 4-3 4"/>
    </svg>
);
const XCircle = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>
    </svg>
);
const CalendarCheck = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/>
    </svg>
);
const User = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
);


const Appointments = () => {
    const [filterText, setFilterText] = useState('');

    // Filter appointments based on user input (name, phone, type, or time)
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

    // Calculate queue statuses based on mockup data
    const waitingQueues = 5; // Fixed value from mockup
    const canceledQueues = notificationData.filter(n => n.status === 'Canceled').length;
    const rescheduledQueues = notificationData.filter(n => n.status === 'Rescheduled').length;

    // Handle "Details" button click
    const handleDetailsClick = (appointment) => {
        // Replace with a proper modal or notification in a real app
        console.log('Viewing details for:', appointment);
        // Using console.log instead of alert() as required
        console.log(`รายละเอียดการนัดหมาย\nชื่อ: ${appointment.name}\nประเภท: ${appointment.type}\nเวลา: ${appointment.time}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            {/* --- Main Content Area (Full Width) --- */}
            <div className="max-w-7xl mx-auto p-4 md:p-8 overflow-y-auto">
                {/* Header/Date Picker */}
                <div className="mb-8">
                    <input
                        type="text"
                        value="All Queue Date 2/11/68"
                        disabled
                        className="p-3 text-lg font-bold text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm"
                        style={{ width: '300px' }} // fixed width to match original layout
                    />
                </div>

                {/* --- Queue Status Cards --- */}
                <h2 className="text-xl font-semibold text-gray-700 mb-4">สรุปสถานะคิว</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
                    <StatusCard
                        icon={Timer}
                        label="Waiting Queues (คิวกำลังรอ)"
                        count={waitingQueues}
                        colorClass="text-yellow-600"
                        borderClass="border-yellow-500"
                    />
                    <StatusCard
                        icon={XCircle}
                        label="Canceled Visited (ยกเลิกนัด)"
                        count={canceledQueues}
                        colorClass="text-red-600"
                        borderClass="border-red-500"
                    />
                    <StatusCard
                        icon={CalendarCheck}
                        label="เลื่อนนัด (Rescheduled)"
                        count={rescheduledQueues}
                        colorClass="text-blue-600"
                        borderClass="border-blue-500"
                    />
                </div>
                
                {/* --- Appointments Table --- */}
                <h2 className="text-xl font-semibold text-gray-700 mb-4">ตารางนัดหมาย</h2>
                <div className="bg-white p-4 rounded-xl shadow-lg mb-10">
                    {/* Search/Filter Bar */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="ค้นหา (ชื่อ, เบอร์โทร, ประเภท, เวลา)..."
                            className="w-full md:w-1/3 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            value={filterText}
                            onChange={(e) => setFilterText(e.target.value)}
                        />
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ชื่อคนไข้
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                                        เบอร์โทรศัพท์
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                                        ประเภทการจอง
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        วันเวลา
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        รายละเอียด
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredAppointments.length > 0 ? (
                                    filteredAppointments.map((appointment, index) => (
                                        <tr key={index} className="hover:bg-blue-50 transition duration-100">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appointment.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{appointment.phone}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">{appointment.type}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.time}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button
                                                    onClick={() => handleDetailsClick(appointment)}
                                                    className="text-blue-600 hover:text-blue-900 font-semibold p-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-150"
                                                >
                                                    Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                                            ไม่พบรายการนัดหมายที่ตรงกับคำค้นหา
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* --- Doctor Notifications Table --- */}
                <h2 className="text-xl font-semibold text-gray-700 mb-4">แจ้งเตือนหมอ (คิวใหม่, ขอยกเลิกนัด, เลื่อนนัด)</h2>
                <div className="bg-white p-4 rounded-xl shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
                                        ลำดับ
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        รายชื่อ
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        หมายเหตุ
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        วันที่เปลี่ยน
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {notificationData.map((notification) => (
                                    <tr key={notification.id} className="hover:bg-red-50 transition duration-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{notification.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{notification.name}</td>
                                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${
                                            notification.status === 'Canceled' ? 'text-red-600' : 
                                            notification.status === 'Rescheduled' ? 'text-blue-600' : 'text-green-600'
                                        }`}>
                                            {notification.note}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{notification.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Appointments;