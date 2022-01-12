# LinearProgress

선형으로 진행 되는 progress bar 입니다.  
색상과 진행 퍼센트를 나타냅니다.

## _usage_

```jsx
import LinearProgress from '@components/progress/LinearProgress';

return <LinearPorgress type={'primary'} value={10} />;
```

## _props_

| props | type                              | defualt value | desc                          |
| ----- | --------------------------------- | ------------- | ----------------------------- |
| type  | 'primary', 'secondary', 'success' | 'primary'     | 세 가지 색상을 지정합니다.    |
| value | number                            | 0             | 0 ~ 100 사이의 값을 받습니다. |
