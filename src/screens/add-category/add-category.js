import React, {useState, Fragment} from 'react';
import {View, TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native';

import storeConnect from '../../config/store/store-connect';
import {createCategoryAction} from '../../config/store/actions';

import Header from '../../commons/components/header/header';
import sizes from '../../commons/sizes';
import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';

import colors, {categoryColors} from '../../commons/colors';

function AddCategory({navigation, createCategory}) {
	const [color, setColor] = useState(categoryColors[0]);
	const [name, setName] = useState('');
	const handleAddCategory = () => {
		try {
			createCategory({
				color,
				name
			});

			navigation.goBack();
		} catch(error) {
			console.log('AddCategory::error', error);
		}
	};

	return (
		<Fragment>
			<Header 
				title="Add category"
				leftComponent={<Header.Action iconName="times" onPress={navigation.goBack} />}
				rightComponent={<Header.Action iconName="check" onPress={handleAddCategory} />}
			/>
			<View style={style.wrapper}>
				<View style={style.addCategory}>
					<CategoryColorBox backgroundColor={color} />
					<TextInput
						autoFocus 
						placeholder="Category name..." 
						onChangeText={setName} 
						style={style.textInput} 
						value={name} />
				</View>
				<View style={style.colors}>
					{categoryColors.map(item => (
						<TouchableOpacity key={item} activeOpacity={0.7} onPress={() => setColor(item)}>
							<CategoryColorBox isSelected={item === color} backgroundColor={item} />
						</TouchableOpacity>
					))}
				</View>
			</View>
		</Fragment>
	)
}

const style = StyleSheet.create({
	wrapper: {
		flexDirection: 'column'
	},
	addCategory: {
		flexDirection: 'row',
		padding: sizes.OUTER_MARGIN,
	},
	colors: {
		flexGrow: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around'
	},
	textInput: {
		flexGrow: 1,
		fontSize: 20,
		color: colors.primaryText
	}
});

const mapDispatchToProps = dispatch => ({ createCategory: createCategoryAction(dispatch) });

export default storeConnect(null, mapDispatchToProps)(AddCategory);
