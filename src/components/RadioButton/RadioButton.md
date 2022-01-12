# RadioButton

특정 배열을 받아 좌측에 radio button 우측에 text가 들어가는 컴포넌트 입니다.  
컴포넌트 내부에 custom hook을 사용해서 배열만 넣어주면 됩니다.

## _usage_

```tsx
import { RadioButton } from '@components/RadioButton';

const list = [
    {
        id: 0, // number
        text: 'first radio text',
        selected: true,
        disabled: false,
    },
    {
        id: 1,
        text: 'second radio text',
        selected: false,
        disabled: false,
    },
];

return <RadioButton list={list} />;
```

## _props_

| props | type                                                               | defualt value | desc                   |
| ----- | ------------------------------------------------------------------ | ------------- | ---------------------- |
| list  | {id: number, text: string, selected: boolean, disabled: boolean}[] | null          | 라디오버튼 정보 리스트 |

---

## _RadioButton.jsx_

컴포넌트 안에는 [useRadioButton]() hook으로 selected state를 관리 합니다.
`RadioButtonPUblish`에 `selectedId`, `onClickRadioBtn` 넘겨줍니다.

```jsx
import { RadioButtonPublish } from 'publish';
import { useRadioButton } from '@hooks';

const RadioButton = ({ list }) => {
    const [selectedId, onClickRadioBtn] = useRadioButton(list);

    return (
        <>
            {list &&
                list.length > 0 &&
                list.map((item, idx) => {
                    return (
                        <RadioButtonPublish
                            key={`${item.id}_${idx}`}
                            id={item.id}
                            disabled={item.disabled}
                            selectedId={selectedId}
                            text={item.text}
                            onClick={() => onClickRadioBtn(item.id)}
                        />
                    );
                })}
        </>
    );
};

export default RadioButton;
```
