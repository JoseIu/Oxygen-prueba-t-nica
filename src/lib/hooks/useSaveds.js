import { useEffect, useState } from 'react';
import { getAllSaveds } from '../api/savedApi';

export const useSaveds = () => {
	const [saveds, setSaveds] = useState({
		data: [],
		error: false,
		isLoading: true,
	});
	const setData = (newData) =>
		setSaveds({ data: newData, error: false, isLoading: false });
	const setError = () => setSaveds({ data: [], error: true, isLoading: false });

	const reloadPage = () =>
		setSaveds({ data: [], error: false, isLoading: true });

	useEffect(() => {
		// if (!saveds.isLoading) return;
		const controller = new AbortController();

		getAllSaveds(setData, setError, controller.signal);

		return () => controller.abort();
	}, [saveds.isLoading]);
	return {
		data: saveds.data,
		isLoading: saveds.isLoading,
		error: saveds.error,
		reloadPage,
		setSaveds,
	};
};
