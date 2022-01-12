# CheckBox

checkBox는 두가지 종류의 publish컴포넌트가 있습니다.

- CheckBoxPublish2
- CheckBoxWithLinkPublish
- ~~CheckBoxWithLabelPublish~~

> 😨임의로 만들어 졌기 때문에 때문에 시안이 나오면 수정이 필요합니다.  
> [useCheckTree](https://wire.lgcns.com/confluence/display/DS14560929Y2021/useCheckTree) hook은 해당 문서에서 확인 가능합니다.

CheckBoxPublish2는 input과 value가 label로 쌓여져 있습니다.

---

## CheckBoxWithLinkPublish

> CheckBoxWithLinkPublish는 click event가 달릴 것을 위해 우측에 `>` 아이콘이 있고  
> checkbox tree가 있는 경우 main checkbox 하단에 sub checkbox가 있는 구조입니다.

## _props_

| props       | type                   | defualt value | desc                           |
| ----------- | ---------------------- | ------------- | ------------------------------ |
| id          | number                 | 0             | input의 id                     |
| value       | string                 | ''            | input의 value                  |
| desc        | string                 | ''            | value에대한 추가 설명          |
| subList     | {id, value, checked}[] | []            | 하위 checkbox list             |
| onChange    | func                   | null          | input change event             |
| onClickLink | func                   | null          | 우측 `>` click event           |
| checked     | number[]               | []            | `checked===true`인 id들의 배열 |
| disabled    | boolean                | false         | input attirbute                |
| rounded     | boolean                | false         | input border style             |
| className   | string                 | null          | css class                      |

---

## CheckBox.jsx

CheckBox component는 property로 `withLink === true` 를 받을 경우  
`CheckBoxWithLinkPublish`를, `withLink === false` 일 때 `CheckBoxPublish2`를 return 합니다.

특정 양식의 props([list](#list))가 필요하기 때문에 이 부분도 실제 프로젝트에서는 수정 될 것으로 생각됩니다.

[useCheckTree](#usechecktree)라는 hook을 사용해 change event를 handling 합니다.

## _usage_

```jsx
import { CheckBox } from 'components/CheckBox2';
import { useCheckTree } from 'customHooks';

const list = [
  {
    id: 0,
    value: '약관 전체 동의',
    desc: '',
    checkAll: true,
    checked: false,
    required: false,
  },
  {
    id: 6,
    value: '마케팅 정보 수신동의 (선택)',
    desc: '마케팅 목적을 위한 정보 수집에 대한 약관입니다.',
    checked: false,
    subIds: [77, 88],
    subList: [
      {
        id: 77,
        value: '이메일',
        checked: false,
      },
      {
        id: 88,
        value: 'SMS',
        checked: false,
      },
    ],
  },
];

const [checked, onChange] = useCheckTree(list);

<CheckBox list={list} checked={checked} onChange={onChange} rounded withLink />;
```

## _props_

| props     | type     | defualt value | desc                                |
| --------- | -------- | ------------- | ----------------------------------- |
| list      | object[] | []            | checkbox list (하단 comment 참조)   |
| checked   | number[] | false         | `checked===true`인 id들의 배열      |
| onChange  | func     | false         | input change event                  |
| withLink  | bool     | false         | CheckBoxWithLinkPublish render 조건 |
| rounded   | bool     | false         | input border style                  |
| className | string   | null          | css class                           |

## _list 상세_

```javascript
list: arrayOf(
    shape({
      value: string, // input의 value
      desc: string, // desc 하단에 description의 value
      checkAll: bool, // `전체동의` 목적으로 사용되며 true일 경우 해당 id를 가진 input의 `checked === true`일 때 list에 포함 된 모든 input의 checked를 true로 바꾸어주기 위해 사용됩니다.
      checked: bool, // ture | false 값에 따라 initial checked 가 결정 됩니다.
      required: bool, // 필수로 `checked === true`인 input이 필요 할 때 사용 됩니다.
      subIds: arrayOf(number), // 하위 checkbox들이 있을 때 그 checkbox들의 id 입니다.
      subList: arrayOf( //하위 checkbox의 정보 list.
        shape({
          id: number,
          value: string,
          checked: bool,
        }),
      ),
    }),
  ),
```
