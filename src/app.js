import React, {useEffect, useState} from 'react';
import database from './config/database/database';
import {INITIAL_CATEGORIES, INITIAL_CURRENCIES, SELECTED_CURRENCY} from './config/database/initial-data';
import NavigationStacks from './config/navigation/navigation-stacks';

import rootReducer from './config/store/root-reducer';
import initialStore from './config/store/initial-store';

import StateProvider from './config/store/store-provider';

function App() {
	useEffect(() => {
		try {
			database.write(() => {
				if(!database.objects('InitialData').length) {
					database.create('InitialData', {
						selectedCurrency: SELECTED_CURRENCY,
						currencies: INITIAL_CURRENCIES,
						categories: INITIAL_CATEGORIES
					});
				}
			});
		} catch(error) {
			console.log('error', error);
		}
	}, [])

	return (
		<StateProvider rootReducer={rootReducer} initialStore={initialStore}>
			<NavigationStacks />
		</StateProvider>
	);
}

export default App;