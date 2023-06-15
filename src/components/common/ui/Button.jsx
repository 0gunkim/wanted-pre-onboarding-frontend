import React from "react";

export default function Button(props) {
  const { type = "submit", test_id, label, onClick, disabled } = props;
  return (
    <button
      type={type}
      data-testid={test_id}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
