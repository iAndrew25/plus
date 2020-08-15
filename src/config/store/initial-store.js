import {sortByProp} from '../../commons/utils/helpers';

const INITIAL_CURRENCIES = [{
	symbol: 'RON',
	name: 'Leu'
}, {
	symbol: '€',
	name: 'Euro'
}, {
	symbol: '$',
	name: 'Dolar'
}];

const INITIAL_CATEGORIES = [{
	id: 0,
	name: 'Travel',
	color: '#3dc1d3',
}, {
	id: 1,
	name: 'Food & Drink',
	color: '#e77f67',
}, {
	id: 2,
	name: 'Family & Personal',
	color: '#e15f41',
}, {
	id: 3,
	name: 'Bills & Fees',
	color: '#636e72',
}, {
	id: 4,
	name: 'Entertainment',
	color: '#6c5ce7',
}, {
	id: 5,
	name: 'Home',
	color: '#fab1a0',
}, {
	id: 6,
	name: 'Shopping',
	color: '#f8a5c2',
}, {
	id: 7,
	name: 'Healthcare',
	color: '#55efc4',
}, {
	id: 8,
	name: 'Other',
	color: '#2d3436',
}, {
	id: 9,
	name: 'Transport',
	color: '#f19066',
}, {
	id: 10,
	name: 'Groceries',
	color: '#dfe6e9',
}, {
	id: 11,
	name: 'Sport & Hobbies',
	color: '#303952',
}, {
	id: 12,
	name: 'Education',
	color: '#00cec9',
}, {
	id: 13,
	name: 'Gifts',
	color: '#f7d794',
}, {
	id: 14,
	name: 'Beauty',
	color: '#ffeaa7',
}, {
	id: 15,
	name: 'Work',
	color: '#574b90',
}, {
	id: 16,
	name: 'Investment',
	color: '#00b894',
}, {
	id: 17,
	name: 'Donations',
	color: '#d63031',
}];

const INITIAL_RECORDS = [{
	id: 1,
	value: 201,
	timestamp: 1590847690045,
	category: {
		id: 12,
		name: 'Education',
		color: '#00cec9',
	}
}, {
	id: 2,
	value: 10,
	timestamp: 1591847690045,
	category: {
		id: 14,
		name: 'Beauty',
		color: '#ffeaa7',
	}	
}, {
	id: 3,
	value: 66,
	timestamp: 1592847690045,
	category: {
		id: 12,
		name: 'Education',
		color: '#00cec9',
	}	
}, {
	id: 4,
	value: 733,
	timestamp: 1593847690045,
	category: {
		id: 17,
		name: 'Donations',
		color: '#d63031',
	}	
}, {
	id: 5,
	value: 402,
	timestamp: 1594847690045,
	category: {
		id: 9,
		name: 'Transport',
		color: '#f19066',
	}	
}, {
	id: 6,
	value: 2000,
	timestamp: 1595847690045,
	category: {
		id: 13,
		name: 'Gifts',
		color: '#f7d794',
	}	
}];

export default {
	records: sortByProp(INITIAL_RECORDS, 'timestamp'),
	categories: sortByProp(INITIAL_CATEGORIES, 'name'),
	categoriesCount: INITIAL_CATEGORIES.length,
	currencies: INITIAL_CURRENCIES,
	selectedCurrency: INITIAL_CURRENCIES[2]
};
