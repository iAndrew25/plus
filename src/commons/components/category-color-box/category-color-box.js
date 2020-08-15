import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../colors';
import sizes from '../../sizes';

function CategoryColorBox({backgroundColor, isSelected}) {
	return (
		<View style={[styles.wrapper, {backgroundColor}]}>
			{isSelected && <View style={styles.selectedColor}>
				<Icon name="check" size={sizes.ICON_SIZE} color={colors.onPrimary} />
			</View>}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		margin: sizes.INNER_MARGIN,
		width: sizes.CATEGORY_SIZE,
		height: sizes.CATEGORY_SIZE,
		borderRadius: 8,
		overflow: 'hidden',
	},
	selectedColor: {
		...StyleSheet.absoluteFill,
		position: 'absolute',
		backgroundColor: '#0000001A',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default CategoryColorBox;