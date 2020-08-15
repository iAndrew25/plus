import 'react-native-gesture-handler';

import React from 'react';

import StoreProvider from './config/store/store-provider';
import initialStore from './config/store/initial-store';
import rootReducer from './config/store/root-reducer';

import NavigationStack from './config/navigation/navigation-stack';

function App() {
	return (
		<StoreProvider rootReducer={rootReducer} initialStore={initialStore}>
			<NavigationStack />
		</StoreProvider>
	)
};

export default App;