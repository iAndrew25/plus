import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import sizes from '../../sizes';
import colors from '../../colors';

function List({items, leftComponent, rightComponent}) {
	return items.map(item => 
		<ListRow 
			key={item.title}
			title={item.title} 
			subtitle={item.subtitle} 
			leftComponent={leftComponent(item)} 
			rightComponent={rightComponent(item)} />
	);
}

function ListRow({title, subtitle, leftComponent, rightComponent, ...rest}) {
	return (
		<TouchableHighlight underlayColor={colors.onBackground} {...rest}>
			<View style={style.wrapper}>
				<View style={style.left}>
					{leftComponent}
				</View>
				<View style={style.center}>
					<Text numberOfLines={1} ellipsisMode="tail" style={style.title}>{title}</Text>
					{subtitle && <Text numberOfLines={1} ellipsisMode="tail" style={style.subtitle}>{subtitle}</Text>}
				</View>
				<View style={style.right}>
					{rightComponent}
				</View>
			</View>
		</TouchableHighlight>
	);
}

function ListRowAction({iconColor, iconName, ...rest}) {
	return (
		<TouchableHighlight style={style.listRowAction} underlayColor={colors.onBackground} {...rest}>
			<Icon name={iconName} size={sizes.ICON_SIZE} color={iconColor} />
		</TouchableHighlight>
	);
}

ListRowAction.defaultProps = {
	iconColor: colors.secondaryText,
	iconName: 'chevron-right'
}

const style = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		height: 50,
		padding: sizes.INNER_MARGIN
	},
	left: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	center: {
		paddingHorizontal: sizes.INNER_MARGIN,
		justifyContent: 'center',
		flexDirection: 'column',
		flexGrow: 0,
		flexShrink: 1
	},
	right: {
		alignItems: 'flex-end',
		justifyContent: 'center',
		flexGrow: 1,
		flexShrink: 0
	},
	title: {
		fontSize: 15,
		color: colors.primaryText
	},
	subtitle: {
		fontSize: 10,
		color: colors.secondaryText
	},
	listRowAction: {
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	}
});

List.Row = ListRow;
List.RowAction = ListRowAction;

export default List;