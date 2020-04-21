import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';

import Header from '../../commons/components/header/header';
import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';
import Fab from '../../commons/components/fab/fab';
import Icon from 'react-native-vector-icons/FontAwesome';
import List from '../../commons/components/list/list';

import colors from '../../commons/colors';
import sizes from '../../commons/sizes';

const categories = [
	{color: '#f3a683', title: 'as  af sdporis'},
	{color: '#f7d794', title: 'sd gs dg sdg sPariatur voluptatem eaque velit'},
	{color: '#778beb', title: 'Quas in fugiat voluptate'},
	{color: '#e77f67', title: 'Deleniti veniam quas voluptas'},
	{color: '#cf6a87', title: 'Nihil sit nostrum vitae'},
	{color: '#f19066', title: 'Labore, tempore iste'},
	{color: '#f3a683', title: '2as  af sdporis'},
	{color: '#f7d794', title: '2sd gs dg sdg sPariatur voluptatem eaque velit'},
	{color: '#778beb', title: '2Quas in fugiat voluptate'},
	{color: '#e77f67', title: '2Deleniti veniam quas voluptas'},
	{color: '#cf6a87', title: '2Nihil sit nostrum vitae'},
	{color: '#f19066', title: '2Labore, tempore iste'},
]

function Categories({navigation}) {
	return (
		<View style={style.wrapper}>
			<Header 
				title="Categories"
				leftComponent={<Header.Action onPress={navigation.goBack} />}
			/>
			<ScrollView contentContainerStyle={style.scrollView}>
				<List 
					items={categories}
					leftComponent={item => <CategoryColorBox backgroundColor={item.color} />}
					rightComponent={item => <List.RowAction iconName="trash" onPress={() => {}} />}
				/>
			</ScrollView>
			<Fab onPress={() => navigation.navigate('AddCategory')} />
		</View>
	)
}

const style = StyleSheet.create({
	wrapper: {
		flexGrow: 1,
		flexShrink: 1
	},
	scrollView: {
		paddingBottom: 40 + 2 * sizes.OUTER_MARGIN
	},
	category: {
		flexDirection: 'row',
		padding: sizes.INNER_MARGIN,		
		alignItems: 'center'
	},
	name: {
		fontSize: 14,
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