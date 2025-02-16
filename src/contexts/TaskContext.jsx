import { createContext, useReducer , useContext , useMemo, useEffect , useRef } from "react";



const TaskContext = createContext();


const initialState = {
  tasks: [],
  fromDate: new Date(),
  untilDate: new Date(),
  tasksStatus:"all",
};
function reducer(state , action){
    switch (action.type) {
      case "addTask": 
          return { ...state, tasks: [...state.tasks, action.payload] };
      case "editTask":
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id
              ? { ...task, title: action.payload.currentTitle }
              : task
          ),
        };
      case "deleteTask":
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      case "finishedTask":
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, finished: !task.finished }
              : task
          ),
        };
      case "fromDate":
        return {...state, fromDate:action.payload};
      case "untilDate":
        return {...state , untilDate:action.payload};
      case "status":
        return {...state , tasksStatus:action.payload}
      default:
        throw new Error("Unknown action type!");
    }
}

function TaskProvider({children}){
    const [{ tasks, fromDate, untilDate, tasksStatus }, dispatch] = useReducer(
      reducer,
      initialState
    );
  
    // Save And Read tasks from Local-Storage
    useEffect(()=>{
      if(tasks.length > 0)
      localStorage.setItem("tasks" , JSON.stringify(tasks))
    },[tasks])

    const loadedRef = useRef(false);

    useEffect(() => {
      if (loadedRef.current) return; 
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks && savedTasks.length > 0) {
        const parsedTasks = JSON.parse(savedTasks);
        const tasksWithConvertedDates = parsedTasks.map((task) => ({
          ...task,
          date: new Date(task.date),
        }));
      
        tasksWithConvertedDates.forEach((task) => {
          dispatch({ type: "addTask", payload: task });
        });
      }
    
      loadedRef.current = true; // Mark as loaded
    }, [dispatch]);


    // Tasks to Show by Dates
    const tasksToShow = useMemo(() => {
      if (
        !fromDate ||
        !untilDate ||
        !(fromDate instanceof Date) ||
        !(untilDate instanceof Date)
      )
        return tasks;

      const from = new Date(
        fromDate.getFullYear(),
        fromDate.getMonth(),
        fromDate.getDate()
      ).getTime();
      const until = new Date(
        untilDate.getFullYear(),
        untilDate.getMonth(),
        untilDate.getDate()
      ).getTime();

      return tasks.filter((task) => {
        const taskDate = new Date(
          task.date.getFullYear(),
          task.date.getMonth(),
          task.date.getDate()
        ).getTime();
        return taskDate >= from && taskDate <= until;
      });
    }, [tasks, fromDate, untilDate]);
    
    
    return (
      <TaskContext.Provider
        value={{
          tasks,
          dispatch,
          fromDate,
          untilDate,
          tasksToShow,
          tasksStatus,
        }}
      >
        {children}
      </TaskContext.Provider>
    );
}

function useTask(){
    const context = useContext(TaskContext);
    if (context === undefined)
      throw new Error("AuthContext was used outside the Auth provider");
    return context;
}

export{TaskProvider , useTask}
