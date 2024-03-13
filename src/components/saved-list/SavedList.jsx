import SavedRow from '../saved-row/SavedRow';
import style from './SavedList.module.css';

const SavedList = ({ saveds, isloading, reloadPage, error }) => {
	if (isloading) return <p>Loading....</p>;
	if (error) return <p>Error to load Saveds items 😥</p>;
	if (!saveds.length) return <p>No saved items</p>;

	const rows = saveds.map((save) => (
		<SavedRow key={save.id} {...save} reloadPage={reloadPage} />
	));
	return (
		<section className={style.saveds}>
			<h2 className={style.saveds__title}>Saved</h2>
			<ul className={style.saveds__list}>{rows}</ul>
		</section>
	);
};

export default SavedList;
