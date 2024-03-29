import ArrowTriangleIcon from '../icons/ArrowTriangeIcon';
import style from './Select.module.css';

const Select = ({ className, ...props }) => (
	<div className={`${style.select} ${className || ''}`}>
		<select {...props} className={style.select__select}></select>
		<ArrowTriangleIcon className={style.select__arrow} />
	</div>
);

export default Select;
