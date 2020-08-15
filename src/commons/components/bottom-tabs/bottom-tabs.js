import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import sizes from '../../sizes';
import colors from '../../colors';

function BottomTabs({state, descriptors, navigation}) {
	return (
		<View style={styles.wrapper}>
			{state.routes.map((route, index) => {
				const {options} = descriptors[route.key];
				const isFocussed = state.index === index;
				const color = isFocussed ? colors.primaryDefault : colors.secondaryText;
				const handleOnPress	= () => {
					if(!isFocussed) {
						navigation.navigate(route.name)
					}
				};

				return (
					<TouchableOpacity style={styles.tab} key={route.name} onPress={handleOnPress}>
						<Icon name={options.tabBarLabel} size={sizes.ICON_SIZE} color={color} />
						<Text style={[styles.tabName, {color}]}>{route.name}</Text>
					</TouchableOpacity>
				)
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: colors.background,
		height: sizes.TABS_HEIGHT
	},
	tab: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	tabName: {
		fontSize: 12
	}
});

export default BottomTabs;