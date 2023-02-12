import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../../atoms";

interface IForm {
  todo: string;
}

const CreateToDo = () => {
  const setTodos = useSetRecoilState(toDoState);

  // todo 를 추가할 때마다 category 도 지정하여 추가할 수 있도록 설정
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onValid = ({ todo }: IForm) => {
    setValue("todo", "");
    setTodos((oldTodos) => [
      { text: todo, id: Date.now(), category },
      ...oldTodos,
    ]);
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("todo", {
          required: "Please write a To Do",
        })}
        type="text"
        placeholder="Write a to do"
      />
      <button>ADD</button>
    </form>
  );
};

export default CreateToDo;
