import React from 'react';
import {View, Text} from 'react-native';

import Header from '../../commons/components/header/header';

function Categories() {
	return (
		<View>
			<Header 
				title="Categories"
				leftComponent={<Header.Action onPress={() => {}} />}
			/>
			<Text>Lorem	asjf aksfj asfj baskjf bakjsf askjf baskjf baskf</Text>
		</View>
	)
}

export default Categories;