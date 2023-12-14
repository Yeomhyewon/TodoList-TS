import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "react-query";
import { addTodo } from "src/api/todos";

import type { TodoType } from "types/todo";

const Form = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const handleTitleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleContentsOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContents(e.target.value);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === "") {
      return toast.warning("제목을 입력해주세요.");
    } else if (contents === "") {
      return toast.warning("내용을 입력해주세요");
    }

    const newTodo: TodoType = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    };
    toast.success("등록되었습니다😀");
    mutation.mutate(newTodo);
    setContents("");
    setTitle("");
  };

  return (
    <StForm onSubmit={handleAddTodo}>
      <StInputContainer>
        <div>
          제목:{" "}
          <input
            value={title}
            onChange={handleTitleOnChange}
            placeholder="제목을 입력해주세요."
          />
        </div>
        <div>
          내용:{" "}
          <input
            value={contents}
            onChange={handleContentsOnChange}
            placeholder="내용을 입력해주세요."
          />
        </div>
      </StInputContainer>
      <div>
        <StBtn type="submit">등록</StBtn>
      </div>
    </StForm>
  );
};

const StForm = styled.form`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StInputContainer = styled.div`
  display: flex;
  gap: 30px;

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
