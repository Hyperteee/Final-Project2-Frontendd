import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ManagePatients() {
    const [users, setUsers] = useState([]);

    // 1. โหลดข้อมูลจาก LocalStorage เมื่อเปิดหน้าเว็บ
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    // 2. ฟังก์ชันกดยืนยัน (Approve)
    const handleApprove = (id) => {
        const updatedUsers = users.map((user) => {
            if (user.id === id) {
                // เปลี่ยนสถานะเป็น approved
                return { ...user, status: 'approved' };
            }
            return user;
        });

        setUsers(updatedUsers); // อัปเดตหน้าจอ
        localStorage.setItem('users', JSON.stringify(updatedUsers)); // อัปเดต LocalStorage
    };

    // 3. ฟังก์ชันลบข้อมูล (Delete)
    const handleDelete = (id) => {
        if (window.confirm("คุณต้องการลบข้อมูลผู้ใช้งานนี้ใช่หรือไม่?")) {
            const updatedUsers = users.filter((user) => user.id !== id);
            setUsers(updatedUsers);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
        }
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>จัดการข้อมูลผู้ใช้งาน (Admin)</h2>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => window.location.reload()}
                >
                    รีเฟรชข้อมูล
                </button>
            </div>

            <div className="card shadow-sm border-0">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="py-3 ps-4">ชื่อ-นามสกุล</th>
                                    <th className="py-3">เบอร์โทรศัพท์</th>
                                    <th className="py-3">Email</th>
                                    <th className="py-3 text-center">สถานะ</th>
                                    <th className="py-3 text-center">การจัดการ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="text-center py-5 text-muted">
                                            ยังไม่มีข้อมูลผู้ลงทะเบียน
                                        </td>
                                    </tr>
                                ) : (
                                    users.map((user) => (
                                        <tr key={user.id}>
                                            <td className="ps-4 fw-medium">{user.fullname}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.email}</td>

                                            {/* ส่วนแสดงสถานะ */}
                                            <td className="text-center">
                                                <span
                                                    className={`badge rounded-pill px-3 py-2 ${user.status === 'approved'
                                                            ? 'bg-success'
                                                            : 'bg-warning text-dark'
                                                        }`}
                                                >
                                                    {user.status === 'approved' ? 'อนุมัติแล้ว' : 'รอการยืนยัน'}
                                                </span>
                                            </td>

                                            {/* ปุ่มจัดการ */}
                                            <td className="text-center">
                                                {user.status !== 'approved' && (
                                                    <button
                                                        className="btn btn-outline-success btn-sm me-2"
                                                        onClick={() => handleApprove(user.id)}
                                                    >
                                                        <i className="bi bi-check-lg me-1"></i> ยืนยัน
                                                    </button>
                                                )}
                                                <button
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={() => handleDelete(user.id)}
                                                >
                                                    <i className="bi bi-trash"></i> ลบ
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}