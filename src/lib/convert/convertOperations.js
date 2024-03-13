import { CONVERSION_OPTIONS } from '../../constants/convertOptions';

export const convertOperations = (option, value) => {
	let result;
	switch (option) {
		case CONVERSION_OPTIONS.mi_km:
			result = value * 1.609;
			return Number(result.toFixed(2));
		case CONVERSION_OPTIONS.ft_m:
			result = value / 3.281;
			return Number(result.toFixed(2));
		case CONVERSION_OPTIONS.m_ft:
			result = value * 3.281;
			return Number(result.toFixed(2));
		case CONVERSION_OPTIONS.cm_in:
			result = value / 2.54;
			return Number(result.toFixed(2));
		case CONVERSION_OPTIONS.in_cm:
			result = value * 2.54;
			return Number(result.toFixed(2));
		default:
			result = value / 1.609;
			return Number(result.toFixed(2));
	}
};
