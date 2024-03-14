import { deleteSaved } from '../../lib/api/savedApi';
import IconButton from '../buttons/IconButton';
import CrossIcon from '../icons/CrossIcon';
import style from './SavedRow.module.css';

const SavedRow = ({
	id,
	convert,
	convertKey,
	converTo,
	converToKey,
	reloadPage,
}) => (
	<li className={style.saved}>
		<span>
			{convert} {convertKey} - {converTo} {converToKey}
		</span>
		<IconButton
			icon={CrossIcon}
			onClick={() => onDeleteSaved(id, reloadPage)}
		/>
	</li>
);

const onDeleteSaved = async (id, reloadPage) => {
	if (!id) return;

	const succes = await deleteSaved(id);

	if (!succes.error) reloadPage();
};

export default SavedRow;
