import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

import Header from '../header/header';

import colors from '../../colors';
import sizes from '../../sizes';

const handleKeyExtractor = ({id, title, subtitle}) => ({id, title, subtitle});

function List({items, onPress, leftComponent, rightComponent, keyExtractor = handleKeyExtractor}) {
	return items.map(item => {
		const {id, title, subtitle} = keyExtractor(item);
		const handleOnPress = () => onPress && onPress(item);

		return (
			<ListRow
				key={id || title}
				title={title}
				subtitle={subtitle}
				onPress={handleOnPress}
				leftComponent={leftComponent(item)}
				rightComponent={rightComponent(item)}
			/>
		);
	})
}

function ListRow({title, subtitle, leftComponent, rightComponent, ...rest}) {
	return (
		<TouchableHighlight {...rest} underlayColor={colors.onBackground}>
			<View style={styles.wrapper}>
				<View style={styles.leftComponent}>
					{leftComponent}
				</View>
				<View style={styles.centerComponent}>
					<Text 
						numberOfLines={1} 
						ellipsisMode="tail" 
						style={styles.title}
					>
						{title}
					</Text>
					{subtitle && <Text 
						numberOfLines={1} 
						ellipsisMode="tail" 
						style={styles.subtitle}
					>
						{subtitle}
					</Text>}
				</View>
				<View style={styles.rightComponent}>
					{rightComponent}
				</View>
			</View>
		</TouchableHighlight>
	);
}

function ListRowAction({iconColor, iconName, ...rest}) {
	return (
		<Header.Action 
			iconColor={iconColor} 
			iconName={iconName} 
			underlayColor={colors.onBackground} 
			{...rest}
		/>
	)
}

ListRowAction.defaultProps = {
	iconColor: colors.secondaryText,
	iconName: 'chevron-right'
}

function ListSubtitle({text}) {
	return <Text style={styles.listSubtitle}>{text}</Text>
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		height: sizes.LIST_ROW_HEIGHT,
		padding: sizes.INNER_MARGIN
	},
	leftComponent: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	centerComponent: {
		paddingHorizontal: sizes.INNER_MARGIN,
		justifyContent: 'center',
		flexDirection: 'column',
		flexGrow: 0,
		flexShrink: 1
	},
	title: {
		fontSize: 15,
		color: colors.primaryText
	},
	subtitle: {
		fontSize: 10,
		color: colors.secondaryText
	},
	rightComponent: {
		alignItems: 'flex-end',
		justifyContent: 'center',
		flexGrow: 1,
		flexShrink: 0
	},
	listSubtitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.primaryText,
		letterSpacing: 0.5,
		padding: sizes.INNER_MARGIN
	}
});

List.Row = ListRow;
List.Subtitle = ListSubtitle;
List.RowAction = ListRowAction;

export default List;