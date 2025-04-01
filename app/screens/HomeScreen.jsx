import React, { useContext, useState } from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "../components/TaskItem";

const HomeScreen = ({ navigation }) => {

  const { tasks } = useContext(TaskContext);

  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const getButtonStyle = ({ pressed }) => {
    let style = [styles.homeButton];
    
    if (pressed || isPressed) {
      style.push(styles.homeButtonActive);
    } else if (isHovered) {
      style.push(styles.homeButtonHover);
    } else if (isFocused) {
      style.push(styles.homeButtonFocus);
    }
    
    return style;
  };

  return (
    <View style={styles.container}>
      <Text>To-Do List</Text>
      {tasks.map((task, index) => {
        return <TaskItem key={index} task={task} />;
      })}

      <Pressable
       style={getButtonStyle}
       onPressIn={handlePressIn}
       onPressOut={handlePressOut}
       onFocus={handleFocus}
       onBlur={handleBlur}
       onHoverIn={() => setIsHovered(true)}
       onHoverOut={() => setIsHovered(false)}
        onPress={() => navigation.navigate("AddTask")}
      >
        
        <Text style={(pressed)=>[
          styles.homeTextButton,
          pressed && styles.homeTextButtonPressed
        ]}>
          Add Task
        </Text>
     
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  homeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcfcfd',
    borderRadius: 4,
    borderWidth: 0,
    shadowColor: 'rgba(45, 35, 66, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    paddingHorizontal: 16,
    height: 48,
  },
  homeTextButton: {
    color: '#36395a',
    fontSize: 18,
    lineHeight: 1,
  },
  homeTextButtonPressed: {
    // Add any text-specific pressed styles if needed
  },
  homeButtonHover: {
    transform: [{ translateY: -2 }],
    shadowColor: 'rgba(45, 35, 66, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  homeButtonFocus: {
    shadowColor: 'rgba(45, 35, 66, 0.4)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 6,
    borderColor: '#d6d6e7',
    borderWidth: 1.5,
  },
  homeButtonActive: {
    transform: [{ translateY: 2 }],
    shadowColor: '#d6d6e7',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 7,
    elevation: 3,
  },
});
