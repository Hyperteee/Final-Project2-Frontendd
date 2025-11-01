import React from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PoppularDoc() {
  return (
    <div>
      <section
        className="relative py-12 px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./images/BG/BG-White.png')" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* หัวข้อ + ปุ่ม Dropdown */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">แพทย์ยอดนิยม</h2>
              <div className="h-2 bg-[#000066] mt-3 w-24 rounded"></div>
            </div>

            {/* 🔽 Dropdown แทนปุ่ม “ทั้งหมด” */}
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-custom-button"
                variant=""
                className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-pill text-sm border-0 hover:bg-gray-300 transition"
              >
                ทั้งหมด
              </Dropdown.Toggle>

              <Dropdown.Menu menuVariant="dark">
                <Dropdown.Item href="#">Dashboard</Dropdown.Item>
                <Dropdown.Item href="#">Settings</Dropdown.Item>
                <Dropdown.Item href="#">Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Sign out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* การ์ดแพทย์ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-2xl p-6 min-h-[400px]"
              >
                <div className="w-full aspect-[4/3] bg-gray-300 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-gray-500 text-sm">Image</span>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">ชื่อแพทย์</h3>
                  <p className="text-sm text-gray-500">ความเชี่ยวชาญ</p>
                </div>
              </div>
            ))}
          </div>

          {/* ปุ่มเลื่อนซ้ายขวา */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() =>
                setCurrentOrgSlide(Math.max(0, currentOrgSlide - 1))
              }
              className="w-10 h-10 border-2 border-gray-300 rounded-pill flex items-center justify-center hover:bg-gray-100 transition"
              aria-label="ก่อนหน้า"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => setCurrentOrgSlide(currentOrgSlide + 1)}
              className="w-10 h-10 border-2 border-gray-300 rounded-pill flex items-center justify-center hover:bg-gray-100 transition"
              aria-label="ถัดไป"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* ปุ่มลงทะเบียน */}
          <div className="flex justify-end ml-0 md:ml-20">
            <button className="bg-[#000066] text-white px-8 py-3 rounded-pill hover:bg-[#000088] transition">
              ลงทะเบียน
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
