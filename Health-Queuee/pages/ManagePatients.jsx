// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function ManagePatients() {
//     const [users, setUsers] = useState([]);

//     // 1. โหลดข้อมูลจาก LocalStorage เมื่อเปิดหน้าเว็บ
//     useEffect(() => {
//         const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
//         setUsers(storedUsers);
//     }, []);

//     // 2. ฟังก์ชันกดยืนยัน (Approve)
//     const handleApprove = (id) => {
//         const updatedUsers = users.map((user) => {
//             if (user.userId === id) {
//                 return { ...user, role: 'user' };
//             }
//             return user;
//         });

//         setUsers(updatedUsers); // อัปเดตหน้าจอ
//         localStorage.setItem('users', JSON.stringify(updatedUsers)); // อัปเดต LocalStorage
//     };
//     console.log(users)
//     // 3. ฟังก์ชันลบข้อมูล (Delete)
//     const handleDelete = (id) => {
//         if (window.confirm("คุณต้องการลบข้อมูลผู้ใช้งานนี้ใช่หรือไม่?")) {
//             const updatedUsers = users.filter((user) => user.userId !== id);
//             setUsers(updatedUsers);
//             localStorage.setItem('users', JSON.stringify(updatedUsers));
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <div className="d-flex justify-content-between align-items-center mb-4">
//                 <h2>จัดการข้อมูลผู้ใช้งาน (Admin)</h2>
//                 <button
//                     className="btn btn-secondary btn-sm"
//                     onClick={() => window.location.reload()}
//                 >
//                     รีเฟรชข้อมูล
//                 </button>
//             </div>

//             <div className="card shadow-sm border-0">
//                 <div className="card-body p-0">
//                     <div className="table-responsive">
//                         <table className="table table-hover align-middle mb-0">
//                             <thead className="table-light">
//                                 <tr>
//                                     {/* <th>ID</th> */}
//                                     <th className="py-3 ps-4">ชื่อ-นามสกุล</th>
//                                     <th className="py-3">เบอร์โทรศัพท์</th>
//                                     <th className="py-3">Email</th>
//                                     <th className="py-3 text-center">สถานะ</th>
//                                     <th className="py-3 text-center">การจัดการ</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {users.length === 0 ? (
//                                     <tr>
//                                         <td colSpan="5" className="text-center py-5 text-muted">
//                                             ยังไม่มีข้อมูลผู้ลงทะเบียน
//                                         </td>
//                                     </tr>
//                                 ) : (
//                                     users.map((user) => (
                                        
//                                         <tr key={user.userId}>
//                                             {/* <td>{user.userId}</td> */}
//                                             <td className="ps-4 fw-medium">{user.fullname}</td>
//                                             <td>{user.phone}</td>
//                                             <td>{user.email}</td>

//                                             {/* ส่วนแสดงสถานะ */}
//                                             <td className="text-center">
//                                                 <span
//                                                     className={`badge rounded-pill px-3 py-2 ${user.role === 'user' || user.role === 'admin'
//                                                             ? 'bg-success'
//                                                             : 'bg-warning text-dark'
//                                                         }`}
//                                                 >
//                                                     {user.role === 'user' || user.role === 'admin' ? 'อนุมัติแล้ว' : 'รอการยืนยัน'}
//                                                 </span>
//                                             </td>

