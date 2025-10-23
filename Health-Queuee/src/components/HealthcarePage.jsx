import { useState } from "react"

export default function HealthcarePage() {
const [currentOrgSlide, setCurrentOrgSlide] = useState(0)
  const [currentPackageSlide, setCurrentPackageSlide] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#000066] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-white text-2xl font-bold">HFU</div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#000066] font-bold text-sm">LOGO</span>
          </div>
        </div>
      </header>

      <section className="relative">
        <img
          src="./images/BG-Hospital.jpg"
          alt="Healthcare Professional"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-6">
          <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input type="text" placeholder="ค้นหา" className="flex-1 outline-none text-gray-700" />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-[#000066]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-xl font-semibold text-white mb-8">โรงพยาบาลที่เข้าร่วมกับเรา</h2>
          <div className="grid grid-cols-5 gap-6 ">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-32">
                <span className="text-gray-400 font-medium">Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-[#000066]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-7xl font-bold text-white mb-4">Chat Bot Docter</h2>
            <p className="text-white text-[20px] leading-relaxed mb-6">
              ผู้ป่วยสามารถสอบถามข้อมูลเบื้องต้น
              <br />
              เกี่ยวกับอาการเจ็บป่วยและรับคำแนะนำ
              <br />
              จากแชทบอทก่อนพบแพทย์
            </p>
            <button className="bg-[#000098] text-white px-8 py-4 rounded-lg hover:bg-[#000088] transition-colors">
              ChatBot
            </button>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="bg-gray-100 rounded-lg p-4 mb-4 h-64 flex items-end">
              <div className="null"></div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 outline-none"
                placeholder="พิมพ์ข้อความ..."
              />
              <button className="bg-[#000066] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#000088] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">แพทย์ยอดนิยม</h2>
            <button className="bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-sm">ทั้งหมด</button>
          </div>
          <div className="grid grid-cols-4 gap-8 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 rounded-xl p-8 h-90">
          <div className="w-60 h-50 bg-gray-300 rounded-2xl mb-4 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Image</span>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900">ชื่อแพทย์</h3>
            <p className="text-sm text-gray-500">ความเชี่ยวชาญ</p>
          </div>
              </div>
            ))}
            
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setCurrentOrgSlide(Math.max(0, currentOrgSlide - 1))}
              className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentOrgSlide(currentOrgSlide + 1)}
              className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex justify-end ml-40 md-20">
            <div className="bg-[#000066] text-white px-10 py-4 rounded-lg hover:bg-[#000088] transition-colors">
                <button>
                  ลงทะเบียน
                </button>
            </div>
          </div>
        </div>
      </section>

<section className="py-12 px-6 bg-[#000066]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-1">
            แพ็กเกจ <span className="text-blue-300">และโปรโมชั่น</span>
          </h2>

          <div className="grid grid-cols-2 gap-6 mb-8 mt-8">
            <div>
              <label className="block text-white mb-2">เลือกประเภท</label>
              <div className="relative">
            <button className="bg-white text-black px-20 py-2 rounded-full transition-colors">
              ทั้งหมด
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </button>

              </div>
            </div>
          <div className="bg-white rounded-full shadow-lg px-[20px] py-[20px] flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input type="text" placeholder="ค้นหา" className="flex-1 outline-none text-gray-700" />
          </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="bg-gray-100 h-48"></div>
              <div className="bg-gray-200 p-4">
                <p className="text-gray-800 font-semibold mb-1">ตรวจสุขภาพประจำปี</p>
                <p className="text-gray-800 font-semibold mb-3">ตรวจสุขภาพประจำปี</p>
                <button className="bg-white text-gray-800 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                  ดูรายละเอียด
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="bg-gray-100 h-48"></div>
              <div className="bg-gray-200 p-4">
                <p className="text-gray-800 font-semibold mb-1">ฉีดวัคซีน</p>
                <p className="text-gray-800 font-semibold mb-3">ฉีดวัคซีน</p>
                <div className="flex gap-2">
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                    ดูรายละเอียด
                  </button>
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                    จองเลย
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="bg-gray-100 h-48"></div>
              <div className="bg-gray-200 p-4">
                <p className="text-gray-800 font-semibold mb-1">ความงาม</p>
                <p className="text-gray-800 font-semibold mb-3">ความงาม</p>
                <button className="bg-white text-gray-800 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                  ดูรายละเอียด
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="bg-gray-100 h-48"></div>
              <div className="bg-gray-200 p-4">
                <p className="text-gray-800 font-semibold mb-1">ความงาม</p>
                <p className="text-gray-800 font-semibold mb-3">ความงาม</p>
                <button className="bg-white text-gray-800 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                  ดูรายละเอียด
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="bg-gray-100 h-48"></div>
              <div className="bg-gray-200 p-4">
                <p className="text-gray-800 font-semibold mb-1">ความงาม</p>
                <p className="text-gray-800 font-semibold mb-3">ความงาม</p>
                <button className="bg-white text-gray-800 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                  ดูรายละเอียด
                </button>
              </div>
            </div>
          
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="bg-gray-100 h-48"></div>
              <div className="bg-gray-200 p-4">
                <p className="text-gray-800 font-semibold mb-1">ความงาม</p>
                <p className="text-gray-800 font-semibold mb-3">ความงาม</p>
                <button className="bg-white text-gray-800 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                  ดูรายละเอียด
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-8">
            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-[#000066]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-[#000066]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
        </div>
      </section>
      <footer id="contact" className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/HFU-logo-white.jpg" alt="HFU Logo" className="h-8" />
                <span className="text-2xl font-bold text-white">HFU</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Leading healthcare queue management solutions 
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Products</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Queue Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Appointment System
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Analytics Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HFU. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
