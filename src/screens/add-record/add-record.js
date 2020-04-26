import React, {useState, useEffect, Fragment} from 'react';
import {View, ScrollView, TextInput, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

import storeConnect from '../../config/store/store-connect';
import {parseDate} from '../../commons/utils/dates';

import List from '../../commons/components/list/list';
import Header from '../../commons/components/header/header';
import sizes from '../../commons/sizes';
import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';

import colors, {categoryColors} from '../../commons/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const currentDate = new Date();

function AddRecord({navigation, categories}) {
	const [recordType, setRecordType] = useState('Expense');
	const [modalType, setModalType] = useState('none');
	const [recordValue, setRecordValue] = useState('');
	const [shouldDisplayDatePicker, setShouldDisplayDatePicker] = useState(false);
	const [timestamp, setTimestamp] = useState(currentDate);
	const [category, setCategory] = useState({
		color: categoryColors[0],
		name: 'Pick a category...'
	});

	const iconName = recordType === 'Expense' ? 'minus' : 'plus';
	const sign = recordType === 'Expense' ? '-' : '+';
	const currency = 'RON';

	const hideModal = () => setModalType('none');
	
	const handleSetCategory = category => {
		setCategory(category);
		hideModal();
	}

	const handleSetRecordType = type => {
		setRecordType(type);
		hideModal();
	}

	const handleSetTimestamp = (event, selectedDate) => {
		setTimestamp(selectedDate || timestamp);
		setShouldDisplayDatePicker(false);
	}

	const renderModalContentForCategories = () => (
		<ScrollView>
			<List.Subtitle text="Pick a category" />
			<List 
				keyExtractor={({id, name}) => ({id, title: name})}
				items={categories}
				onPress={handleSetCategory}
				leftComponent={item => <CategoryColorBox backgroundColor={item.color} />}
				rightComponent={item => <List.RowAction iconName="chevron-right" />}
			/>
		</ScrollView>
	);

	const renderModalContentForRecordType = () => (
		<Fragment>
			<List.Subtitle text="Pick a record type" />
			{['Expense', 'Income'].map(type => 
				<List.Row 
					key={type}
					title={type} 
					onPress={() => handleSetRecordType(type)} 
					rightComponent={
						<List.RowAction 
							iconName="check" 
							iconColor={recordType === type ? colors.primaryDefault: colors.secondaryText} 
						/>
					} 
				/>
			)}
		</Fragment>
	);

	const renderModalContent = () => {
		switch(modalType) {
			case 'SET_CATEGORIES':
				return renderModalContentForCategories();

			case 'SET_RECORD_TYPE':
				return renderModalContentForRecordType();

			default:
				return null;
		}
	}

	return (
		<Fragment>
			<Header 
				title={`Add ${recordType}`}
				leftComponent={<Header.Action iconName="times" onPress={navigation.goBack} />}
				rightComponent={<Header.Action iconName="check" onPress={() => {}} />}
			/>
			<View style={style.wrapper}>
				<View style={style.record}>
					<TouchableHighlight style={style.addCategory} underlayColor={colors.onBackground} onPress={() => setModalType('SET_CATEGORIES')}>
						<View style={style.categoryContent}>
							<CategoryColorBox backgroundColor={category.color} />
							<Text numberOfLines={1} ellipsisMode="tail" style={style.categoryName}>{category.name}</Text>
						</View>
					</TouchableHighlight>
					<View style={style.value}>
						<Text style={style.signs}>{sign}</Text>
						<TextInput placeholder="0"  style={style.textInput} onChangeText={setRecordValue} value={recordValue}/>
						<Text style={style.signs}>{currency}</Text>
					</View>
				</View>
				<List.Row 
					title={parseDate(timestamp)}
					onPress={() => setShouldDisplayDatePicker(true)}
					leftComponent={<List.RowAction iconName="calendar" />} />
				<List.Row 
					subtitle="Record type"
					title={recordType} 
					onPress={() => setModalType('SET_RECORD_TYPE')}
					leftComponent={<List.RowAction iconName={iconName} />} />

				<Modal
					isVisible={modalType !== 'none'}
					onBackdropPress={hideModal}
					onSwipeComplete={hideModal}
					backdropTransitionOutTiming={0}
					swipeDirection="down"
					style={style.modalWrapper}>

					<View style={style.modalContent}>
						{renderModalContent()}
					</View>
				</Modal>

				{shouldDisplayDatePicker && <DateTimePicker
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

const mapStateToProps = ({categories}) => ({ categories });
// const mapDispatchToProps = dispatch => ({ deleteCategory: deleteCategoryAction(dispatch) })

export default storeConnect(mapStateToProps, null)(AddRecord);
