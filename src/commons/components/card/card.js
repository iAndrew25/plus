import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../colors';
import sizes from '../../sizes';

function Card({children}) {
	return (
		<View style={styles.wrapper}>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: colors.background,
		borderRadius: 8,
		margin: sizes.INNER_MARGIN,
		padding: sizes.INNER_MARGIN,
		elevation: 1
	}
});

export default Card;