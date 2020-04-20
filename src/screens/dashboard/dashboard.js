import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import Fab from '../../commons/components/fab/fab';
import Header from '../../commons/components/header/header';

import sizes from '../../commons/sizes';
import colors from '../../commons/colors';

function Dashboard({navigation}) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const showModal = () => setIsModalVisible(true);
	const hideModal = () => setIsModalVisible(false);

	return (
		<View style={{flex: 1}}>
			<Header title="Dashboard" rightComponent={<Header.Action iconName="ellipsis-v" onPress={showModal} />} />
			<Text>Lorem	asjf aksfj asfj baskjf bakjsf askjf baskjf baskf</Text>
			<Fab onPress={() => navigation.navigate('Categories')} />

			<Modal
				isVisible={isModalVisible}
				onBackdropPress={hideModal}
				onSwipeComplete={hideModal}
				backdropTransitionOutTiming={0}
				swipeDirection="down"
				style={style.modalWrapper}>

				<View style={style.modalContent}>
					<Text>Monthly income</Text>
					<Text>Categories</Text>
					<Text>Currency</Text>
				</View>
			</Modal>
		</View>
	)
}

const style = StyleSheet.create({
	modalWrapper: {
		justifyContent: 'flex-end',
		margin: 0
	},
	modalContent: {
		backgroundColor: '#fff',
		padding: sizes.OUTER_MARGIN
	}
});

export default Dashboard;