import { View, Text, StyleSheet, Button } from 'react-native'
import React ,{useState}from 'react'
import {useNavigation} from "@react-navigation/native"


const HomeScreen = ({navigation}) => {
// const navigation = useNavigation();
//tow ways to navigate between scresns by using navigation hook or navigation props 
// the difference is that the proposiis accessed only in screen component and the hook can be used in any screen component not just any component
// so as conclusion use navigation propos for all screen components and use navigation hook only when it is necessairly 
  return (
    <View>
      <Text>HomeScreen is working from navigation</Text>
      <Button title='Go to About' onPress={()=> navigation.navigate("About")}/>
    </View>
  )
}

export default HomeScreen

