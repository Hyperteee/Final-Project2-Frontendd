import dataIcon from "../../../../images/icon-department/icon-department";
import { createHospitalData } from "../utils/createHospitalData";

const bumrungradDefinition = {
    id: "BKK004",
    name: "โรงพยาบาลบำรุงราษฎร์",
    state: "กรุงเทพมหานคร",
    type: "โรงพยาบาลเอกชนระดับนานาชาติ",
    logo: "images/logohospital/bumrungrad.png",
    stars: 4.9,
    reviews: 1280,
    location: { lat: 13.7469, lng: 100.5557 },
    district: "เขตวัฒนา",
    departments: [
      {
        name: "ศูนย์หัวใจครบวงจร",
        logo: dataIcon.heart,
        doctors: [
          {
            name: "นพ. ธนกฤต รุ่งเรือง",
            specialization: "อายุรแพทย์โรคหัวใจ",
            schedule: [
              { day: "จันทร์", time: "09:00 - 11:00", isBooked: false },
              { day: "พุธ", time: "13:00 - 15:00", isBooked: false },
            ],
          },
          {
            name: "พญ. นุสรา เมธาวัฒน์",
            specialization: "อายุรกรรมหัวใจและหลอดเลือด",
            schedule: [
              { day: "อังคาร", time: "08:30 - 10:30", isBooked: false },
              { day: "พฤหัสบดี", time: "14:00 - 16:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์ศัลยกรรมหุ่นยนต์",
        logo: dataIcon.surgery,
        doctors: [
          {
            name: "นพ. สรวิศ พงศ์ประสิทธิ์",
            specialization: "ศัลยแพทย์หุ่นยนต์ระบบทางเดินอาหาร",
            schedule: [
              { day: "จันทร์", time: "13:00 - 15:00", isBooked: false },
              { day: "พฤหัสบดี", time: "09:00 - 11:00", isBooked: false },
            ],
          },
          {
            name: "นพ. พิภพ ชัยมงคล",
            specialization: "ศัลยแพทย์กระดูกและข้อขั้นสูง",
            schedule: [
              { day: "พุธ", time: "08:00 - 10:00", isBooked: false },
              { day: "ศุกร์", time: "13:00 - 15:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์มะเร็งบำรุงราษฎร์",
        logo: dataIcon.ayurkum,
        doctors: [
          {
            name: "พญ. วารุณี จิตพิพัฒน์",
            specialization: "อายุรแพทย์มะเร็งวิทยา",
            schedule: [
              { day: "อังคาร", time: "09:30 - 11:30", isBooked: false },
              { day: "ศุกร์", time: "14:00 - 16:00", isBooked: false },
            ],
          },
          {
            name: "นพ. กิตติพงศ์ อินทรัตน์",
            specialization: "รังสีรักษาและมะเร็งวิทยา",
            schedule: [
              { day: "พุธ", time: "10:00 - 12:00", isBooked: false },
              { day: "เสาร์", time: "09:00 - 11:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์กุมารเวชเฉพาะทาง",
        logo: dataIcon.child,
        doctors: [
          {
            name: "นพ. ศุภเดช วัฒนะทรัพย์",
            specialization: "กุมารแพทย์โรคภูมิแพ้",
            schedule: [
              { day: "จันทร์", time: "10:00 - 12:00", isBooked: false },
              { day: "พุธ", time: "14:00 - 16:00", isBooked: false },
            ],
          },
          {
            name: "พญ. ชลธิชา สุรวัฒน์",
            specialization: "กุมารแพทย์ทารกแรกเกิด",
            schedule: [
              { day: "อังคาร", time: "13:00 - 15:00", isBooked: false },
              { day: "ศุกร์", time: "09:00 - 11:00", isBooked: false },
            ],
          },
        ],
      },
    ],
  };

const { info: bumrungrad, schedule: bumrungradSchedule } = createHospitalData(bumrungradDefinition);

export { bumrungradSchedule };

export default bumrungrad;

