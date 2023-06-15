import React, { useEffect, useRef, useState } from "react";
import Button from "../common/ui/Button";
import { GET_TODO } from "../../service/api/api";

export default function List() {
  const [isChecked, setIsChecked] = useState(true);
  const [isModify, setIsModify] = useState(false);
  const [modifyText, setModifyText] = useState("");
  const [getData, setGetData] = useState("");
  const refFocus = useRef();
  const todoItem = [
    {
      id: 1,
      todo: "todo2",
      isCompleted: false,
      userId: 1,
    },
    {
      id: 2,
      todo: "todo3",
      isCompleted: true,
      userId: 1,
    },
  ];
  const getTodo = async () => {
    const response = await GET_TODO();
    setGetData(response);
    console.log(response);
  };

  const checkBoxHandle = (e) => {
    const res = e.target.checked;
    setIsChecked(res);
  };

  const modifyHandle = () => {
    setIsModify(!isModify);
  };
  const midifyInputHanle = (e) => {
    const inputValue = e.target.value;
    setModifyText(inputValue);
  };
  useEffect(() => {
    // getTodo();
  }, []);

  useEffect(() => {
    if (isModify === true) {
      refFocus.current.focus();
    }
  }, [isModify]);
  return (
    <ul>
      {todoItem?.map((i) => (
        <li key={i.id}>
          <label>
            <input
              type="checkbox"
              checked={i.isCompleted}
              onChange={checkBoxHandle}
            />
            {isModify ? (
              <input
                type="text"
                ref={refFocus}
                onChange={midifyInputHanle}
                defaultValue={"할일1"}
              />
            ) : (
              <span>{i.todo}</span>
            )}
            {isModify ? (
              <Button
                test_id={"submit"}
                label={"제출"}
                onClick={modifyHandle}
              />
            ) : (
              <Button
                test_id={"modify"}
                label={"수정"}
                onClick={modifyHandle}
              />
            )}

            {isModify ? (
              <Button
                test_id={"cancel"}
                label={"취소"}
                onClick={modifyHandle}
              />
            ) : (
              <Button test_id={"delete"} label={"삭제"} />
            )}
          </label>
        </li>
      ))}
    </ul>
  );
}
