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

export {
	parseDate
};
