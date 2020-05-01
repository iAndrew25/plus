import colors from '../colors';

const formatRecordsForChart = records =>
	Object.values(records.reduce((total, item) => {
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

const getRecordsSum = records => records.reduce((total, item) => total + item.value, 0);

export {
	getRecordsSum,
	formatRecordsForChart
};
