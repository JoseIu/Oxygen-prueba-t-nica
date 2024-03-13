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
		<button onClick={() => deleteSaved(id, reloadPage)}>x</button>
	</li>
);

const deleteSaved = async (id, reloadPage) => {
	if (!id) return;
	try {
		const response = await fetch(`http://localhost:3000/saved/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'aplication/json' },
		});
		console.log(response);
		if (!response.ok) return 'Error deleting saved values 😥';

		reloadPage();

		return 'Deleted successfully 🚀';
	} catch (error) {
		return 'Internal erros 😅 💻 ';
	}
};

export default SavedRow;
