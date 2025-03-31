import { View, Text , StyleSheet} from 'react-native'
import React from 'react'



export const globalStyles = StyleSheet.create({
   container : {
    flex : 1,
    backgroundColor: "pink",
    padding : 10,
   },

   text: {
    fontSize : 16,
    color: black,
   }

})

const global = () => {
  return (
    <View>
      <Text>global</Text>
    </View>
  )
}

export default global