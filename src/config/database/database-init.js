import database from './database';
import {INITIAL_CATEGORIES, INITIAL_CURRENCIES, SELECTED_CURRENCY} from './initial-data';

const databaseInit = () => {
	try {
		database.write(() => {
			!database.objects('Category').length && INITIAL_CATEGORIES.forEach(item => database.create('Category', item));
			!database.objects('Currency').length && INITIAL_CURRENCIES.forEach(item => database.create('Currency', item));
			!database.objects('Settings').length && database.create('Settings', {selectedCurrency: SELECTED_CURRENCY});
		});
	} catch(error) {
		console.log('initial::error', error);
	}
}

export default databaseInit;
