import React, {Fragment} from 'react';
import {Text} from 'react-native';

import Header from '../../commons/components/header/header';
import List from '../../commons/components/list/list';

import {updateSelectedCurrencyAction} from '../../config/store/actions';
import storeConnect from '../../config/store/store-connect';

import colors from '../../commons/colors';

function SetCurrency({navigation, currencies, selectedCurrency, updateSelectedCurrency}) {
	return (
		<Fragment>
			<Header 
				title="Set currency"
				leftComponent={<Header.Action onPress={navigation.goBack} />}
			/>
			<List
				items={currencies}
				onPress={updateSelectedCurrency}
				keyExtractor={({name, symbol}) => ({id: symbol, title: name})}
				leftComponent={({symbol}) => <Text>{symbol}  -</Text>}
				rightComponent={({symbol}) => <List.RowAction
					iconName="check"
					iconColor={symbol === selectedCurrency.symbol ? colors.primaryDefault : colors.secondaryText}
				/>}
			/>
		</Fragment>
	)
}

const mapStateToProps = ({currencies, selectedCurrency}) => ({
	currencies,
	selectedCurrency
});

const mapDispatchToProps = dispatch => ({
	updateSelectedCurrency: updateSelectedCurrencyAction(dispatch)
});

export default storeConnect(mapStateToProps, mapDispatchToProps)(SetCurrency);