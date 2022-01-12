# Thumbnail

image, title, subTitle, desc 순으로 나열 되어 있습니다.

## _usage_

```jsx
import { Thumbnail } from '@components/List/Thumbnail';

return (
    <Thumbnail
        src={''}
        title={''}
        subTitle={''}
        desc={''}
        imgWidth={124}
        fontColor={'gray'}
        className={''}
        style={{}}
    />
);
```

## _props_

| props     | type   | defualt value | desc                                       |
| --------- | ------ | ------------- | ------------------------------------------ |
| src       | string | null          | Specifies the path to the image            |
| title     | string | null          | title text                                 |
| subTitle  | string | null          | subTitle text                              |
| desc      | string | null          | desc text                                  |
| imgWidth  | string | null          | image의 특정 길이를 지정합니다.            |
| imgWidth  | number | 124           | image의 특정 길이를 지정합니다.            |
| fontColor | string | 'gray'        | title, subTitle, desc의 색상을 지정합니다. |
| className | string | ''            | css class                                  |
| style     | object | ''            | 특정 스타일 지정 하기위해 사용합니다.      |
