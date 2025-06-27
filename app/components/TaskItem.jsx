import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'


const TaskItem = ({task}) => {
  return (
    <View style={{ width: "100%",  alignItems: "center" }}>
      <Text style={styles.Text}>{task}</Text>
    </View>
  )
}


export default TaskItem

const styles = StyleSheet.create({
  Text: {
    backgroundColor: "#FFD449",
    opacity: 0.48,
    marginTop: 5,
    marginBottom: 5,
    width: "80%",
    color: "#FF8000",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 5,
    height : "fit",
    padding: 9
  },
});
