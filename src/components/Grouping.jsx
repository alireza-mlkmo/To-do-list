import StatusInput from "./StatusInput";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";

import { useState } from "react";
import { useTask } from "../contexts/TaskContext";

export default function Grouping() {
  const [fromDate, setFromDate] = useState(new Date());
  const [untilDate, setUntilDate] = useState(new Date());
  const {dispatch} = useTask();

  function handleAddFromDate(newDate) {
    if (newDate instanceof DateObject) newDate = newDate.toDate();
    setFromDate(newDate);
    dispatch({ type: "fromDate", payload: newDate });
    
  }

  function handleAddUntilDate(newDate) {
    if (newDate instanceof DateObject) newDate = newDate.toDate();
    setUntilDate(newDate);
    dispatch({ type: "untilDate", payload: newDate });

  }

  return (
    <div className="flex gap-x-4 float-right">
      <StatusInput />

      <div className="flex items-center gap-x-1">
        <label className="text-gray-500">از تاریخ:</label>
        <DatePicker
          render={
            <input
              type="text"
              className="w-44 p-1 rounded-md bg-white text-center"
              placeholder="تاریخ را انتخاب کنید..."
            />
          }
          placeholder="تاریخ را انتخاب کنید..."
          value={fromDate}
          onChange={handleAddFromDate}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-left"
        />
      </div>
      <div className="flex items-center gap-x-1">
        <label className="text-gray-500">تا تاریخ:</label>
        <DatePicker
          render={
            <input
              type="text"
              className="w-44 p-1 rounded-md bg-white text-center"
              placeholder="تاریخ را انتخاب کنید..."
            />
          }
          placeholder="تاریخ را انتخاب کنید..."
          value={untilDate}
          onChange={handleAddUntilDate}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-left"
        />
      </div>
    </div>
  );
}
