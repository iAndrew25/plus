import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTabs from '../../commons/components/bottom-tabs/bottom-tabs';

import SetCurrency from '../../screens/set-currency/set-currency';
import AddCategory from '../../screens/add-category/add-category';
import Categories from '../../screens/categories/categories';
import Dashboard from '../../screens/dashboard/dashboard';
import Timeline from '../../screens/timeline/timeline';
import AddRecord from '../../screens/add-record/add-record';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
	return (
		<BottomTab.Navigator tabBar={BottomTabs}>
			<BottomTab.Screen name="Dashboard" component={Dashboard} options={{tabBarLabel: 'balance-scale'}}/>
			<BottomTab.Screen name="Timeline" component={Timeline} options={{tabBarLabel: 'calendar'}}/>
		</BottomTab.Navigator>
	);
}

function NavigationStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="AddRecord" component={AddRecord} />
				<Stack.Screen name="Categories" component={Categories} />
				<Stack.Screen name="AddCategory" component={AddCategory} />
				<Stack.Screen name="SetCurrency" component={SetCurrency} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default NavigationStack;
