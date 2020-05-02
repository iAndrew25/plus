import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MonthlyRecords from '../../screens/monthly-records/monthly-records';
import sizes from '../../commons/sizes';

const TopTabs = createMaterialTopTabNavigator();

function MonthlyRecordsTabs({records, selectedCurrency}) {
	const recordsList = Object.keys(records);

	if(recordsList.length) {
		return (
			<TopTabs.Navigator lazy>
				{recordsList.map(title => <TopTabs.Screen key={title} name={title} component={MonthlyRecords} />)}
			</TopTabs.Navigator>
		);
	} else {
		return (
			<Text style={styles.nothingHere}>There are no records right now.</Text>
		);
	}
}

const styles = StyleSheet.create({
	nothingHere: {
		padding: sizes.OUTER_MARGIN,
		textAlign: 'center'
	}
});

export default MonthlyRecordsTabs;
