import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import sizes from '../../sizes';
import colors from '../../colors';

function Fab({iconName, ...rest}) {
	return (
		<TouchableHighlight style={style.wrapper} underlayColor={colors.primaryDark} {...rest}>
			<Icon name={iconName} size={sizes.ICON_SIZE} color={colors.onPrimary} />
		</TouchableHighlight>
	);
}

Fab.defaultProps = {
	iconName: 'plus'
}

const style = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		backgroundColor: colors.primaryDefault,
		bottom: sizes.OUTER_MARGIN,
		right: sizes.OUTER_MARGIN,
		width: 50,
		height: 50,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
	}
});

export default Fab;