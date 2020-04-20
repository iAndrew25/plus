import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTabsComponent from '../../commons/components/bottom-tabs/bottom-tabs';

import Dashboard from '../../screens/dashboard/dashboard';
import Timeline from '../../screens/timeline/timeline';

const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function NavigationStacks() {
	return (
		<NavigationContainer>
			<BottomTabs.Navigator headerMode="none" tabBar={BottomTabsComponent}>
				<BottomTabs.Screen name="Dashboard" component={Dashboard} options={{tabBarLabel: 'balance-scale'}} />
				<BottomTabs.Screen name="Timeline" component={Timeline} options={{tabBarLabel: 'calendar'}} />
			</BottomTabs.Navigator>
		</NavigationContainer>
	)
}

export default NavigationStacks;