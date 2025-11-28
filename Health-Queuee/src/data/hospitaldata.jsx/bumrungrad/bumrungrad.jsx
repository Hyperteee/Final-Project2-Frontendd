import dataIcon from "../../../../images/icon-department/icon-department";

const bumrungrad = {
  id: "BKK006", // อิงตาม hospitalData
  name: "บำรุงราษฎร์",
  state: "กรุงเทพมหานคร",
  type: "โรงพยาบาลเอกชน",
  logo: "images/logohospital/bumrungrad.png", // อิงตาม hospitalData
  stars: 4.9,
  reviews: 512,
  location: { lat: 13.7469, lng: 100.5562 }, // อิงตาม hospitalData
  district: "วัฒนา",

  departments: [
    ///////////////////// ไม่รู้แผนก
    {
      id: "BKK006-D00",
      name: "ไม่รู้แผนก"
    },
    // -------------------- อายุรกรรม --------------------
    {
      id: "BKK006-D01",
      name: "อายุรกรรม",
      logo: dataIcon.ayurkum,
      doctors: [
        { id: "BKK006-D01-DR01", name: "นพ. แอนดรูว์ รักษาดี", specialization: "อายุรแพทย์ทั่วไป (Inter)" },
        { id: "BKK006-D01-DR02", name: "พญ. โซเฟีย เจริญสุข", specialization: "โรคระบบทางเดินอาหารและตับ" },
        { id: "BKK006-D01-DR03", name: "นพ. เดวิด คิดรอบคอบ", specialization: "ระบบประสาทและสมอง" },
        { id: "BKK006-D01-DR04", name: "พญ. ณัฐกานต์ งานดี", specialization: "โรคต่อมไร้ท่อและเบาหวาน" },
        { id: "BKK006-D01-DR05", name: "นพ. ชัยชนะ ภูมิต้านทาน", specialization: "โรคภูมิแพ้และภูมิคุ้มกัน" },
      ],
    },

    // -------------------- ศัลยกรรม --------------------
    {
      id: "BKK006-D02",
      name: "ศัลยกรรม",
      logo: dataIcon.surgery,
      doctors: [
        { id: "BKK006-D02-DR01", name: "นพ. ศัลย์ มือเบา", specialization: "ศัลยกรรมทั่วไป" },
        { id: "BKK006-D02-DR02", name: "พญ. สวยสมบูรณ์ แบบ", specialization: "ศัลยกรรมตกแต่งและเสริมสร้าง" },
        { id: "BKK006-D02-DR03", name: "นพ. กระดูก แข็งแรง", specialization: "ศัลยกรรมกระดูกและข้อ (Sports Medicine)" },
        { id: "BKK006-D02-DR04", name: "พญ. คล่องแคล่ว ว่องไว", specialization: "ศัลยกรรมส่องกล้อง" },
        { id: "BKK006-D02-DR05", name: "นพ. สมอง ปราดเปรื่อง", specialization: "ศัลยกรรมระบบประสาท" },
      ],
    },

    // -------------------- กุมารเวชกรรม --------------------
    {
      id: "BKK006-D03",
      name: "กุมารเวชกรรม",
      logo: dataIcon.child,
      doctors: [
        { id: "BKK006-D03-DR01", name: "พญ. อลิซ ในแดนมหัศจรรย์", specialization: "กุมารแพทย์ทั่วไป" },
        { id: "BKK006-D03-DR02", name: "นพ. จูเนียร์ สดใส", specialization: "โรคภูมิแพ้ในเด็ก" },
        { id: "BKK006-D03-DR03", name: "พญ. นานา น่าเอ็นดู", specialization: "พัฒนาการเด็กและพฤติกรรม" },
        { id: "BKK006-D03-DR04", name: "นพ. เคนโด้ โตไว", specialization: "โรคต่อมไร้ท่อในเด็ก" },
        { id: "BKK006-D03-DR05", name: "พญ. มิลค์กี้ แข็งแรง", specialization: "ทารกแรกเกิด" },
      ],
    },

    // -------------------- นรีเวชกรรม --------------------
    {
      id: "BKK006-D04",
      name: "นรีเวชกรรม",
      logo: dataIcon.woman,
      doctors: [
        { id: "BKK006-D04-DR01", name: "พญ. เกรซ สง่างาม", specialization: "สูติ-นรีเวชทั่วไป" },
        { id: "BKK006-D04-DR02", name: "นพ. อลัน มั่นใจ", specialization: "เวชศาสตร์การเจริญพันธุ์ (IVF)" },
        { id: "BKK006-D04-DR03", name: "พญ. เคท ดูแลดี", specialization: "เวชศาสตร์มารดาและทารก" },
        { id: "BKK006-D04-DR04", name: "นพ. แพทริค พลิกฟื้น", specialization: "ผ่าตัดผ่านกล้องทางนรีเวช" },
        { id: "BKK006-D04-DR05", name: "พญ. โรส โรยรา", specialization: "วัยทองและฮอร์โมน" },
      ],
    },

    // -------------------- หัวใจ --------------------
    {
      id: "BKK006-D05",
      name: "หัวใจ",
      logo: dataIcon.heart,
      doctors: [
        { id: "BKK006-D05-DR01", name: "นพ. ฮาร์ท บีท", specialization: "อายุรศาสตร์หัวใจ" },
        { id: "BKK006-D05-DR02", name: "พญ. วาเลนไทน์ ใจดี", specialization: "มัณฑนากรหลอดเลือดหัวใจ" },
        { id: "BKK006-D05-DR03", name: "นพ. จังหวะ หัวใจ", specialization: "สรีรวิทยาไฟฟ้าหัวใจ" },
        { id: "BKK006-D05-DR04", name: "พญ. แคร์ริ่ง จริงใจ", specialization: "เวชศาสตร์ฟื้นฟูหัวใจ" },
        { id: "BKK006-D05-DR05", name: "นพ. สตรอง ป้องกัน", specialization: "ศัลยกรรมหัวใจ" },
      ],
    },

    // -------------------- จิตเวช --------------------
    {
      id: "BKK006-D06",
      name: "จิตเวช",
      logo: dataIcon.pyscho,
      doctors: [
        { id: "BKK006-D06-DR01", name: "พญ. มายด์ เข้าใจ", specialization: "จิตเวชทั่วไป" },
        { id: "BKK006-D06-DR02", name: "นพ. เบรน บรรเทา", specialization: "ความเครียดและการนอนหลับ" },
        { id: "BKK006-D06-DR03", name: "พญ. จอย สนุกสนาน", specialization: "จิตเวชเด็กและวัยรุ่น" },
        { id: "BKK006-D06-DR04", name: "นพ. คาล์ม สงบ", specialization: "จิตบำบัด" },
        { id: "BKK006-D06-DR05", name: "พญ. โฮป ความหวัง", specialization: "บำบัดสารเสพติด" },
      ],
    },
  ],
};

export default bumrungrad;