import React, {Fragment, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import { PieChart } from "react-native-chart-kit";

import {getInitialDataAction} from '../../config/store/actions';

import {formatRecordsForChart} from '../../commons/utils/helpers';

import storeConnect from '../../config/store/store-connect';

import Fab from '../../commons/components/fab/fab';
import Header from '../../commons/components/header/header';
import List from '../../commons/components/list/list';

import sizes from '../../commons/sizes';
import colors from '../../commons/colors';

function MonthRecord({navigation, categoriesCount, selectedCurrency, currentMonthExpenses}) {
const data = [{
	value: 120,
	category: {
		name: 'Travel',
		color: '#3dc1d3',
	}
}, {
	value: 220,
	category: {
		name: 'Travel',
		color: '#3dc1d3',
	}
}, {
	value: 290,
	category: {
		name: 'Travel',
		color: '#3dc1d3',
	}
}, {
	value: 320,
	category: {
		name: 'Entertainment',
		color: '#6c5ce7',
	}
}, {
	value: 620,
	category: {
		name: 'Beauty',
		color: '#ffeaa7',
	}
}, {
	value: 320,
	category: {
		name: 'Beauty',
		color: '#ffeaa7',
	}
}, {
	value: 620,
	category: {
		name: 'Donations',
		color: '#d63031',
	}
}]

const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};
	return (
		<Fragment>
			<List.Subtitle text="Overview" />
			<List.Row title="Total spent this month" rightComponent={<Text>235.22 RON</Text>}  />
			<List.Row title="Daily average spending" rightComponent={<Text>235.22 RON</Text>}  />
			<List.Row title="Spending left / day" rightComponent={<Text>235.22 RON</Text>}  />
			<List.Subtitle text="Categories" />
			<PieChart
				data={formatRecordsForChart(data)}
				width={sizes.CHART_WIDTH}
				height={sizes.CHART_HEIGHT}
				chartConfig={chartConfig}
				accessor="value"
				backgroundColor="transparent"
			/>
		</Fragment>
	)
}

const style = StyleSheet.create({
	settings: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.primaryText,
		letterSpacing: 0.5,
		padding: sizes.INNER_MARGIN
	},
	modalWrapper: {
		justifyContent: 'flex-end',
		margin: 0
	},
	modalContent: {
		backgroundColor: colors.background,
		paddingVertical: sizes.INNER_MARGIN
	}
});

export default MonthRecord;