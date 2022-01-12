# Button

일반적인 버튼입니다.

## _usage_

```jsx
import { BaseButton2 } from 'components/Button';

return (
  <BaseButton
    text={'Button'}
    onClick={() => {}}
    disabled={false}
    color={'primary'}
    variant={'contained'}
    size={'large'}
    fullWidth={false}
  />
);
```

## _props_

| props     | type                   | defualt value | desc                                          |
| --------- | ---------------------- | ------------- | --------------------------------------------- |
| text      | string                 | 'Button'      | Specifies the path to the image               |
| onClick   | function               | () => {}      | click callback                                |
| disabled  | boolean                | false         | disable 여부                                  |
| color     | 'primary', 'gray'      | 'primary'     | 버튼의 색상                                   |
| variant   | 'contained', 'outline' | 'contained'   | 색상 채우기 또는 outline 여부                 |
| size      | 'large','small'        | 'large'       | button의 크기                                 |
| fullWidth | boolean                | false         | true일 때 화면너비 만큼 버튼 너비를 채웁니다. |
