import React, {useEffect, useState} from 'react';
import database from './config/database/database';
import {INITIAL_CATEGORIES} from './config/database/initial-data';
import NavigationStacks from './config/navigation/navigation-stacks';

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

	return <NavigationStacks />
}

export default App;