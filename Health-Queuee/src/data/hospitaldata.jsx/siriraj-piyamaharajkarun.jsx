import dataIcon from "../../../images/icon-department/icon-department";

const sirirajPiyamaharajkarun = {
    id: 8,
    name: "โรงพยาบาลศิริราช ปิยมหาราชการุณย์",
    state: "กรุงเทพมหานคร",
    type: "โรงพยาบาลมหาวิทยาลัย",
    logo: "images/logohospital/siriraj-piyamaharajkarun.png",
    stars: 4.9,
    reviews: 1345,
    location: { lat: 13.7567, lng: 100.4862 },
    district: "เขตบางกอกน้อย",
    departments: [
      {
        name: "ศูนย์อายุรกรรมชั้นสูง",
        logo: dataIcon.ayurkum,
        doctors: [
          {
            name: "นพ. ณัฐพงศ์ รัตนพานิช",
            specialization: "อายุรกรรมต่อมไร้ท่อ",
            schedule: [
              { day: "จันทร์", time: "08:30 - 10:30", isBooked: false },
              { day: "พฤหัสบดี", time: "13:30 - 15:30", isBooked: false },
            ],
          },
          {
            name: "พญ. ภัทรานิษฐ์ พนาสี",
            specialization: "อายุรกรรมโรคไต",
            schedule: [
              { day: "อังคาร", time: "14:00 - 16:00", isBooked: false },
              { day: "ศุกร์", time: "09:00 - 11:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์ศัลยกรรมระบบประสาท",
        logo: dataIcon.pyscho,
        doctors: [
          {
            name: "นพ. บดินทร์ ธรรมโชติ",
            specialization: "ประสาทศัลยแพทย์",
            schedule: [
              { day: "พุธ", time: "13:00 - 15:00", isBooked: false },
              { day: "เสาร์", time: "09:00 - 11:00", isBooked: false },
            ],
          },
          {
            name: "พญ. เพียงใจ เลิศวิทยา",
            specialization: "ประสาทวิทยา",
            schedule: [
              { day: "อังคาร", time: "08:30 - 10:30", isBooked: false },
              { day: "ศุกร์", time: "14:00 - 16:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์หัวใจศิริราช",
        logo: dataIcon.heart,
        doctors: [
          {
            name: "นพ. วุฒิชัย พีรวัชร์",
            specialization: "อายุรแพทย์หัวใจและหลอดเลือด",
            schedule: [
              { day: "จันทร์", time: "13:00 - 15:00", isBooked: false },
              { day: "พฤหัสบดี", time: "09:00 - 11:00", isBooked: false },
            ],
          },
          {
            name: "นพ. ธิติ ปัญญากร",
            specialization: "ศัลยแพทย์หัวใจ",
            schedule: [
              { day: "พุธ", time: "08:30 - 10:30", isBooked: false },
              { day: "ศุกร์", time: "13:00 - 15:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์มะเร็งบูรณาการ",
        logo: dataIcon.surgery,
        doctors: [
          {
            name: "พญ. จิตลดา สุขสมบูรณ์",
            specialization: "ศัลยแพทย์มะเร็ง",
            schedule: [
              { day: "อังคาร", time: "09:00 - 11:00", isBooked: false },
              { day: "พฤหัสบดี", time: "14:00 - 16:00", isBooked: false },
            ],
          },
          {
            name: "นพ. ธเนศ รัตนสถิตย์",
            specialization: "อายุรแพทย์มะเร็ง",
            schedule: [
              { day: "จันทร์", time: "10:00 - 12:00", isBooked: false },
              { day: "ศุกร์", time: "15:00 - 17:00", isBooked: false },
            ],
          },
        ],
      },
    ],
  };

export default sirirajPiyamaharajkarun;
