import styled from "styled-components";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
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
  ]);
  return (
    <>
      <StLayout>
        <h2>TodoList</h2>
      </StLayout>
      <StBody>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          limit={2}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Form todos={todos} setTodos={setTodos} />
        <Todo isActive={false} todos={todos} setTodos={setTodos} />
        <Todo isActive={true} todos={todos} setTodos={setTodos} />
      </StBody>
      <StLayout>
        <p>ⓒ 2023. Yeom. All rights reserved.</p>
      </StLayout>
    </>
  );
};

const StLayout = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d7f1;
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 0.8rem;
  }
`;

const StBody = styled.div`
  background-color: #fffdde92;
`;

export default App;
