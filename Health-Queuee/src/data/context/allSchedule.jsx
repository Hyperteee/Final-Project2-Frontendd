import { createContext, useState } from "react";
import hospitalMap from "../hospitaldata.jsx/allhospitaldata";

export const HospitalScheduleContext = createContext();

export const HospitalScheduleProvider = ({ children }) => {
  const initialSchedules = Object.values(hospitalMap).reduce((acc, { info, schedule }) => {
    if (info?.name) {
      acc[info.name] = schedule || {};
    }
    return acc;
  }, {});

  const [hospitalSchedules, setHospitalSchedules] = useState(initialSchedules);

  return (
    <HospitalScheduleContext.Provider value={{ hospitalSchedules, setHospitalSchedules }}>
      {children}
    </HospitalScheduleContext.Provider>
  );
};
