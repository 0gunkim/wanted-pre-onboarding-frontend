import React from "react";
import List from "../components/todo/List";
import TodosContext from "../components/common/util/context/context";
import Layout from "../components/common/Layout";

export default function Todo() {
  return (
    <div className="flex flex-col items-center">
      <Layout>
        <TodosContext>
          <List />
        </TodosContext>
      </Layout>
    </div>
  );
}
