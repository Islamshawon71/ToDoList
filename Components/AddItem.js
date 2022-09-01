import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function AddItem({ title, addItem }) {
  const [text, setText] = useState("");
  const onChangeText = (textValue) => setText(textValue);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add Item"
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
          setText();
        }}
      >
        <Text style={styles.btnText}>
          <Icon name="plus" size={16} color="firebricks" /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default AddItem;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#eee",
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    fontSize: 18,
    textAlign: "center",
  },
});
