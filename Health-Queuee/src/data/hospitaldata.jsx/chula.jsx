import dataIcon from "../../../images/icon-department/icon-department";

const chulalongkorn = {
  id: 1,
  name: "โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย",
  state: "กรุงเทพมหานคร",
  type: "โรงพยาบาลรัฐ",
  logo: "images/logohospital/chula.png",
  stars: 4.8,
  reviews: 321,
  location: { lat: 13.7367, lng: 100.5331 },
  district: "ปทุมวัน",

  departments: [
    {
      name: "อายุรกรรม",
      logo: dataIcon.ayurkum,
      doctors: [
        {
          name: "นพ. สมชาย ใจดี",
          specialization: "อายุรแพทย์ทั่วไป",
          schedule: [
            { day: "จันทร์", time: "09:00 - 10:00", isBooked: false },
            { day: "พุธ", time: "10:00 - 11:00", isBooked: false },
          ],
        },
        {
          name: "พญ. สมหญิง แพทย์ดี",
          specialization: "โรคเบาหวาน",
          schedule: [
            { day: "อังคาร", time: "09:00 - 10:00", isBooked: false },
            { day: "ศุกร์", time: "10:00 - 11:00", isBooked: false },
          ],
        },
        {
          name: "นพ. ธนชัย บำรุงสุข",
          specialization: "โรคหัวใจ",
          schedule: [
            { day: "จันทร์", time: "13:00 - 14:00", isBooked: false },
            { day: "พฤหัสบดี", time: "13:00 - 14:00", isBooked: false },
          ],
        },
        {
          name: "พญ. มณีรัตน์ สายใจ",
          specialization: "ทางเดินอาหาร",
          schedule: [
            { day: "อังคาร", time: "08:00 - 09:00", isBooked: false },
          ],
        },
        {
          name: "นพ. กิตติคุณ ชาญณรงค์",
          specialization: "โรคปอดและระบบหายใจ",
          schedule: [
            { day: "ศุกร์", time: "14:00 - 15:00", isBooked: false },
          ],
        },
      ],
    },
    {
      name: "ศัลยกรรม",
      logo: dataIcon.surgery,
      doctors: [
        {
          name: "นพ. วิศิษฐ์ แข็งแรง",
          specialization: "ศัลยกรรมทั่วไป",
          schedule: [
            { day: "จันทร์", time: "08:00 - 09:00", isBooked: false },
          ],
        },
        {
          name: "พญ. พิมพ์พร รักษ์แผล",
          specialization: "ศัลยกรรมตกแต่ง",
          schedule: [
            { day: "อังคาร", time: "13:00 - 14:00", isBooked: false },
          ],
        },
        {
          name: "นพ. ธีรภัทร แข็งกล้า",
          specialization: "ศัลยกรรมหลอดเลือด",
          schedule: [
            { day: "พุธ", time: "09:00 - 10:00", isBooked: false },
          ],
        },
        {
          name: "พญ. สุภาวดี ใจงาม",
          specialization: "ศัลยกรรมเต้านม",
          schedule: [
            { day: "พฤหัสบดี", time: "10:00 - 11:00", isBooked: false },
          ],
        },
        {
          name: "นพ. กนกวัฒน์ อารีย์สุข",
          specialization: "ศัลยกรรมช่องท้อง",
          schedule: [
            { day: "อังคาร", time: "14:00 - 15:00", isBooked: false },
          ],
        },
      ],
    },
    {
      name: "กุมารเวชกรรม",
      logo: dataIcon.child,
      doctors: [
        {
          name: "พญ. ดารารัตน์ เด็กดี",
          specialization: "กุมารแพทย์ทั่วไป",
          schedule: [
            { day: "จันทร์", time: "09:00 - 10:00", isBooked: false },
          ],
        },
        {
          name: "นพ. อนุชา ยิ้มแย้ม",
          specialization: "โรคภูมิแพ้ในเด็ก",
          schedule: [
            { day: "อังคาร", time: "10:00 - 11:00", isBooked: false },
          ],
        },
        {
          name: "พญ. ขวัญใจ อ่อนโยน",
          specialization: "พัฒนาการเด็ก",
          schedule: [
            { day: "พุธ", time: "09:00 - 10:00", isBooked: false },
          ],
        },
        {
          name: "นพ. วีรพงศ์ มีเมตตา",
          specialization: "โรคติดเชื้อในเด็ก",
          schedule: [
            { day: "พฤหัสบดี", time: "11:00 - 12:00", isBooked: false },
          ],
        },
        {
          name: "พญ. จิราภา สุขุม",
          specialization: "โรคหัวใจเด็ก",
          schedule: [
            { day: "ศุกร์", time: "10:00 - 11:00", isBooked: false },
          ],
        },
      ],
    },
    {
      name: "นรีเวชกรรม",
      logo: dataIcon.woman,
      doctors: [
        {
          name: "พญ. นลินี สายอ่อน",
          specialization: "สูติแพทย์ทั่วไป",
          schedule: [
            { day: "จันทร์", time: "08:00 - 09:00", isBooked: false },
          ],
        },
        {
          name: "นพ. ภูวเดช สุขใจ",
          specialization: "ผ่าคลอดและฝากครรภ์",
          schedule: [
            { day: "อังคาร", time: "13:00 - 14:00", isBooked: false },
          ],
        },
        {
          name: "พญ. ชุติมา วงศ์เพ็ญ",
          specialization: "โรคทางนรีเวช",
          schedule: [
            { day: "พุธ", time: "09:00 - 10:00", isBooked: false },
          ],
        },
        {
          name: "นพ. ศักดา มั่นสุข",
          specialization: "มะเร็งนรีเวช",
          schedule: [
            { day: "พฤหัสบดี", time: "10:00 - 11:00", isBooked: false },
          ],
        },
        {
          name: "พญ. สุธาสินี หอมหวล",
          specialization: "วางแผนครอบครัว",
          schedule: [
            { day: "ศุกร์", time: "14:00 - 15:00", isBooked: false },
          ],
        },
      ],
    },
    {
      name: "หัวใจ",
      logo: dataIcon.heart,
      doctors: [
        {
          name: "นพ. สมพงษ์ หูดี",
          specialization: "หัวใจ",
          schedule: [
            { day: "จันทร์", time: "09:00 - 10:00", isBooked: false },
          ],
        },
        {
          name: "พญ. มาริสา ตาดี",
          specialization: "หัวใจ",
          schedule: [
            { day: "อังคาร", time: "13:00 - 14:00", isBooked: false },
          ],
        },
        {
          name: "นพ. ธนากร กลิ่นหอม",
          specialization: "หัวใจ",
          schedule: [
            { day: "พุธ", time: "09:00 - 10:00", isBooked: false },
          ],
        },
        {
          name: "พญ. พรทิพย์ คำดี",
          specialization: "หัวใจ",
          schedule: [
            { day: "พฤหัสบดี", time: "10:00 - 11:00", isBooked: false },
          ],
        },
        {
          name: "นพ. อนุรักษ์ ใจเย็น",
          specialization: "ผ่าตัดตา",
          schedule: [
            { day: "ศุกร์", time: "13:00 - 14:00", isBooked: false },
          ],
        },
      ],
    },
    {
      name: "จิตเวช",
      logo: dataIcon.pyscho,
      doctors: [
        {
          name: "พญ. ศุภรัตน์ จิตดี",
          specialization: "จิตแพทย์ทั่วไป",
          schedule: [
            { day: "จันทร์", time: "09:00 - 10:00", isBooked: false },
          ],
        },
        {
          name: "นพ. ณัฐพล ใจเย็น",
          specialization: "จิตเวชเด็กและวัยรุ่น",
          schedule: [
            { day: "อังคาร", time: "13:00 - 14:00", isBooked: false },
          ],
        },
        {
          name: "พญ. กรรณิกา สุขสันต์",
          specialization: "บำบัดความเครียด",
          schedule: [
            { day: "พุธ", time: "10:00 - 11:00", isBooked: false },
          ],
        },
        {
          name: "นพ. ภาคิน ธรรมโชติ",
          specialization: "จิตเวชผู้สูงอายุ",
          schedule: [
            { day: "พฤหัสบดี", time: "14:00 - 15:00", isBooked: false },
          ],
        },
        {
          name: "พญ. สุมนา พงษ์ดี",
          specialization: "จิตเวชทั่วไป",
          schedule: [
            { day: "ศุกร์", time: "13:00 - 14:00", isBooked: false },
          ],
        },
      ],
    },
  ],
};

export default chulalongkorn;
