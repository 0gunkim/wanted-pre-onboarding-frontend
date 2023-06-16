import { createContext, useReducer } from "react";
import { todoReducer } from "../reducer/todo-reducer";

export const DispatchContext = createContext();
export const TodoContext = createContext();

const initialTodo = [
  {
    id: 1,
    todo: "투두리스트 입니다",
    isCompleted: true,
    userId: 3,
  },
];

const TodosContext = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodo);
  return (
    <TodoContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
};
export default TodosContext;
