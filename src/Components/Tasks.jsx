import React from "react";
import NewTask from "./NewTask";

export const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold  mb-6 text-stone-700">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-700 my-4">
          This project does not have any tasks yet
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-200 text-stone-700 ">
          {tasks.map((task) => (
            <li
              key={task.id}
              className=" flex justify-between my-4 items-center"
            >
              <span>{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="test-stone-700 hover:text-red-600 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-900"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
