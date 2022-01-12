# Switch

좌측에 text가 있고 우측에 toggle 버튼이 있는 component입니다.

## _usage_

```jsx
import { Switch } from '@components/Switch';

const settingOpts = [
    {
        text: 'Push',
        initialIsOn: false,
        disabled: false,
        disabledAll: true,
        className: 'text-bold',
    },
    {
        text: 'Email',
        initialIsOn: false,
        className: 'text-bold',
    },
];

return <Swtich list={settingOpts} />;
```

| props | type                                                    | defualt value | desc      |
| ----- | ------------------------------------------------------- | ------------- | --------- |
| list  | {text, initialIsOn, disabled, disabledAll, className}[] | null          | 하단 기술 |

-   `text: stirng` / 좌측에 들어갈 텍스트 입니다.
-   `initialIsOn: boolean` / 최초 on/off를 결정합니다.
-   `disabled: boolean` / true일 떄 클릭 할 수 없습니다.
-   `disabledAll: boolean` / ture이면 이 토글이 off가 될 때 모든 토글버튼이 disabled 상태가 됩니다.
-   `className: string` / css class
