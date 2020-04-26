import database from '../database/database';

const getCategoriesAction = dispatch => () => {
	try {
		console.log('get categoriesss');
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
	getCategoriesAction,
	createCategoryAction,
	deleteCategoryAction
};
