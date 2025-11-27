import dataIcon from "../../../../images/icon-department/icon-department";

const synphaet = {
  id: "BKK002", // อิงตาม hospitalData
  name: "สินแพทย์",
  state: "กรุงเทพมหานคร",
  type: "โรงพยาบาลเอกชน",
  logo: "images/logohospital/สินแพทย์.jpeg", // อิงตาม hospitalData
  stars: 4.2,
  reviews: 153,
  location: { lat: 13.7620, lng: 100.5673 }, // อิงตาม hospitalData
  district: "ห้วยขวาง",

  departments: [
    ///////////////////// ไม่รู้แผนก
    {
      id: "BKK002-D00",
      name: "ไม่รู้แผนก"
    },
    // -------------------- อายุรกรรม --------------------
    {
      id: "BKK002-D01",
      name: "อายุรกรรม",
      logo: dataIcon.ayurkum,
      doctors: [
        { id: "BKK002-D01-DR01", name: "นพ. บรรจง รักษาไว", specialization: "อายุรแพทย์ทั่วไป" },
        { id: "BKK002-D01-DR02", name: "พญ. รัชนี มีสุข", specialization: "โรคเบาหวานและต่อมไร้ท่อ" },
        { id: "BKK002-D01-DR03", name: "นพ. วินัย ใส่ใจ", specialization: "โรคทางเดินอาหารและตับ" },
        { id: "BKK002-D01-DR04", name: "พญ. กมลวรรณ มั่นคง", specialization: "โรคไต" },
        { id: "BKK002-D01-DR05", name: "นพ. สุรพล คนดี", specialization: "โรคระบบประสาท" },
      ],
    },

    // -------------------- ศัลยกรรม --------------------
    {
      id: "BKK002-D02",
      name: "ศัลยกรรม",
      logo: dataIcon.surgery,
      doctors: [
        { id: "BKK002-D02-DR01", name: "นพ. กล้าหาญ ชาญชัย", specialization: "ศัลยกรรมทั่วไป" },
        { id: "BKK002-D02-DR02", name: "พญ. งามตา วงศ์สวย", specialization: "ศัลยกรรมตกแต่ง" },
        { id: "BKK002-D02-DR03", name: "นพ. ทรงพล แข็งแรง", specialization: "ศัลยกรรมกระดูกและข้อ" },
        { id: "BKK002-D02-DR04", name: "พญ. สดใส ใจกล้า", specialization: "ศัลยกรรมระบบปัสสาวะ" },
        { id: "BKK002-D02-DR05", name: "นพ. อัครเดช เก่งกล้า", specialization: "ศัลยกรรมลำไส้ใหญ่" },
      ],
    },

    // -------------------- กุมารเวชกรรม --------------------
    {
      id: "BKK002-D03",
      name: "กุมารเวชกรรม",
      logo: dataIcon.child,
      doctors: [
        { id: "BKK002-D03-DR01", name: "พญ. แจ่มใส วัยซน", specialization: "กุมารแพทย์ทั่วไป" },
        { id: "BKK002-D03-DR02", name: "นพ. อาทิตย์ จิตดี", specialization: "โรคภูมิแพ้ในเด็ก" },
        { id: "BKK002-D03-DR03", name: "พญ. อารี ใจดี", specialization: "พัฒนาการเด็ก" },
        { id: "BKK002-D03-DR04", name: "นพ. ธารา พาเพลิน", specialization: "โรคผิวหนังในเด็ก" },
        { id: "BKK002-D03-DR05", name: "พญ. สายธาร รักเด็ก", specialization: "ทารกแรกเกิด" },
      ],
    },

    // -------------------- นรีเวชกรรม --------------------
    {
      id: "BKK002-D04",
      name: "นรีเวชกรรม",
      logo: dataIcon.woman,
      doctors: [
        { id: "BKK002-D04-DR01", name: "พญ. ผ่องศรี มีครรภ์", specialization: "ฝากครรภ์" },
        { id: "BKK002-D04-DR02", name: "นพ. สุขุม นุ่มลึก", specialization: "ผ่าตัดผ่านกล้องทางนรีเวช" },
        { id: "BKK002-D04-DR03", name: "พญ. วาริน กินดี", specialization: "วัยทอง" },
        { id: "BKK002-D04-DR04", name: "นพ. ชาติชาย ชายชาตรี", specialization: "ภาวะมีบุตรยาก" },
        { id: "BKK002-D04-DR05", name: "พญ. แพรวา น่ารัก", specialization: "มะเร็งวิทยานรีเวช" },
      ],
    },

    // -------------------- หัวใจ --------------------
    {
      id: "BKK002-D05",
      name: "หัวใจ",
      logo: dataIcon.heart,
      doctors: [
        { id: "BKK002-D05-DR01", name: "นพ. หัวใจ แกร่ง", specialization: "อายุรกรรมหัวใจ" },
        { id: "BKK002-D05-DR02", name: "พญ. ฤทัย ใจรัก", specialization: "มัณฑนากรหลอดเลือดหัวใจ" },
        { id: "BKK002-D05-DR03", name: "นพ. ชีพจร ลงเท้า", specialization: "โรคหัวใจเต้นผิดจังหวะ" },
        { id: "BKK002-D05-DR04", name: "พญ. ปานวาด วาดฝัน", specialization: "หัวใจล้มเหลว" },
        { id: "BKK002-D05-DR05", name: "นพ. แมน มั่นคง", specialization: "ศัลยกรรมหัวใจ" },
      ],
    },

    // -------------------- จิตเวช --------------------
    {
      id: "BKK002-D06",
      name: "จิตเวช",
      logo: dataIcon.pyscho,
      doctors: [
        { id: "BKK002-D06-DR01", name: "พญ. สติ มาปัญญาเกิด", specialization: "จิตเวชทั่วไป" },
        { id: "BKK002-D06-DR02", name: "นพ. สง่า ผ่าเผย", specialization: "จิตเวชผู้สูงอายุ" },
        { id: "BKK002-D06-DR03", name: "พญ. เย็นฤดี มีสุข", specialization: "ความเครียดและโรคนอนไม่หลับ" },
        { id: "BKK002-D06-DR04", name: "นพ. กลางใจ ไกลทุกข์", specialization: "บำบัดสารเสพติด" },
        { id: "BKK002-D06-DR05", name: "พญ. ฟ้าใส ใจสะอาด", specialization: "จิตเวชเด็กและวัยรุ่น" },
      ],
    },
  ],
};

export default synphaet;