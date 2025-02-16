import { useTask } from "../contexts/TaskContext";

export default function Alert({ alert, setAlert, currentId }) {
  const {dispatch} = useTask();
  

  function handleDeleteAccept() {
    setAlert(false);
    dispatch({type: "deleteTask" , payload:currentId})
  }

  return (
    <>
      {alert && (
        <div className="flex justify-center items-center">
          <div className="relative flex justify-between items-center z-20 w-full p-4 bg-white rounded-md">
            <h1 className="font-SahelBold">
              آیا از حذف این گزینه اطمینان دارید؟
            </h1>
            <div className="flex items-center gap-x-2">
              <button
                className="h-10 w-24 rounded-md text-blue-600 bg-slate-200 transition hover:bg-slate-400 hover:text-blue-800"
                onClick={handleDeleteAccept}
              >
                بله
              </button>
              <button
                className="h-10 w-24 rounded-md text-white bg-blue-600 transition hover:bg-blue-800"
                onClick={() => setAlert(false)}
              >
                خیر
              </button>
            </div>
          </div>

          <div
            className={`overlay fixed inset-0 w-full h-full z-10 bg-black/40 ${
              !alert ? "hidden" : ""
            }`}
          ></div>
        </div>
      )}
    </>
  );
}

