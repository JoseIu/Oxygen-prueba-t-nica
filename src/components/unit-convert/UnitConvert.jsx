import { useState } from 'react';
import { convertOperations } from '../../lib/convert/convertOperations';
import { useFormValues } from '../../lib/hooks/useFormValues';
import { useSaveds } from '../../lib/hooks/useSaveds';
import FormToConvert from '../form-to-convert/FormToConvert.';
import SavedList from '../saved-list/SavedList';
import style from './UnitConvert.module.css';

const UnitConvert = () => {
	const [inputValue, setInputValue] = useState(1);

	const { selectValue, setCurrentVale } = useFormValues();

	const result = convertOperations(selectValue.currentValue, inputValue);

	const { data, isLoading, error, reloadPage } = useSaveds();

	return (
		<div className={style.container}>
			<FormToConvert
				selectValue={selectValue}
				setCurrentVale={setCurrentVale}
				inputValue={inputValue}
				setInputValue={setInputValue}
				result={result}
				reloadPage={reloadPage}
			/>

			<SavedList
				saveds={data}
				isloading={isLoading}
				reloadPage={reloadPage}
				error={error}
			/>
		</div>
	);
};

export default UnitConvert;
