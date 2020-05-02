import React, {Fragment} from 'react';

import storeConnect from '../../config/store/store-connect';
import {updateCurrentCurrencyAction} from '../../config/store/actions';

import Header from '../../commons/components/header/header';
import List from '../../commons/components/list/list';

import colors from '../../commons/colors';

function SetCurrency({navigation, currencies, updateCurrentCurrency, selectedCurrency}) {
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
					onPress={() => updateCurrentCurrency({symbol, name})} 
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
const mapDispatchToProps = dispatch => ({updateCurrentCurrency: updateCurrentCurrencyAction(dispatch)});

export default storeConnect(mapStateToProps, mapDispatchToProps)(SetCurrency);