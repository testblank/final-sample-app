# SelectBox

하단 으로 drop down 되는 select메뉴 입니다.  
`id`와 `value` key를 가진 object를 배열로 받아 화면에 보여줍니다.

## _usage_

```jsx
import { SelectBox } from 'components/SelectBox';
const options = [
  {
    id: 0,
    value: '@naver.com',
  },
  {
    id: 1,
    value: '@gmail.com',
  },
];
const [selected, onChangeSelect] = useSelect(options);

return (
  <SelectBox
    options={options}
    className={null}
    selected={selected}
    onChangeSelect={onChangeSelect}
  />
);
```

## _props_

| props          | type                          | defualt value | desc                         |
| -------------- | ----------------------------- | ------------- | ---------------------------- |
| options        | {id: number, value: string}[] | []            | 라디오버튼 정보 리스트       |
| selected       | string                        | null          | 선택된 option의 value        |
| onChangeSelect | func                          | null          | select change event callback |
| className      | string                        | null          | css class                    |
