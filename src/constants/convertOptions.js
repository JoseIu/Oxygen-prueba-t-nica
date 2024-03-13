export const CONVERSION_OPTIONS = {
	km_mi: 0,
	mi_km: 1,
	ft_m: 2,
	m_ft: 3,
	cm_in: 4,
	in_cm: 5,
};
export const CONVERSION_KEYS = [
	{ key: 'km', keyTo: 'miles', keyToVal: CONVERSION_OPTIONS.mi_km },
	{ key: 'miles', keyTo: 'km', keyToVal: CONVERSION_OPTIONS.km_mi },
	{ key: 'feet', keyTo: 'm', keyToVal: CONVERSION_OPTIONS.m_ft },
	{ key: 'm', keyTo: 'feet', keyToVal: CONVERSION_OPTIONS.ft_m },
	{ key: 'cm', keyTo: 'inches', keyToVal: CONVERSION_OPTIONS.in_cm },
	{ key: 'inches', keyTo: 'cm', keyToVal: CONVERSION_OPTIONS.cm_in },
];
