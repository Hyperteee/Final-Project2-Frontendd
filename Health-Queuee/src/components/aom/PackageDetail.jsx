import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/detail.css";

export default function PackageDetail() {
  const { id } = useParams();
  const packages = JSON.parse(localStorage.getItem("packages")) || [];
  const pkg = packages.find((item) => item.id === Number(id));

  if (!pkg) return <h2>ไม่พบข้อมูลแพ็กเกจ</h2>;

  return (
    <div className="detail-wrapper">
      <div className="detail-card">

        {/* รูป */}
        <img src={pkg.image} alt={pkg.title} className="detail-img" />

        {/* ชื่อแพ็กเกจ */}
        <h1 className="detail-title">{pkg.title}</h1>

        {/* ราคา */}
        <p className="detail-price">{pkg.detail}</p>

        {/* ปุ่มติดต่อ */}
        <div className="detail-contact">
        </div>

        {/* รายละเอียด */}
        <h2 className="detail-subtitle">ข้อมูลแพ็กเกจ</h2>
        <p className="detail-description">
          รายละเอียดของแพ็กเกจ เช่น รายการตรวจ รายการการรักษา ฯลฯ
        </p>

        {/* ปุ่มกลับ */}
        <Link to="/" className="back-btn">⬅ กลับ</Link>
      </div>
    </div>
  );
}
