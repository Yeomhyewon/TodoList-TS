import axios from "axios";
import type { TodoType } from "types/todo";

const getTodos = async () => {
  const response = await axios.get("http://localhost:4000/todos");
  return response.data;
};

const addTodo = async (newTodo: TodoType) => {
  await axios.post("http://localhost:4000/todos", newTodo);
};

const deleteTodo = async (id: string) => {
  await axios.delete(`http://localhost:4000/todos/${id}`);
};
const switchTodo = async (todo: TodoType) => {
  await axios.patch(`http://localhost:4000/todos/${todo.id}`, {
    isDone: !todo?.isDone,
  });
};

export { getTodos, addTodo, deleteTodo, switchTodo };
