import dataIcon from "../../../../images/icon-department/icon-department";
import { createHospitalData } from "../utils/createHospitalData";

const synphaetDefinition = {
  id: "BKK002", // Bangkok hospital #2
  name: "โรงพยาบาลสินแพทย์",
  state: "กรุงเทพมหานคร",
  district: "ห้วยขวาง",
  type: "โรงพยาบาลเอกชน",
  logo: "images/logohospital/synphaet.png",
  stars: 4.2,
  reviews: 153,
  location: { lat: 13.7620, lng: 100.5673 },

  departments: [
    {
      id: "BKK002-DP01",
      name: "อายุรกรรม",
      logo: dataIcon.ayurkum,
      doctors: [
        {
          id: "BKK002-DP01-DR01",
          name: "นพ. พงษ์พัฒน์ กล่ำอยู่สุข",
          specialization: "อายุรแพทย์ทั่วไป",
          schedule: [
            { day: "จันทร์", time: "10:00 - 11:00", bookings: [] },
            { day: "พุธ", time: "14:00 - 15:00", bookings: [] },
          ],
        },
        {
          id: "BKK002-DP01-DR02",
          name: "พญ. ปรียาภรณ์ ใจใส",
          specialization: "อายุรแพทย์โรคไต",
          schedule: [
            { day: "อังคาร", time: "09:00 - 10:00", bookings: [] },
            { day: "ศุกร์", time: "13:00 - 14:00", bookings: [] },
          ],
        },
        {
          id: "BKK002-DP01-DR03",
          name: "นพ. ดุษฎี เซี่ยงหลอ",
          specialization: "อายุรแพทย์โรคหัวใจ",
          schedule: [
            { day: "พฤหัสบดี", time: "08:00 - 09:00", bookings: [] },
            { day: "เสาร์", time: "10:00 - 11:00", bookings: [] },
          ],
        },
      ],
    },
    {
      id: "BKK002-DP02",
      name: "ศัลยกรรม",
      logo: dataIcon.surgery,
      doctors: [
        {
          id: "BKK002-DP02-DR01",
          name: "นพ. วรวิทย์ พัฒนา",
          specialization: "ศัลยกรรมทั่วไป",
          schedule: [
            { day: "จันทร์", time: "13:00 - 14:00", bookings: [] },
            { day: "พุธ", time: "08:00 - 09:00", bookings: [] },
          ],
        },
        {
          id: "BKK002-DP02-DR02",
          name: "พญ. เสาวรส ภู่แก้ว",
          specialization: "ศัลยกรรมกระดูกและข้อ",
          schedule: [
            { day: "อังคาร", time: "10:00 - 11:00", bookings: [] },
          ],
        },
      ],
    },
    {
      id: "BKK002-DP03",
      name: "กุมารเวชกรรม",
      logo: dataIcon.child,
      doctors: [
        {
          id: "BKK002-DP03-DR01",
          name: "พญ. กินรี สรพิพัฒน์เจริญ",
          specialization: "กุมารแพทย์ทั่วไป",
          schedule: [
            { day: "จันทร์", time: "08:00 - 09:00", bookings: [] },
            { day: "พฤหัสบดี", time: "14:00 - 15:00", bookings: [] },
          ],
        },
        {
          id: "BKK002-DP03-DR02",
          name: "นพ. ธีรพงศ์ ว่องวิภาสมิตกุล",
          specialization: "โรคภูมิแพ้ในเด็ก",
          schedule: [
            { day: "ศุกร์", time: "10:00 - 11:00", bookings: [] },
          ],
        },
      ],
    },
    {
      id: "BKK002-DP04",
      name: "สูตินรีเวชกรรม",
      logo: dataIcon.woman,
      doctors: [
        {
          id: "BKK002-DP04-DR01",
          name: "พญ. อริสรา คุปตารักษ์",
          specialization: "สูติแพทย์ทั่วไป",
          schedule: [
            { day: "อังคาร", time: "13:00 - 14:00", bookings: [] },
          ],
        },
        {
          id: "BKK002-DP04-DR02",
          name: "พญ. กัญญาพัชร วรรธโนรมณ์",
          specialization: "การตั้งครรภ์ความเสี่ยงสูง",
          schedule: [
            { day: "พุธ", time: "09:00 - 10:00", bookings: [] },
          ],
        },
      ],
    },
    {
      id: "BKK002-DP05",
      name: "หัวใจ",
      logo: dataIcon.heart,
      doctors: [
        {
          id: "BKK002-DP05-DR01",
          name: "นพ. ดุษฎี เซี่ยงหลอ",
          specialization: "อายุรแพทย์โรคหัวใจ",
          schedule: [
            { day: "จันทร์", time: "09:00 - 10:00", bookings: [] },
          ],
        },
        {
          id: "BKK002-DP05-DR02",
          name: "นพ. อภิชัย บำรุง",
          specialization: "สวนหัวใจและหลอดเลือด",
          schedule: [
            { day: "อังคาร", time: "10:00 - 11:00", bookings: [] },
          ],
        },
      ],
    },
  ],
};

const { info: synphaet_ramintra, schedule: synphaetSchedule } = createHospitalData(synphaetDefinition);

export { synphaetSchedule };

export default synphaet_ramintra;

