import React, { useEffect } from "react";
import List from "../components/todo/List";
import TodosContext from "../components/common/util/context/context";
import Layout from "../components/common/Layout";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const navigate = useNavigate();
  const isToken = localStorage.getItem("access_token");
  const logoutHandle = async () => {
    await localStorage.removeItem("access_token");
    navigate("/", { replace: true });
  };
  useEffect(() => {
    if (!isToken) {
      navigate("/signin");
    }
  }, []);
  return (
    <div className="flex flex-col items-center">
      <Layout>
        <TodosContext>
          <List />
        </TodosContext>
      </Layout>
      <button type="button" className="mt-10" onClick={logoutHandle}>
        로그아웃
      </button>
    </div>
  );
}
