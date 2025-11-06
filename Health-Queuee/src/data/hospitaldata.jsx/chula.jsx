const chulalongkorn = {
  id: 1,
  name: "จุฬาลงกรณ์",
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
      doctors: [
        {
          name: "นพ. สมชาย ใจดี",
          specialization: "อายุรแพทย์ทั่วไป",
          schedule: [
            { day: "จันทร์", time: "09:00 - 10:00", isBooked: false },
            { day: "จันทร์", time: "10:00 - 11:00", isBooked: false },
            { day: "พุธ", time: "09:00 - 10:00", isBooked: false },
            { day: "พุธ", time: "10:00 - 11:00", isBooked: false },
          ],
        },
        {
          name: "พญ. สมหญิง แพทย์ดี",
          specialization: "โรคเบาหวาน",
          schedule: [
            { day: "อังคาร", time: "09:00 - 10:00", isBooked: false },
            { day: "อังคาร", time: "10:00 - 11:00", isBooked: false },
            { day: "ศุกร์", time: "09:00 - 10:00", isBooked: false },
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
          specialization: "โรคทางเดินอาหาร",
          schedule: [
            { day: "อังคาร", time: "08:00 - 09:00", isBooked: false },
            { day: "พฤหัสบดี", time: "08:00 - 09:00", isBooked: false },
          ],
        },
        {
          name: "นพ. กิตติคุณ ชาญณรงค์",
          specialization: "โรคปอดและระบบหายใจ",
          schedule: [
            { day: "พุธ", time: "14:00 - 15:00", isBooked: false },
            { day: "ศุกร์", time: "14:00 - 15:00", isBooked: false },
          ],
        },
      ],
    },
    {
      name: "ศัลยกรรม",
      doctors: [
        {
          name: "นพ. วิศิษฐ์ แข็งแรง",
          specialization: "ศัลยกรรมทั่วไป",
          schedule: [
            { day: "จันทร์", time: "08:00 - 09:00", isBooked: false },
            { day: "พุธ", time: "08:00 - 09:00", isBooked: false },
          ],
        },
        {
          name: "พญ. พิมพ์พร รักษ์แผล",
          specialization: "ศัลยกรรมตกแต่ง",
          schedule: [
            { day: "อังคาร", time: "13:00 - 14:00", isBooked: false },
            { day: "พฤหัสบดี", time: "13:00 - 14:00", isBooked: false },
          ],
        },
        {
          name: "นพ. ธีรภัทร แข็งกล้า",
          specialization: "ศัลยกรรมหลอดเลือด",
          schedule: [
            { day: "พุธ", time: "09:00 - 10:00", isBooked: false },
            { day: "ศุกร์", time: "09:00 - 10:00", isBooked: false },
          ],
        },
        {
          name: "พญ. สุภาวดี ใจงาม",
          specialization: "ศัลยกรรมเต้านม",
          schedule: [
            { day: "พฤหัสบดี", time: "10:00 - 11:00", isBooked: false },
            { day: "ศุกร์", time: "10:00 - 11:00", isBooked: false },
          ],
        },
        {
          name: "นพ. กนกวัฒน์ อารีย์สุข",
          specialization: "ศัลยกรรมช่องท้อง",
          schedule: [
            { day: "จันทร์", time: "14:00 - 15:00", isBooked: false },
            { day: "อังคาร", time: "14:00 - 15:00", isBooked: false },
          ],
        },
      ],
    },

  ],
};

export default chulalongkorn;
