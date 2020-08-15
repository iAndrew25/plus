import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../colors';
import sizes from '../../sizes';

function Header({leftComponent, title, rightComponent}) {
	return (
		<View style={styles.wrapper}>
			{leftComponent}
			<Text numberOfLines={1} style={styles.title} ellipsisMode="tail">{title}</Text>
			<View style={styles.rightComponent}>
				{rightComponent}				
			</View>
		</View>
	)
}

function HeaderAction({iconName, iconColor, underlayColor, ...rest}) {
	return (
		<TouchableHighlight 
			style={styles.headerAction} 
			underlayColor={underlayColor || colors.primaryDark} 
			{...rest}
		>
			<Icon name={iconName} size={sizes.ICON_SIZE} color={iconColor} />
		</TouchableHighlight>
	);
}

HeaderAction.defaultProps = {
	iconName: 'chevron-left',
	iconColor: colors.onPrimary
}

const styles = StyleSheet.create({
	wrapper: {
		height: sizes.HEADER_HEIGHT,
		backgroundColor: colors.primaryDefault,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: sizes.INNER_MARGIN
	},
	title: {
		flexGrow: 0,
		flexShrink: 1,
		paddingHorizontal: sizes.INNER_MARGIN,
		color: colors.onPrimary,
		fontSize: 16,
	},
	rightComponent: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		flexGrow: 1
	},
	headerAction: {
		padding: sizes.INNER_MARGIN,
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

Header.Action = HeaderAction;

export default Header;