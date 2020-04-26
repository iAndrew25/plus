import database from '../database/database';

const getInitialDataAction = dispatch => () => {
	try {
		const {selectedCurrency, categories, currencies} = database.objects('InitialData')[0];

		dispatch({
			type: 'SET_INITIAL_DATA',
			payload: {
				selectedCurrency,
				currencies: currencies.sorted('name'),
				categories: categories.sorted('name'),
				categoriesCount: categories.length,
			}
		})
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

export {
	getInitialDataAction,
	getCategoriesAction,
	createCategoryAction,
	deleteCategoryAction
};
