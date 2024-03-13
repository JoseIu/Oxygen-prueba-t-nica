import style from './InputText.module.css';

const InputText = ({ error, className, ...props }) => (
	<>
		<label className={`${style.container}${className || ''}`}>
			<input
				{...props}
				className={`${style.input} ${error ? style.inputerror : ''}`}
			/>
		</label>
		{/* <span className={style.error}>{error} </span> */}
	</>
);

export default InputText;
