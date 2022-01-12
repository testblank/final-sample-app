# useCheckTree

## _usage_

useCheckTree는 아래 형태의 list를 parameter로 받습니다.

```tsx
interface ISubCheckInfo {
  id: number;
  value: string;
  cehcked: boolean;
}

interface ICheckInfo {
  id: number;
  value: string;
  checked: boolean;
  desc?: string;
  subIds?: number[];
  subList?: ISubCheckInfo[];
}

const list: ICheckInfo[];
```

그리고 아래 값들을 return 합니다.

```tsx
return [
  checkedIds: number[], // `checked === true` 인 id들
  onChange: () => void, // checkedIds, requiredChecked 변경을 위한 함수
  requiredChecked: boolean, // 모든 필수 checkbox의 checked 가부 상태
];
```

이 중 checkedIds와 onchange는 값들을 `CheckBox` component의 props로 넘겨줘야 합니다.

```tsx
const list = [];
const [checkedIds, onChange] = useCheckTree(list);
<CheckBox chekced={checkedIds} onChange={onChange} />;
```

## _makeInitialList_

먼저 useCheckTree에 넘겨 준 list에서 필요한 정보를 분류합니다.

```ts
const makeInitialList = (list) => {
  let initailCheckedList = []; // number[]
  let allIMainds = []; // number[]
  let requiredIds = []; // number[]
  let hasSubObj = {}; // {[key: number]: number[]}
  let allSubIds = []; // number[],
  let checkAllId = -1; // number | null

  for (const key in list) {
    if (Object.hasOwnProperty.call(list, key)) {
      const element = list[key];

      element.required && requiredIds.push(Number(element.id));

      element.checked && initailCheckedList.push(Number(element.id));

      if (element.subIds) {
        hasSubObj[element.id] = element.subIds;
        allSubIds = allSubIds.concat(element.subIds);
      }

      if (element.checkAll) {
        checkAllId = element.id;
      } else {
        allIMainds.push(Number(element.id));
      }
    }
  }

  return {
    initailCheckedList, // initial checked value
    allIMainds, // 모든 main object의 id들
    requiredIds, // 필수 objectd의 id들
    hasSubObj, // sub id가 있는 object의 subId들을 가공하기 편하도록 obj형태로 만들어 줍니다.
    allSubIds, // subId들만 모아놓습니다.
    checkAllId, // 전체 check true | false 제어할 object의 id 입니다. list 에서 checkAll: true를 가진 object입니다.
  };
};
```

## _onChange_

onChange 함수는 target의 id를 구분하여  
아래와 같은 조건 구조에 따라 checkedIds state를 변경해 줍니다.

- 전체 선택을 클릭
- 전체 선택이 아닌 것 을 클릭
  - sub checkbox가 있는 checkbox를 클릭
  - sub checkbox가 없는 checkbox를 클릭
    - sub checkbox를 클릭
    - sub checkbox가 없는 일반 checkbox 클릭

아래에 각 분기별로 comment가 있습니다.

```ts
const onChange = (e) => {
  // 전체 선택 일 때
  if (Number(e.target.id) === checkAllId) {
    // 전체선택
    if (e.target.checked) {
      const newList = allIMainds.concat(checkAllId).concat(allSubIds);
      setCheckedIds(newList);
    }
    // 전체선택 해제
    else {
      setCheckedIds([]);
    }
  }
  // 전체 선택이 아닌 checkbox 일 때
  else {
    // sub checkbox가 있는 checkbox 클릭 시
    if (hasSubObj[Number(e.target.id)]) {
      // true면 sub checkBox의 id들도 checkedIds state에 담아 줍니다.
      if (e.target.checked) {
        const newList = checkedIds
          .concat(Number(e.target.id))
          .concat(hasSubObj[Number(e.target.id)]);
        setCheckedIds(newList);
      }
      // false면 sub checkBox의 id들을 checkedIds state에서 뺴줍니다.
      else {
        const newList = checkedIds
          .filter((id) => id !== Number(e.target.id))
          .filter((id) => !hasSubObj[Number(e.target.id)].includes(id));
        setCheckedIds(newList);
      }
    } else {
      // subCheckBox 클릭 시
      if (allSubIds.indexOf(Number(e.target.id)) !== -1) {
        // true면  getMainCheckBox로 해당 sub checkbox를 가지고있는 main checkbox를 checkedIds state에 담아줍니다.
        if (e.target.checked) {
          const id = getMainCheckBox(Number(e.target.id));
          const newList = checkedIds.concat(Number(e.target.id)).concat(id);

          setCheckedIds(deleteDuplicate(newList));
        }
        //  false 일 때는 deleteMainCheckBox로 해당 sub checkbox를 가지고있는 main checkbox를 checkedIds state에서 제거 합니다.
        else {
          let newList = checkedIds.filter(
            (id) => Number(id) !== Number(e.target.id),
          );

          const delMainId = deleteMainCheckBox(Number(e.target.id));
          if (delMainId) {
            newList = newList.filter((id) => Number(id) !== Number(delMainId));
          }
          setCheckedIds(deleteDuplicate(newList));
        }
      }
      // 일반 checkBox 클릭 시
      else {
        // true일 경우 해당 checkBox의 id를 checkedIds state에 담아줍니다.
        if (e.target.checked) {
          const newList = checkedIds.concat(Number(e.target.id));
          setCheckedIds(newList);
        }
        // false일 경우 해당 checkBox의 id를 checkedIds state에서 제거합니다.
        else {
          const newList = checkedIds.filter(
            (id) => Number(id) !== Number(e.target.id),
          );
          setCheckedIds(newList);
        }
      }
    }
  }
};
```

useEffect에서는 checkedIds, requiredIds가 변경 될 때  
필수 선택을 모두 만족했는지 검사하여 requiredChecked state를 변경 해줍니다.

```ts
useEffect(() => {
  // 필수선택을 모두 만족 했는지 검사.
  let result = true;
  for (const iterator of requiredIds) {
    const idx = checkedIds.indexOf(iterator);

    if (idx === -1) {
      result = false;
      break;
    }
  }
  setRequiredChecked(result);
}, [checkedIds, requiredIds]);
```

마지막으로 전체동의가 아닌 모든 checkbox들을 true로 바꿨을 때  
전체동의도 true로 바꿔줍니다.

```ts
// 약관 전체동의 핸들링
// 전체 동의 클릭 시
if (checkedIds.includes(checkAllId)) {
  // 현재 check된 것 중에 sub을 제외한 main들을 뽑아내고
  const list = checkedIds.filter((id) => allIMainds.includes(id));
  // true로 바뀌지 않은 main id가 있다면
  if (list.length !== allIMainds.length) {
    // true로 바꿔줍니다.
    setCheckedIds((checkedIds) => checkedIds.filter((id) => id !== checkAllId));
  }
}
// 전체동의 이외의 checkbox 클릭 시
else {
  // 현재 check된 것 중에 sub을 제외한 main들을 뽑아내고
  const list = checkedIds.filter((id) => allIMainds.includes(id));
  // 모든 main id들이 checked(true)일 경우
  if (list.length === allIMainds.length) {
    // 전체동의도 true로 바꿔 줍니다.
    setCheckedIds((checkedIds) => checkedIds.concat(checkAllId));
  }
}
```
