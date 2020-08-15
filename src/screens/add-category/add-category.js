import React, {useState, Fragment} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';
import Header from '../../commons/components/header/header';

import {addCategoryAction} from '../../config/store/actions';
import storeConnect from '../../config/store/store-connect';

import sizes from '../../commons/sizes';
import colors, {categoryColors} from '../../commons/colors';

function AddCategory({navigation, addCategory}) {
	const [name, setName] = useState('');
	const [color, setColor] = useState(categoryColors[0]);

	const handleOnPress = backgroundColor => () => setColor(backgroundColor);
	const handleAddCategory = () => {
		addCategory({name, color});
		navigation.goBack();
	};

	return (
		<Fragment>
			<Header
				title="Add category"
				leftComponent={<Header.Action iconName="times" onPress={navigation.goBack} />}
				rightComponent={<Header.Action iconName="check" onPress={handleAddCategory} />}
			/>
			<View style={styles.wrapper}>
				<View style={styles.addCategory}>
					<CategoryColorBox backgroundColor={color} />
					<TextInput
						autoFocus
						value={name}
						onChangeText={setName}
						placeholder="CategoryName"
						style={styles.textInput}
					/>
				</View>
				<View style={styles.colors}>
					{categoryColors.map(backgroundColor => {
						return (
							<TouchableOpacity key={backgroundColor} activeOpacity={0.7} onPress={handleOnPress(backgroundColor)}>
								<CategoryColorBox isSelected={color === backgroundColor} backgroundColor={backgroundColor} />
							</TouchableOpacity>
						);
					})}
				</View>
			</View>
		</Fragment>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'column'
	},
	addCategory: {
		flexDirection: 'row',
		padding: sizes.OUTER_MARGIN
	},
	textInput: {
		flexGrow: 1,
		fontSize: 20,
		color: colors.primaryText
	},
	colors: {
		flexGrow: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around'
	}
});

const mapDispatchToProps = dispatch => ({
	addCategory: addCategoryAction(dispatch)
});

export default storeConnect(null, mapDispatchToProps)(AddCategory);