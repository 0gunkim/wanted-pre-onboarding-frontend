import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "../../common/ui/Button";
import { DispatchContext } from "../../common/util/context/context";
import { DELETE_TODO, UPDATE_TODO } from "../../service/api/api";
import { ItemPropsType } from "../../types/itemType";

function Item({ item }: ItemPropsType) {
  const refFocus = useRef<HTMLInputElement>(null);
  const [isModify, setIsModify] = useState(false);
  const dispatch = useContext(DispatchContext);

  const editHandle = async (id: number) => {
    const editData = {
      todo: refFocus.current?.value,
      isCompleted: item.isCompleted,
    };
    await UPDATE_TODO(id, editData);
    dispatch({ type: "EDIT_TODO", payload: { data: editData, id } });
    setIsModify(!isModify);
  };

  const toggleComplate = async (e: ChangeEvent<HTMLInputElement>) => {
    const inputCheckBox = e.target.checked;
    const id = item.id;
    const editData = { todo: item.todo, isCompleted: inputCheckBox };
    await UPDATE_TODO(id, editData);
    dispatch({ type: "EDIT_TODO", payload: { data: editData, id } });
  };
  const modifyHandle = () => {
    // e.preventDefault();
    setIsModify(!isModify);
  };
  const deleteHandle = async (id: number) => {
    await DELETE_TODO(id);

    dispatch({ type: "DELETE_TODO", payload: id });
  };

  useEffect(() => {
    if (isModify === true) {
      refFocus.current?.focus();
    }
  }, [isModify]);

  return (
    <>
      <li className="flex gap-1 w-[420px] justify-between border-solid border-black border-2 p-2">
        <label className="flex gap-5 justify-center items-center">
          <input
            className="w-[20px] h-[20px]"
            type="checkbox"
            checked={item.isCompleted}
            onChange={toggleComplate}
          />
          {isModify ? (
            <input
              className="flex flex-col mr-0 w-60 h-10"
              type="text"
              ref={refFocus}
              defaultValue={item?.todo}
            />
          ) : (
            <span>{item?.todo}</span>
          )}
        </label>
        <div className="flex gap-2 shrink-0">
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
        </div>
      </li>
    </>
  );
}
export default Item;
