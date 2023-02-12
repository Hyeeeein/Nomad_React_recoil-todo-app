# Nomad_React_State-Management

## Installation

```
$ npx create-react-app ./ --template typescript
$ npm i styled-components
$ npm i --save-dev @types/styled-components
$ npm i recoil
$ npm install react-hook-form
```

## recoil

### 참고 : (State Management README)[https://github.com/Hyeeeein/Nomad-React-Crypto_Tracker/blob/main/README_StateManagement.md]

#### useRecoilState

- useState 와 사용법이 동일
- useRecoilValue(getter) + useSetRecoilState(setter) = useRecoilState

#### selector

- state 를 입력받아서 그걸 변형해 반환하는 순수함수를 거쳐 반환된 값
- 쉽게 말해 state 로 원하는 값을 도출해내기 위한 기능으로 atom 과 동일하게 useRecoilValue, useSetRecoilState, useRecoilState 를 사용하며 고유한 key 값을 입력하고 get 으로 원하는 데이터 반환. redux 의 useSelector 와 똑같음
- get : 구조분해할당으로 {get} 을 인자로 꺼내오고 get 함수에 만들어 둔 atom 을 가져오면 입력한 데이터가 불러지고 해당 데이터를 활용하여 원하는 데이터로 반환
- set : atom 의 값을 설정하도록 만드는 옵션, {set} 과 newValue 를 인자로 가져오게 되는데 newValue 는 selector 의 setter 를 호출해 입력한 값으로 set 함수에 첫번째 인자로 atom 을 넘겨주고 그 다음으로 atom 에 설정할 값을 넘겨주면 됨
- 이때 useRecoilState 를 사용하면 반환되는 배열에는 get 값과 set 값이 들어감

## Code Challenge!

- atom 에 localStorage 로 todo 저장
- todo 삭제 기능 추가
