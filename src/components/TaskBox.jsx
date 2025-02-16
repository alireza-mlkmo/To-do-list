import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useTask } from "../contexts/TaskContext";
import EditIcon from "./EditIcon";
import TrashIcon from "./TrashIcon";

export default function TaskBox({ task, setEdit , setAlert}) {
  const {dispatch} = useTask();
  const {id , title , finished , date} = task;

  const taskDate = new DateObject({
    date,
    calendar: persian,
    locale: persian_fa,
  });
  
  return (
    <div className="flex justify-between items-center w-full bg-blue-200 text-blue-600 p-2 rounded-md">
      <div className="flex items-center gap-x-1">
        <input
          checked={finished}
          onChange={() => dispatch({ type: "finishedTask", payload: id })}
          type="checkbox"
          className="peer size-4 cursor-pointer transition"
        />
        <label className="font-SahelBold">{title}</label>
      </div>
      <div className="flex gap-x-3">
        <p>{taskDate.format()}</p>

        <EditIcon setEdit={setEdit} />
        <TrashIcon setAlert={setAlert} />
      </div>
    </div>
  );
}