import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, Button, Text, TextInput, Alert } from 'react-native'

export default function Edit() {
	let [inputName, setInputName] = React.useState('')
	let [inputLastname, setInputLastname] = React.useState('')
	let [inputID, setInputID] = React.useState('')
	let [inputPhone, setInputPhone] = React.useState('')

    const navigation = useNavigation();
	const onPressButton = () => {

		//ตรวจสอบค่าจาก State
		let msg = 'ขอบคุณค่ะ'
		if (inputName === '') {
			msg = 'กรุณาป้อนชื่อ'
		} else if (inputLastname === '') {
			msg = 'กรุณาป้อนนามสกุล'
		} else if (inputID === '') {
			msg = 'กรุณาป้อนรหัสบัตรประชาชน'
		} else if (inputPhone === '') {
			msg = 'กรุณาป้อนเบอร์โทร'
		}
        navigation.goBack()
		Alert.alert(msg)
	}

	return (
		<View style={styles.container}>
			<View style={styles.items}>
				<Text>ชื่อ</Text>
				<TextInput
                
					style={styles.textInput}
					defaultValue={inputName}
					onChange={e => setInputName(e.nativeEvent.text)}
				/>
                 {!inputName&&(<Text style={{color:'red'}}>กรุณากรอกชื่อ</Text>)} 
			</View>
        
			<View style={styles.items}>
				<Text>นามสกุล</Text>
				<TextInput
					style={styles.textInput}
					defaultValue={inputLastname}
					keyboardType='Lastname-address'
					onChangeText={text => setInputLastname(text)}
				/>
                 {!inputLastname&&(<Text style={{color:'red'}}>กรุณากรอกนามสกุล</Text>)} 
			</View>
			<View style={styles.items}>
				<Text>เลขบัตรประชาชน</Text>
				<TextInput
					style={styles.textInput}
					defaultValue={inputID}
					onChangeText={setInputID}
				/>
                {!inputID&&(<Text style={{color:'red'}}>กรุณากรอกเลขบัตรประชาชน</Text>)} 
			</View>
			<View style={styles.items}>
				<Text>เบอร์โทร</Text>
                <TextInput
					style={styles.textInput}
					defaultValue={inputPhone}
					onChangeText={setInputPhone}
				/>
                {!inputPhone&&(<Text style={{color:'red'}}>กรุณากรอกเบอร์โทร</Text>)} 
			</View>
			<View style={styles.items}>
				<Button title="บันทึกข้อมูล" onPress={onPressButton} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 70,
		marginLeft: 20,
		marginRight: 20
	},
	items: {
		marginBottom: 15
	},
	textInput: {
		height: 32,
		color: 'black',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#aaa',
		marginTop: 5,
		paddingTop: 3,
		paddingBottom: 3
	},
})