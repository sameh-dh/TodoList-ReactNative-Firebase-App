import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const TaskItem = ({ task }) => {
  return (
    <View style={styles.TextContainer}>
      <Text style={styles.Text}>{task}</Text>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  TextContainer: {
    width: "100%",
    alignItems: "center",
  },
  Text: {
    backgroundColor: "#FFECD9",
    
    marginTop: 0,
    marginBottom: 5,
    width: "100%",
    color: "#EE995A",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 12,
    height: "fit",
    padding: 9,
    borderWidth : 1 ,
    borderColor: "white",
     fontWeight: 700,
  },
});
