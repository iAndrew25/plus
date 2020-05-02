import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BottomTabsComponent from '../../commons/components/bottom-tabs/bottom-tabs';

import Dashboard from '../../screens/dashboard/dashboard';
import Timeline from '../../screens/timeline/timeline';

import AddRecord from '../../screens/add-record/add-record';
import AddCategory from '../../screens/add-category/add-category';
import Categories from '../../screens/categories/categories';
import SetCurrency from '../../screens/set-currency/set-currency';
import MonthlyRecords from '../../screens/monthly-records/monthly-records';

const TopTabs = createMaterialTopTabNavigator();
const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const renderDashboardTopTabs = (records, selectedCurrency) => {
	const recordsList = Object.keys(records);

	if(recordsList.length) {
		return (
			<TopTabs.Navigator lazy>
				{recordsList.map(title => <TopTabs.Screen key={title} name={title} component={MonthlyRecords} />)}
			</TopTabs.Navigator>
		);
	} else {
		return null;
	}
}

const Home = () => (
	<BottomTabs.Navigator headerMode="none" tabBar={BottomTabsComponent}>
		<BottomTabs.Screen name="Dashboard" component={Dashboard} options={{tabBarLabel: 'balance-scale'}} />
		<BottomTabs.Screen name="Timeline" component={Timeline} options={{tabBarLabel: 'calendar'}} />
	</BottomTabs.Navigator>
);

function NavigationStacks() {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none" tabBar={BottomTabsComponent}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Categories" component={Categories} />
				<Stack.Screen name="AddCategory" component={AddCategory} />
				<Stack.Screen name="AddRecord" component={AddRecord} />
				<Stack.Screen name="SetCurrency" component={SetCurrency} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export {renderDashboardTopTabs};

export default NavigationStacks;