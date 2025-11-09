import dataIcon from "../../../images/icon-department/icon-department";

const samitivejSukhumvit = {
    id: 7,
    name: "โรงพยาบาลสมิติเวช สุขุมวิท",
    state: "กรุงเทพมหานคร",
    type: "โรงพยาบาลเอกชน",
    logo: "images/logohospital/samitivej-sukhumvit.png",
    stars: 4.8,
    reviews: 980,
    location: { lat: 13.7334, lng: 100.5802 },
    district: "เขตวัฒนา",
    departments: [
      {
        name: "ศูนย์การแพทย์ครอบครัว",
        logo: dataIcon.ayurkum,
        doctors: [
          {
            name: "นพ. อนวัช พุ่มพฤกษ์",
            specialization: "เวชศาสตร์ครอบครัว",
            schedule: [
              { day: "จันทร์", time: "08:30 - 10:30", isBooked: false },
              { day: "พฤหัสบดี", time: "13:30 - 15:30", isBooked: false },
            ],
          },
          {
            name: "พญ. สินีนาถ คงเจริญ",
            specialization: "อายุรกรรมทั่วไป",
            schedule: [
              { day: "อังคาร", time: "09:00 - 11:00", isBooked: false },
              { day: "ศุกร์", time: "14:00 - 16:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์สูตินรีกรรมและภาวะมีบุตรยาก",
        logo: dataIcon.woman,
        doctors: [
          {
            name: "พญ. รวิภา ธีระวัฒน์",
            specialization: "เวชศาสตร์การเจริญพันธุ์",
            schedule: [
              { day: "จันทร์", time: "13:00 - 15:00", isBooked: false },
              { day: "พุธ", time: "09:00 - 11:00", isBooked: false },
            ],
          },
          {
            name: "นพ. พุฒิเมธ ไตรภพ",
            specialization: "สูตินรีแพทย์เฉพาะทางผ่าตัดส่องกล้อง",
            schedule: [
              { day: "อังคาร", time: "14:00 - 16:00", isBooked: false },
              { day: "ศุกร์", time: "09:30 - 11:30", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์กุมารเวชชั้นสูง",
        logo: dataIcon.child,
        doctors: [
          {
            name: "นพ. สหภูมิ สิริไพบูลย์",
            specialization: "กุมารแพทย์โรคระบบทางเดินหายใจ",
            schedule: [
              { day: "พุธ", time: "13:00 - 15:00", isBooked: false },
              { day: "เสาร์", time: "09:00 - 11:00", isBooked: false },
            ],
          },
          {
            name: "พญ. กมลชนก แสงเพ็ญ",
            specialization: "กุมารแพทย์ต่อมไร้ท่อ",
            schedule: [
              { day: "จันทร์", time: "09:00 - 11:00", isBooked: false },
              { day: "พฤหัสบดี", time: "14:00 - 16:00", isBooked: false },
            ],
          },
        ],
      },
      {
        name: "ศูนย์กระดูกและข้อ",
        logo: dataIcon.surgery,
        doctors: [
          {
            name: "นพ. ภราดร ชื่นใจ",
            specialization: "ศัลยแพทย์ออร์โธปิดิกส์",
            schedule: [
              { day: "อังคาร", time: "08:00 - 10:00", isBooked: false },
              { day: "ศุกร์", time: "13:00 - 15:00", isBooked: false },
            ],
          },
          {
            name: "นพ. เชษฐา สุภกิจ",
            specialization: "แพทย์เวชศาสตร์ฟื้นฟู",
            schedule: [
              { day: "พฤหัสบดี", time: "09:00 - 11:00", isBooked: false },
              { day: "เสาร์", time: "10:00 - 12:00", isBooked: false },
            ],
          },
        ],
      },
    ],
  };

export default samitivejSukhumvit;
