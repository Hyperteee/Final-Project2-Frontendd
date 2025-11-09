import dataIcon from "../../../images/icon-department/icon-department";

const somdetPhraThepratHospital = {
    id: 13,
    name: "โรงพยาบาลศูนย์การแพทย์สมเด็จพระเทพรัตน์",
    state: "กรุงเทพมหานคร",
    type: "ศูนย์การแพทย์เฉพาะทาง",
    logo: "images/logohospital/somdet-phra-theprat.png",
    stars: 4.8,
    reviews: 1020,
    location: { lat: 13.7654, lng: 100.5233 },
    district: "เขตราชเทวี",
    departments: [
      {
        name: "ศูนย์เวชศาสตร์แม่และเด็ก",
        logo: dataIcon.woman,
        doctors: [
          {
            name: "พญ. เมทินี กรณิศ",
            specialization: "เวชศาสตร์มารดาและทารกในครรภ์",
            schedule: [
              { day: "จันทร์", time: "13:00 - 15:00", isBooked: false },
              { day: "พฤหัสบดี", time: "09:00 - 11:00", isBooked: false },
            ],
          },
          {
            name: "นพ. ธนะศักดิ์ พิพัฒน์",
            specialization: "สูตินรีแพทย์เฉพาะทาง",
            schedule: [
              { day: "อังคาร", time: "10:00 - 12:00", isBooked: false },
              { day: "ศุกร์", time: "14:00 - 16:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์หัวใจขั้นสูง",
        logo: dataIcon.heart,
        doctors: [
          {
            name: "นพ. สรัลภพ สุทธิรักษ์",
            specialization: "อายุรแพทย์หัวใจผู้ใหญ่",
            schedule: [
              { day: "พุธ", time: "09:00 - 11:00", isBooked: false },
              { day: "เสาร์", time: "10:00 - 12:00", isBooked: false },
            ],
          },
          {
            name: "พญ. กมลวรรณ ศรีเมือง",
            specialization: "ศัลยแพทย์หัวใจ",
            schedule: [
              { day: "จันทร์", time: "14:00 - 16:00", isBooked: false },
              { day: "พฤหัสบดี", time: "08:00 - 10:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์วิศวกรรมชีวการแพทย์",
        logo: dataIcon.surgery,
        doctors: [
          {
            name: "นพ. ณรงค์เดช วิริยะพงศ์",
            specialization: "ศัลยกรรมหุ่นยนต์",
            schedule: [
              { day: "อังคาร", time: "09:00 - 11:00", isBooked: false },
              { day: "ศุกร์", time: "13:00 - 15:00", isBooked: false },
            ],
          },
          {
            name: "พญ. ชญาดา ดำรงเดช",
            specialization: "เวชศาสตร์ฟื้นฟูขั้นสูง",
            schedule: [
              { day: "จันทร์", time: "08:30 - 10:30", isBooked: false },
              { day: "พฤหัสบดี", time: "14:00 - 16:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์ประสาทวิทยาและสมอง",
        logo: dataIcon.pyscho,
        doctors: [
          {
            name: "นพ. ภาณุวัชร์ วัฒนวณิช",
            specialization: "ประสาทวิทยา",
            schedule: [
              { day: "พุธ", time: "13:00 - 15:00", isBooked: false },
              { day: "เสาร์", time: "09:00 - 11:00", isBooked: false },
            ],
          },
          {
            name: "พญ. อัจฉรา ศุภจิตรา",
            specialization: "ประสาทศัลยแพทย์",
            schedule: [
              { day: "จันทร์", time: "09:00 - 11:00", isBooked: false },
              { day: "ศุกร์", time: "14:00 - 16:00", isBooked: false },
            ],
          },
        ],
      },
    ],
  };

export default somdetPhraThepratHospital;
