import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import Button from "../common/ui/Button";
import Item from "./Item";
import Create from "./Create";
import { DispatchContext, TodoContext } from "../common/util/context/context";
import { GET_TODO } from "../../service/api/api";
export default function List() {
  const refFocus = useRef();
  const [isModify, setIsModify] = useState(false);
  const [todolist, setTodolist] = useState([]);
  const [id, setId] = useState();
  const state = useContext(TodoContext);
  const dispatch = useContext(DispatchContext);

  const getDispatch = async () => {
    const response = await GET_TODO();
    dispatch({ type: "GET_TODO", payload: response });
    // setTodolist(response);
  };

  useEffect(() => {
    getDispatch();
  }, []);
  return (
    <>
      <Create />
      <ul>
        {state?.map((item) => (
          <Item
            key={item.id}
            item={item}
            isCompleted={item.isCompleted}
            isModify={isModify}
            setId={setId}
            setIsModify={setIsModify}
          />
        ))}
      </ul>
    </>
  );
}
