import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import sizes from '../../sizes';
import colors from '../../colors';

function Header({leftComponent, title, rightComponent}) {
	return (
		<View style={style.wrapper}>
			<View style={style.leftComponent}>
				{leftComponent}
			</View>
			<Text style={style.title} numberOfLines={1} ellipsisMode="tail">{title}</Text>
			<View style={style.rightComponent}>
				{rightComponent}
			</View>
		</View>
	);
}

function HeaderAction({iconColor, iconName, ...rest}) {
	return (
		<TouchableHighlight style={style.headerAction} underlayColor={colors.primaryDark} {...rest}>
			<Icon name={iconName} size={sizes.ICON_SIZE} color={iconColor} />
		</TouchableHighlight>
	);
}

HeaderAction.defaultProps = {
	iconColor: colors.onPrimary,
	iconName: 'chevron-left'
}

const style = StyleSheet.create({
	wrapper: {
		height: sizes.HEADER_HEIGHT,
		backgroundColor: colors.primaryDefault,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: sizes.INNER_MARGIN
	},
	leftComponent: {
		alignItems: 'center',
		justifyContent: 'center',
		height: sizes.HEADER_HEIGHT,
		flexGrow: 0
	},
	rightComponent: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		flexGrow: 1,
		flexShrink: 0
	},
	title: {
		flexGrow: 0,
		flexShrink: 1,
		paddingHorizontal: sizes.INNER_MARGIN,
		fontSize: 16,
		color: colors.onPrimary
	},
	headerAction: {
		padding: sizes.INNER_MARGIN,
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	}
});

Header.Action = HeaderAction;

export default Header;