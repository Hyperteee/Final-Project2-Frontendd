import dataIcon from "../../../../images/icon-department/icon-department";

const bangkokHospital = {
  id: "BKK007",
  name: "โรงพยาบาลกรุงเทพ",
  state: "กรุงเทพมหานคร",
  type: "เครือโรงพยาบาลเอกชน",
  logo: "images/logohospital/bangkok.png",
  stars: 4.7,
  reviews: 1505,
  location: { lat: 13.7475, lng: 100.5851 },
  district: "เขตห้วยขวาง",

  departments: [
    ///////////////////// ไม่รู้แผนก
    {
      id: "BKK007-D00",
      name: "ไม่รู้แผนก"
    },
    // -------------------- ศูนย์อุบัติเหตุและฉุกเฉิน --------------------
    {
      id: "BKK007-D01",
      name: "ศูนย์อุบัติเหตุและฉุกเฉิน",
      logo: dataIcon.surgery,
      doctors: [
        { id: "BKK007-D01-DR01", name: "นพ. วศิน ภักดีรัฐ", specialization: "ศัลยแพทย์อุบัติเหตุ" },
        { id: "BKK007-D01-DR02", name: "พญ. ธัญญาภรณ์ เทียมทรัพย์", specialization: "เวชศาสตร์ฉุกเฉิน" },
      ],
    },

    // -------------------- ศูนย์หัวใจกรุงเทพ --------------------
    {
      id: "BKK007-D02",
      name: "ศูนย์หัวใจกรุงเทพ",
      logo: dataIcon.heart,
      doctors: [
        { id: "BKK007-D02-DR01", name: "นพ. พงศ์พันธุ์ อรุณรัตน์", specialization: "อายุรแพทย์หัวใจ-ตจ" },
        { id: "BKK007-D02-DR02", name: "นพ. สิทธิพงศ์ ลีลาศ", specialization: "ศัลยแพทย์หัวใจและทรวงอก" },
      ],
    },

    // -------------------- ศูนย์กระดูกสันหลัง --------------------
    {
      id: "BKK007-D03",
      name: "ศูนย์กระดูกสันหลัง",
      logo: dataIcon.pyscho,
      doctors: [
        { id: "BKK007-D03-DR01", name: "นพ. ธนวัฒน์ นครินทร์", specialization: "ศัลยแพทย์กระดูกสันหลัง" },
        { id: "BKK007-D03-DR02", name: "พญ. ลภัสรดา ธีรเดชา", specialization: "แพทย์เวชศาสตร์ฟื้นฟูกระดูกสันหลัง" },
      ],
    },

    // -------------------- ศูนย์กุมารเวชกรรม --------------------
    {
      id: "BKK007-D04",
      name: "ศูนย์กุมารเวชกรรม",
      logo: dataIcon.child,
      doctors: [
        { id: "BKK007-D04-DR01", name: "นพ. ปัณณวัฒน์ สถิรานนท์", specialization: "กุมารแพทย์ทั่วไป" },
        { id: "BKK007-D04-DR02", name: "พญ. นิชาภา โล่ห์ทอง", specialization: "กุมารแพทย์โรคติดเชื้อ" },
      ],
    },
  ],
};

export default bangkokHospital;

