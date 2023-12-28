import React from "react";
import { forwardRef } from "react";

const classes =
  "w-full p-1 border-b-2 rounded-sm border-stone-500 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 focus:ring-1 focus:ring-stone-600 ";

export const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  return (
    <p className="flex flex-col gap-1  my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});
