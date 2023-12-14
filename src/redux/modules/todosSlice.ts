import { createSlice } from "@reduxjs/toolkit";
import type { TodoType } from "types/todo";

const initialState: TodoType[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      return action.payload;
    },
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((i) => i.id !== action.payload);
    },
    switchTodo: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, isDone: !item.isDone } : item
      );
    },
  },
});

export const { setTodo, addTodo, deleteTodo, switchTodo } = todosSlice.actions;
export default todosSlice.reducer;
