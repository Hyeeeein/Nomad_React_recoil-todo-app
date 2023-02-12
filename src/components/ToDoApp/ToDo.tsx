import React from "react";
import { Categories, ITodo, toDoState } from "../../atoms";
import { useSetRecoilState } from "recoil";

const ToDo = ({ text, category, id }: ITodo) => {
  const setTodos = useSetRecoilState(toDoState);

  // ver 1 : const onClick = (newCategory: ITodo["category"]) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodos((oldTodos) => {
      // 이전 todo 들 중 현재 클릭하는 todo id 가 일치하면 해당 id 반환
      const targetIndex = oldTodos.findIndex((todo) => todo.id === id);
      // 이전 todo 는 이전 투두들 중 targetIndex 번째 있는 것
      // const oldTodo = oldTodos[targetIndex];
      // 새로운 todo 는 현재 text 와 id, 그리고 선택한 name 의 category
      const newTodo = { text, id, category: name as any };

      // targetIndex 를 기준으로 앞 뒤 요소를 잘라 newTodo 앞 뒤로 붙여서 새로운 todo 목록으로 변경
      return [
        ...oldTodos.slice(0, targetIndex),
        newTodo,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>

      {category !== Categories.TO_DO && (
        // ver 1 : <button onClick={() => onClick("TO_DO")}>To Do</button>
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDo;
