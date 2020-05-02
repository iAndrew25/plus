import database from '../database/database';

const getInitialDataAction = dispatch => () => {
	try {
		const {selectedCurrency} = database.objects('Settings')[0];
		const categories = database.objects('Category');
		const records = database.objects('Record');
		const currencies = database.objects('Currency');

		dispatch({
			type: 'SET_INITIAL_DATA',
			payload: {
				records,
				selectedCurrency,
				categoriesCount: categories.length,
				currencies: currencies.sorted('name'),
				categories: categories.sorted('name')
			}
		});
	} catch(error) {
		console.log("getInitialDataAction::error", error);
	}
}

const getCategoriesAction = dispatch => () => {
	try {
		const categories = database.objects('Category').sorted('name');

		dispatch({
			type: 'SET_CATEGORIES',
			payload: {
				categories,
				categoriesCount: categories.length
			}
		});
	} catch(error) {
		console.log("getCategoriesAction::error", error);
	}
}

const createCategoryAction = dispatch => category => {
	try {
		database.write(() => {
			database.create('Category', {id: Date.now(), ...category});
		});

		getCategoriesAction(dispatch)();
	} catch(error) {
		console.log("createCategoryAction::error", error);
	}
}

const deleteCategoryAction = dispatch => category => {
	try {
		database.write(() => {
			database.delete(category);
		});

		getCategoriesAction(dispatch)();
	} catch(error) {
		console.log("deleteCategoryAction::error", error);
	}
}

const updateCurrentCurrencyAction = dispatch => selectedCurrency => {
	try {
		database.write(() => {
			const response = database.objects('InitialData')[0];
			
			response.selectedCurrency = selectedCurrency;
		});

		dispatch({
			type: 'SET_SELECTED_CURRENCY',
			payload: {
				selectedCurrency
			}
		});
	} catch(error) {
		console.log("updateCurrentCurrencyAction::error", error);
	}
}

const getRecordsAction = dispatch => () => {
	try {
		const records = database.objects('Record');

		dispatch({
			type: 'SET_RECORDS',
			payload: {
				records
			}
		});
	} catch(error) {
		console.log("getRecordsAction::error", error);
	}
}

const createRecordAction = dispatch => record => {
	try {
		// isInUse - category
		database.write(() => {
			database.create('Record', {
				id: Date.now(),
				...record
			});
		});

		getRecordsAction(dispatch)();
	} catch(error) {
		console.log("createRecordAction::error", error);
	}	
}

export {
	getRecordsAction,
	createRecordAction,
	getInitialDataAction,
	getCategoriesAction,
	createCategoryAction,
	deleteCategoryAction,
	updateCurrentCurrencyAction
};
