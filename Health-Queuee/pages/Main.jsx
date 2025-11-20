import React, { useState } from 'react';
import { queueData, summaryData, patientData } from '../data/MainData';

const Main = () => {
    const { waitingQueues, canceledVisited, rescheduled, date } = summaryData;

    // --- 1. ส่วนจัดการ Pagination ---
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // จำนวนรายการต่อหน้า (ปรับได้ตามต้องการ)

    // คำนวณข้อมูลที่จะแสดงในหน้านั้นๆ
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPatients = patientData.slice(indexOfFirstItem, indexOfLastItem);

    // คำนวณจำนวนหน้าทั้งหมด
    const totalPages = Math.ceil(patientData.length / itemsPerPage);

    // ฟังก์ชันเปลี่ยนหน้า
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
    const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
    // -----------------------------

    return (
        <div className="flex bg-gray-50 min-h-screen">

            {/* Sidebar (คงเดิม) */}
            <div className="w-1/5 bg-white shadow-lg p-4 border-r border-gray-200">
                <div className="mb-8">
                    <div className="rounded-full bg-gray-200 h-16 w-16 mb-2"></div>
                    <p className="font-bold">ชื่อ-นามสกุล</p>
                    <p className="text-sm text-gray-500">ชื่อโรงพยาบาล</p>
                </div>
                <ul className="space-y-2 text-gray-700">
                    <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <i className="bi bi-calendar-check mr-2"></i> รายการนัด
                    </li>
                    <li className="bg-blue-100 text-blue-800 p-2 rounded-lg font-semibold cursor-pointer">
                        <i className="bi bi-people mr-2"></i> จัดการคนไข้
                    </li>
                    <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <i className="bi bi-person-badge mr-2"></i> จัดการหมอ
                    </li>
                    <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <i className="bi bi-gear mr-2"></i> จัดการข้อมูลอื่นๆ
                    </li>
                </ul>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow p-8">

                {/* Summary Cards (คงเดิม) */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">All Queue Date {date}</h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between border-l-4 border-blue-500">
                            <div className="flex items-center">
                                <i className="bi bi-watch text-2xl text-blue-600 mr-3"></i>
                                <div>
                                    <p className="text-lg font-semibold">Waiting Queues</p>
                                    <p className="text-3xl font-bold text-gray-800">{waitingQueues}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between border-l-4 border-red-500">
                            <div className="flex items-center">
                                <i className="bi bi-x-circle text-2xl text-red-600 mr-3"></i>
                                <div>
                                    <p className="text-lg font-semibold">Canceled Visited</p>
                                    <p className="text-3xl font-bold text-gray-800">{canceledVisited}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between border-l-4 border-yellow-500">
                            <div className="flex items-center">
                                <i className="bi bi-calendar-minus text-2xl text-yellow-600 mr-3"></i>
                                <div>
                                    <p className="text-lg font-semibold">เลื่อนนัด</p>
                                    <p className="text-3xl font-bold text-gray-800">{rescheduled}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ตารางรายการคิว (คงเดิม) */}
                <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                    <h3 className="text-lg font-bold text-gray-700 mb-4">รายการคิววันนี้</h3>
                    <table className="table-auto w-full text-left">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">ชื่อคนไข้</th>
                                <th className="py-3 px-6 text-left">เบอร์โทรศัพท์</th>
                                <th className="py-3 px-6 text-left">ประเภทการจอง</th>
                                <th className="py-3 px-6 text-left">วันเวลา</th>
                                <th className="py-3 px-6 text-center">รายละเอียด</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {queueData.map((item, index) => (
                                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="py-3 px-6 whitespace-nowrap">{item.name}</td>
                                    <td className="py-3 px-6">{item.phone}</td>
                                    <td className="py-3 px-6">{item.type}</td>
                                    <td className="py-3 px-6">{item.time}</td>
                                    <td className="py-3 px-6 text-center">
                                        <button className="text-blue-500 font-semibold hover:text-blue-700 transition duration-150">Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ตารางจัดการคนไข้ (Patient Table) */}
                <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col min-h-[600px]"> {/* เพิ่ม min-h เพื่อกันตารางหดเวลาข้อมูลน้อย */}
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-700">
                            <i className="bi bi-people-fill mr-2 text-blue-600"></i>
                            จัดการคนไข้ (Patient Management)
                        </h3>
                        <div className="flex space-x-2">
                            <div className="relative">
                                <input type="text" placeholder="ค้นหา..." className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                <i className="bi bi-search absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs"></i>
                            </div>
                        </div>
                    </div>

                    <div className="flex-grow"> {/* ให้ส่วนตารางขยายเต็มพื้นที่ */}
                        <table className="table-auto w-full text-left">
                            <thead>
                                <tr className="bg-blue-50 text-blue-800 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">ID</th>
                                    <th className="py-3 px-6 text-left">ชื่อคนไข้</th>
                                    <th className="py-3 px-6 text-left">โรงพยาบาล</th>
                                    <th className="py-3 px-6 text-left">แผนก</th>
                                    <th className="py-3 px-6 text-left">เบอร์โทรศัพท์</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {/* 👈 ใช้ currentPatients แทน patientData ทั้งหมด */}
                                {currentPatients.map((patient) => (
                                    <tr key={patient.id} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="py-3 px-6 font-semibold">{patient.id}</td>
                                        <td className="py-3 px-6 whitespace-nowrap">{patient.name}</td>
                                        <td className="py-3 px-6">{patient.hospital}</td>
                                        <td className="py-3 px-6">
                                            <span className="bg-green-100 text-green-800 py-1 px-2 rounded-full text-xs">
                                                {patient.department}
                                            </span>
                                        </td>
                                        <td className="py-3 px-6">{patient.phone}</td>
                                        <td className="py-3 px-6 text-center"></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-center items-center mt-6 space-x-1">

                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 rounded-md text-sm font-medium border transition-colors
                                ${currentPage === 1
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-blue-600 border-gray-200 hover:bg-blue-50'}`}
                        >
                            « ก่อนหน้า
                        </button>

                        {/* เลขหน้า (Page Numbers) */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`px-3 py-1 rounded-md text-sm font-medium border transition-colors
                                    ${currentPage === number
                                        ? 'bg-blue-600 text-white border-blue-600' // สถานะ Active (สีฟ้า)
                                        : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50' // สถานะปกติ
                                    }`}
                            >
                                {number}
                            </button>
                        ))}
                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-1 rounded-md text-sm font-medium border transition-colors
                                ${currentPage === totalPages
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-blue-600 border-gray-200 hover:bg-blue-50'}`}
                        >
                            ถัดไป »
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Main;