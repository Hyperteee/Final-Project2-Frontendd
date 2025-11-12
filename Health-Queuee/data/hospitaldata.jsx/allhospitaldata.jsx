import chulalongkorn from "./chula/chula"
import chulaSchedule from "./chula/chulaSchedule";
import synphaet_ramintra from "./synphaet"

const hospitalMap = {
  "จุฬาลงกรณ์":{
    info: chulalongkorn,
    schedule: chulaSchedule}
  ,
  "สินแพทย์": {
    info: synphaet_ramintra,
    schedule: {}
  }
  
};

export default hospitalMap;
