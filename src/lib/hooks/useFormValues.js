import { useState } from 'react';
import {
	CONVERSION_KEYS,
	CONVERSION_OPTIONS,
} from '../../constants/convertOptions';

export const useFormValues = () => {
	const [selectValue, setSelectValue] = useState({
		currentValue: 0,
		convert: CONVERSION_KEYS[CONVERSION_OPTIONS.km_mi].key,
		converTo: CONVERSION_KEYS[CONVERSION_OPTIONS.km_mi].keyTo,
		converToValue: CONVERSION_KEYS[CONVERSION_OPTIONS.km_mi].keyToVal,
	});

	const setCurrentVale = (value) =>
		setSelectValue({
			currentValue: value,
			convert: CONVERSION_KEYS[value].key,
			converTo: CONVERSION_KEYS[value].keyTo,
			converToValue: CONVERSION_KEYS[value].keyToVal,
		});
	return { selectValue, setCurrentVale };
};
