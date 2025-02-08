import { useEffect, useState } from "react";

const GymAttendance = () => {
  const [attended, setAttended] = useState(false);
  const [attendanceCount, setAttendanceCount] = useState(25);

  useEffect(() => {
    const storedCount = localStorage.getItem("attendanceCount");
    const lastDate = localStorage.getItem("lastAttendanceDate");
    const today = new Date().toDateString();

    if (storedCount) {
      setAttendanceCount(parseInt(storedCount, 10));
    }

    if (lastDate !== today) {
      setAttended(false);
    } else {
      setAttended(true);
    }
  }, []);

  const handleCheck = () => {
    if (!attended) {
      const newCount = attendanceCount + 1;
      setAttendanceCount(newCount);
      localStorage.setItem("attendanceCount", newCount.toString());
      localStorage.setItem("lastAttendanceDate", new Date().toDateString());
    }
    setAttended(true);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md ">
       <p className="mb-2 text-3xl font-semibold text-gray-700">
        Días asistidos: <span className="font-bold"><span className="text-stone-900">{attendanceCount}</span></span>
      </p>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={attended}
          onChange={handleCheck}
          className="w-5 h-5"
        />
        <span className="font-semibold text-stone-700">Confirmar asistencia</span>
      </label>
     
    </div>
  );
};

export default GymAttendance;
