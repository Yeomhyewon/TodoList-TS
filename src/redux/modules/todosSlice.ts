import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";
import type { Todo } from "types/todo";

const initialState: Todo[] = [
  {
    id: uuidv4(),
    title: "test1",
    contents: "test1",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "test2",
    contents: "test2",
    isDone: true,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
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

export const { addTodo, deleteTodo, switchTodo } = todosSlice.actions;
export default todosSlice.reducer;
