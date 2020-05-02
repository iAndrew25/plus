import React, {useState, Fragment} from 'react';
import {ScrollView, TextInput, Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

import {createRecordAction} from '../../config/store/actions';
import storeConnect from '../../config/store/store-connect';

import List from '../../commons/components/list/list';
import Header from '../../commons/components/header/header';
import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';

import {parseDate} from '../../commons/utils/dates';
import sizes from '../../commons/sizes';
import colors, {categoryColors} from '../../commons/colors';

const currentDate = new Date();

function AddRecord({navigation, categories, selectedCurrency, createRecord}) {
	const [recordValue, setRecordValue] = useState('');
	const [timestamp, setTimestamp] = useState(currentDate);
	const [category, setCategory] = useState({
		color: categoryColors[0],
		name: 'Pick a category...'
	});

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

	const hideModal = () => setIsModalVisible(false);
	const showModal = () => setIsModalVisible(true);

	const hideDatePicker = () => setIsDatePickerVisible(false);
	const showDatePicker = () => setIsDatePickerVisible(true);
	
	const handleCreateRecord = () => {
		if(category.id && recordValue) {
			createRecord({
				value: parseFloat(recordValue),
				timestamp,
				category
			});

			navigation.goBack();
		}
	}

	const handleSetCategory = category => {
		setCategory(category);
		hideModal();
	}

	const handleSetTimestamp = (event, selectedDate) => {
		setTimestamp(selectedDate || timestamp);
		hideDatePicker();
	}

	return (
		<Fragment>
			<Header 
				title="Add Expense"
				leftComponent={<Header.Action iconName="times" onPress={navigation.goBack} />}
				rightComponent={<Header.Action iconName="check" onPress={handleCreateRecord} />}
			/>
			<View style={style.wrapper}>
				<View style={style.record}>
					<TouchableHighlight style={style.addCategory} underlayColor={colors.onBackground} onPress={showModal}>
						<View style={style.categoryContent}>
							<CategoryColorBox backgroundColor={category.color} />
							<Text numberOfLines={1} ellipsisMode="tail" style={style.categoryName}>{category.name}</Text>
						</View>
					</TouchableHighlight>
					<View style={style.value}>
						<Text style={style.signs}>-</Text>
						<TextInput placeholder="0"  style={style.textInput} onChangeText={setRecordValue} value={recordValue}/>
						<Text style={style.signs}>{selectedCurrency.symbol}</Text>
					</View>
				</View>
				<List.Row 
					title={parseDate(timestamp)}
					onPress={showDatePicker}
					leftComponent={<List.RowAction iconName="calendar" />} />

				<Modal
					isVisible={isModalVisible}
					onBackdropPress={hideModal}
					onSwipeComplete={hideModal}
					backdropTransitionOutTiming={0}
					swipeDirection="down"
					style={style.modalWrapper}>

					<View style={style.modalContent}>
						<ScrollView>
							<List.Subtitle text="Pick a category" />
							<List 
								keyExtractor={({id, name}) => ({id, title: name})}
								items={categories}
								onPress={handleSetCategory}
								leftComponent={item => <CategoryColorBox backgroundColor={item.color} />}
								rightComponent={item => <List.RowAction iconName="check" iconColor={category.id === item.id ? colors.primaryDefault : colors.secondaryText} />}
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
	)
}

const style = StyleSheet.create({
	wrapper: {
		flexDirection: 'column'
	},
	record: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexShrink: 1,
		flexGrow: 0
	},	
	addCategory: {
		flexShrink: 1,
		flexGrow: 0,
		padding: sizes.INNER_MARGIN,
		margin: sizes.INNER_MARGIN,
		borderRadius: 8,
	},
	categoryContent: {
		flexDirection: 'row',
		alignItems: 'center',
		flexShrink: 1,
		flexGrow: 1
	},
	value: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		padding: sizes.OUTER_MARGIN,
		flexGrow: 1,
		flexShrink: 0,
		flexBasis: 150
	},
	colors: {
		flexGrow: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around'
	},
	textInput: {
		fontSize: 20,
		color: colors.primaryText,
		borderBottomWidth: 1,
		borderColor: colors.divider,
		flexGrow: 0,
		flexShrink: 1,
		textAlign: 'right'
	},
	categoryName: {
		alignSelf: 'center',
		fontSize: 20,
		color: colors.primaryText,
		flexShrink: 1
	},
	signs: {
		alignSelf: 'center',
		fontSize: 18,
		color: colors.primaryText,
		flexShrink: 0		
	},
	modalWrapper: {
		justifyContent: 'flex-end',
		margin: 0,
	},
	modalContent: {
		maxHeight: '60%',
		paddingVertical: sizes.OUTER_MARGIN,
		backgroundColor: colors.background
	}
});

const mapStateToProps = ({categories, selectedCurrency}) => ({ categories, selectedCurrency });
const mapDispatchToProps = dispatch => ({ createRecord: createRecordAction(dispatch) })

export default storeConnect(mapStateToProps, mapDispatchToProps)(AddRecord);
