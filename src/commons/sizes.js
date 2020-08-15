import {Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const TABS_HEIGHT = 50;
const HEADER_HEIGHT = 50;
const LIST_ROW_HEIGHT = 50;

const CATEGORY_SIZE = 40;
const FAB_SIZE = 50;
const ICON_SIZE = 15;

const INNER_MARGIN = 8;
const OUTER_MARGIN = 16;

const CHART_WIDTH = DEVICE_WIDTH - (2 * OUTER_MARGIN);
const CHART_HEIGHT = CHART_WIDTH / 2;

export default {
	TABS_HEIGHT,
	HEADER_HEIGHT,
	LIST_ROW_HEIGHT,

	CATEGORY_SIZE,
	FAB_SIZE,
	ICON_SIZE,

	INNER_MARGIN,
	OUTER_MARGIN,

	CHART_WIDTH,
	CHART_HEIGHT
};
