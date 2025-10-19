import React from 'react'

export default function ChatBot() {
  return (
    <div>
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
    </div>
  )
}
