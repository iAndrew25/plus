import {Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const HEADER_HEIGHT = 50;
const TABS_HEIGHT = 50;
const ICON_SIZE = 15;
const INNER_MARGIN = 8;
const OUTER_MARGIN = 16;
const CATEGORY_SIZE = 40;
const CHART_WIDTH = DEVICE_WIDTH - (2 * OUTER_MARGIN);
const CHART_HEIGHT = CHART_WIDTH / 2;

export default {
	HEADER_HEIGHT,
	TABS_HEIGHT,
	ICON_SIZE,
	INNER_MARGIN,
	OUTER_MARGIN,
	CATEGORY_SIZE,
	CHART_WIDTH,
	CHART_HEIGHT
};