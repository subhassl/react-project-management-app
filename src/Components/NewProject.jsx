import React from "react";
import { Input } from "./Input.jsx";
import { useRef } from "react";

export const NewProject = ({ onAdd }) => {
  // useRefs are used to store the values of the inputs
  // here we store the values of the inputs in the refs
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    // here we get the values of the inputs from the refs
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // here we call the onAdd function that was passed as a prop
    // and we pass the values of the inputs as an object

    const data = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };

    onAdd(data);
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        {/* Input.jsx */}
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
};
