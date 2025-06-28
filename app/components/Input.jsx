import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const Input = ({ InputValue, Func, InputPlaceHolder }) => {
  return (
    <View style={styles.Inputcontainter}>
      <TextInput
        placeholder={InputPlaceHolder}
        value={InputValue}
        onChangeText={(e) => Func(e)}
        style={styles.Input}
      ></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Inputcontainter: {  width: "70%" },

  Input: {
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    // marginTop: 20,
    // marginBottom: 20,
    height: 48,
    // padding: 14,
    color: "#545352",
    textAlign: "center",
    // textAlignVertical : "center",
    // borderRadius: 5,
    // boxShadow: "0 19px 38px rgba(0, 0, 0, 0.36), 0 15px 12px rgba(0, 0, 0, 0.77)",
  },
});
