import React, {useContext, useMemo} from 'react';

import {Context} from './store-provider';

import {isFunction} from '../../commons/utils/validators';

const storeConnect = (mapStateToProps, mapDispatchToProps) => UIComponent => ownProps => {
	const [state, dispatch] = useContext(Context);
	const subscribedProps = isFunction(mapStateToProps) ? mapStateToProps(state, ownProps) : {};
	const dispatchProps = isFunction(mapDispatchToProps) ? mapDispatchToProps(dispatch) : {};
	const componentProps = {...subscribedProps, ...ownProps};
	const watchProps = Object.values(componentProps);

	return useMemo(() => <UIComponent {...componentProps} {...dispatchProps} />, watchProps);
};

export default storeConnect;
