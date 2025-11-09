import dataIcon from "../../../images/icon-department/icon-department";

const bangkokHospital = {
    id: 9,
    name: "โรงพยาบาลกรุงเทพ",
    state: "กรุงเทพมหานคร",
    type: "เครือโรงพยาบาลเอกชน",
    logo: "images/logohospital/bangkok.png",
    stars: 4.7,
    reviews: 1505,
    location: { lat: 13.7475, lng: 100.5851 },
    district: "เขตห้วยขวาง",
    departments: [
      {
        name: "ศูนย์อุบัติเหตุและฉุกเฉิน",
        logo: dataIcon.surgery,
        doctors: [
          {
            name: "นพ. วศิน ภักดีรัฐ",
            specialization: "ศัลยแพทย์อุบัติเหตุ",
            schedule: [
              { day: "จันทร์", time: "08:00 - 10:00", isBooked: false },
              { day: "พฤหัสบดี", time: "14:00 - 16:00", isBooked: false },
            ],
          },
          {
            name: "พญ. ธัญญาภรณ์ เทียมทรัพย์",
            specialization: "เวชศาสตร์ฉุกเฉิน",
            schedule: [
              { day: "อังคาร", time: "09:00 - 11:00", isBooked: false },
              { day: "ศุกร์", time: "13:00 - 15:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์หัวใจกรุงเทพ",
        logo: dataIcon.heart,
        doctors: [
          {
            name: "นพ. พงศ์พันธุ์ อรุณรัตน์",
            specialization: "อายุรแพทย์หัวใจ-ตจ",
            schedule: [
              { day: "พุธ", time: "09:00 - 11:00", isBooked: false },
              { day: "เสาร์", time: "10:00 - 12:00", isBooked: false },
            ],
          },
          {
            name: "นพ. สิทธิพงศ์ ลีลาศ",
            specialization: "ศัลยแพทย์หัวใจและทรวงอก",
            schedule: [
              { day: "อังคาร", time: "14:00 - 16:00", isBooked: false },
              { day: "ศุกร์", time: "09:30 - 11:30", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์กระดูกสันหลัง",
        logo: dataIcon.pyscho,
        doctors: [
          {
            name: "นพ. ธนวัฒน์ นครินทร์",
            specialization: "ศัลยแพทย์กระดูกสันหลัง",
            schedule: [
              { day: "จันทร์", time: "13:00 - 15:00", isBooked: false },
              { day: "พฤหัสบดี", time: "08:00 - 10:00", isBooked: false },
            ],
          },
          {
            name: "พญ. ลภัสรดา ธีรเดชา",
            specialization: "แพทย์เวชศาสตร์ฟื้นฟูกระดูกสันหลัง",
            schedule: [
              { day: "พุธ", time: "14:00 - 16:00", isBooked: false },
              { day: "เสาร์", time: "09:00 - 11:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์กุมารเวชกรรม",
        logo: dataIcon.child,
        doctors: [
          {
            name: "นพ. ปัณณวัฒน์ สถิรานนท์",
            specialization: "กุมารแพทย์ทั่วไป",
            schedule: [
              { day: "อังคาร", time: "09:00 - 11:00", isBooked: false },
              { day: "ศุกร์", time: "14:00 - 16:00", isBooked: false },
            ],
          },
          {
            name: "พญ. นิชาภา โล่ห์ทอง",
            specialization: "กุมารแพทย์โรคติดเชื้อ",
            schedule: [
              { day: "จันทร์", time: "10:00 - 12:00", isBooked: false },
              { day: "พฤหัสบดี", time: "13:00 - 15:00", isBooked: false },
            ],
          },
        ],
      },
    ],
  };

export default bangkokHospital;
