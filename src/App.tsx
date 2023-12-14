import styled from "styled-components";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";

const App = () => {
  return (
    <>
      <StH2Container>
        <h2>TodoList</h2>
      </StH2Container>
      <Form />
      <Todo isActive={false} />
      <Todo isActive={true} />
    </>
  );
};

const StH2Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default App;
