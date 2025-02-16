import { useState } from "react";
import Alert from "./alert";
import Edit from "./edit";
import TaskBox from "./TaskBox";


export default function Task({ task }) {
  const [alert, setAlert] = useState(false);
  const [edit, setEdit] = useState(false);
  if(!task) return<p>تسکی موجود نیست</p>
  const currentId = task.id;
  
  return (
    <>
      <Alert alert={alert} setAlert={setAlert} currentId={currentId} />
      <Edit edit={edit} setEdit={setEdit} currentId={currentId} />
      <TaskBox task={task} setAlert={setAlert} setEdit={setEdit}/>
    </>
  );
}
