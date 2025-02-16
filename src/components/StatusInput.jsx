import { useTask } from "../contexts/TaskContext"

export default function StatusInput() {
  const {dispatch} = useTask();

  return (
      <div className="flex items-center gap-x-1">
        <label className="text-gray-500">مرتب سازی:</label>
        <select className="w-44 p-1 rounded-md bg-white cursor-pointer" onChange={(e) => dispatch({type:"status" , payload:e.target.value})}>
          <option value="all">همه</option>
          <option value="finished">تکمیل شده</option>
          <option value="notFinished">تکمیل نشده</option>
          <option value="word">حروف الفبا</option>
        </select>
      </div>
  )
}