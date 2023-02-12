import { atom, selector } from "recoil";

type categories = "TO_DO" | "DOING" | "DONE";

// 열거가능한 클래스 : enum 은 기본적으로 숫자로 만들어짐, 그래서 (enum member) Categories["TO_DO"] = 0 표시
// 계속 써야하는 값을 저장하는 도구
export enum Categories {
  "TO_DO" = "TO_DO", // 0
  "DOING" = "DOING", // 1
  "DONE" = "DONE", // 2
}

// atom 의 default 값은 빈 배열이기 때문에 타입지정이 필요
export interface ITodo {
  text: string;
  id: number;
  category: Categories;
}

export const toDoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(toDoState);
    const category = get(categoryState);
    return todos.filter((todo) => todo.category === category);
  },
});
