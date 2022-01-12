# CardAccordion

⚠️CardAccordion은 `CardTypeFour`와 `CardTypeTwo`를 각각 상단(`main`)과 하단(`sub`)에  
나누어 넣어져 있습니다. 따라서 props도 그에 맞추어 져 있습니다. ([sampleMain 시안](https://www.figma.com/file/HimG8mmkxREuigztRrFL01/Design-System-v0.5?node-id=205%3A2091)참조

CardTypeFour와 CardTypeTwo가 있는 위치에 props로 받은 element를 넣어주면  
일반적인 accordion menu로 사용할 수 있기 때문에  
추후 필요에 따라 새로 base accordion component를 만들 수 있습니다.

## e.g.

```jsx
    const {mainElement, subElement} = props;

return (
  <div
    ref={refWrap}
    style={{ transition: `all 0.2s linear`, overflow: 'hidden' }}
  >
    <div
      ref={refMain}
      className={`main relative z-2`}
      style={{ transition: `all 0.2s linear` }}
      onClick={onClickMain}
    >
       {mainElement}
    //   <CardTypeFour
    //     isOpen={isOpen}
    //     title={mainTitle}
    //     num={mainNum}
    //     desc={mainDesc}
    //     balance={mainBalance}
    //   />
    </div>
    <div
      ref={refSub}
      className={`sub relative z-1 opacity-1`}
      style={{ transition: `all 0.2s linear` }}
    >
       {subElement}
    //   <CardTypeTwo bgClear objList={subList} />
    </div>
  </div>
);
```

---

# _usage_

```jsx
import { CardAccordion } from 'component/Accordion';

const bankList = [
  {
    imgSrc: string | object,
    bankName: string,
    balance: number,
  },
];

return (
  <CardAccordion
    initOpen={true}
    mainTitle={'mainTitle'}
    mainNum={bankList.length}
    mainDesc={'mainDesc'}
    mainBalance={100000000}
    subList={bankList}
  />
);
```

## props

| prop        | type                          | default value | desc                    |
| ----------- | ----------------------------- | ------------- | ----------------------- |
| initOpen    | boolean                       | false         | menu 열림 상태의 초기값 |
| mainTitle   | string                        | gray          | title string            |
| mainNum     | number, string                | null          | title 옆 number         |
| mainDesc    | string                        | null          | title description       |
| mainBalance | number, string                | null          | balance number          |
| subList     | [{imgSrc, bankName, balance}] | null          | menu 하위에 표시될 list |
