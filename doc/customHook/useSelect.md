# useSelect

selectBox의 change event를 담당합니다.

```jsx
const useSelect = (options) => {
    const [selected, setSelected] = useState(options[0].id);

    const onChangeSelect = (e) => {
        const targetValue = e.target.value || '';
        setSelected(targetValue);
    };

    return [selected, onChangeSelect];
};
```

`SelectBox`component가 받은 `options`를 넣어줍니다.
`SelectBoxPublish`에서 change event를 끌어와  
target value로 `selected`state를 바꿔준 후 state를 내려줍니다.

---

## _usage_

```jsx
import { useSelect } from '@hooks';

const SelectBox = ({ options, className }) => {
    const [selected, onChangeSelect] = useSelect(options);

    return (
        <SelectBoxPublish
            options={options}
            selected={selected}
            onChangeSelect={onChangeSelect}
            calssName={className}
        />
    );
};
```
