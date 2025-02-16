import { useTask } from "../contexts/TaskContext";
import Task from "./Task";

export default function AllTasks() {
  const { tasksToShow, tasksStatus } = useTask();
  let sortedTasks;
  if (tasksStatus === "all")  sortedTasks = [...tasksToShow];

  if (tasksStatus === "finished")
    sortedTasks = [...tasksToShow].sort((a, b) => {
      return a.finished === b.finished ? 0 : a.finished ? -1 : 1; // notFinished tasks come last
    });

  if (tasksStatus === "notFinished")
    sortedTasks = [...tasksToShow].sort((a, b) => {
      return a.finished === b.finished ? 0 : a.finished ? 1 : -1; // Finished tasks come last
    });

  if (tasksStatus === "word")
    sortedTasks = [...tasksToShow].sort((a, b) => a.title - b.title);

  return sortedTasks.map((task, i) => <Task key={i} task={task} />);
  
}
