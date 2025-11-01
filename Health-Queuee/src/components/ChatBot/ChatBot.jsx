import React from 'react'

export default function ChatBot() {
  return (
    <div>
      <section
        className="relative py-12 px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./images/BG/BG2.png')" }}
      >
        {/* ชั้น overlay มืดและเบลอ */}
        <div className="absolute inset-0 bg-black/0 backdrop-blur-sm"></div>

        {/* เนื้อหาหลัก */}
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-center text-3xl font-semibold text-white mb-8 drop-shadow-md">
            Trusted by teams at
          </h1>

          {/* เส้นขาวตกแต่ง */}
          <div className="h-1 w-24 bg-white mx-auto rounded-full mb-10"></div>

          {/* ช่องโลโก้ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-md rounded-lg p-8 flex items-center justify-center h-32 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <span className="text-gray-600 font-medium">Logo</span>
              </div>
            ))}
          </div>
          <div className="relative max-w-7xl mx-auto m-[35px] grid grid-cols-2 gap-12 items-center m">
            {/* ฝั่งข้อความ */}
            <div>
              <h2 className="text-7xl font-bold text-white mb-4 drop-shadow-lg">
                Chat Bot Doctor
              </h2>
              <p className="text-white text-[20px] leading-relaxed mb-6 drop-shadow-md">
                ผู้ป่วยสามารถสอบถามข้อมูลเบื้องต้น
                <br />
                เกี่ยวกับอาการเจ็บป่วยและรับคำแนะนำ
                <br />
                จากแชทบอทก่อนพบแพทย์
              </p>
              <button className="bg-[#000066] text-white px-8 py-4 rounded-pill hover:bg-[#000088] transition-colors shadow-lg">
                ChatBot
              </button>
            </div>

            {/* กล่องแชทจำลอง */}
            <div className="bg-white/90 rounded-2xl shadow-2xl p-6 backdrop-blur-md">
              <div className="bg-gray-100 rounded-lg p-4 mb-4 h-64 flex items-end overflow-hidden">
                <div className="text-gray-500 italic">
                  เริ่มพิมพ์เพื่อสนทนา...
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 outline-none"
                  placeholder="พิมพ์ข้อความ..."
                />
                <button className="bg-[#000066] text-white w-10 h-10 rounded-pill flex items-center justify-center hover:bg-[#000088] transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
