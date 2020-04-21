import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import Fab from '../../commons/components/fab/fab';
import Header from '../../commons/components/header/header';
import List from '../../commons/components/list/list';

import sizes from '../../commons/sizes';
import colors from '../../commons/colors';

function Dashboard({navigation}) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const showModal = () => setIsModalVisible(true);
	const hideModal = () => setIsModalVisible(false);
	const navigateTo = screenName => () => {
		hideModal();
		navigation.navigate(screenName);
	}

	return (
		<View style={{flex: 1}}>
			<Header title="Dashboard" rightComponent={<Header.Action iconName="ellipsis-v" onPress={showModal} />} />
			<Text>Lorem	asjf aksfj asfj baskjf bakjsf askjf baskjf baskf</Text>
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
					<List.Row title="Categories" subtitle="12 categories" onPress={navigateTo('Categories')} rightComponent={<List.RowAction />}  />
					<List.Row title="Currency" subtitle="RON" onPress={navigateTo('SetCurrency')} rightComponent={<List.RowAction />}  />
				</View>
			</Modal>
		</View>
	)
}

const style = StyleSheet.create({
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

export default Dashboard;