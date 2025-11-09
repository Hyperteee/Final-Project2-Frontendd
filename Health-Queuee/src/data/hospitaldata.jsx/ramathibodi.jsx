import dataIcon from "../../../images/icon-department/icon-department";

const ramathibodiHospital = {
    id: 11,
    name: "โรงพยาบาลรามาธิบดี",
    state: "กรุงเทพมหานคร",
    type: "โรงพยาบาลมหาวิทยาลัย",
    logo: "images/logohospital/ramathibodi.png",
    stars: 4.9,
    reviews: 2100,
    location: { lat: 13.7669, lng: 100.523 },
    district: "เขตราชเทวี",
    departments: [
      {
        name: "ศูนย์อายุรกรรมเฉพาะทาง",
        logo: dataIcon.ayurkum,
        doctors: [
          {
            name: "นพ. อภิรักษ์ เจนกิจ",
            specialization: "อายุรแพทย์โรคเลือด",
            schedule: [
              { day: "จันทร์", time: "08:00 - 10:00", isBooked: false },
              { day: "พุธ", time: "13:00 - 15:00", isBooked: false },
            ],
          },
          {
            name: "พญ. กุลชา ชัยเดชา",
            specialization: "อายุรแพทย์ไต",
            schedule: [
              { day: "อังคาร", time: "09:00 - 11:00", isBooked: false },
              { day: "ศุกร์", time: "14:00 - 16:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์ปลูกถ่ายและศัลยกรรมขั้นสูง",
        logo: dataIcon.surgery,
        doctors: [
          {
            name: "นพ. พงศ์ภัทร พันธุมะ",
            specialization: "ศัลยแพทย์ปลูกถ่ายตับ",
            schedule: [
              { day: "พุธ", time: "10:00 - 12:00", isBooked: false },
              { day: "เสาร์", time: "09:00 - 11:00", isBooked: false },
            ],
          },
          {
            name: "นพ. สถาพร ชัยบุญ",
            specialization: "ศัลยกรรมทรวงอก",
            schedule: [
              { day: "จันทร์", time: "13:00 - 15:00", isBooked: false },
              { day: "พฤหัสบดี", time: "08:30 - 10:30", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์มะเร็งรามาธิบดี",
        logo: dataIcon.pyscho,
        doctors: [
          {
            name: "พญ. ภูษณิศา กิตติรุจาวงศ์",
            specialization: "อายุรแพทย์มะเร็ง",
            schedule: [
              { day: "อังคาร", time: "13:00 - 15:00", isBooked: false },
              { day: "ศุกร์", time: "09:00 - 11:00", isBooked: false },
            ],
          },
          {
            name: "นพ. จิรายุส เฉลิมศิลป์",
            specialization: "รังสีรักษา",
            schedule: [
              { day: "จันทร์", time: "10:00 - 12:00", isBooked: false },
              { day: "พฤหัสบดี", time: "14:00 - 16:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์กุมารเวชรามาธิบดี",
        logo: dataIcon.child,
        doctors: [
          {
            name: "นพ. ปฏิภาณ สวัสดิพร",
            specialization: "กุมารแพทย์โรคหัวใจ",
            schedule: [
              { day: "พุธ", time: "09:00 - 11:00", isBooked: false },
              { day: "เสาร์", time: "10:00 - 12:00", isBooked: false },
            ],
          },
          {
            name: "พญ. ปวีณา ชลธี",
            specialization: "กุมารแพทย์มะเร็ง",
            schedule: [
              { day: "อังคาร", time: "10:00 - 12:00", isBooked: false },
              { day: "ศุกร์", time: "13:00 - 15:00", isBooked: false },
            ],
          },
        ],
      },
    ],
  };

export default ramathibodiHospital;
