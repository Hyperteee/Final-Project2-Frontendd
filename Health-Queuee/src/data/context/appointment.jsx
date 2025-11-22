
import { createContext, useContext, useState } from "react";
import { HospitalScheduleContext } from "./allSchedule";
export const UserAppointment = createContext()

export const UserAppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([])
  const [nextId, setNextId] = useState(1)
  const { hospitalSchedules, setHospitalSchedules } = useContext(HospitalScheduleContext)
  const addAppointment = (appointment) => {
    const newAppt = { ...appointment, id: nextId };
    setAppointments(prev => [...prev, newAppt]);
    setNextId(prev => prev + 1);
    console.log("Appointment added:", appointments);

  }
  // const cancelAppointment = (appointmentId) => {
  //   setAppointments(prev => prev.filter(appt => appt.id !== appointmentId))
  // }
const cancelAppointment = (appointmentId) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appt) => {
        if (appt.id === appointmentId) {
          return { ...appt, status: "CANCELLED" };
        }
        return appt;
      })
    )}


  return (
    <UserAppointment.Provider value={{ appointments, addAppointment, cancelAppointment }}>
      {children}
    </UserAppointment.Provider>
  );
};
