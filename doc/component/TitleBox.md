# TitleBox

좌측에 아이콘 우측에 텍스트가 들어있는 component입니다.

title은 15자가 넘어가면 ...으로 표현합니다.

## _usage_

```jsx
import { TitleBox } from '@components/TitleBox';
import { svgIcon } from '@res/svg';

return (
    <TitleBox
        icon={svgIcon}
        title={'최대 15자 들어갑니다'}
        className={'font-medium text-20 text-gray-500'}
        onClick={null}
    />
);
```

| props     | type    | defualt value | desc                         |
| --------- | ------- | ------------- | ---------------------------- |
| icon      | element | null          | 좌측에 표시 될 이미지        |
| title     | string  | ''            | 우측에 표시 될 텍스트        |
| className | string  | null          | css class                    |
| onClick   | func    | null          | click event callback 입니다. |
