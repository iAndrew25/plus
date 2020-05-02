import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import sizes from '../../sizes';
import colors from '../../colors';

function CategoryColorBox({backgroundColor, isSelected}) {
	return (
		<View style={[style.categoryColorBox, {backgroundColor}]}>
			{isSelected && <View style={style.selectedColor}>
				<Icon name="check" size={sizes.ICON_SIZE} color={colors.onPrimary} />
			</View>}
		</View>
	);
}

const style = StyleSheet.create({
	categoryColorBox: {
		margin: sizes.INNER_MARGIN,
		width: sizes.CATEGORY_SIZE,
		height: sizes.CATEGORY_SIZE,
		borderRadius: 8,
		overflow: 'hidden'
	},
	selectedColor: {
		...StyleSheet.absoluteFill,
		position: 'absolute',
		backgroundColor: '#0000001A',
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default CategoryColorBox;