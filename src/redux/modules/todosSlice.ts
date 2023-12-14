import { createSlice } from "@reduxjs/toolkit";
import type { TodoType } from "types/todo";

const initialState: TodoType[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

// export const { setTodo, addTodo, deleteTodo, switchTodo } = todosSlice.actions;
export default todosSlice.reducer;
