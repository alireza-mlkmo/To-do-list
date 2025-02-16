import StatusInput from "./StatusInput";
import DateObject from "react-date-object";
import { useTask } from "../contexts/TaskContext";
import DatePick from "./DatePick";

export default function Grouping() {
  const {dispatch} = useTask();

  function handleAddDate(newDate , type){
    if (newDate instanceof DateObject) newDate = newDate.toDate();
    if(type === "until") 
      dispatch({ type: "untilDate", payload: newDate });
    if(type === "from")
      dispatch({ type: "fromDate", payload: newDate });
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-y-4 gap-x-4 float-right">
      <StatusInput />
      <DatePick onAddDate={handleAddDate} lableText="از تاریخ:" type="from" />
      <DatePick onAddDate={handleAddDate} lableText="تا تاریخ:" type="until" />
    </div>
  );
}
