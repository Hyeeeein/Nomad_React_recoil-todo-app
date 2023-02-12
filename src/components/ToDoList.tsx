import { FormEvent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, todoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { categoryState } from "./../atoms";

const ToDoList = () => {
  // const todos = useRecoilValue(toDoState);

  // category 로 구분하기 위해 기존에 atom 에 작성한 데이터를 가져오는 방식이 아닌 selector 로 변환한 값으로 todo 를 화면에 보여지도록 설정
  // 구조분해할당으로 [[],[],[]] 배열 안에 세 개의 배열이 리턴 되고 있는 상황이기 때문에 각각 순서대로 값을 꺼냄
  // const [todo, doing, done] = useRecoilValue(todoSelector);

  // selector 안에서 선택된 category 를 비교해 선택된 category 에 todo 들만 반환
  const todos = useRecoilValue(todoSelector);

  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />

      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>

      <CreateToDo />

      {todos.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}

      {/* selector 에서 꺼내와 랜더링한 방식 */}
      {/* <h2>To Do</h2>
      <ul>
        {todo.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul> */}
      <hr />
    </div>
  );
};

export default ToDoList;
