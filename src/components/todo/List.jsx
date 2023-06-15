import React, { useEffect, useRef, useState } from "react";
import Button from "../common/ui/Button";

export default function List() {
  const [isChecked, setIsChecked] = useState(true);
  const [isModify, setIsModify] = useState(false);
  const [modifyText, setModifyText] = useState("");
  const refFocus = useRef();

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
    if (isModify === true) {
      refFocus.current.focus();
    }
  }, [isModify]);
  return (
    <ul>
      <li>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
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
            <span>할일1</span>
          )}
          {isModify ? (
            <Button test_id={"submit"} label={"제출"} onClick={modifyHandle} />
          ) : (
            <Button test_id={"modify"} label={"수정"} onClick={modifyHandle} />
          )}

          {isModify ? (
            <Button test_id={"cancel"} label={"취소"} onClick={modifyHandle} />
          ) : (
            <Button test_id={"delete"} label={"삭제"} />
          )}
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <span>할일2</span>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <span>할일3</span>
        </label>
      </li>
    </ul>
  );
}
