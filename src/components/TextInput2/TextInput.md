# TextInput

- BaseInput
- EmailInput
- FunctionInput
- MeasureInput
- SecretInput
- SecretNumberInput

6가지의 input이 있습니다.  
반복 로직을 하나로 묶기 위해 모든 textInput은 `useTextInput`을 사용합니다.

## _BaseInput_

```jsx
const BaseInput = (props) => {
  const [value, onChange, onClickReset] = useTextInput();

  return (
    <PrimaryInputPublish
      {...props}
      value={value}
      onChange={onChange}
      onClickReset={onClickReset}
    />
  );
};
```

| props            | type                                                                                    | defualt value | desc                                                              |
| ---------------- | --------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------- |
| name             | 'primary',<br> 'email',<br> 'function',<br> 'measure',<br> 'secret',<br> 'secretNumber' | 'primary'     | 사용할 종류의 inputType                                           |
| labelText        | string                                                                                  | ''            | label에 들어갈 text                                               |
| captionText      | string                                                                                  | ''            | caption에 들어갈 text                                             |
| captionClassName | string                                                                                  | ''            | caption에 적용할 css class                                        |
| placeholder      | string                                                                                  | ''            | input placeholder attribute                                       |
| autoFocus        | boolean                                                                                 | false         | true일 때 바로 input에 focus를 잡습니다                           |
| resetBtn         | boolean                                                                                 | false         | true일 때 모두 지우는 버튼이 나타납니다                           |
| showHideBtn      | boolean                                                                                 | false         | true일 때 input type attribute를 'text'에서 'password'로 바꿉니다 |
| isReadOnly       | boolean                                                                                 | false         | input readOnly attribute                                          |
| isDisabled       | boolean                                                                                 | false         | input disabled attribute                                          |
| isRequired       | boolean                                                                                 | false         | input required attribute                                          |
| onBlur           | function                                                                                | null          | input onBlur event attribute                                      |
| onClick          | function                                                                                | null          | input onClick event attribute                                     |
| onFocus          | function                                                                                | null          | input onFocus event attribute                                     |
| onSubmit         | function                                                                                | null          | input onSubmit event attribute                                    |
| onKeyDown        | function                                                                                | null          | input onKeyDown event attribute                                   |
| maxLength        | number                                                                                  | null          | input maxLength attribute                                         |
| children         | element                                                                                 | null          | input 우측에 render될 element                                     |

> ⚠️나머지 컴포넌트 들은 추가된 props만 기술합니다.

---

## _MeasureInput_

```jsx
const MeasureInput = (props) => {
  const { measureUnit } = props;
  const [value, onChange] = useTextInput();

  return (
    <PrimaryInputPublish {...props} value={value} onChange={onChange}>
      <div className={`text-base ml-2 flex items-center`}>{measureUnit}</div>
    </PrimaryInputPublish>
  );
};
```

| props       | type   | defualt value | desc                                 |
| ----------- | ------ | ------------- | ------------------------------------ |
| measureUnit | string | null          | input 우측에 unit을 출력합니다. (Kg) |

---

## _SecretInput_

```jsx
const SecretInput = (props) => {
  const [value, onChange] = useTextInput('password');

  return (
    <PrimaryInputPublish
      {...props}
      showHideBtn
      value={value}
      onChange={onChange}
    />
  );
};
```

> props는 `BaseInput`과 동일합니다.

---

## _FunctionInput_

우측에 버튼이 들어가는 input입니다.

```jsx
const FuntionInput = (props) => {
  const [value, onChange] = useTextInput();
  const handleOnClick = () => console.log(`value: ${value}`);

  return (
    <PrimaryInputPublish {...props} value={value} onChange={onChange}>
      <ButtonPublish text={'function'} onClick={handleOnClick} />
    </PrimaryInputPublish>
  );
};
```

> props는 `BaseInput`과 동일합니다.

---

## _EmailInput_

우측에 `SelectBox` component가 들어갑니다.  
`useTextInput`이 각각 id, email validation check를 합니다.

```jsx
const EmailInput = (props) => {
  const { datas } = emailDomain;

  const [id, onChangeId] = useTextInput('id');
  const [domain, onChangeDomain] = useTextInput('email');

  const [selected, onChangeSelect] = useSelect(datas);

  return (
    <>
      <PrimaryInputPublish {...props} value={id} onChange={onChangeId}>
        <SelectBox
          options={datas}
          selected={selected}
          onChangeSelect={onChangeSelect}
        />
      </PrimaryInputPublish>
      {Number(selected) === 3 && (
        <div className={'flex items-center pt-2'}>
          <div className={'pr-2'}>@</div>
          <PrimaryInputPublish
            {...props}
            value={domain}
            placeholder={'domain'}
            onChange={onChangeDomain}
          />
        </div>
      )}
    </>
  );
};
```

> props는 `BaseInput`과 동일합니다.

---

## _SecretNumberInput_

우측에 `SelectBox` component가 들어갑니다.  
`useTextInput`이 각각 birth, personalNum validation check를 합니다.
validation을 통과하지 못하면 border색을 red로 바꿉니다.

```jsx
const SecretNumberInput = (props) => {
  const [birthValue, onChangeBirthValue, captionBirthText] = useTextInput(
    'birth',
  );
  const [
    personalNumValue,
    onChangePersonalNumValue,
    captionText,
    onClickReset,
    onKeyDownPersonalNum,
  ] = useTextInput('personalNum');

  return (
    <div className={'flex flex-col max-w-xs items-start'}>
      <div
        className={'flex items-center border border-black rounded'}
        style={captionBirthText.length > 0 ? { borderColor: 'red' } : {}}
      >
        <PrimaryInputPublish
          {...props}
          placeholder={'YYYYMMDD'}
          onChange={onChangeBirthValue}
          value={birthValue}
          autoFocus
          className={'text-center border-none tracking-widest'}
        />
        <div>-</div>
        <PrimaryInputPublish
          {...props}
          placeholder={'0●●●●●●'}
          onChange={onChangePersonalNumValue}
          value={personalNumValue}
          onKeyDown={onKeyDownPersonalNum}
          className={'text-center border-none tracking-widest'}
        />
      </div>
      <div className={'text-red-500 text-xs pl-2'}>{captionBirthText}</div>
    </div>
  );
};
```

> props는 `BaseInput`과 동일합니다.

---
