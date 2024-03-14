export const savedValues = async (valuesToSave) => {
	const backUrl = import.meta.env.VITE_BACK_URL;
	try {
		const response = await fetch(backUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'aplication/json' },
			body: JSON.stringify(valuesToSave),
		});
		if (!response.ok)
			return { error: true, message: 'Error to saved values 😥' };
		return { error: false, message: 'Saved successfully 🚀' };
	} catch (error) {
		return { error: true, message: 'Internal erros 😅 💻 ' };
	}
};

export const getAllSaveds = async (setData, setError, signal) => {
	const backUrl = import.meta.env.VITE_BACK_URL;

	try {
		const response = await fetch(backUrl, { signal });

		if (!response.ok) return setError();

		const data = await response.json();
		setData(data);
	} catch (error) {
		return setError();
	}
};
export const deleteSaved = async (id) => {
	const backUrl = import.meta.env.VITE_BACK_URL;

	try {
		const response = await fetch(`${backUrl}/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'aplication/json' },
		});
		if (!response.ok)
			return { error: true, message: 'Error deleting saved values 😥' };
		return { error: false, message: 'Deleted successfully 🚀' };
	} catch (error) {
		return { error: true, message: 'Internal erros 😅 💻 ' };
	}
};
