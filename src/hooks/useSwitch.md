# useSwitch

`Switch` component 에서 props로 넘겨받는 list를 그대로 useSwitch에도 넘겨줍니다.

먼저 넘겨받은 list에서 object 들의 initial state를 찾고(`findInitialObj`)  
disableAll key를 가지고있는 object를 찾습니다.(`findDisableAllIndex`)

onClick에서는 disableAll key를 가지고 있는지  
그게 아니라면 disabled 상태인지를 확인해 state를 업데이트 합니다.

```jsx
const findInitialObj = (list) => {
  let obj = {};
  for (const key in list) {
    if (Object.hasOwnProperty.call(list, key)) {
      obj[key] = {
        isOn: list[key]['initialIsOn'],
        disabled: list[key]['disabled'],
      };
    }
  }
  return obj;
};

const findDisableAllIndex = (list) => {
  for (const key in list) {
    if (Object.hasOwnProperty.call(list, key)) {
      if (list[key].disableAll) {
        return Number(key);
      }
    }
  }
  return 0;
};

const useSwitch = (list) => {
  const initialObj = findInitialObj(list);
  const disableAllIndex = findDisableAllIndex(list);
  const [stateObj, setStateObj] = useState(initialObj);

  // disabledAll이 아닌것 만 disabled로 바꿔줍니다.
  const updateDisableState = (stateObj, disableAllIndex) => {
    const copy = { ...stateObj };
    for (const key in copy) {
      if (Object.hasOwnProperty.call(copy, key)) {
        if (Number(key) !== disableAllIndex) {
          copy[key].disabled = copy[key].disabled ? false : true;
        }
      }
    }
    setStateObj({
      ...stateObj,
      ...copy,
    });
  };

  // on / off 상태를 update합니다.
  const updateState = (idx) => {
    setStateObj({
      ...stateObj,
      [idx]: {
        ...stateObj[idx],
        isOn: stateObj[idx].isOn ? false : true,
      },
    });
  };

  const onClick = (idx) => {
    if (idx === disableAllIndex) {
      updateDisableState(stateObj, disableAllIndex);
      updateState(idx);
    } else {
      if (!stateObj[idx].disabled) {
        updateState(idx);
      }
    }
  };

  return [stateObj, onClick];
};
```
