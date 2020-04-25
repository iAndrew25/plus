import database from '../config/database/database';

const getCategories = () => {
	return database.objects('Category').sorted('name');
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

const getCategoiesCount = () => {
	return getCategories().length;
}

export {
	getCategoiesCount,
	getCategories,
	createCategory,
	deleteCategory
}