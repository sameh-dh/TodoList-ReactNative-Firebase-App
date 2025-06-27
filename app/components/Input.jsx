import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Input = ({InputValue ,Func }) => {
  
  return (
    <View>
      <TextInput placeholder='EnterTask'
      value={InputValue}
       onChangeText={(e) => Func(e)}
        style={{ backgroundColor: "pink", width: "50px" }}
      >

      </TextInput>
    </View>
  )
}

export default Input