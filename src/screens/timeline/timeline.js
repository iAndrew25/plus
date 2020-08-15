import React, {Fragment} from 'react';
import {Text, ScrollView} from 'react-native';

import {groupRecordsByDate} from '../../commons/utils/dates';

import Card from '../../commons/components/card/card';
import List from '../../commons/components/list/list';
import Header from '../../commons/components/header/header';
import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';

import storeConnect from '../../config/store/store-connect';

function Timeline({records, selectedCurrency}) {
	return (
		<Fragment>
			<Header title="Timeline" />
			<ScrollView>
				{Object.entries(records).map(([date, list]) => {
					return (
						<Card key={date}>
							<List.Subtitle text={date} />
							<List
								items={list}
								keyExtractor={({id, category}) => ({id, title: category.name})}
								leftComponent={({category}) => <CategoryColorBox backgroundColor={category.color} />}
								rightComponent={({value}) => <Text>{value} {selectedCurrency.symbol}</Text>}
							/>
						</Card>
					);
				})}
			</ScrollView>
		</Fragment>
	)
}

const mapStateToProps = ({selectedCurrency, records}) => ({
	records: groupRecordsByDate(records),
	selectedCurrency
});

export default storeConnect(mapStateToProps, null)(Timeline);