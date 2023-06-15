import React, { useEffect, useRef } from "react";
import Button from "../common/ui/Button";

export default function Create() {
  const ref = useRef();
  const createHandle = (e) => {
    e.preventDefault();
    const refValue = ref.current.value;
    console.log(refValue);
    ref.current.value = "";
  };

  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <form onSubmit={createHandle}>
      <input ref={ref} type="text" />
      <Button test_id={"new-todo-add"} label={"추가"} />
    </form>
  );
}
