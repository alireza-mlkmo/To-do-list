import "./App.css";

import AddTask from "./components/AddTask";
import Grouping from "./components/grouping";
import AllTasks from "./components/AllTasks";
import Divider from "./components/Divider";
import Title from "./components/Title";


export default function App() {
  return (
    <div className="app">
      <Title/>
      <AddTask />
      <Divider/>
      <Grouping />
      <AllTasks />
    </div>
  );
}
