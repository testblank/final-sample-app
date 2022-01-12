# Card

카드형 view를 제공하는 component 입니다. [figma 시안](https://www.figma.com/file/HimG8mmkxREuigztRrFL01/Design-System-v0.5?node-id=128%3A1199) 기준 base card 이외에 총 4가지 타입이 있습니다.

- [BaseCard](#base-card)
- [CardTypeOne](#card-type-one)
- [CardTypeTwo](#card-type-two)
- [CardTypeThree](#card-type-three)
- [CardTypeFour](#card-type-four)

> ⚠️ 모든 타입의 component에서는 imageSrc를 poprs로 내려 줄 때  
> type이 element또는 object일 때에는 그대로를, string일 경우 `<BaseImage/>` component를 사용합니다.
>
> ### e.g.
>
> ```jsx
> {
>   typeof imgSrc !== 'string' ? (
>     <div
>       className={imgBgColor ? `bg-${imgBgColor}-500` : ``}
>       style={{
>         borderRadius: '50%',
>         width: `${imgWidth}px`,
>         height: `${imgWidth}px`,
>         display: 'flex',
>         justifyContent: 'center',
>         alignItems: 'center',
>         marginRight: '16px',
>       }}
>     >
>       {item.imgSrc} // prop으로 던져준 그대로를 return 합니다.
>     </div>
>   ) : (
>     <BaseImage
>       width={`${imgWidth}px`}
>       height={`${imgWidth}px`}
>       src={item.imgSrc} // path를 BaseImage에 넘겨줍니다
>       style={{ borderRadius: '50%', marginRight: '16px' }}
>       className={imgBgColor ? `bg-${imgBgColor}-500` : ``}
>     />
>   );
> }
> ```

> ⚠️ balance를 표시 할 떄에는 decimalSeparator 함수를 사용합니다.
>
> ```javascript
> // src/util/decimalSeparator
> const decimalSeparator = (value, isOneKShorten = false) => {
>   if (!value) {
>     return '0';
>   }
>
>   let target = '';
>
>   if (typeof value === 'string') {
>     target = value;
>   } else if (typeof value === 'number') {
>     target = String(value);
>   }
>
>   if (target.length > 6 && isOneKShorten) {
>     target = target.slice(0, target.length - 3);
>     target += 'k';
>   }
>
>   return target.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
> };
> ```

<h1 id="base-card">BaseCard</h1>

## _usage_

```jsx
import { BaseCard } from 'component/Card';

return (
  <BaseCard
    bgClear={false}
    backgroundColor={'gray'}
    className={null}
    style={null}
    children={null}
  />
);
```

## props

| prop            | type    | default value | desc                                        |
| --------------- | ------- | ------------- | ------------------------------------------- |
| bgClear         | boolean | false         | false일 떄 backgroundColor를 render 합니다. |
| backgroundColor | string  | gray          | card의 backgroundColor                      |
| className       | string  | null          | css className                               |
| style           | object  | null          | css property                                |
| children        | element | null          | 카드 내부에 render될 element                |

<h1 id="card-type-one">CardTypeOne</h1>

내부에 CardModuleThumb이 들어가 있는 Card view 입니다.  
CardModuleThumb render를 위해 thumbObjList를 prop으로 받습니다.  
CardModuleThumb은 상단에 thumbnail 하단에 text가 들어가는 구조의 component입니다.

## _usage_

```jsx
import { CardTypeOne } from 'component/Card';

const tumbObjList = [
  {
    src: string | element,
    title: string | element,
  },
];

return (
  <CardTypeOne
    bgClear={false}
    backgroundColor={'gray'}
    thumbObjList={thumbObjList}
    imgWidth={56}
    imgBgColor={'gray'}
    fontSize={14}
    fontColor={'gray'}
    fontFamily={'medium'}
    lineHeight={21}
    className={null}
    style={null}
  />
);
```

## props

| prop            | type           | default value | desc                                        |
| --------------- | -------------- | ------------- | ------------------------------------------- |
| bgClear         | boolean        | false         | false일 떄 backgroundColor를 render 합니다. |
| backgroundColor | string         | gray          | card의 backgroundColor                      |
| thumbObjList    | [{src, title}] | null          | render할 thumbnail의 list                   |
| imgWidth        | string         | 56            | thumbnail image width                       |
| imgBgColor      | string         | gray          | thumbnail image background color            |
| fontSize        | string         | 14            | thumbnail title fontSize                    |
| fontColor       | string         | gray          | thumbnail title fontColor                   |
| fontFamily      | string         | medium        | thumbnail title fontFamilt                  |
| lineHeight      | string         | 21            | thumbnail title lineHeight                  |
| className       | string         | null          | css className                               |
| style           | object         | null          | css property                                |

<h1 id="card-type-two">CardTypeTwo</h1>
좌측에 image, text  
우측에 숫자(금액)가 들어가는 component입니다.

> `<CardAccordion/>`component의 하단에 사용됩니다.

## _usage_

```jsx
import { CardTypeTwo } from 'component/card';

const objList = [
  {
    imgSrc: string | object | element,
    bankName: string,
    balance: number,
  },
];

return (
  <CardTypeTwo
    bgClear={false}
    backgroundColor={'gray'}
    objList={objList}
    imgWidth={56}
    imgBgColor={'gray'}
    className={null}
    style={null}
  />
);
```

## props

| prop            | type                          | default value | desc                                        |
| --------------- | ----------------------------- | ------------- | ------------------------------------------- |
| bgClear         | boolean                       | false         | false일 떄 backgroundColor를 render 합니다. |
| backgroundColor | string                        | gray          | card의 backgroundColor                      |
| objList         | [{imgSrc, bankName, balance}] | null          | render할 은행명과 잔고 list                 |
| imgWidth        | string                        | 56            | 은행로고 image width                        |
| imgBgColor      | string                        | gray          | 은행로고 image background color             |
| className       | string                        | null          | css className                               |
| style           | object                        | null          | css property                                |

<h1 id="card-type-three">CardTypeThree</h1>
좌측에 text 우측에 button이 들어가는 component입니다.

## _usage_

```jsx
import { CardTypeThree } from 'component/card';

return (
  <CardTypeThree
    bgClear={false}
    backgroundColor={'gray'}
    textStr={null}
    btnStr={null}
    onClickBtn={null}
    className={null}
    style={null}
  />
);
```

## props

| prop            | type    | default value | desc                                        |
| --------------- | ------- | ------------- | ------------------------------------------- |
| bgClear         | boolean | false         | false일 떄 backgroundColor를 render 합니다. |
| backgroundColor | string  | gray          | card의 backgroundColor                      |
| textStr         | string  | null          | 좌측에 들어갈 text                          |
| btnStr          | string  | null          | 우측 button에 들어갈 text                   |
| onClickBtn      | func    | null          | button click event                          |
| className       | string  | null          | css className                               |
| style           | object  | null          | css property                                |

<h1 id="card-type-four">CardTypeFour</h1>

좌측에 text,number,description  
우측에 금액이 들어가는 component입니다.

> `<CardAccordion/>`component의 상단에 사용됩니다.

## _usage_

```jsx
import { CardTypeFour } from 'component/card';

return (
  <CardTypeFour
    isOpen={false}
    bgClear={false}
    backgroundColor={'gray'}
    title={null}
    num={null}
    desc={null}
    balance={null}
    className={null}
    style={null}
  />
);
```

## props

| prop            | type    | default value | desc                                        |
| --------------- | ------- | ------------- | ------------------------------------------- |
| isOpen          | boolean | false         | Accordion이 열려 있는지에 대한 상태입니다.  |
| bgClear         | boolean | false         | false일 떄 backgroundColor를 render 합니다. |
| backgroundColor | string  | gray          | card의 backgroundColor                      |
| title           | string  | null          | 좌측 title                                  |
| num             | string  | null          | 좌측 title옆 number                         |
| desc            | func    | null          | 좌측 desc                                   |
| balance         | func    | null          | 우측 balance                                |
| className       | string  | null          | css className                               |
| style           | object  | null          | css property                                |
