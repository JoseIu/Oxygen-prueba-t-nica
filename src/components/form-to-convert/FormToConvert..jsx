import { CONVERSION_OPTIONS } from '../../constants/convertOptions';
import { savedApi } from '../../lib/api/savedApi';
import IconButton from '../buttons/IconButton';
import ChangeIcon from '../icons/ChangeIcon';
import HeartIcon from '../icons/HeartIcon';
import InputText from '../input-text/InputText';
import Select from '../select/Select';

import style from './FormToConvert.module.css';

const FormToConvert = ({
	selectValue,
	setCurrentVale,
	inputValue,
	setInputValue,
	result,
	reloadPage,
}) => {
	const isDisabled =
		!selectValue ||
		!inputValue ||
		!result ||
		inputValue === 0 ||
		result === '0';

	return (
		<form
			className={style.form}
			onSubmit={(ev) => {
				ev.preventDefault();
				savedValues(selectValue, result, inputValue, reloadPage);
			}}
		>
			<div className={style.form__row}>
				<div className={style.form__item}>
					<Select
						value={selectValue.currentValue}
						onChange={(ev) => setCurrentVale(Number(ev.target.value))}
					>
						<option
							className={style.form__option}
							value={CONVERSION_OPTIONS.km_mi}
						>
							Kilometers to miles
						</option>
						<option
							className={style.form__option}
							value={CONVERSION_OPTIONS.mi_km}
						>
							Miles to kilometers
						</option>
						<option
							className={style.form__option}
							value={CONVERSION_OPTIONS.ft_m}
						>
							Feet to meters
						</option>
						<option
							className={style.form__option}
							value={CONVERSION_OPTIONS.m_ft}
						>
							Meters to feet
						</option>

						<option
							className={style.form__option}
							value={CONVERSION_OPTIONS.cm_in}
						>
							Centimeters to inches
						</option>
						<option
							className={style.form__option}
							value={CONVERSION_OPTIONS.in_cm}
						>
							Inches to centimeters
						</option>
					</Select>
					<IconButton
						onClick={() => {
							setCurrentVale(selectValue.converToValue);
							setInputValue(result);
						}}
						icon={ChangeIcon}
					/>
				</div>
				<div className={style.form__item}>
					<InputText
						type='number'
						placeholder='numero'
						value={inputValue}
						onChange={(ev) => setInputValue(ev.target.value)}
					/>

					<span className={style.form__convert}>{selectValue.convert} </span>
				</div>
			</div>
			<div className={style.form__row}>
				<IconButton
					type='submit'
					disabled={isDisabled}
					onClick={() => {
						'';
					}}
					icon={HeartIcon}
				/>

				<span className={style.form__result}>
					{result} {selectValue.converTo}
				</span>
			</div>
		</form>
	);
};

const savedValues = async (selectValue, result, inputValue, reloadPage) => {
	const valuesToSave = {
		id: crypto.randomUUID(),
		convert: inputValue,
		convertKey: selectValue.convert,
		converTo: result,
		converToKey: selectValue.converTo,
	};

	const sucess = await savedApi(valuesToSave);
	reloadPage();
};

export default FormToConvert;
