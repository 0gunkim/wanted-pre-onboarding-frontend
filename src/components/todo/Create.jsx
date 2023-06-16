import React, { useReducer, useEffect, useRef, useContext } from "react";
import Button from "../common/ui/Button";
import { POST_TODO } from "../../service/api/api";
import { DispatchContext, TodoContext } from "../common/util/context/context";

export default function Create() {
  const ref = useRef();
  const state = useContext(TodoContext);
  const dispatch = useContext(DispatchContext);
  const createHandle = async (e) => {
    e.preventDefault();
    const refValue = ref.current.value;
    const data = { todo: refValue };
    const response = await POST_TODO(JSON.stringify(data));

    if (refValue !== "") {
      dispatch({ type: "POST_TODO", payload: response });
    }
    ref.current.value = "";
  };

  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <form onSubmit={createHandle} className="flex gap-2 justify-center">
      <input
        ref={ref}
        data-testid="new-todo-input"
        type="text"
        className="w-[300px]"
      />
      <Button test_id={"new-todo-add"} label={"추가"} />
    </form>
  );
}