//                                             {/* ปุ่มจัดการ */}
//                                             <td className="text-center">
//                                                 {user.role !== 'user' || user.role !== 'admin' && (
//                                                     <button
//                                                         className="btn btn-outline-success btn-sm me-2"
//                                                         onClick={() => handleApprove(user.userId)}
//                                                     >
//                                                         <i className="bi bi-check-lg me-1"></i> ยืนยัน
//                                                     </button>
//                                                 )}
//                                                 <button
//                                                     className="btn btn-outline-danger btn-sm"
//                                                     onClick={() => handleDelete(user.userId)}
//                                                 >
//                                                     <i className="bi bi-trash"></i> ลบ
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ManagePatients() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    
    const [activeTab, setActiveTab] = useState('pending'); 

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
        const loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
        setCurrentUser(loggedInUser);
    }, []);

    const handleApprove = (id) => {
        const updatedUsers = users.map((user) => {
            if (user.userId === id) return { ...user, role: 'user' };
            return user;
        });
        saveUsers(updatedUsers);
    };

    const handlePromoteToAdmin = (id) => {
        if (window.confirm("ยืนยันการตั้งผู้ใช้นี้เป็น Admin?")) {
            const updatedUsers = users.map((user) => {
                if (user.userId === id) return { ...user, role: 'admin' };
                return user;
            });
            saveUsers(updatedUsers);
        }
    };

    const handleDemoteToUser = (id) => {
        if (window.confirm("ต้องการลดขั้น Admin คนนี้กลับเป็น User หรือไม่?")) {
            const updatedUsers = users.map((user) => {
                if (user.userId === id) return { ...user, role: 'user' };
                return user;
            });
            saveUsers(updatedUsers);
        }
    };

    const handleDelete = (id) => {
        if (window.confirm("คุณต้องการลบข้อมูลผู้ใช้งานนี้ใช่หรือไม่?")) {
            const updatedUsers = users.filter((user) => user.userId !== id);
            saveUsers(updatedUsers);
        }
    };

    const saveUsers = (data) => {
        setUsers(data);
        localStorage.setItem('users', JSON.stringify(data));
    };

    const isSuperAdmin = currentUser?.role === 'super_admin';

    const filteredUsers = users.filter(user => {
        if (activeTab === 'pending') {
            return user.role === 'pending';
        } else {
            return user.role === 'user' ||   user.role === 'admin'
        }
    });

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>จัดการข้อมูลผู้ใช้งาน</h2>
            </div>

            <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                    <button 
                        className={`nav-link ${activeTab === 'pending' ? 'active fw-bold' : ''}`}
                        onClick={() => setActiveTab('pending')}
                    >
                        รออนุมัติ
                        {users.filter(u => u.role === 'pending').length > 0 && (
                            <span className="badge bg-danger ms-2 rounded-pill">
                                {users.filter(u => u.role === 'pending').length}
                            </span>
                        )}
                    </button>
                </li>
                <li className="nav-item">
                    <button 
                        className={`nav-link ${activeTab === 'all' ? 'active fw-bold' : ''}`}
                        onClick={() => setActiveTab('all')}
                    >
                        รายชื่อทั้งหมด
                    </button>
                </li>
            </ul>

            <div className="card shadow-sm border-0">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="py-3 ps-4">ชื่อ</th>
                                    <th className="py-3 ps-4">นามสกุล</th>
                                    <th className="py-3">Email</th>
                                    <th className="py-3 text-center">สถานะ</th>
                                    <th className="py-3 text-center">การจัดการ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center py-5 text-muted">
                                            {activeTab === 'pending' ? 'ไม่มีรายการรออนุมัติ' : 'ไม่พบข้อมูลผู้ใช้'}
                                        </td>
                                    </tr>
                                ) : (
                                    filteredUsers.map((user) => (
                                        <tr key={user.userId}>
                                            <td className="ps-4 fw-medium">
                                                {user.name}
                                                {user.lastname}
                                                {user.role === 'super_admin' && <span className="badge bg-danger ms-2" style={{fontSize: '0.7em'}}>Super</span>}
                                                {user.role === 'admin' && <span className="badge bg-primary ms-2" style={{fontSize: '0.7em'}}>Admin</span>}
                                            </td>
                                            <td>{user.email}</td>

                                            <td className="text-center">
                                                {user.role === 'pending' ? (
                                                    <span className="badge bg-warning text-dark">รออนุมัติ</span>
                                                ) : (
                                                    <span className="badge bg-success">อนุมัติแล้ว</span>
                                                )}
                                            </td>

                                            <td className="text-center">
                                                {/* Logic ปุ่มจัดการตามแท็บ */}
                                                
                                                {/* ถ้าเป็นคนรออนุมัติ -> โชว์ปุ่มยืนยันเสมอ */}
                                                {user.role === 'pending' && (
                                                    <button 
                                                        className="btn btn-sm btn-success me-2"
                                                        onClick={() => handleApprove(user.userId)}
                                                    >
                                                        ยืนยัน
                                                    </button>
                                                )}

                                                {/* ปุ่มแต่งตั้ง Admin (โชว์เฉพาะ Super Admin และไม่อยู่ในแท็บ Pending) */}
                                                {isSuperAdmin && user.role !== 'pending' && user.role !== 'super_admin' && (
                                                    <>
                                                        {user.role === 'user' ? (
                                                            <button 
                                                                className="btn btn-sm btn-outline-primary me-2"
                                                                onClick={() => handlePromoteToAdmin(user.userId)}
                                                            >
                                                                ขึ้นเป็น Admin
                                                            </button>
                                                        ) : (
                                                            <button 
                                                                className="btn btn-sm btn-outline-warning me-2"
                                                                onClick={() => handleDemoteToUser(user.userId)}
                                                            >
                                                                ปลด Admin
                                                            </button>
                                                        )}
                                                    </>
                                                )}

                                                {/* ปุ่มลบ */}
                                                {user.role !== 'super_admin' && (
                                                    <button 
                                                        className="btn btn-sm btn-outline-danger"
                                                        onClick={() => handleDelete(user.userId)}
                                                    >
                                                        ลบ
                                                    </button>
                                                )}
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
