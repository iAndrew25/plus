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

export {
	CategorySchema,
	RecordSchema
};