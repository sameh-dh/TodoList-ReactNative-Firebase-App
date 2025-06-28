import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import Test from "../screens/Test";
import AboutScreen from "../screens/AboutScreen";
import AddTaskScreen from "../screens/AddTaskScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" style={{ alignItems: "center" }}>
      <Stack.Screen
        options={{
          title: "welcome to your to do app",
          headerStyle: {
            backgroundColor: "#FFE4C9",
            // borderBottomLeftRadius: 5,
            // borderBottomRightRadius: 5,
            boxShadow: "none",
            borderBottomColor : "white",
            borderBottomWidth: 1,
          },
          headerTintColor: "#F88C3A",
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
            fontFamily : "Pacifico"
           
          },
          headerTitleAlign	:'center',
          headerShadowVisible	: false
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="test" component={Test} />
      <Stack.Screen name="AddTask" component={AddTaskScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
