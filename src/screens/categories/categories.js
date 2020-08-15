import React from 'react';
import {View, Alert, ScrollView, StyleSheet} from 'react-native';

import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';
import Header from '../../commons/components/header/header';
import List from '../../commons/components/list/list';
import Fab from '../../commons/components/fab/fab';

import {removeCategoryAction} from '../../config/store/actions';
import storeConnect from '../../config/store/store-connect';

import sizes from '../../commons/sizes';

function Categories({categories, navigation, removeCategory}) {
	const handleOnRemove = item => () => {
		Alert.alert('Remove category', 'Are you sure you want to remove this category?', [{
			text: 'Cancel'
		}, {
			text: 'Delete',
			onPress: () => removeCategory(item)
		}]);
	};

	return (
		<View style={styles.wrapper}>
			<Header 
				title="Categories" 
				leftComponent={<Header.Action onPress={navigation.goBack}/>} />
			<ScrollView contentContainerStyle={styles.scrollView}>
				<List 
					items={categories}
					keyExtractor={({id, name}) => ({id, title: name})}
					leftComponent={({color}) => <CategoryColorBox backgroundColor={color} />}
					rightComponent={item => <List.RowAction 
						iconName="trash" 
						onPress={handleOnRemove(item)}
					/>}
				/>
			</ScrollView>
			<Fab onPress={() => navigation.navigate('AddCategory')} />
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flexGrow: 1,
		flexShrink: 1
	},
	scrollView: {
		paddingBottom: (sizes.OUTER_MARGIN * 2) + sizes.FAB_SIZE
	}
});

const mapStateToProps = ({categories}) => ({categories});
const mapDispatchToProps = dispatch => ({removeCategory: removeCategoryAction(dispatch)});

export default storeConnect(mapStateToProps, mapDispatchToProps)(Categories);