export const chainValidators =
	(...validators) =>
	value => {
		const found = validators.find(validator => validator(value));
		if (found) {
			return found(value);
		}
		return false;
	};

export const nipValidator = val => {
	if (val && /^[0-9]{10}$/.test(val)) {
		const checksum =
			(6 * val[0] +
				5 * val[1] +
				7 * val[2] +
				2 * val[3] +
				3 * val[4] +
				4 * val[5] +
				5 * val[6] +
				6 * val[7] +
				7 * val[8]) %
			11;
		return Number(val[9]) === checksum ? false : 'Błędny numer NIP';
	}
	return 'Błędny numer NIP';
};

export const required = value => {
	switch (typeof value) {
		case 'string':
			return value.trim() ? false : 'Wymagane';
		case 'object':
			return value && value.length ? false : 'Wymagane';
		case 'undefined':
			return 'Wymagane';
		default:
			return false;
	}
};

export const requiredEmail = value => {
	if (!value) return 'wymagane';
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (value.match(validRegex)) {
		return false;
	} else {
		return 'Wymagane';
	}
};

export const requiredNumber = value => ((value || value === 0) && /^[0-9]*$/.test(value) ? false : 'Wymagana liczba');

export const requiredAllNumber = value => {
	if (value === '0' || value === 0) {
		return false;
	}
	const numbered = Number(value);
	if (!value || Number.isNaN(numbered)) {
		return 'Wymagana liczba';
	}
	return false;
};

export const numberOrDecimal = value =>
	!value || /^[0-9]*[.]{0,1}[0-9]{0,2}$/.test(value) ? false : 'Wymagana liczba';

export const requiredNumberWithDecimals = value =>
	(value || value === 0) && /^\d*\.?\d*$/.test(value) ? false : 'Wymagana liczba';

export const postalCode = value => (/^\d{2}-\d{3}$/.test(value) ? false : 'Niewłaściwy format');

export const idNumber = value => (/^\w{3} ?\d{6}$/.test(value) ? false : 'Niewłaściwy format');

export const phoneNumber = val => (!val || /^[0-9]{9}$/.test(val) ? false : 'Błędny numer telefonu');

export const peselValidator = value => {
	if (/\d{11}/.test(value)) {
		let sum = [
			value[0] * 1,
			value[1] * 3,
			value[2] * 7,
			value[3] * 9,
			value[4] * 1,
			value[5] * 3,
			value[6] * 7,
			value[7] * 9,
			value[8] * 1,
			value[9] * 3,
		].reduce((acc, curr) => acc + curr, 0);
		sum %= 10;
		if (sum !== 0) {
			sum = 10 - sum;
		}
		return sum === Number(value[10]) ? false : 'Nieprawidłowy pesel';
	}
	return 'Niewłaściwy format';
};

export const ipValidator = value => {
	if (value && !/^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/.test(value)) {
		return 'Oczekiwany format X.X.X.X';
	}
	return null;
};

export const requiredIpValidator = value => {
	if (!/^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/.test(value)) {
		return 'Oczekiwany format X.X.X.X';
	}
	return null;
};

export const requiredPostalCode = val => (val && /^\d{2}-\d{3}$/.test(val) ? false : 'Niewłaściwy format');

export const requiredPhoneNumber = val => (val && /^[0-9]{9}$/.test(val) ? false : 'Błędny numer telefonu');

export const makeRequired = fn => value => value ? fn(value) : 'Wymagane';

export const isPasswordMatch = (password, repeat) => {
	if (password === '' || repeat === '') {
		return 'Pola nie moga być puste';
	}

	return password === repeat ? false : 'Hasła się różnią';
};
