import {sortByProp} from '../../commons/utils/helpers';

const rootReducer = (store, {type, payload} = {}) => {
	switch(type) {
		case 'ADD_RECORD':
			return {
				...store,
				records: sortByProp([...store.records, {
					...payload,
					id: Date.now()
				}], 'timestamp')
			};

		case 'ADD_CATEGORY': 
			return {
				...store,
				categoriesCount: store.categoriesCount + 1,
				categories: sortByProp([...store.categories, {
					...payload, 
					id: Date.now()
				}], 'name')
			};

		case 'REMOVE_CATEGORY': 
			return {
				...store,
				categoriesCount: store.categoriesCount - 1,
				categories: store.categories.filter(category => category.id !== payload.id)
			};

		case 'UPDATE_SELECTED_CURRENCY':
			return {
				...store,
				selectedCurrency: store.currencies.find(currency => currency.symbol === payload.symbol)
			};

		default:
			return store;
	}
}

export default rootReducer;