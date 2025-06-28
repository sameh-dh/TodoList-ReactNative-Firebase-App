import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

const AddTaskScreen = ({ handleTask }) => {
  return (
    <View style={styles.ButtonContainer}>
      <Pressable style={styles.Button} onPress={() => handleTask()}>
        <Text style={styles.TextButton}>Add Task</Text>
      </Pressable>
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  ButtonContainer: {
    width: "30%",

  },

  Button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fcfcfd",
    // borderRadius: 4,
    borderWidth: 0,
    shadowColor: "rgba(45, 35, 66, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    paddingHorizontal: 16,
    height: 48,
  },
  TextButton: {
    color: "#36395a",
    fontSize: 14,
  },
});
