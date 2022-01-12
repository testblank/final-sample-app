# useRadioButton

`RadioButton` component에 넣어준 list를 그대로 받습니다.

`getSelectedId`에서 `selected === true`인 object의 `id`를 return합니다.
radio button 이기 때문에 제일 먼저 true가 나온 `id`만 return 합니다.

`onClickRadioBtn`은 선택한 id가 현재 선택 된 id가 아닐 때  
`selectedId`를 바꿔줍니다.

```jsx
const getSelectedId = (list) => {
  for (const key in list) {
    if (Object.hasOwnProperty.call(list, key)) {
      if (list[key]['selected']) {
        return list[key]['id'];
      }
    }
  }
  return null;
};

const useRadioButton = (list) => {
  const initialSelectedId = getSelectedId(list);
  const [selectedId, setSelectedId] = useState(initialSelectedId);

  const onClickRadioBtn = (id) => {
    if (id !== selectedId) {
      setSelectedId(id);
    }
  };

  return [selectedId, onClickRadioBtn];
};

export default useRadioButton;
```
