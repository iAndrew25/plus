import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';

import Header from '../../commons/components/header/header';
import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';
import Fab from '../../commons/components/fab/fab';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../commons/colors';
import sizes from '../../commons/sizes';

const categories = [
	{color: '#f3a683', name: 'as  af sdporis'},
	{color: '#f7d794', name: 'sd gs dg sdg sPariatur voluptatem eaque velit'},
	{color: '#778beb', name: 'Quas in fugiat voluptate'},
	{color: '#e77f67', name: 'Deleniti veniam quas voluptas'},
	{color: '#cf6a87', name: 'Nihil sit nostrum vitae'},
	{color: '#f19066', name: 'Labore, tempore iste'},
	{color: '#f3a683', name: 'as  af sdporis'},
	{color: '#f7d794', name: 'sd gs dg sdg sPariatur voluptatem eaque velit'},
	{color: '#778beb', name: 'Quas in fugiat voluptate'},
	{color: '#e77f67', name: 'Deleniti veniam quas voluptas'},
	{color: '#cf6a87', name: 'Nihil sit nostrum vitae'},
	{color: '#f19066', name: 'Labore, tempore iste'},
]

function Categories() {
	return (
		<View style={style.wrapper}>
			<Header 
				title="Categories"
				leftComponent={<Header.Action onPress={() => {}} />}
			/>
			<ScrollView contentContainerStyle={style.scrollView}>
				{categories.map(({name, color}) => (
					<View style={style.category}>
						<CategoryColorBox backgroundColor={color} />
						<Text style={style.name} ellipsisMode="tail" numberOfLines={1}>{name}</Text>
						<View style={style.rightSide}>
							<TouchableHighlight style={style.removeBtn} underlayColor={`${colors.secondaryText}1A`} onPress={() => {}}>
								<Icon name="trash" size={sizes.ICON_SIZE} color={colors.secondaryText} />
							</TouchableHighlight>
						</View>
					</View>
				))}
			</ScrollView>
			<Fab onPress={() => {}} />
		</View>
	)
}

const style = StyleSheet.create({
	wrapper: {
		flexGrow: 1,
		flexShrink: 1
	},
	scrollView: {
		paddingBottom: 40 + sizes.OUTER_MARGIN
	},
	category: {
		flexDirection: 'row',
		padding: sizes.INNER_MARGIN,		
		alignItems: 'center'
	},
	name: {
		fontSize: 18,
		color: colors.primaryText,
		flexGrow: 0,
		flexShrink: 1
	},
	rightSide: {
		flexGrow: 1,
		flexShrink: 0,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	removeBtn: {
		width: 40,
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default Categories;