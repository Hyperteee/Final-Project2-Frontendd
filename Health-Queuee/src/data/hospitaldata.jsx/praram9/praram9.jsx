import dataIcon from "../../../../images/icon-department/icon-department";
import { createHospitalData } from "../utils/createHospitalData";

const praram9Definition = {
    id: "BKK008",
    name: "โรงพยาบาลพระรามเก้า",
    state: "กรุงเทพมหานคร",
    type: "โรงพยาบาลเอกชน",
    logo: "images/logohospital/praram9.png",
    stars: 4.6,
    reviews: 820,
    location: { lat: 13.7511, lng: 100.5831 },
    district: "เขตห้วยขวาง",
    departments: [
      {
        name: "ศูนย์เบาหวานและต่อมไร้ท่อ",
        logo: dataIcon.ayurkum,
        doctors: [
          {
            name: "นพ. สุธีร์ สงวนวงษ์",
            specialization: "ต่อมไร้ท่อและเมตาบอลิซึม",
            schedule: [
              { day: "จันทร์", time: "08:30 - 10:30", isBooked: false },
              { day: "พุธ", time: "13:00 - 15:00", isBooked: false },
            ],
          },
          {
            name: "พญ. จุฑามาศ เลิศมงคล",
            specialization: "อายุรกรรมเบาหวาน",
            schedule: [
              { day: "อังคาร", time: "10:00 - 12:00", isBooked: false },
              { day: "ศุกร์", time: "09:00 - 11:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์เวชศาสตร์การเจริญพันธุ์",
        logo: dataIcon.woman,
        doctors: [
          {
            name: "นพ. อภินัช เหล่าศักดา",
            specialization: "เวชศาสตร์การเจริญพันธุ์และ IVF",
            schedule: [
              { day: "จันทร์", time: "14:00 - 16:00", isBooked: false },
              { day: "พฤหัสบดี", time: "09:00 - 11:00", isBooked: false },
            ],
          },
          {
            name: "พญ. ญาดา วิรัชกุล",
            specialization: "สูตินรีเวชเฉพาะทาง",
            schedule: [
              { day: "อังคาร", time: "13:00 - 15:00", isBooked: false },
              { day: "ศุกร์", time: "10:00 - 12:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์หัวใจพระรามเก้า",
        logo: dataIcon.heart,
        doctors: [
          {
            name: "นพ. ปริญญา จิตภักดี",
            specialization: "อายุรแพทย์หัวใจ",
            schedule: [
              { day: "พุธ", time: "09:00 - 11:00", isBooked: false },
              { day: "เสาร์", time: "10:00 - 12:00", isBooked: false },
            ],
          },
          {
            name: "นพ. พิริยะ ภัควัฒน์",
            specialization: "ศัลยแพทย์หัวใจและทรวงอก",
            schedule: [
              { day: "จันทร์", time: "13:00 - 15:00", isBooked: false },
              { day: "พฤหัสบดี", time: "08:00 - 10:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์ตับและทางเดินน้ำดี",
        logo: dataIcon.surgery,
        doctors: [
          {
            name: "นพ. นเรศ อรุณศิลป์",
            specialization: "ศัลยแพทย์ตับและตับอ่อน",
            schedule: [
              { day: "อังคาร", time: "09:30 - 11:30", isBooked: false },
              { day: "ศุกร์", time: "14:00 - 16:00", isBooked: false },
            ],
          },
          {
            name: "พญ. กรองกาญจน์ บุญเรือง",
            specialization: "อายุรแพทย์ระบบทางเดินอาหาร",
            schedule: [
              { day: "จันทร์", time: "10:00 - 12:00", isBooked: false },
              { day: "พฤหัสบดี", time: "13:00 - 15:00", isBooked: false },
            ],
          },
        ],
      },
    ],
  };

const { info: praram9Hospital, schedule: praram9Schedule } = createHospitalData(praram9Definition);

export { praram9Schedule };

export default praram9Hospital;

