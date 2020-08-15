import React, {useState, Fragment} from 'react';
import {View, Text, TextInput, TouchableHighlight, ScrollView, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

import {parseDate} from '../../commons/utils/dates';

import List from '../../commons/components/list/list';
import Header from '../../commons/components/header/header';
import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';

import {addRecordAction} from '../../config/store/actions';
import storeConnect from '../../config/store/store-connect';

import colors, {categoryColors} from '../../commons/colors';
import sizes from '../../commons/sizes';

const currentDate = new Date();

function AddRecord({navigation, categories, selectedCurrency, addRecord}) {
	const [timestamp, setTimestamp] = useState(currentDate);
	const [recordValue, setRecordValue] = useState('');
	const [category, setCategory] = useState({
		name: 'Pick a category...',
		color: categoryColors[0]
	});

	const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
	const hideDatePicker = () => setIsDatePickerVisible(false);
	const showDatePicker = () => setIsDatePickerVisible(true);

	const [isModalVisible, setIsModalVisible] = useState(false);
	const hideModal = () => setIsModalVisible(false);
	const showModal = () => setIsModalVisible(true);

	const handleSetCategory = category => {
		setCategory(category);
		hideModal();
	};

	const handleSetTimestamp = (event, selectedDate) => {
		hideDatePicker();
		setTimestamp(selectedDate || timestamp);
	};

	const handleCreateRecord = () => {
		if(category.id) {
			addRecord({
				value: parseFloat(recordValue),
				timestamp,
				category
			});

			navigation.goBack();
		}
	};

	return (
		<Fragment>
			<Header
				leftComponent={<Header.Action iconName="times" onPress={navigation.goBack} />}
				rightComponent={<Header.Action iconName="check" onPress={handleCreateRecord} />}
				title="Add Expense" />
			<View style={styles.wrapper}>
				<View style={styles.record}>
					<TouchableHighlight onPress={showModal} style={styles.addCategory} underlayColor={colors.onBackground}>
						<View style={styles.categoryContent}>
							<CategoryColorBox backgroundColor={category.color} />
							<Text 
								numberOfLines={1} 
								ellipsisMode="tail" 
								style={styles.categoryName}
							>
								{category.name}
							</Text>
						</View>
					</TouchableHighlight>
					<View style={styles.value}>
						<Text style={styles.symbol}>-</Text>
						<TextInput value={recordValue} onChangeText={setRecordValue} placeholder="0" style={styles.textinput} />
						<Text style={styles.symbol}>{selectedCurrency.symbol}</Text>
					</View>
				</View>

				<List.Row
					title={parseDate(timestamp)}
					onPress={showDatePicker}
					leftComponent={<List.RowAction iconName="calendar" />}
				/>


				<Modal
					style={styles.modalWrapper}
					isVisible={isModalVisible}
					onBackdropPress={hideModal}
					onSwipeComplete={hideModal}
					swipeDirection="down"
					backdropTransitionOutTiming={0}
				>
					<View style={styles.modalContent}>
						<ScrollView>
							<List.Subtitle text="Pick a category" />
							<List
								keyExtractor={({id, name}) => ({id, title: name})}
								items={categories}
								onPress={handleSetCategory}
								leftComponent={item => 
									<CategoryColorBox backgroundColor={item.color}/>}
								rightComponent={item => 
									<List.RowAction 
										iconName="check"
										iconColor={category.id === item.id ? colors.primaryDefault : colors.secondaryText}
									/>}
							/>
						</ScrollView>
					</View>
				</Modal>

				{isDatePickerVisible && <DateTimePicker 
					value={timestamp}
					onChange={handleSetTimestamp}
				/>}
			</View>
		</Fragment>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'column'
	},
	modalWrapper: {
		justifyContent: 'flex-end',
		margin: 0
	},
	modalContent: {
		maxHeight: '60%',
		paddingVertical: sizes.OUTER_MARGIN,
		backgroundColor: colors.background
	},
	categoryName: {
		fontSize: 20,
		color: colors.primaryText,
		flexShrink: 1,
		flexGrow: 0
	},
	categoryContent: {
		flexDirection: 'row',
		flexGrow: 1,
		flexShrink: 1,
		alignItems: 'center'
	},
	addCategory: {
		padding: sizes.INNER_MARGIN,
		margin: sizes.OUTER_MARGIN,
		borderRadius: 8,
		flexShrink: 1,
		flexGrow: 0
	},
	value: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		padding: sizes.OUTER_MARGIN,
		flexShrink: 1,
		flexGrow: 0,
		marginLeft: sizes.INNER_MARGIN
	},
	textinput: {
		fontSize: 20,
		color: colors.primaryText,
		borderBottomWidth: 1,
		borderColor: colors.divider,
		textAlign: 'right',
		width: 70
	},
	record: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexGrow: 0,
		flexShrink: 1
	},
	symbol: {
		alignSelf: 'center',
		fontSize: 18,
		color: colors.primaryText
	}
});

const mapStateToProps = ({categories, selectedCurrency}) => ({
	categories,
	selectedCurrency
});

const mapDispatchToProps = dispatch => ({
	addRecord: addRecordAction(dispatch)
});

export default storeConnect(mapStateToProps, mapDispatchToProps)(AddRecord);