
import { createContext, useState } from "react";

export const UserAppointment = createContext()

export const UserAppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([])

  const addAppointment = (appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  }

  return (
    <UserAppointment.Provider value={{ appointments, addAppointment }}>
      {children}
    </UserAppointment.Provider>
  );
};
