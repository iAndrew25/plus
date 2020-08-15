import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';
import Card from '../../commons/components/card/card';
import List from '../../commons/components/list/list';

import {groupRecordsByDate} from '../../commons/utils/dates';
import {getTotalSpent, formatRecordsForChart} from '../../commons/utils/helpers';

import storeConnect from '../../config/store/store-connect';

import sizes from '../../commons/sizes';

function MonthlyRecords({currentRecords, selectedCurrency}) {
	const parsedCurrentRecords = formatRecordsForChart(currentRecords);
	const totalSpent = getTotalSpent(currentRecords);

	return (
		<ScrollView contentContainerStyle={styles.wrapper}>
			<Card>
				<List.Subtitle text="Overview" />
				<List.Row 
					title="Total spent this month"
					rightComponent={<Text>{totalSpent} {selectedCurrency.symbol}</Text>}
				/>
			</Card>
			<Card>
				<List.Subtitle text="Categories" />

				<PieChart
					accessor="value"
					width={sizes.CHART_WIDTH}
					height={sizes.CHART_HEIGHT}
					data={parsedCurrentRecords}
					chartConfig={{color: () => {}}} // ?!
				/>

				<List
					items={currentRecords}
					keyExtractor={({id, category}) => ({id, title: category.name})}
					leftComponent={({category}) => <CategoryColorBox backgroundColor={category.color} />}
					rightComponent={({value}) => <Text>{value} {selectedCurrency.symbol}</Text>}
				/>
			</Card>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		paddingBottom: (sizes.OUTER_MARGIN * 2) + sizes.FAB_SIZE
	}
});

const mapStateToProps = ({records, selectedCurrency}, {route}) => ({
	currentRecords: groupRecordsByDate(records)[route.name],
	selectedCurrency
});

export default storeConnect(mapStateToProps, null)(MonthlyRecords);