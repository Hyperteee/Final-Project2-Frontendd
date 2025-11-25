import dataIcon from "../../../../images/icon-department/icon-department";
import { createHospitalData } from "../utils/createHospitalData";

const vejthaniDefinition = {
    id: "BKK010",
    name: "โรงพยาบาลเวชธานี",
    state: "กรุงเทพมหานคร",
    type: "โรงพยาบาลเอกชน",
    logo: "images/logohospital/vejthani.png",
    stars: 4.5,
    reviews: 640,
    location: { lat: 13.7767, lng: 100.6144 },
    district: "เขตบางกะปิ",
    departments: [
      {
        name: "ศูนย์กระดูกสันหลังและข้อ",
        logo: dataIcon.surgery,
        doctors: [
          {
            name: "นพ. ภูชิต คำภู",
            specialization: "ศัลยกรรมกระดูกสันหลัง",
            schedule: [
              { day: "จันทร์", time: "09:00 - 11:00", isBooked: false },
              { day: "พุธ", time: "13:00 - 15:00", isBooked: false },
            ],
          },
          {
            name: "นพ. นิติพงศ์ สถิตธนภพ",
            specialization: "เวชศาสตร์ฟื้นฟู",
            schedule: [
              { day: "อังคาร", time: "10:00 - 12:00", isBooked: false },
              { day: "ศุกร์", time: "14:00 - 16:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์หัวใจเวชธานี",
        logo: dataIcon.heart,
        doctors: [
          {
            name: "นพ. ศุภฤกษ์ เกษมนุกูล",
            specialization: "อายุรแพทย์หัวใจ",
            schedule: [
              { day: "พุธ", time: "09:00 - 11:00", isBooked: false },
              { day: "เสาร์", time: "10:00 - 12:00", isBooked: false },
            ],
          },
          {
            name: "นพ. ปกรณ์ แสงพุ่ม",
            specialization: "ศัลยแพทย์หลอดเลือด",
            schedule: [
              { day: "จันทร์", time: "14:00 - 16:00", isBooked: false },
              { day: "พฤหัสบดี", time: "09:00 - 11:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์ผิวหนังและความงาม",
        logo: dataIcon.ayurkum,
        doctors: [
          {
            name: "พญ. วนิดา กิตติกร",
            specialization: "ผิวหนังเลเซอร์",
            schedule: [
              { day: "อังคาร", time: "13:00 - 15:00", isBooked: false },
              { day: "ศุกร์", time: "09:00 - 11:00", isBooked: false },
            ],
          },
          {
            name: "พญ. อลิสา สุวรรณมาศ",
            specialization: "เวชศาสตร์ชะลอวัย",
            schedule: [
              { day: "จันทร์", time: "10:00 - 12:00", isBooked: false },
              { day: "พฤหัสบดี", time: "14:00 - 16:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์กุมารเวช",
        logo: dataIcon.child,
        doctors: [
          {
            name: "นพ. เกรียงไกร ภาวนาสุข",
            specialization: "กุมารแพทย์โรคเลือด",
            schedule: [
              { day: "พุธ", time: "13:00 - 15:00", isBooked: false },
              { day: "เสาร์", time: "09:00 - 11:00", isBooked: false },
            ],
          },
          {
            name: "พญ. สุทธิมา เลิศประภา",
            specialization: "กุมารแพทย์พัฒนาการ",
            schedule: [
              { day: "จันทร์", time: "09:00 - 11:00", isBooked: false },
              { day: "ศุกร์", time: "14:00 - 16:00", isBooked: false },
            ],
          },
        ],
      },
    ],
  };

const { info: vejthaniHospital, schedule: vejthaniSchedule } = createHospitalData(vejthaniDefinition);

export { vejthaniSchedule };

export default vejthaniHospital;

