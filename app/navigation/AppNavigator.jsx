import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import Test from '../screens/Test';
import AboutScreen from '../screens/AboutScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (

      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="test" component={Test} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} />
      </Stack.Navigator>
   
  );
};

export default AppNavigator;
