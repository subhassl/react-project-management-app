import React from "react";
import { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredtask, setEnteredTask] = useState("");

  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleClick = () => {
    if (enteredtask.trim().length === 0) {
      return;
    }
    onAdd(enteredtask);
    setEnteredTask("");
  };

  return (
    <div className="flex item-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 bg-stone-100 text-stone-700 border-stone-300 border-2 rounded-sm bg-stone-100 text-stone-700 hover:bg-stone-200 focus:bg-stone-200 border-stone-300 focus:border-stone-400"
        onChange={handleChange}
        value={enteredtask}
      />
      <button
        className="text-stone-700 hover:text-stone-900 bg-stone-200 hover:bg-stone-300 px-2 py-1 rounded-sm border-stone-300 border-2 focus:border-stone-400"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
