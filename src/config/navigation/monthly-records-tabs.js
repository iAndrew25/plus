import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MonthlyRecords from '../../screens/monthly-records/monthly-records';

import sizes from '../../commons/sizes';

const TopTab = createMaterialTopTabNavigator();

function MonthlyRecordsTabs({records}) {
	const recordsList = Object.keys(records);

	if(recordsList.length) {
		return (
			<TopTab.Navigator lazy>
				{recordsList.map(title => <TopTab.Screen 
					key={title} 
					name={title} 
					component={MonthlyRecords}
				/>)}
			</TopTab.Navigator>
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