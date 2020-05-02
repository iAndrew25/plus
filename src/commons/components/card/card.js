import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import sizes from '../../sizes';
import colors from '../../colors';

function Card({children}) {
	return (
		<View style={style.wrapper}>
			{children}
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		borderRadius: 8,
		backgroundColor: colors.background,
		margin: sizes.INNER_MARGIN,
		padding: sizes.INNER_MARGIN,
		elevation: 1
	}
});

export default Card;