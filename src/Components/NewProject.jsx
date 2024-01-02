import React from "react";
import { Input } from "./Input.jsx";
import { useRef } from "react";
import { Modal } from "./Modal.jsx";

// here we pass the onAdd function as a prop

export const NewProject = ({ onAdd }) => {
  const modal = useRef();
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

    if (
      enteredTitle.trim() == "" ||
      enteredDescription.trim() == "" ||
      enteredDueDate.trim() == ""
    ) {
      modal.current.open();
      return;
    }

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
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-600 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure to enter a value in all fields.
        </p>
      </Modal>
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
    </>
  );
};
