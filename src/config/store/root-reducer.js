import {groupRecordsByDate} from '../../commons/utils/dates';

const rootReducer = (state, {type, payload = {}} = {}) => {
	const {categories, currencies, categoriesCount, records, selectedCurrency} = payload;

	switch (type) {
		case 'SET_INITIAL_DATA':
			return {
				selectedCurrency,
				categoriesCount,
				currencies,
				categories,
				records: groupRecordsByDate(records)
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
				records: groupRecordsByDate(records)
			};

		default:
			return state;
	}
};

export default rootReducer;