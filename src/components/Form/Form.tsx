import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "src/redux/modules/todosSlice";
import { Todo } from "types/todo";
import styled from "styled-components";

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const handleTitleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleContentsOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContents(e.target.value);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === "") {
      return alert("제목을 입력해주세요");
    } else if (contents === "") {
      return alert("내용을 입력해주세요");
    }

    const newTodo: Todo = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <StForm onSubmit={handleAddTodo}>
      <StInputContainer>
        제목:
        <input
          value={title}
          onChange={handleTitleOnChange}
          placeholder="제목을 입력해주세요."
        />
        내용:
        <input
          value={contents}
          onChange={handleContentsOnChange}
          placeholder="내용을 입력해주세요."
        />
      </StInputContainer>
      <div>
        <StBtn type="submit">등록</StBtn>
      </div>
    </StForm>
  );
};

const StForm = styled.form`
  background-color: #fffdde;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StInputContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    background-color: #d9d7f1;
    padding: 10px;
    border: none;
    border-radius: 10px;
  }
`;

const StBtn = styled.button`
  background-color: #d9d7f1;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  transition: all 0.1s;
  border-bottom: 4px solid #7d7b97;

  &:active {
    border-bottom: 1px solid #7d7b97;
  }
`;

export default Form;
