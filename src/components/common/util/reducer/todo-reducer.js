export const todoReducer = (state, action) => {
  switch (action.type) {
    case "GET_TODO":
      return action.payload;
    case "POST_TODO":
      const newTodo = action.payload;
      return [...state, newTodo];
    case "EDIT_TODO":
      const todo = action.payload.data.todo;
      const isCompleted = action.payload.data.isCompleted;
      const editId = action.payload.id;
      return state.map((item) =>
        item.id === editId ? { ...item, todo, isCompleted } : item
      );
    case "DELETE_TODO":
      const id = action.payload;
      return state.filter((item) => item.id !== id);

    default:
      return state;
  }
};
