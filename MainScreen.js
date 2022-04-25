import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import React from 'react'
import CustomRow from './CustomRow';
import { useNavigation } from "@react-navigation/native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default function MainScreen() {
    const navigation = useNavigation();
    // var data = []
    var data = [{ firstname: "aekkachai", lastname: "chatpanglurlurt", id: "1234567891230", phone: "09876543212" }, { firstname: "wanchana", lastname: "chatpanglurlurt", id: "", phone: "1631234457897" }]
    return (
        <View style={styles.container}>
            <Button title='เพิ่ม' onPress={(e) => navigation.navigate('Add')} />
            {data.length > 0 ? (<FlatList
                data={data}
                renderItem={({ item }) => <CustomRow

                    title={item.firstname + " " + item.lastname}
                    passport={item.id}
                    phone={item.phone}
                    image_url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB"}
                />}
            />) : <Text>คุณยังไม่มีข้อมูลสมาชิก กรุณาเพิ่มข้อมูลสมาชิก</Text>}


        </View>
    )
}