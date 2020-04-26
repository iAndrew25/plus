const rootReducer = (state, {type, payload = {}} = {}) => {
	let {categories, categoriesCount, records, currency} = payload;

	switch (type) {
		case 'SET_CATEGORIES':
			return {
				...state,
				categoriesCount,
				categories
			}

		case 'SET_CURRENCY':
			return {
				...state,
				currency
			}

		default:
			return state;
	}
};

export default rootReducer;