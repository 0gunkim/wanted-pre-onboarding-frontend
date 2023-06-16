import { createContext, useReducer } from "react";
import { todoReducer } from "../reducer/todo-reducer";

export const DispatchContext = createContext();
export const TodoContext = createContext();

const initialTodo = [
  {
    id: 4235234,
    todo: "투두리스트 1",
    isCompleted: true,
    userId: 99990,
  },
  {
    id: 11231234,
    todo: "투두리스트 2",
    isCompleted: true,
    userId: 99990,
  },
  {
    id: 23423523,
    todo: "투두리스트 3",
    isCompleted: true,
    userId: 99990,
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
