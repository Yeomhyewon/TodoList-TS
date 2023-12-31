import styled from "styled-components";
import Swal from "sweetalert2";
import { Todos } from "types/todo";

interface Props {
  $bdcolor: boolean;
}

const Todo = ({
  isActive,
  todos,
  setTodos,
}: {
  isActive: boolean;
  todos: Todos[];
  setTodos: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        title: string;
        contents: string;
        isDone: boolean;
      }[]
    >
  >;
}) => {
  const handleDeleteTodo = (id: string) => {
    Swal.fire({
      title: "삭제하시겠습니까?",
      text: "삭제하면 되돌릴 수 없습니다.",
      showCancelButton: true,
      icon: "warning",
      confirmButtonColor: "#d9d7f1",
      cancelButtonColor: "#FFCBCB",
      cancelButtonText: "취소하기",
      confirmButtonText: "삭제하기",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "삭제되었습니다.",
          icon: "success",
        });
        const filteringTodos = todos.filter((i) => i.id !== id);
        setTodos(filteringTodos);
      }
    });
  };

  const handleSwitchTodo = (id: string) => {
    const switchTodos = todos.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTodos(switchTodos);
  };

  return (
    <StContainer>
      <p>{isActive ? "Done😁" : "Working🔥"}</p>
      <ul>
        {todos
          .filter((item) => item.isDone === isActive)
          .map((item) => {
            return (
              <StTodoList key={item.id} $bdcolor={item.isDone}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.contents}</p>
                </div>
                <StTodoBtn $bdcolor={item.isDone}>
                  <button onClick={() => handleDeleteTodo(item.id)}>
                    삭제
                  </button>
                  <button onClick={() => handleSwitchTodo(item.id)}>
                    {item.isDone ? "취소" : "완료"}
                  </button>
                </StTodoBtn>
              </StTodoList>
            );
          })}
      </ul>
    </StContainer>
  );
};

const StContainer = styled.div`
  padding: 30px;

  & > p {
    font-size: 1.7rem;
  }

  & > ul {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    display: grid;
    gap: 10px;
  }
`;

const StTodoList = styled.li<Props>`
  width: 100%;
  height: 200px;
  background-color: white;
  border: 3px solid ${(props) => (props.$bdcolor ? "#E7FBBE" : "#FFCBCB")};
  border-radius: 10px;
  box-shadow: 1px 5px 2px 0px
    ${(props) => (props.$bdcolor ? "#99a97b" : "#b38787")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;

  & > div > h3 {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 10px;
  }

  & > div > p {
    padding: 10px;
    text-align: center;
  }
`;

const StTodoBtn = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  & > button {
    padding: 7px 15px;
    border-radius: 10px;
    background-color: ${(props) => (props.$bdcolor ? "#E7FBBE" : "#FFCBCB")};
    border-bottom: 4px solid
      ${(props) => (props.$bdcolor ? "#99a97b" : "#b38787")};

    transition: all 0.1s;

    &:active {
      border-bottom: 1px solid
        ${(props) => (props.$bdcolor ? "#99a97b" : "#b38787")};
    }
  }
`;

export default Todo;
