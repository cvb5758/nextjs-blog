---
title: 리액트 훅 궁금증
image: magic.jpg
date: '20240416'
---

리액트 훅은 컴포넌트 로직을 간소화하고 상태 관리를 직관적으로 만든다. 설정된 규칙을 따르고 배열 기반 시스템을 이해함으로써 개발자는 코드를 더 읽기 쉽고 유지 관리하기 쉬운 방식으로 훅을 효과적으로 사용할 수 있다.

# 리액트 훅 이해하기: 상태 관리 간소화

리액트 훅은 클래스를 사용하지 않고 함수형 컴포넌트에서 상태 관리를 할 수 있는 강력한 방법을 제공한다. _**useState**_ 와 같은 훅을 사용하여 개발자들은 컴포넌트에 상태와 행동을 더 직관적으로 연결할 수 있다. 여기서 훅의 작동 방식과 따라야 할 규칙을 설명한다.

## 훅의 마법 설명

훅은 배열을 통해 작동하며, _**useState()**_ 함수는 설정 함수와 현재 상태를 반환한다. 이 메커니즘은 각 컴포넌트가 독립적으로 자체 상태를 유지하도록 보장하여 원치 않는 부작용을 방지한다.

### 훅의 주요 규칙:

1. **루프, 조건문 또는 중첩된 함수 내에서 훅 호출 금지**: 이는 훅 호출과 상태 일관성의 순서를 유지한다.
2. **리액트 함수에서만 훅 호출**: 이는 훅이 리액트의 생명주기와 상태 관리 시스템에 연결되도록 보장한다.

## 예시: **useState()** 사용하기

다음은 _**useState()**_ 가 어떻게 구현될 수 있는지에 대한 간단한 예:

```js
function useState(initialValue) {
  let [state, setState] = [initialValue, (newVal) => (state = newVal)];
  return [state, setState];
}

function MyComponent() {
  const [name, setName] = useState('React');
  return <button onClick={() => setName('Hooks')}>{name}</button>;
}
```

이 컴포넌트는 버튼이 "React"에서 "Hooks"로 레이블을 업데이트하는 방법을 보여준다.

참고: [React hooks: not magic, just arrays](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)
