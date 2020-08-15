import React from 'react';
import {TouchableHighlight, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../colors';
import sizes from '../../sizes';

function Fab({iconName, ...rest}) {
	return (
		<TouchableHighlight style={styles.wrapper} underlayColor={colors.primaryDark} {...rest}>
			<Icon name={iconName} size={sizes.ICON_SIZE} color={colors.onPrimary} />
		</TouchableHighlight>
	);
}

Fab.defaultProps = {
	iconName: 'plus'
}

const styles = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		backgroundColor: colors.primaryDefault,
		width: sizes.FAB_SIZE,
		height: sizes.FAB_SIZE,
		right: sizes.OUTER_MARGIN,
		bottom: sizes.OUTER_MARGIN,
		borderRadius: sizes.FAB_SIZE / 2,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default Fab;