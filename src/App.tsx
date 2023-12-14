import styled from "styled-components";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";

const App = () => {
  return (
    <>
      <StLayout>
        <h2>TodoList</h2>
      </StLayout>
      <StBody>
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
