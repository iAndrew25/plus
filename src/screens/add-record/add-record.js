import React, {useState, Fragment} from 'react';
import {View, ScrollView, TextInput, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Modal from 'react-native-modal';

import List from '../../commons/components/list/list';
import Header from '../../commons/components/header/header';
import sizes from '../../commons/sizes';
import CategoryColorBox from '../../commons/components/category-color-box/category-color-box';

import colors, {categoryColors} from '../../commons/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const categories = [
	{color: '#f3a683', name: 'as  af sdporis'},
	{color: '#f7d794', name: 'sd gs dg sdg sPariatur voluptatem eaque velit'},
	{color: '#778beb', name: 'Quas in fugiat voluptate'},
	{color: '#e77f67', name: 'Deleniti veniam quas voluptas'},
	{color: '#cf6a87', name: 'Nihil sit nostrum vitae'},
	{color: '#f19066', name: 'Labore, tempore iste'},
	{color: '#f3a683', name: '2as  af sdporis'},
	{color: '#f7d794', name: '2sd gs dg sdg sPariatur voluptatem eaque velit'},
	{color: '#778beb', name: '2Quas in fugiat voluptate'},
	{color: '#e77f67', name: '2Deleniti veniam quas voluptas'},
	{color: '#cf6a87', name: '2Nihil sit nostrum vitae'},
	{color: '#f19066', name: '2Labore, tempore iste'},
]

function AddCategory({navigation}) {
	const [recordType, setRecordType] = useState('Expense');
	const [modalType, setModalType] = useState('none');
	const [recordValue, setRecordValue] = useState('');
	const iconName = recordType === 'Expense' ? 'minus' : 'plus';
	const sign = recordType === 'Expense' ? '-' : '+';
	const currency = 'RON';
	const [category, setCategory] = useState({
		color: categoryColors[0],
		name: 'Pick a category...'
	});

	const hideModal = () => setModalType('none');
	
	const handleSetCategory = category => {
		setCategory(category);
		setModalType('none');
	}

	const handleSetRecordType = type => {
		setRecordType(type);
		setModalType('none');		
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
						/>} 
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
					title="Today" 
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

export default AddCategory;