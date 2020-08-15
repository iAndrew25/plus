import colors from '../colors';

const sortByProp = (list, prop) => list.sort((fistItem, secondItem) => {
	if(fistItem[prop] < secondItem[prop]) {
		return -1;
	} else {
		return 1
	}
});

const getTotalSpent = records => records.reduce((total, item) => total + item.value, 0);

const formatRecordsForChart = records => Object.values(records.reduce((total, item) => {
	const {name, color} = item.category;
	const totalCategory = total[name] || {
		name,
		color,
		value: 0,
		legendFontColor: colors.secondaryText,
		legendFontSize: 15
	};

	return {
		...total,
		[name]: {
			...totalCategory,
			value: totalCategory.value + item.value
		}
	}
}, {}));

export {
	sortByProp,
	getTotalSpent,
	formatRecordsForChart
};
