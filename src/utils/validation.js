const checkValidation = (() => {
	const hasSpecialCharacter = v => {
		const regExp = /[@$!%*#?&]/g;

		return regExp.test(v);
	};

	const hasUpperCase = v => {
		const regExp = /[A-Z]/g;

		return regExp.test(v);
	};

	const hasLowerCase = v => {
		const regExp = /[a-z]/g;

		return regExp.test(v);
	};

	const hasNumber = v => {
		const regExp = /[0-9]/g;

		return regExp.test(v);
	};

	const id = idValue => {
		const regExp = /^[A-Za-z0-9]{6,20}$/;

		return regExp.test(idValue);
	};

	const password = passwordValue => {
		//! 최소 8 자, 하나 이상의 대문자, 하나의 소문자, 하나의 숫자 및 하나의 특수 문자
		const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

		return regExp.test(passwordValue);
	};

	const birth = birthValue => {
		const regExp = /^[0-9]{8}$/;

		if (regExp.test(birthValue)) {
			const birthStr = birthValue.toString();

			const year = Number(birthStr.substr(0, 4));
			const month = Number(birthStr.substr(4, 2));
			const day = Number(birthStr.substr(6, 2));
			const today = new Date();
			const yearNow = today.getFullYear();

			if (year < 1900 || year > yearNow) {
				return false;
			} else if (month < 1 || month > 12) {
				return false;
			} else if (day < 1 || day > 31) {
				return false;
			} else if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
				return false;
			} else if (month === 2) {
				const isleap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

				if (day > 29 || (day === 29 && !isleap)) {
					return false;
				} else {
					return true;
				}
			} else {
				return true;
			}
		} else {
			return false;
		}
	};

	// todo: 주민번호 validation
	// Resident Registration Number
	const rrn = () => {};

	// todo: email domain validation
	const email = v => {
		const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

		return regExp.test(v);
	};

	return {
		id,
		password,
		birth,
		rrn,
		email,
		hasNumber,
		hasLowerCase,
		hasUpperCase,
		hasSpecialCharacter,
	};
})();

export default checkValidation;
