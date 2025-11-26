import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

// รับ props: requiredRoles เป็น array เช่น ['admin'] หรือ ['user', 'admin']
const ProtectedRoute = ({ requiredRoles }) => {
  const { user } = useAuth(); 

  if (!user) {
    // 1. ถ้าไม่ได้ล็อกอิน ให้ออกไปหน้า Login
    return <Navigate to="/login" replace />;
  }
  
  // 2. ถ้าล็อกอินแล้ว แต่ Role ไม่ตรงกับที่กำหนด
  if (requiredRoles && !requiredRoles.includes(user.role)) {
    // อาจจะพาไปหน้า 'Access Denied' หรือหน้าหลัก
    return <Navigate to="/" replace />; 
  }
  
  return <Outlet />;
};

export default ProtectedRoute;