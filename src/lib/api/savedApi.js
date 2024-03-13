export const savedApi = async (valuesToSave) => {
	try {
		const response = await fetch('http://localhost:3000/saved', {
			method: 'POST',
			headers: { 'Content-Type': 'aplication/json' },
			body: JSON.stringify(valuesToSave),
		});
		if (!response.ok) return 'Error to saved values 😥';
		return 'Saved successfully 🚀';
	} catch (error) {
		return 'Internal erros 😅 💻 ';
	}
};

export const getAllSaveds = async (setData, setError, signal) => {
	try {
		const response = await fetch('http://localhost:3000/saved', { signal });
		console.log(response);

		if (!response.ok) return setError();

		const data = await response.json();
		setData(data);
	} catch (error) {
		return setError();
	}
};
