import dataIcon from "../../../../images/icon-department/icon-department";
import { createHospitalData } from "../utils/createHospitalData";

const phyathaiDefinition = {
  id: "BKK003",
  name: "โรงพยาบาลพญาไท 2",
  state: "กรุงเทพมหานคร",
  type: "โรงพยาบาลเอกชนตติยภูมิ",
  logo: "images/logohospital/phyathai.png",
  stars: 4.6,
  reviews: 412,
  location: { lat: 13.7568, lng: 100.5331 },
  district: "ราชเทวี",
  departments: [
    {
      id: "BKK003-D01",
      name: "อายุรกรรมและเวชศาสตร์วินิจฉัย",
      logo: dataIcon.ayurkum,
      doctors: [
        {
          id: "BKK003-D01-DR01",
          name: "พญ. กนกวรรณ อธิสุข",
          specialization: "อายุรกรรมทั่วไปและเวชศาสตร์เชิงลึก",
          schedule: [
            { day: "วันจันทร์", time: "09:00 - 11:00", isBooked: false },
            { day: "วันพุธ", time: "13:00 - 15:00", isBooked: false },
          ],
        },
        {
          id: "BKK003-D01-DR02",
          name: "นพ. ธีรภัทร ศิริพันธ์",
          specialization: "ต่อมไร้ท่อและเมตะบอลิสม",
          schedule: [
            { day: "วันอังคาร", time: "10:00 - 12:00", isBooked: false },
            { day: "วันพฤหัสบดี", time: "14:00 - 16:00", isBooked: false },
          ],
        },
        {
          id: "BKK003-D01-DR03",
          name: "นพ. ปิยะวุฒิ ลิ้มสกุล",
          specialization: "ระบบทางเดินอาหารและตับ",
          schedule: [
            { day: "วันศุกร์", time: "08:30 - 10:30", isBooked: false },
          ],
        },
      ],
    },
    {
      id: "BKK003-D02",
      name: "สถาบันศัลยกรรมขั้นสูง",
      logo: dataIcon.surgery,
      doctors: [
        {
          id: "BKK003-D02-DR01",
          name: "นพ. รัชนนนท์ กฤตเทพ",
          specialization: "ศัลยกรรมส่องกล้องและแผลเล็ก",
          schedule: [
            { day: "วันจันทร์", time: "13:00 - 15:00", isBooked: false },
            { day: "วันพฤหัสบดี", time: "09:00 - 11:00", isBooked: false },
          ],
        },
        {
          id: "BKK003-D02-DR02",
          name: "พญ. สรินยา เทพวิไล",
          specialization: "ศัลยกรรมกระดูกและอุบัติเหตุ",
          schedule: [
            { day: "วันอังคาร", time: "14:00 - 16:00", isBooked: false },
          ],
        },
        {
          id: "BKK003-D02-DR03",
          name: "นพ. ชนินทร์ เมฆธนา",
          specialization: "ศัลยกรรมหัวใจและทรวงอก",
          schedule: [
            { day: "วันพุธ", time: "09:00 - 11:00", isBooked: false },
          ],
        },
      ],
    },
    {
      name: "ศูนย์สตรีและภาวะมีบุตรยาก",
      logo: dataIcon.woman,
      doctors: [
        {
          name: "พญ. พิมพ์ชนก เลิศประเสริฐ",
          specialization: "เวชศาสตร์การเจริญพันธุ์และ IVF",
          schedule: [
            { day: "วันจันทร์", time: "10:00 - 12:00", isBooked: false },
            { day: "วันศุกร์", time: "13:00 - 15:00", isBooked: false },
          ],
        },
        {
          name: "พญ. ศิริวรรณ อภิชาตกุล",
          specialization: "มะเร็งนรีเวช",
          schedule: [
            { day: "วันอังคาร", time: "09:30 - 11:30", isBooked: false },
          ],
        },
      ],
    },
    {
      name: "ศูนย์หัวใจและหลอดเลือด",
      logo: dataIcon.heart,
      doctors: [
        {
          name: "นพ. วีรชัย ชาติมงคล",
          specialization: "อายุรกรรมหัวใจร่วมสวนหัวใจ",
          schedule: [
            { day: "วันจันทร์", time: "15:00 - 17:00", isBooked: false },
            { day: "วันพฤหัสบดี", time: "10:00 - 12:00", isBooked: false },
          ],
        },
        {
          name: "พญ. กฤชญา บุญมา",
          specialization: "คลื่นไฟฟ้าหัวใจและจังหวะผิดปกติ",
          schedule: [
            { day: "วันพุธ", time: "08:00 - 10:00", isBooked: false },
          ],
        },
      ],
    },
    {
      name: "กุมารเวชและทารกแรกเกิด",
      logo: dataIcon.child,
      doctors: [
        {
          name: "พญ. จารุณี จันทร์อาภรณ์",
          specialization: "กุมารเวชทั่วไปและวัคซีน",
          schedule: [
            { day: "วันอังคาร", time: "08:30 - 10:30", isBooked: false },
            { day: "วันพฤหัสบดี", time: "13:00 - 15:00", isBooked: false },
          ],
        },
        {
          name: "นพ. ฐิติภณ รักษ์ศรี",
          specialization: "เวชศาสตร์ทารกแรกเกิดและทารกคลอดก่อนกำหนด",
          schedule: [
            { day: "วันศุกร์", time: "09:00 - 11:00", isBooked: false },
          ],
        },
      ],
    },
    {
      name: "สุขภาพจิตและพฤติกรรม",
      logo: dataIcon.pyscho,
      doctors: [
        {
          name: "นพ. ธนวัฒน์ ประมวลศักดิ์",
          specialization: "จิตเวชผู้ใหญ่และการจัดการความวิตกกังวล",
          schedule: [
            { day: "วันพุธ", time: "15:00 - 17:00", isBooked: false },
          ],
        },
        {
          name: "พญ. ชลิตา พงษ์วรรณ",
          specialization: "จิตวิทยาเด็กและบำบัดครอบครัว",
          schedule: [
            { day: "วันเสาร์", time: "10:00 - 12:00", isBooked: false },
          ],
        },
      ],
    },
  ],
};

const { info: phyathai, schedule: phyathaiSchedule } = createHospitalData(phyathaiDefinition);

export { phyathaiSchedule };

export default phyathai;

