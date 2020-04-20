import React, {useState, Fragment} from 'react';
import {View, TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Header from '../../commons/components/header/header';
import sizes from '../../commons/sizes';
import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';

import colors, {categoryColors} from '../../commons/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

function AddCategory() {
	const [color, setColor] = useState(categoryColors[0]);
	const [categoryName, setCategoryName] = useState('');

	return (
		<Fragment>
			<Header 
				title="Add category"
				leftComponent={<Header.Action iconName="times" onPress={() => {}} />}
				rightComponent={<Header.Action iconName="check" onPress={() => {}} />}
			/>
			<View style={style.wrapper}>
				<View style={style.addCategory}>
					<CategoryColorBox backgroundColor={color} />
					<TextInput
						autoFocus 
						placeholder="Category name..." 
						onChangeText={setCategoryName} 
						style={style.textInput} 
						value={categoryName} />
				</View>
				<View style={style.colors}>
					{categoryColors.map(item => (
						<TouchableOpacity activeOpacity={0.7} onPress={() => setColor(item)}>
							<CategoryColorBox isSelected={item === color} key={item} backgroundColor={item} />
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
		fontSize: 22
	}
});

export default AddCategory;