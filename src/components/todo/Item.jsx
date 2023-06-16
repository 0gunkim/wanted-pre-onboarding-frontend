import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "../common/ui/Button";
import { DispatchContext, TodoContext } from "../common/util/context/context";
import { DELETE_TODO, UPDATE_TODO } from "../../service/api/api";

function Item({ item }) {
  const refFocus = useRef();
  const [isChecked, setIsChecked] = useState(true);
  const [isModify, setIsModify] = useState(false);
  const state = useContext(TodoContext);
  const dispatch = useContext(DispatchContext);
  const editHandle = async (id) => {
    const editData = { todo: refFocus.current.value, isCompleted: isChecked };
    const response = await UPDATE_TODO(id, editData);
    console.log(response);
    dispatch({ type: "EDIT_TODO", payload: { data: editData, id } });
    setIsModify(!isModify);
  };
  const modifyHandle = (e) => {
    e.preventDefault();
    setIsModify(!isModify);
  };
  const deleteHandle = async (id) => {
    const response = await DELETE_TODO(id);
    console.log(response);
    if (response.status === 204) {
      dispatch({ type: "DELETE_TODO", payload: id });
    }
  };
  const checkBoxHandle = async (e) => {
    const inputCheckBox = e.target.checked;
    const id = item.id;
    const editData = { todo: item.todo, isCompleted: inputCheckBox };
    const response = await UPDATE_TODO(id, editData);
    console.log(response);
    setIsChecked(inputCheckBox);
  };
  useEffect(() => {
    if (isModify === true) {
      refFocus.current.focus();
    }
  }, [isModify, state, isChecked]);
  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            checked={state.isCompleted}
            onChange={checkBoxHandle}
          />
          {isModify ? (
            <input type="text" ref={refFocus} defaultValue={item?.todo} />
          ) : (
            <span>{item?.todo}</span>
          )}
          {isModify ? (
            <Button
              test_id={"submit"}
              label={"제출"}
              onClick={() => editHandle(item.id)}
            />
          ) : (
            <Button test_id={"modify"} label={"수정"} onClick={modifyHandle} />
          )}

          {isModify ? (
            <Button test_id={"cancel"} label={"취소"} onClick={modifyHandle} />
          ) : (
            <Button
              test_id={"delete"}
              onClick={() => deleteHandle(item.id)}
              label={"삭제"}
            />
          )}
        </label>
      </li>
    </>
  );
}
export default Item;
