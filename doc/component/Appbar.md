# **Appbar**

Appbar 대응 component입니다.

# _usage_

```jsx
import Appbar from 'layout/HeaderLayout/Appbar.jsx';
import { ReactComponent as ImgBack } from '../../icons/icons-back.svg';

const handleClickLeft = () => {};
const handleClickRight = () => {};
const handleClickRightSecond = () => {};

<Appbar
  backgroundColor={'white'}
  leftArea={<ImgBack />}
  titleArea={'title'}
  rightArea={'rightArea'}
  rightArea2={'rightArea2'}
  className={'className'}
  cbOnClickLeft={handleClickLeft}
  cbOnClickRight={handleClickRight}
  cbOnClickRight2={handleClickRightSecond}
  children={null}
/>;
```

# props

| prop            | type                    | default value  | desc                                                             |
| --------------- | ----------------------- | -------------- | ---------------------------------------------------------------- |
| backgroundColor | string                  | white          | background color를 지정합니다.                                   |
| leftArea        | element, string, number | icons-back.svg | 왼쪽 영역에 render될 element를 넣어줍니다.                       |
| titleArea       | string                  | null           | title영역에 들어갈 string을 넣어줍니다.                          |
| rightArea       | element, string, number | null           | 오른쪽 영역에 render될 element를 넣어줍니다.                     |
| rightArea2      | element, string, number | null           | 두 번째 오른쪽 영역에 render될 element를 넣어줍니다.             |
| cbOnClickLeft   | func                    | null           | 왼쪽 영역을 클릭 할 시 실행 될 함수를 넣어줍니다.                |
| cbOnClickRight  | func                    | null           | 오른쪽 영역을 클릭 할 시 실행 될 함수를 넣어줍니다.              |
| cbOnClickRight2 | func                    | null           | 오른쪽 두 번째 영역을 클릭 할 시 실행 될 함수를 넣어줍니다.      |
| className       | string                  | null           | Appbar의 최상단 div에 넣을 className을 넣어줍니다.               |
| children        | element                 | null           | Appbar의 하단에 render할(E.g. scroll menu) element를 넣어줍니다. |

---
