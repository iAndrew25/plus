import React, {useState, useEffect, useCallback} from 'react';
import {Alert, View, Text, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import {getCategories, deleteCategory} from '../../services/category-service';

import Header from '../../commons/components/header/header';
import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';
import Fab from '../../commons/components/fab/fab';
import Icon from 'react-native-vector-icons/FontAwesome';
import List from '../../commons/components/list/list';

import colors from '../../commons/colors';
import sizes from '../../commons/sizes';

function Categories({navigation}) {
	const [categories, setCategories] = useState([]);
	const handleOnRemove = item => () => {
		Alert.alert('Remove category', 'Are you sure you want to remove this category?', [{
			text: 'Cancel'
		}, {
			text: 'Delete',
			onPress: () => {
				try {
					deleteCategory(item);
					setCategories(getCategories());
				} catch(error) {
					console.log('Categories::error', error);
				}
			}
		}])
	}

	useFocusEffect(useCallback(() => setCategories(getCategories()), []));

	return (
		<View style={style.wrapper}>
			<Header 
				title="Categories"
				leftComponent={<Header.Action onPress={navigation.goBack} />}
			/>
			<ScrollView contentContainerStyle={style.scrollView}>
				<List 
					items={categories}
					keyExtractor={({id, name}) => ({id, title: name})}
					leftComponent={item => <CategoryColorBox backgroundColor={item.color} />}
					rightComponent={item => <List.RowAction iconName="trash" onPress={handleOnRemove(item)} />}
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