import React from 'react';
import {View, Text} from 'react-native';

import Fab from '../../commons/components/fab/fab';
import Header from '../../commons/components/header/header';

function Dashboard() {
	return (
		<View style={{flex: 1}}>
			<Header title="Dashboard" />
			<Text>Lorem	asjf aksfj asfj baskjf bakjsf askjf baskjf baskf</Text>
			<Fab onPress={() => {}} />
		</View>
	)
}

export default Dashboard;