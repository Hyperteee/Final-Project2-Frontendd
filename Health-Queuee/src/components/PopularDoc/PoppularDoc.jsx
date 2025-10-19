import React from 'react'

export default function PoppularDoc() {
  return (
    <div>
      <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Doctor Most Pick</h2>
            <p className="text-xl text-gray-600">แพทย์ยอดนิยม</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="รอแก้">
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Doctor Name</h3>
              <p className="text-gray-600 leading-relaxed">
                *DoctorInformations*
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="รอแก้">
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Doctor Name</h3>
              <p className="text-gray-600 leading-relaxed">
                *DoctorInformations*
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="รอแก้">
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Doctor Name</h3>
              <p className="text-gray-600 leading-relaxed">
                *DoctorInformations*
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}