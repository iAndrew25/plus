const rootReducer = (state, {type, payload = {}} = {}) => {
	let {categories, categoriesCount, records, selectedCurrency} = payload;

	switch (type) {
		case 'SET_INITIAL_DATA':
			return {
				...state,
				...payload
			};

		case 'SET_CATEGORIES':
			return {
				...state,
				categoriesCount,
				categories
			};

		case 'SET_SELECTED_CURRENCY':
			return {
				...state,
				selectedCurrency
			};

		case 'SET_RECORDS':
			return {
				...state,
				records
			};

		default:
			return state;
	}
};

export default rootReducer;