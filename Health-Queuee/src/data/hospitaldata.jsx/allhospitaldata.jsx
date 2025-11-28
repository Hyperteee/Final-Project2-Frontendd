// Hospital imports only (no schedules)
import chulalongkorn from "./chula/chula";
import synphaet from "./synphaet/synphaet";
import phyathai from "./phyathai/phyathai";
import bumrungrad from "./bumrungrad/bumrungrad";
import samitivej from "./samitivej-sukhumvit/samitivej-sukhumvit";
import siriraj from "./siriraj-piyamaharajkarun/siriraj-piyamaharajkarun";
import bangkokHospital from "./bangkok-hospital/bangkok-hospital";
import praram9Hospital from "./praram9/praram9";
import ramathibodiHospital from "./ramathibodi/ramathibodi";
import vejthaniHospital from "./vejthani/vejthani";
import somdetPhraThepratHospital from "./somdet-phra-theprat/somdet-phra-theprat";
import chiangmaiRam from "./chiangmai-ram/chiangmai-ram";
import maharajChiangMai from "./mahanakornChiangmai/mahanakornChiangmai";
import khonkaenRam from "./khonkanram/khonkanRam";
import songklanagarind from "./songkla/songkla";
import vibhavadi from "./viphawadi/viphawadi";
import phramongkut from "./phramonkut/phramonkut";
import hatyai from "./hadyai/hadyai";
import paoloSamutPrakan from "./paolo/paolo";
import srinagarind from "./srinakarin/srinakarin";


const hospitalMap = {
  "จุฬาลงกรณ์": {
    info: chulalongkorn
  },
  "สินแพทย์": {
    info: synphaet
  },
  "เชียงใหม่ราม": {
    info: chiangmaiRam
  },
  "ศิริราช": {
    info: siriraj
  },
  "กรุงเทพ": {
    info: bangkokHospital
  },
  "มหาราชนครเชียงใหม่": {
    info: maharajChiangMai
  },
  "บำรุงราษฎร์": {
    info: bumrungrad
  },
  "ขอนแก่นราม": {
    info: khonkaenRam
  },
  "สงขลานครินทร์": {
    info: songklanagarind
  },
  "วิภาวดี": {
    info: vibhavadi
  },
  "สมิติเวช สุขุมวิท": {
    info: samitivej
  },
  "พระมงกุฎเกล้า": {
    info: phramongkut
  },
  "หาดใหญ่": {
    info: hatyai
  },
  "เปาโล สมุทรปราการ": {
    info: paoloSamutPrakan
  },
  "ศรีนครินทร์": {
    info: srinagarind
  },
  "พยาธิไทย": {
    info: phyathai
  },
  "ระยับ 9": {
    info: praram9Hospital
  },
  "ราชวิถี": {
    info: ramathibodiHospital
  },
  "เวชธานี": {
    info: vejthaniHospital
  },
  "สมเด็จพระเทพรัตน์": {
    info: somdetPhraThepratHospital
  }
};

export default hospitalMap;
