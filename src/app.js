import React, {useEffect} from 'react';

import NavigationStacks from './config/navigation/navigation-stacks';

import databaseInit from './config/database/database-init';

import rootReducer from './config/store/root-reducer';
import initialStore from './config/store/initial-store';
import StateProvider from './config/store/store-provider';

function App() {
	useEffect(databaseInit, []);

	return (
		<StateProvider rootReducer={rootReducer} initialStore={initialStore}>
			<NavigationStacks />
		</StateProvider>
	);
}

export default App;
