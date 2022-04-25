import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
export default function LoadingScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button title='Get Start' onPress={(e)=>navigation.dispatch(StackActions.replace("Main"))}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
