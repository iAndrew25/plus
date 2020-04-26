import React, {createContext, useReducer} from 'react';

const Context = createContext();

function StoreProvider({children, rootReducer, initialStore}) {
	return (
		<Context.Provider value={useReducer(rootReducer, initialStore)}>
			{children}
		</Context.Provider>
	);
};

export {Context};
export default StoreProvider;