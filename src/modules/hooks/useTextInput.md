# useTextInput

`useTextInput` hook은 다음과 같은 배열을 return 합니다.

```jsx
return [value, onChange, captionText, onClickReset, onKeyDown];
```

-   value: input의 value
-   onChange: input의 change event callback
-   captionText: caption이 필요할 경우 보여줄 text (8자리 이상 입력 해 주세요)
-   onClickReset: reset button을 누를 때 value clear 함수
-   onKeyDown: 숫자 및 backspace를 눌렀는지 판별할 때 새용합니다.

## _usage_

```jsx
import { BaseInput } from '@components/TextInput2';
import { useTextInput } from '@hooks';

const [value, onChange] = useTextInput();

return <BaseInput value={value} onChange={onChange} />;
```

validation을 위해서는 넘겨줘야 할 parameter가 있습니다.
`util/validation`에 있는 `checkValidation`으로 정규식 테스트를 합니다.

-   birth: birthCheck함수를 통해 올바른 생년월일을 확인합니다.

```jsx
const birthCheck = (targetValue) => {
    let onlyNumber = targetValue.replace(/[^0-9]/g, '');

    let limit = onlyNumber.toString();
    if (limit.length >= 8) {
        limit = onlyNumber.toString().substr(0, 8);
    }
    setValue(limit);
    let isOk = checkValidation.birth(limit);

    if (limit.length === 8) {
        if (refBirth && refBirth.current) {
            refBirth.current = limit.toString();
        }
        setCaptionText(isOk ? '' : '유효한 생년월일을 입력 해주세요');
    } else {
        setCaptionText('');
    }
};
```

-   personalNum: personalNumCheck함수를 통해 주민번호 뒷자리를 확인합니다.

```jsx
const personalNumCheck = (targetValue) => {
    let onlyNumber = targetValue.replace(/[^0-9]/g, '');
    refPersonalNumArr && refPersonalNumArr.current && refPersonalNumArr.current.push(onlyNumber);

    if (refMaskingValue && refMaskingValue.current) {
        if (refMaskingValue.current.length < 1) {
            refMaskingValue.current.push(onlyNumber);
        } else {
            if (refMaskingValue.current.length < 7) {
                refMaskingValue.current.push('●');
            }
        }
    }

    if (refPersonalNumArr.current.length >= 7) {
        refPersonalNumArr.current = refPersonalNumArr.current.slice(0, 7);
    }

    const maskingVal = refMaskingValue.current.toString().split(',').join('').trim();
    setValue(maskingVal);
};
```

-   password: passwordCheck함수를 통해 비밀번호를 확인합니다.

```jsx
const passwordCheck = (pwValue) => {
    setValue(pwValue);
    const isOk = checkValidation.password(pwValue);
    const hasNum = checkValidation.hasNumber(pwValue);
    const hasLower = checkValidation.hasLowerCase(pwValue);
    const hasUpper = checkValidation.hasUpperCase(pwValue);
    const hasSpecial = checkValidation.hasSpecialCharacter(pwValue);

    let captionText = '';

    if (pwValue.length < 8) {
        captionText = '8자리 이상 입력 해 주세요';
    } else {
        if (!hasUpper) {
            captionText = '최소 하나의 대문자를 입력하세요.';
        } else if (!hasNum) {
            captionText = '최소 하나의 숫자를 입력하세요.';
        } else if (!hasLower) {
            captionText = '최소 하나의 소문자를 입력하세요.';
        } else if (!hasSpecial) {
            captionText = '최소 하나의 특수기호를 입력하세요.(@$!%*#?&)';
        } else if (isOk) {
            captionText = '사용 가능한 비밀번호 입니다.';
        }
    }

    setCaptionText(captionText);
};
```

-   email: emailCheck함수를 통해 이메일 @ 뒷자리를 확인합니다.

```jsx
const emailCheck = (emailValue) => {
    setValue(emailValue);
    const isOk = checkValidation.email(emailValue);
};
```

-   number: 정규식으로 숫자만 입력가능하게 합니다.

```jsx
targetValue.replace(/[^0-9]/g, '');
```
