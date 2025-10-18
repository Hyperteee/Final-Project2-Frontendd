

import { useState } from "react"

export default function HealthcarePage() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-3">
                {/* {Logo Images} */}
              <img src="/HFU-logo.jpg" alt="HFU Logo" className="h-10" />
              <span className="text-2xl font-bold text-blue-600">HFU</span>
            </div>

            <nav className="flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Features
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Hospital Near You
              </a>
              <a href="#solutions" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Solutions
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </a>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Sign Up
              </button>
            </nav>
          </div>
        </div>
      </header>

    {/* Search Part */}
<section className="pt-32 pb-50 bg-gradient-to-br from-blue-50 to-white">
    <div className="max-w-4xl mx-auto px-8 text-center mr-130">
        <h2 className="text-4xl font-bold text-black m-10 mb-15 text-center ml-27">ค้นหาโรงพยาบาล</h2>
        <p className="text-xl text-blue-100 mb-8">
        </p>
        <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white box-content m-auto h-8 w-20 p-4 border-2 rounded-3xl hover:bg-blue-700 transition-colors font-semibold text-lg justify-center items-center flex">
                all
            </button>
            <input 
                type="text" 
                placeholder="ค้นหาชื่อโรงพยาบาล" 
                className="border-2 border-gray-300 bg-gray-300 text-white box-content h-7 w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-white transition-colors font-semibold text-lg" 
            />
        </div>
                    <div>
                <button className="bg-blue-600 text-white ml-20 box-content m-5 mr-1 h-8 w-20 p-4 border-2 rounded-4xl hover:bg-blue-700 transition-colors font-semibold text-lg   ">
                    ทั้งหมด
                </button>
                <button className="bg-blue-600 text-white ml-20 box-content m-5 mr-1 h-8 w-20 p-4 border-2 rounded-4xl hover:bg-blue-700 transition-colors font-semibold text-lg ">
                    แพทย์
                </button>
                <button className="bg-blue-600 text-white ml-20 box-content m-5 mr-1 h-8 w-20 p-4 border-2 rounded-4xl hover:bg-blue-700 transition-colors font-semibold text-lg ">
                    คลินิก
                </button>
            </div>
    </div>
</section>


      {/* ChatBot Part */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Healthcare Queue Management
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsum fugiat ratione dolor, tenetur saepe nihil laudantium quos porro nemo omnis ipsa non odit rerum fuga ut sapiente, neque magnam.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-lg">
                  Chat Bot
                </button>
              </div>
            </div>
            <div>
              <img
                src="./images/smart-healthcare-dashboard.png"
                alt="smart-healthcare-dashboard."
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* package Part */}
      <section id="benefits" className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Popular Package</h2>
            <p className="text-xl text-white">แพคเกจยอดนิยม</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="รอแก้">
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Package</h3>
              <p className="text-gray-600 leading-relaxed">
                *PackageInformations*
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="รอแก้">
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Package</h3>
              <p className="text-gray-600 leading-relaxed">
                *PackageInformations*
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="รอแก้">
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Package</h3>
              <p className="text-gray-600 leading-relaxed">
                *DoctorInformations*
              </p>
            </div>

            {/* Benefit Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="รอแก้">
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Package</h3>
              <p className="text-gray-600 leading-relaxed">
                *PackageInformations*
              </p>
            </div>

            {/* Benefit Card 5 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="รอแก้">
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Package</h3>
              <p className="text-gray-600 leading-relaxed">
                *PackageInformations*
              </p>
            </div>

            {/* Benefit Card 6 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="รอแก้">
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Package</h3>
              <p className="text-gray-600 leading-relaxed">
                *PackageInformations*
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
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
