import { useState } from "react"

export default function Navbar() {
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
    </div>
  )
}

