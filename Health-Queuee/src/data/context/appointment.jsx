
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
    // 1. Remove from user appointments
    setAppointments(prev => prev.filter(a => a.id !== appointmentId));

    // 2. Remove from hospitalSchedules
    const updatedSchedules = { ...hospitalSchedules };
    Object.values(updatedSchedules).forEach(departmentObj => {
      Object.values(departmentObj || {}).forEach(dep => {
        dep.doctors?.forEach(doc => {
          if (doc.bookings) {
            Object.keys(doc.bookings).forEach(date => {
              Object.keys(doc.bookings[date]).forEach(time => {
                doc.bookings[date][time] = doc.bookings[date][time].filter(b => b.id !== appointmentId);
              });
            });
          }
        });
      });
    });


    setHospitalSchedules(updatedSchedules);
  }


  return (
    <UserAppointment.Provider value={{ appointments, addAppointment, cancelAppointment }}>
      {children}
    </UserAppointment.Provider>
  );
};
