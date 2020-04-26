const rootReducer = (state, {type, payload = {}} = {}) => {
	console.log("payload",type, payload);
	let {categories, categoriesCount, records, currency} = payload;

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