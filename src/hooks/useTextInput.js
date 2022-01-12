import { useState, useCallback, useRef } from 'react';
import { checkValidation } from 'util/validation';

// props: 'birth' | 'personalNum' | 'password' | 'email' | 'id' | 'number' | null

const useTextInput = (props = null) => {
	const [value, setValue] = useState('');
	const [captionText, setCaptionText] = useState('');
	const [isBackSpace, setIsBackSpace] = useState(false);
	const [isNumberKeyCode, setIsNumberKeyCode] = useState(false);
	const refBirth = useRef('');
	const refPersonalNumArr = useRef([]);
	const refMaskingValue = useRef([]);

	// const idCheck = (idValue) => {
	//   setValue(idValue);
	// };

	const emailCheck = emailValue => {
		setValue(emailValue);
		// const isOk = checkValidation.email(emailValue);
	};

	const passwordCheck = pwValue => {
		setValue(pwValue);
		const isOk = checkValidation.password(pwValue);
		const hasNum = checkValidation.hasNumber(pwValue);
		const hasLower = checkValidation.hasLowerCase(pwValue);
		const hasUpper = checkValidation.hasUpperCase(pwValue);
		const hasSpecial = checkValidation.hasSpecialCharacter(pwValue);

		let cText = '';

		if (pwValue.length < 8) {
			cText = '8자리 이상 입력 해 주세요';
		} else if (!hasUpper) {
			cText = '최소 하나의 대문자를 입력하세요.';
		} else if (!hasNum) {
			cText = '최소 하나의 숫자를 입력하세요.';
		} else if (!hasLower) {
			cText = '최소 하나의 소문자를 입력하세요.';
		} else if (!hasSpecial) {
			cText = '최소 하나의 특수기호를 입력하세요.(@$!%*#?&)';
		} else if (isOk) {
			cText = '사용 가능한 비밀번호 입니다.';
		}

		setCaptionText(cText);
	};

	const birthCheck = targetValue => {
		const onlyNumber = targetValue.replace(/[^0-9]/g, '');

		let limit = onlyNumber.toString();

		if (limit.length >= 8) {
			limit = onlyNumber.toString().substr(0, 8);
		}
		setValue(limit);
		const isOk = checkValidation.birth(limit);

		if (limit.length === 8) {
			if (refBirth && refBirth.current) {
				refBirth.current = limit.toString();
			}
			setCaptionText(isOk ? '' : '유효한 생년월일을 입력 해주세요');
		} else {
			setCaptionText('');
		}
	};

	const personalNumCheck = targetValue => {
		const onlyNumber = targetValue.replace(/[^0-9]/g, '');

		refPersonalNumArr &&
      refPersonalNumArr.current &&
      refPersonalNumArr.current.push(onlyNumber);

		if (refMaskingValue && refMaskingValue.current) {
			if (refMaskingValue.current.length < 1) {
				refMaskingValue.current.push(onlyNumber);
			} else if (refMaskingValue.current.length < 7) {
				refMaskingValue.current.push('●');
			}
		}

		if (refPersonalNumArr.current.length >= 7) {
			refPersonalNumArr.current = refPersonalNumArr.current.slice(0, 7);
		}

		const maskingVal = refMaskingValue.current
			.toString()
			.split(',')
			.join('')
			.trim();

		setValue(maskingVal);
	};

	const onChange = useCallback(
		e => {
			const targetValue = e.target.value || '';

			switch (props) {
				case 'birth':
					birthCheck(targetValue);
					break;
				case 'personalNum': {
					const targetValueStr = targetValue.toString();
					const length = targetValue.length;
					const val = targetValueStr.substr(length - 1, length);

					!isBackSpace && isNumberKeyCode && personalNumCheck(val);
					break;
				}
				case 'password':
					passwordCheck(targetValue);
					break;
				case 'email':
					emailCheck(targetValue);
					break;
					// case 'id':
					//   idCheck(targetValue);
					//   break;
				case 'number':
					setValue(targetValue.replace(/[^0-9]/g, ''));
					break;
				default:
					setValue(targetValue);
					break;
			}
		},
		[props, isBackSpace, isNumberKeyCode],
	);

	const onKeyDown = useCallback(e => {
		if (e.keyCode === 8) {
			setIsBackSpace(true);
			refPersonalNumArr.current = refPersonalNumArr.current.slice(
				0,
				refPersonalNumArr.current.length - 1,
			);
			refMaskingValue.current = refMaskingValue.current.slice(
				0,
				refMaskingValue.current.length - 1,
			);
			const maskingVal = refMaskingValue.current
				.toString()
				.split(',')
				.join('')
				.trim();

			setValue(maskingVal);
		} else {
			setIsBackSpace(false);
		}
		if (e.keyCode >= 48 && e.keyCode <= 57) {
			setIsNumberKeyCode(true);
		} else {
			setIsNumberKeyCode(false);
		}
	}, []);

	const onClickReset = useCallback(() => {
		setValue('');
	}, []);

	return [value, onChange, captionText, onClickReset, onKeyDown];
};

export default useTextInput;
