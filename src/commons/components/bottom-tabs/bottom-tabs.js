import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../colors';
import sizes from '../../sizes';

function BottomTabs({ state, descriptors, navigation }) {
	return (
		<View style={style.wrapper}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const isFocused = state.index === index;
				const color = isFocused ? colors.primaryDefault : colors.secondaryText;
				const onPress = () => {
					if (!isFocused) {
						navigation.navigate(route.name);
					}
				};

				return (
					<TouchableOpacity style={style.tab} onPress={onPress} key={route.name}>
						<Icon name={options.tabBarLabel} size={sizes.ICON_SIZE} color={color} />
						<Text style={[style.tabName, {color}]}>{route.name}</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		height: sizes.TABS_HEIGHT,
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: colors.background
	},
	tab: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	tabName: {
		marginTop: 4,
		fontSize: 12
	}
});

export default BottomTabs;