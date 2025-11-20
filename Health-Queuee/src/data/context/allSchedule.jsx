
import { createContext, useState } from "react";
import hospitalMap from "../hospitaldata.jsx/allhospitaldata";

export const HospitalScheduleContext = createContext();

export const HospitalScheduleProvider = ({ children }) => {
  const [hospitalSchedules, setHospitalSchedules] = useState({
    "จุฬาลงกรณ์": hospitalMap["จุฬาลงกรณ์"].schedule || {},
    "สินแพทย์": hospitalMap["สินแพทย์"].schedule || {},
  });

  return (
    <HospitalScheduleContext.Provider value={{ hospitalSchedules, setHospitalSchedules }}>
      {children}
    </HospitalScheduleContext.Provider>
  );
};
