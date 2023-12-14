import styled from "styled-components";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTodo } from "./redux/modules/todosSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const todoData = async () => {
      const { data } = await axios.get("http://localhost:4000/todos");
      dispatch(setTodo(data));
    };

    todoData();
  }, []);

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
        <Form />
        <Todo isActive={false} />
        <Todo isActive={true} />
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
