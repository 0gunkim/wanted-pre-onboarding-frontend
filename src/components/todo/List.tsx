import React, { useContext, useEffect } from "react";
import Item from "./Item";
import Create from "./Create";
import {
  DispatchContext,
  TodoContext,
} from "../../common/util/context/context";
import { GET_TODO } from "../../service/api/api";
import { useNavigate } from "react-router-dom";
import { ItemTypes } from "../../types/itemType";
export default function List() {
  const state = useContext(TodoContext);
  const dispatch = useContext(DispatchContext);
  const isToken = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const getDispatch = async () => {
    try {
      const response = await GET_TODO();
      dispatch({ type: "GET_TODO", payload: response });
    } catch (e) {
      navigate("/signin");
      console.log(e);
    }
  };

  useEffect(() => {
    if (isToken) {
      getDispatch();
    } else {
      navigate("/signin", { replace: true });
    }
  }, []);

  return (
    <div className="flex-col flex gap-10 mx-auto justify-between ">
      <ul className="flex flex-col  gap-2 mt-10 p-5">
        {state?.map((item: ItemTypes) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      <Create />
    </div>
  );
}
