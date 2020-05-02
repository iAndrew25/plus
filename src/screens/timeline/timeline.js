import React, {Fragment} from 'react';
import {ScrollView, Text} from 'react-native';

import storeConnect from '../../config/store/store-connect';

import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';
import Header from '../../commons/components/header/header';
import Card from '../../commons/components/card/card';
import List from '../../commons/components/list/list';

function Timeline({records, selectedCurrency}) {
	return (
		<Fragment>
			<Header title="Timeline" />
			<ScrollView>
				{Object.entries(records).map(([key, list]) => (
					<Card key={key}>
						<List.Subtitle text={key} />
						<List 
							items={list}
							keyExtractor={({id, category}) => ({id, title: category.name})}
							leftComponent={({category}) => <CategoryColorBox backgroundColor={category.color} />}
							rightComponent={({value}) => <Text>{value} {selectedCurrency.symbol}</Text>}
						/>
					</Card>
				))}
			</ScrollView>
		</Fragment>
	)
}

const mapStateToProps = ({records, selectedCurrency}) => ({
	records,
	selectedCurrency
});

export default storeConnect(mapStateToProps, null)(Timeline);
