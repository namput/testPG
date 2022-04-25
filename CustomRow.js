import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather,AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});

const CustomRow = ({ title, passport,phone, image_url, }) => {
    const navigation = useNavigation();
    return(
    <View style={styles.container}>
        <Image source={{ uri: image_url }} style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                {passport}
            </Text>
            <Text style={styles.description}>
                {phone}
            </Text>
            <Feather name="edit" size={24} color="black" onPress={(e)=>navigation.navigate('Edit')}/>
            <AntDesign name="deleteuser" size={24} color="black" onPress={(e)=>Alert.alert("ลบสมาชิก",`ต้องการลบ \n ${title}`,[{text:"ยกเลิก"},{text:"ยืนยัน"}])} />
        </View>

    </View>
);}
export default CustomRow;