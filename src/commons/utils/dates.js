const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const parseDate = date => {
	const today = new Date();
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	if(day === today.getDate() && month === date.getMonth() && year === date.getFullYear()) {
		return 'Today';
	} else {
		return `${MONTHS[month].slice(0, 3)} ${day}, ${year}`;
	}
};

const getMonthAndYearFromDate = timestamp => {
	const date = new Date(timestamp);
	const month = date.getMonth();
	const year = date.getFullYear();

	return `${MONTHS[month]} ${year}`;
}

const groupRecordsByDate = records => records.reduce((total, item) => {
	const groupName = getMonthAndYearFromDate(item.timestamp);

	return {
		...total,
		[groupName]: [...(total[groupName] || []), item]
	}
}, {});

export {
	parseDate,
	groupRecordsByDate
};
