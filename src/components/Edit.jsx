import { useState } from "react";
import { useTask } from "../contexts/TaskContext";

export default function Edit({ edit, setEdit, currentId }) {
  const [editedTitle, setEditedTitle] = useState("");
  const { dispatch } = useTask();

  function handleClickOverlay() {
    setEdit(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "editTask",
      payload: { currentTitle: editedTitle, id: currentId },
    });
    handleClickOverlay()
  }
  return (
    <>
      {edit && (
        <div className="flex justify-center items-center">
          <form
            className="relative flex justify-between items-center z-20 w-full p-4 bg-white rounded-md"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              type="text"
              placeholder="ویرایش کنید ..."
              className="border-2 border-gray-400 rounded-md p-2 w-1/3"
            />
            <div className="flex items-center gap-x-2">
              <input
                type="submit"
                value="ویرایش"
                className="h-10 w-24 rounded-md text-white bg-blue-600 transition hover:bg-blue-800 cursor-pointer"
              />

              <button
                className="h-10 w-24 rounded-md text-blue-600 bg-slate-200 transition hover:bg-slate-400 hover:text-blue-800"
                onClick={handleClickOverlay}
              >
                لغو
              </button>
            </div>
          </form>

          <div
            className={`overlay fixed inset-0 w-full h-full z-10 bg-black/40 ${
              !edit ? "hidden" : ""
            }`}
          ></div>
        </div>
      )}
    </>
  );
}
