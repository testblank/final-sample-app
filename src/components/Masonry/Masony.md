# Masonry

너비는 같지만 높이가 다른 element들을 나열하기 위해서 만들었습니다.  
물론 높이가 갚아도 됩니다.

## _usage_

```jsx
import { Masonry } from 'components/Masonry';

const list = [1, 2, 3, 4, 5, 6, 7];

return (
  <Masonry>
    {list.map((item, idx) => (
      <div key={idx}>{item}</div>
    ))}
  </Masonry>
);
```

## _Masonry.jsx_

```jsx
export const Masonry = ({ gap = 0, columns = 1, brickWidth, children }) => {
  const innerWidth = useWindowSize().innerWidth;

  let childrenEl;
  if (!children.length) {
    childrenEl = [children];
  } else {
    childrenEl = children;
  }

  // columns가 있다면 그 갯수만큼, bricWidth가 있다면  그 너비만큼 window.innerWidth를 나눠 column 수를 만듭니다.
  let newColumn;
  if (innerWidth && brickWidth) {
    newColumn = Math.floor(innerWidth / brickWidth);
  } else {
    newColumn = columns;
  }

  const columnWrapper = {};
  const result = [];
  // newColumn 갯수만큼 `column*` key를 가진 object를 만들어줍니다.
  for (let i = 0; i < newColumn; i++) {
    columnWrapper[`column${i}`] = [];
  }

  // children을 위의 columnWrapp에 담아줍니다.
  for (let i = 0; i < childrenEl.length; i++) {
    const columnIndex = i % newColumn;
    columnWrapper[`column${columnIndex}`].push(childrenEl[i]);
  }

  // 마지막으로 result에 columnWrapper 내용물을 넣어줍니다.
  for (let i = 0; i < newColumn; i++) {
    result.push(
      <div
        style={{
          flex: 1,
          marginLeft: `${i > 0 ? gap : 0}px`,
        }}
        key={i}
      >
        {columnWrapper[`column${i}`]}
      </div>,
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>{result}</div>
  );
};
```

## _props_

| props      | type    | defualt value | desc                  |
| ---------- | ------- | ------------- | --------------------- |
| gap        | number  | 0             | column간의 간격       |
| column     | number  | 1             | column갯수            |
| brickWidth | number  | null          | 각 element의 너비     |
| children   | element | null          | column에 담을 element |
