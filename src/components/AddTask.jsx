import { useState } from "react";
import { useTask } from "../contexts/TaskContext";

export default function AddTask() {
  const [newTask, setNewTask] = useState("");
  const {dispatch} = useTask();
  
  function handleSubmit(e) {
    e.preventDefault();
    const task = {
      title: newTask,
      finished: true,
      id: crypto.randomUUID(),
      date: new Date(),
    };
    dispatch({type:"addTask" , payload:task})
    setNewTask("")
    
  }

  return (
    <form
      className="flex justify-between items-center bg-white rounded-md  p-2 "
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="outline-none w-full"
        type="text"
        placeholder="اضافه کن.."
        required
      />
      <input
        type="submit"
        value="ایجاد"
        className="py-2 px-5 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition cursor-pointer"
      />
    </form>
  );
}