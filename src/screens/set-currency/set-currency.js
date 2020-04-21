import React, {Fragment} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';

import Header from '../../commons/components/header/header';
import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';
import Fab from '../../commons/components/fab/fab';
import Icon from 'react-native-vector-icons/FontAwesome';
import List from '../../commons/components/list/list';

import colors from '../../commons/colors';
import sizes from '../../commons/sizes';

function SetCurrency({navigation}) {
	return (
		<Fragment>
			<Header 
				title="Set currency"
				leftComponent={<Header.Action onPress={navigation.goBack} />}
			/>
			<List.Row title="RON - Romanian Leu" onPress={() => {}} rightComponent={<List.RowAction iconName="check" iconColor={colors.primaryDefault} />} />
			<List.Row title="$ - Dolar" onPress={() => {}} rightComponent={<List.RowAction iconName="check" />} />
			<List.Row title="€ - Euro" onPress={() => {}} rightComponent={<List.RowAction iconName="check" />} />
		</Fragment>
	)
}

export default SetCurrency;