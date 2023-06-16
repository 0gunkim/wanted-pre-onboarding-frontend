import React from "react";

export default function Button(props) {
  const { type = "submit", test_id, label, onClick, disabled } = props;
  // const baseStyle =
  return (
    <button
      className={
        ` rounded-sm border-solid border-[1px] p-2 border-black shadow-md` +
        (disabled ? " bg-slate-500" : "")
      }
      type={type}
      data-testid={`${test_id}-button`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
