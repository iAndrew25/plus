import React, {Fragment} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';

import storeConnect from '../../config/store/store-connect';

import Header from '../../commons/components/header/header';
import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';
import Fab from '../../commons/components/fab/fab';
import List from '../../commons/components/list/list';

import colors from '../../commons/colors';
import sizes from '../../commons/sizes';

function SetCurrency({navigation, currencies, selectedCurrency}) {
	console.log("selectedCurrency", selectedCurrency);
	console.log("currencies", currencies);
	return (
		<Fragment>
			<Header 
				title="Set currency"
				leftComponent={<Header.Action onPress={navigation.goBack} />}
			/>
			{currencies.map(({symbol, name}) => 
				<List.Row 
					key={symbol} 
					title={`${symbol} - ${name}`} 
					onPress={() => {}} 
					rightComponent={
						<List.RowAction 
							iconName="check" 
							iconColor={symbol === selectedCurrency.symbol ? colors.primaryDefault : colors.secondaryText}
						/>
					}
				/>
			)}
		</Fragment>
	)
}

const mapStateToProps = ({currencies, selectedCurrency}) => ({currencies, selectedCurrency});

export default storeConnect(mapStateToProps, null)(SetCurrency);