const CategorySchema = {
	name: 'Category',
	primaryKey: 'id',
	properties: {
		id: 'int',
		name: 'string',
		color: 'string'
	}
}

const RecordSchema = {
	name: 'Record',
	primaryKey: 'id',
	properties: {
		id: 'int',
		timestamp: 'date',
		type: 'string', // EXPENSE | INCOME
		value: 'double',
		category: 'Category'
	}
}

const CurrencySchema = {
	name: 'Currency',
	properties: {
		name: 'string',
		symbol: 'string'
	}
}

const ConfigShema = {
	name: 'Config',
	properties: {
		currency: 'Currency',
		currencies: 'Currency[]',
		categories: 'Category[]'
	}
}

export default [
	CategorySchema,
	RecordSchema,
	CurrencySchema,
	ConfigShema
];