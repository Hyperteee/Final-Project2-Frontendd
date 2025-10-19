import React from 'react'

export default function HospitalSearch() {
  return (
<div>
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
</div>
  )
}
