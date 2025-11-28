import React, { useState, useRef, useEffect } from 'react';
import { User, Bot, MapPin, Activity, HeartPulse, Stethoscope, Pill, Info, Smile, Eye, Brain } from 'lucide-react';

const ChatBot = () => {
  // State สำหรับเก็บข้อความ
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "สวัสดีครับ! Health Queue ยินดีให้บริการ 🏥 ผมช่วยแนะนำแผนกจองคิวตามอาการเบื้องต้นได้ครับ วันนี้คุณมีอาการอย่างไรบ้างครับ?",
      sender: "bot"
    }
  ]);

  const [isTyping, setIsTyping] = useState(false); // สถานะกำลังพิมพ์
  const messagesEndRef = useRef(null);

  // เลื่อนลงล่างสุดเสมอเมื่อมีข้อความใหม่
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // --- Logic คัดกรองอาการ (Symptom Triage) ---
  const generateReply = (text) => {
    const lowerText = text.toLowerCase();

    // 1. กลุ่มอาการทั่วไป / อายุรกรรม
    if (lowerText.includes("ไข้") || lowerText.includes("ตัวร้อน") || lowerText.includes("หนาว") || lowerText.includes("เพลีย")) {
      return {
        text: "หากมีอาการไข้หรือตัวร้อน แนะนำจองคิว 'แผนกอายุรกรรม (General Medicine)' ครับ 🌡️",
        recommendation: "General Medicine"
      };
    }

    // 2. กลุ่มปวดท้อง / ทางเดินอาหาร
    else if (lowerText.includes("ปวดท้อง") || lowerText.includes("ท้องเสีย") || lowerText.includes("อาเจียน") || lowerText.includes("จุกเสียด")) {
      return {
        text: "อาการเกี่ยวกับช่องท้อง แนะนำจองคิว 'แผนกทางเดินอาหารและตับ (Gastroenterology)' ครับ 🩺 งดน้ำและอาหารก่อนมาตรวจด้วยนะครับ",
        recommendation: "GI Center"
      };
    }

    // 3. กลุ่มทางเดินหายใจ / หู คอ จมูก
    else if (lowerText.includes("เจ็บคอ") || lowerText.includes("ไอ") || lowerText.includes("น้ำมูก") || lowerText.includes("หู")) {
      return {
        text: "อาการทางเดินหายใจ แนะนำแผนก 'หู คอ จมูก (ENT)' ครับ 👃 หากมีไข้สูงร่วมด้วย แนะนำให้ตรวจ ATK เบื้องต้นก่อนนะครับ",
        recommendation: "ENT"
      };
    }

    // 4. กลุ่มปวดหัว / ระบบประสาท
    else if (lowerText.includes("ปวดหัว") || lowerText.includes("เวียนหัว") || lowerText.includes("ไมเกรน") || lowerText.includes("วูบ")) {
      return {
        text: "อาการปวดศีรษะหรือระบบประสาท แนะนำแผนก 'อายุรกรรมระบบประสาท (Neurology)' ครับ 🧠 พักผ่อนให้เพียงพอและหลีกเลี่ยงแสงจ้าครับ",
        recommendation: "Neurology"
      };
    }

    // 5. กลุ่มกระดูกและข้อ
    else if (lowerText.includes("ปวดหลัง") || lowerText.includes("ปวดเข่า") || lowerText.includes("กระดูก") || lowerText.includes("ข้อเท้า")) {
      return {
        text: "อาการปวดตามร่างกาย แนะนำแผนก 'ศัลยกรรมกระดูกและข้อ (Orthopedics)' ครับ 🦴",
        recommendation: "Orthopedics"
      };
    }

    // 6. กลุ่มผิวหนัง
    else if (lowerText.includes("ผื่น") || lowerText.includes("คัน") || lowerText.includes("ตุ่ม")) {
      return {
        text: "ปัญหาสุขภาพผิวหนัง แนะนำแผนก 'ผิวหนัง (Dermatology)' ครับ",
        recommendation: "Dermatology"
      };
    }

    // --- เพิ่มอาการใหม่ ---

    // 7. กลุ่มทันตกรรม (Dental)
    else if (lowerText.includes("ฟัน") || lowerText.includes("เหงือก") || lowerText.includes("เสียวฟัน") || lowerText.includes("ปากเหม็น")) {
      return {
        text: "อาการเกี่ยวกับช่องปากและฟัน แนะนำแผนก 'ทันตกรรม (Dentistry)' ครับ 🦷",
        recommendation: "Dentistry"
      };
    }

    // 8. กลุ่มจักษุ (Eye)
    else if (lowerText.includes("ตา") || lowerText.includes("มองไม่ชัด") || lowerText.includes("เคืองตา")) {
      return {
        text: "อาการเกี่ยวกับดวงตา แนะนำแผนก 'จักษุ (Ophthalmology)' ครับ 👁️",
        recommendation: "Ophthalmology"
      };
    }

    // 9. กลุ่มสุขภาพจิต (Psychiatry)
    else if (lowerText.includes("เครียด") || lowerText.includes("นอนไม่หลับ") || lowerText.includes("เศร้า") || lowerText.includes("วิตก")) {
      return {
        text: "หากมีความกังวลใจหรือปัญหาสุขภาพจิต แนะนำแผนก 'จิตเวช (Psychiatry)' ครับ 🧠 เรายินดีรับฟังเสมอครับ",
        recommendation: "Psychiatry"
      };
    }

    // คำทักทาย
    else if (lowerText.includes("สวัสดี") || lowerText.includes("ดีครับ") || lowerText.includes("ดีค่ะ")) {
      return {
        text: "สวัสดีครับ มีอาการเจ็บป่วยตรงไหน แจ้งผมได้เลยนะครับ เดี๋ยวผมช่วยแนะนำแผนกให้ครับ",
        recommendation: null
      };
    }

    // ตอบไม่ได้
    else {
      return {
        text: "ขออภัยครับ ผมอาจจะไม่แน่ใจอาการนี้ 🤔 เบื้องต้นแนะนำจอง 'แผนกอายุรกรรมทั่วไป' เพื่อให้แพทย์วินิจฉัยก่อน หรือติดต่อจุดคัดกรองของโรงพยาบาลครับ",
        recommendation: "General Medicine"
      };
    }
  };

  // ฟังก์ชันส่งข้อความแบบด่วน
  const sendQuickReply = (text) => {
    const newMsg = { id: Date.now(), text: text, sender: "user" };
    setMessages((prev) => [...prev, newMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const replyData = generateReply(text);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: replyData.text,
          sender: "bot",
          recommendation: replyData.recommendation
        }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans text-slate-800">

      <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between z-10 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md">
            <HeartPulse size={24} />
          </div>
          <div>
            <h1 className="font-bold text-xl text-slate-800 leading-tight">Health Queue AI</h1>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Online • ระบบคัดกรองอัตโนมัติ
            </p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-slate-50 custom-scrollbar">
        <div className="flex justify-center">
          <span className="text-xs text-slate-400 bg-slate-200/50 px-3 py-1 rounded-full">วันนี้</span>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`flex max-w-[85%] md:max-w-[70%] gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>

              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm 
                ${msg.sender === "user" ? "bg-indigo-100 text-indigo-600" : "bg-white text-blue-600 border border-blue-100"}`}>
                {msg.sender === "user" ? <User size={18} /> : <Bot size={20} />}
              </div>

              <div className="flex flex-col gap-1">
                <div
                  className={`p-3 md:p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed
                    ${msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-tr-none"
                      : "bg-white text-slate-700 border border-slate-200 rounded-tl-none"
                    }`}
                >
                  {msg.text}
                </div>

                <span className={`text-[10px] text-slate-400 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex w-full justify-start">
            <div className="flex gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-blue-600 border border-blue-100 flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none flex items-center gap-1 shadow-sm">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white border-t border-slate-200 p-4 sticky bottom-0 z-10 pb-6 md:pb-4">
        <div className="max-w-4xl mx-auto w-full space-y-3">

          <div className="text-center mb-2">
            <span className="text-sm text-slate-500 font-medium">เลือกอาการของคุณ</span>
          </div>

          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 justify-center flex-wrap">
            <QuickReplyButton icon={<Activity size={14} />} text="เป็นไข้" onClick={() => sendQuickReply("มีอาการไข้สูง")} />
            <QuickReplyButton icon={<Pill size={14} />} text="ปวดท้อง" onClick={() => sendQuickReply("ปวดท้องมาก")} />
            <QuickReplyButton icon={<Activity size={14} />} text="ปวดหัว" onClick={() => sendQuickReply("ปวดหัว ไมเกรน")} />
            <QuickReplyButton icon={<Stethoscope size={14} />} text="เจ็บคอ/ไอ" onClick={() => sendQuickReply("เจ็บคอ ไอ")} />
            <QuickReplyButton icon={<Smile size={14} />} text="ปวดฟัน" onClick={() => sendQuickReply("ปวดฟัน")} />
            <QuickReplyButton icon={<Eye size={14} />} text="เจ็บตา" onClick={() => sendQuickReply("เจ็บตา มองไม่ชัด")} />
            <QuickReplyButton icon={<Brain size={14} />} text="เครียด/นอนไม่หลับ" onClick={() => sendQuickReply("เครียด นอนไม่หลับ")} />
          </div>

          <div className="text-center pt-2">
            <p className="text-[10px] text-slate-400">AI อาจมีความคลาดเคลื่อน โปรดปรึกษาแพทย์หากมีอาการรุนแรง</p>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const QuickReplyButton = ({ text, icon, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-1.5 px-4 py-3 bg-white text-slate-600 text-sm border border-slate-200 rounded-xl hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition whitespace-nowrap shadow-sm active:scale-95"
  >
    {icon}
    {text}
  </button>
);

export default ChatBot;