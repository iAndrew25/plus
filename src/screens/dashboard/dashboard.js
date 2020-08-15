import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';

import {groupRecordsByDate} from '../../commons/utils/dates';

import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';
import Header from '../../commons/components/header/header';
import List from '../../commons/components/list/list';
import Fab from '../../commons/components/fab/fab';
import Card from '../../commons/components/card/card';
import MonthlyRecordsTabs from '../../config/navigation/monthly-records-tabs';

import storeConnect from '../../config/store/store-connect';

import sizes from '../../commons/sizes';
import colors from '../../commons/colors';

function Dashboard({navigation, categoriesCount, selectedCurrency, records}) {
	const {symbol, name} = selectedCurrency;
	const [isModalVisible, setIsModalVisible] = useState(false);
	const showModal = () => setIsModalVisible(true);
	const hideModal = () => setIsModalVisible(false);

	const navigateTo = screenName => () => {
		hideModal();
		navigation.navigate(screenName);
	}

	return (
		<View style={styles.wrapper}>
			<Header 
				rightComponent={<Header.Action iconName="ellipsis-v" onPress={showModal} />}
				title="Dashboard" />

			<MonthlyRecordsTabs records={records} />

			<Modal
				style={styles.modalWrapper}
				isVisible={isModalVisible}
				onBackdropPress={hideModal}
				onSwipeComplete={hideModal}
				swipeDirection="down"
				backdropTransitionOutTiming={0}
			>
				<View style={styles.modalContent}>
					<List.Subtitle text="Settings" />
					<List.Row 
						title="Categories" 
						subtitle={`${categoriesCount} categories`}
						onPress={navigateTo('Categories')}
						rightComponent={<List.RowAction />}
					/>
					<List.Row 
						title="Currency"
						subtitle={`${symbol} - ${name}`}
						onPress={navigateTo('SetCurrency')}
						rightComponent={<List.RowAction />}
					/>
				</View>
			</Modal>

			<Fab onPress={() => navigation.navigate('AddRecord')} />	
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flexGrow: 1,
		flexShrink: 1
	},
	modalWrapper: {
		justifyContent: 'flex-end',
		margin: 0
	},
	modalContent: {
		backgroundColor: colors.background,
		paddingVertical: sizes.INNER_MARGIN
	}
});

const mapStateToProps = ({categoriesCount, selectedCurrency, records}) => ({
	records: groupRecordsByDate(records),
	categoriesCount,
	selectedCurrency
});

export default storeConnect(mapStateToProps, null)(Dashboard);