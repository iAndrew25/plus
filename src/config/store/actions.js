const addCategoryAction = dispatch => payload => {
	dispatch({
		type: 'ADD_CATEGORY',
		payload
	});
};

const removeCategoryAction = dispatch => payload => {
	dispatch({
		type: 'REMOVE_CATEGORY',
		payload
	});
};

const updateSelectedCurrencyAction = dispatch => payload => {
	dispatch({
		type: 'UPDATE_SELECTED_CURRENCY',
		payload
	});
};

const addRecordAction = dispatch => payload => {
	dispatch({
		type: 'ADD_RECORD',
		payload
	});
};

export {
	addRecordAction,
	addCategoryAction,
	removeCategoryAction,
	updateSelectedCurrencyAction
};
