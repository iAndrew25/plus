import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import {getInitialDataAction, getRecordsAction} from '../../config/store/actions';

import {renderDashboardTopTabs} from '../../config/navigation/navigation-stacks';
import storeConnect from '../../config/store/store-connect';

import Fab from '../../commons/components/fab/fab';
import Header from '../../commons/components/header/header';
import List from '../../commons/components/list/list';

import sizes from '../../commons/sizes';
import colors from '../../commons/colors';

function Dashboard({navigation, categoriesCount, selectedCurrency, records, getInitialData}) {
	const {symbol, name} = selectedCurrency;
	const [isModalVisible, setIsModalVisible] = useState(false);
	const showModal = () => setIsModalVisible(true);
	const hideModal = () => setIsModalVisible(false);
	const navigateTo = screenName => () => {
		hideModal();
		navigation.navigate(screenName);
	}

	useEffect(getInitialData, []);

	return (
		<View style={style.wrapper}>
			<Header title="Dashboard" rightComponent={<Header.Action iconName="ellipsis-v" onPress={showModal} />} />
			{renderDashboardTopTabs(records, selectedCurrency)}
			<Fab onPress={() => navigation.navigate('AddRecord')} />
			<Modal
				isVisible={isModalVisible}
				onBackdropPress={hideModal}
				onSwipeComplete={hideModal}
				backdropTransitionOutTiming={0}
				swipeDirection="down"
				style={style.modalWrapper}>

				<View style={style.modalContent}>
					<List.Subtitle text="Settings" />
					<List.Row title="Categories" subtitle={`${categoriesCount} categories`} onPress={navigateTo('Categories')} rightComponent={<List.RowAction />}  />
					<List.Row title="Currency" subtitle={`${symbol} - ${name}`} onPress={navigateTo('SetCurrency')} rightComponent={<List.RowAction />}  />
				</View>
			</Modal>
		</View>
	)
}

const style = StyleSheet.create({
	wrapper: {
		flex: 1
	},
	settings: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.primaryText,
		letterSpacing: 0.5,
		padding: sizes.INNER_MARGIN
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

const mapStateToProps = ({categoriesCount, selectedCurrency, records}) => ({categoriesCount, selectedCurrency, records});
const mapDispatchToProps = dispatch => ({ getInitialData: getInitialDataAction(dispatch), getRecords: getRecordsAction(dispatch) });

export default storeConnect(mapStateToProps, mapDispatchToProps)(Dashboard);