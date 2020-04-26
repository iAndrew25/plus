import React, {useContext, useMemo} from 'react';

import {Context} from './store-provider';

import {isFunction} from '../../commons/utils/validators';

const storeConnect = (mapStateToProps, mapDispatchToProps) => UIComponent => ownProps => {
	let [store, dispatch] = useContext(Context),
		subscribedProps = isFunction(mapStateToProps) ? mapStateToProps(store) : {},
		dispatchProps = isFunction(mapDispatchToProps) ? mapDispatchToProps(dispatch) : {},
		componentProps = {...subscribedProps, ...ownProps},
		watchProps = Object.values(componentProps);

	return useMemo(() => <UIComponent {...componentProps} {...dispatchProps} />, watchProps);
}

export default storeConnect;
