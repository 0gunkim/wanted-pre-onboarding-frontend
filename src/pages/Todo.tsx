import React from "react";
import List from "../components/todo/List";
import TodosContext from "../common/util/context/context";
import Layout from "../common/Layout";

export default function Todo() {
  return (
    <Layout>
      <TodosContext>
        <List />
      </TodosContext>
    </Layout>
  );
}
