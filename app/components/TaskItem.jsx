import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


const TaskItem = ({task}) => {
  return (
    <View>
      <Text>{task}</Text>
    </View>
  )
}

export default TaskItem