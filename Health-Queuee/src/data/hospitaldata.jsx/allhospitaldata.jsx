import chulalongkorn from "./chula/chula";
import chulaSchedule from "./chula/chulaSchedule";
import synphaet_ramintra from "./synphaet/synphaet";
import synphaetSchedule from "./synphaet/synphaetSchedule";
import phyathai from "./phyathai/phyathai";
import phyathaiSchedule from "./phyathai/phyathaiSchedule";
import bumrungrad from "./bumrungrad/bumrungrad";
import bumrungradSchedule from "./bumrungrad/bumrungradSchedule";
import samitivejSukhumvit from "./samitivej-sukhumvit/samitivej-sukhumvit";
import samitivejSchedule from "./samitivej-sukhumvit/samitivejSchedule";
import sirirajPiyamaharajkarun from "./siriraj-piyamaharajkarun/siriraj-piyamaharajkarun";
import sirirajSchedule from "./siriraj-piyamaharajkarun/sirirajSchedule";
import bangkokHospital from "./bangkok-hospital/bangkok-hospital";
import bangkokHospitalSchedule from "./bangkok-hospital/bangkokHospitalSchedule";
import praram9Hospital from "./praram9/praram9";
import praram9Schedule from "./praram9/praram9Schedule";
import ramathibodiHospital from "./ramathibodi/ramathibodi";
import ramathibodiSchedule from "./ramathibodi/ramathibodiSchedule";
import vejthaniHospital from "./vejthani/vejthani";
import vejthaniSchedule from "./vejthani/vejthaniSchedule";
import somdetPhraThepratHospital from "./somdet-phra-theprat/somdet-phra-theprat";
import somdetSchedule from "./somdet-phra-theprat/somdetSchedule";

const hospitalMap = {
  [chulalongkorn.name]: {
    info: chulalongkorn,
    schedule: chulaSchedule,
  },
  [synphaet_ramintra.name]: {
    info: synphaet_ramintra,
    schedule: synphaetSchedule,
  },
  [phyathai.name]: {
    info: phyathai,
    schedule: phyathaiSchedule,
  },
  [bumrungrad.name]: {
    info: bumrungrad,
    schedule: bumrungradSchedule,
  },
  [samitivejSukhumvit.name]: {
    info: samitivejSukhumvit,
    schedule: samitivejSchedule,
  },
  [sirirajPiyamaharajkarun.name]: {
    info: sirirajPiyamaharajkarun,
    schedule: sirirajSchedule,
  },
  [bangkokHospital.name]: {
    info: bangkokHospital,
    schedule: bangkokHospitalSchedule,
  },
  [praram9Hospital.name]: {
    info: praram9Hospital,
    schedule: praram9Schedule,
  },
  [ramathibodiHospital.name]: {
    info: ramathibodiHospital,
    schedule: ramathibodiSchedule,
  },
  [vejthaniHospital.name]: {
    info: vejthaniHospital,
    schedule: vejthaniSchedule,
  },
  [somdetPhraThepratHospital.name]: {
    info: somdetPhraThepratHospital,
    schedule: somdetSchedule,
  },
};

export default hospitalMap;
