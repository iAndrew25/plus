import database from '../config/database/database';

const getCategories = () => {
	return database.objects('Category').sorted('name');
}

const getCategoriesCount = () => {
	return getCategories().length;
}

const createCategory = category => {
	database.write(() => {
		database.create('Category', {id: Date.now(), ...category});
	});
}

const deleteCategory = category => {
	database.write(() => {
		database.delete(category);
	});
}

export {
	getCategoriesCount,
	getCategories,
	createCategory,
	deleteCategory
};
