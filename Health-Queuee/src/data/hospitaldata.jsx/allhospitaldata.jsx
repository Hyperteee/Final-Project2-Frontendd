import chulalongkorn from "./chula/chula"
import chulaSchedule from "./chula/chulaSchedule";

import synphaet from "./synphaet/synphaet";
import synphaetSchedule from "./synphaet/synphaetSchedule";
import chiangmaiRam from "./chiangmai-ram/chiangmai-ram";
import chiangmaiRamSchedule from "./chiangmai-ram/chiangmai-ramSchedule";

// 4. ศิริราช
import siriraj from "./siriraj/siriraj";
import sirirajSchedule from "./siriraj/sirirajSchedule";

// 5. กรุงเทพ
import bangkokHospital from "./bangkok-hospital/bangkok";
import bangkokSchedule from "./bangkok-hospital/bangkokSchedule";

// 6. มหาราชนครเชียงใหม่
import maharajChiangMai from "./mahanakornChiangmai/mahanakornChiangmai";
import maharajChiangMaiSchedule from "./mahanakornChiangmai/mahanakornChiangmaiSchedule";

// 7. ราชวิถี
import rajavithiSchedule from "./rachavithi/rachavitiSchedule";
import rajavithi from "./rachavithi/rachaviti";

// 8. บำรุงราษฎร์
import bumrungrad from "./bumrungrad/bumrungrad";
import bumrungradSchedule from "./bumrungrad/bumrungradSchedule";

// 9. ขอนแก่นราม
import khonkaenRam from "./khonkanram/khonkanRam";
import khonkaenRamSchedule from "./khonkanram/khonkanRamSchedule";

// 10. สงขลานครินทร์
import songklanagarind from "./songkla/songkla";
import songklanagarindSchedule from "./songkla/songklaSchedule";

// 11. วิภาวดี

import vibhavadi from "./viphawadi/viphawadi";
import vibhavadiSchedule from "./viphawadi/viphawadiSchedule";

// 12. สมิติเวช สุขุมวิท
import samitivej from "./samitivej-sukhumvit/samitivej";
import samitivejSchedule from "./samitivej-sukhumvit/samitivetSchedule";

// 13. พระมงกุฎเกล้า
import phramongkut from "./phramonkut/phramonkut";
import phramongkutSchedule from "./phramonkut/phramonkutSchedule";

// 14. หาดใหญ่
import hatyai from "./hadyai/hadyai";
import hatyaiSchedule from "./hadyai/hadyaiSchedule";

// 15. เปาโล สมุทรปราการ
import paoloSamutPrakan from "./paolo/paolo";
import paoloSamutPrakanSchedule from "./paolo/paolo";

// 16. ศรีนครินทร์
import srinagarind from "./srinakarin/srinakarin";
import srinagarindSchedule from "./srinakarin/srinakarinSchedule";


const hospitalMap = {
  "จุฬาลงกรณ์": {
    info: chulalongkorn,
    schedule: chulaSchedule
  },
  "สินแพทย์": {
    info: synphaet,
    schedule: synphaetSchedule
  },
  "เชียงใหม่ราม": {
    info: chiangmaiRam,
    schedule: chiangmaiRamSchedule
  },
  "ศิริราช": {
    info: siriraj,
    schedule: sirirajSchedule
  },
  "กรุงเทพ": {
    info: bangkokHospital,
    schedule: bangkokSchedule
  },
  "มหาราชนครเชียงใหม่": {
    info: maharajChiangMai,
    schedule: maharajChiangMaiSchedule
  },
  "ราชวิถี": {
    info: rajavithi,
    schedule: rajavithiSchedule
  },
  "บำรุงราษฎร์": {
    info: bumrungrad,
    schedule: bumrungradSchedule
  },
  "ขอนแก่นราม": {
    info: khonkaenRam,
    schedule: khonkaenRamSchedule
  },
  "สงขลานครินทร์": {
    info: songklanagarind,
    schedule: songklanagarindSchedule
  },
  "วิภาวดี": {
    info: vibhavadi,
    schedule: vibhavadiSchedule
  },
  "สมิติเวช สุขุมวิท": {
    info: samitivej,
    schedule: samitivejSchedule
  },
  "พระมงกุฎเกล้า": {
    info: phramongkut,
    schedule: phramongkutSchedule
  },
  "หาดใหญ่": {
    info: hatyai,
    schedule: hatyaiSchedule
  },
  "เปาโล สมุทรปราการ": {
    info: paoloSamutPrakan,
    schedule: paoloSamutPrakanSchedule
  },
  "ศรีนครินทร์": {
    info: srinagarind,
    schedule: srinagarindSchedule
  }

  
};

export default hospitalMap;
