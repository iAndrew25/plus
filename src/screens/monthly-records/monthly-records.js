import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import { PieChart } from "react-native-chart-kit";

import storeConnect from '../../config/store/store-connect';

import {formatRecordsForChart, getRecordsSum} from '../../commons/utils/helpers';

import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';
import Card from '../../commons/components/card/card';
import List from '../../commons/components/list/list';

import sizes from '../../commons/sizes';

function MonthlyRecords({currentRecords, selectedCurrency}) {
	const parsedCurrentRecords = formatRecordsForChart(currentRecords);
	const totalSpent = getRecordsSum(currentRecords);

	return (
		<ScrollView contentContainerStyle={style.wrapper}>
			<Card>
				<List.Subtitle text="Overview" />
				<List.Row title="Total spent this month" rightComponent={<Text>{totalSpent} {selectedCurrency.symbol}</Text>}  />
			</Card>
			<Card>
				<List.Subtitle text="Categories" />
				<PieChart
					data={parsedCurrentRecords}
					width={sizes.CHART_WIDTH}
					height={sizes.CHART_HEIGHT}
					chartConfig={{color: () => {}}} //idk
					accessor="value"
				/>
				<List 
					items={parsedCurrentRecords}
					keyExtractor={({id, name}) => ({id, title: name})}
					leftComponent={({color}) => <CategoryColorBox backgroundColor={color} />}
					rightComponent={({value}) => <Text>{value} {selectedCurrency.symbol}</Text>}
				/>
			</Card>
		</ScrollView>
	)
}

const style = StyleSheet.create({
	wrapper: {
		paddingBottom: 8 + 16 + 50
	}
});

const mapStateToProps = ({records, selectedCurrency}, {route}) => {
	return {
		selectedCurrency,
		currentRecords: records[route.name]
	}
}

export default storeConnect(mapStateToProps, null)(MonthlyRecords);