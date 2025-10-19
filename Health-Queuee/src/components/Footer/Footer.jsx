import React from 'react'

export default function Footer() {
  return (
    <div>
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
