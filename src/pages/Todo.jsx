import React from "react";
import List from "../components/todo/List";
import TodosContext from "../components/common/util/context/context";

export default function Todo() {
  return (
    <TodosContext>
      <List />
    </TodosContext>
  );
}
