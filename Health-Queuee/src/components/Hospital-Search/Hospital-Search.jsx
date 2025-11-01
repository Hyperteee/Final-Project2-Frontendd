import React from 'react'

export default function HospitalSearch() {
  return (
<div>
      <section className="relative">
        <img
          src="./images/BG-Hospital.jpg"
          alt="Healthcare Professional"
          className="w-full h-[700px] object-cover -mt-1"
        />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-6">
          <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center gap-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="ค้นหา"
              className="flex-1 outline-none text-gray-700"
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
      </section>
</div>
  )
}
