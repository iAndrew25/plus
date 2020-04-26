import React, {useEffect, useState} from 'react';
import database from './config/database/database';
import {INITIAL_CATEGORIES} from './config/database/initial-data';
import NavigationStacks from './config/navigation/navigation-stacks';

import rootReducer from './config/store/root-reducer';
import initialStore from './config/store/initial-store';

import StateProvider from './config/store/store-provider';

function App() {
	
	useEffect(() => {
		try {
			database.write(() => {
				if(!database.objects('Category').length) {
					INITIAL_CATEGORIES.forEach(category => database.create('Category', category))
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