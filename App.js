import React, { useState } from "react";
import { SafeAreaView, FlatList, Alert, Text, StyleSheet } from "react-native";
import Header from "./Components/Header";
import ListItem from "./Components/ListItem";
import AddItem from "./Components/AddItem";
import uuid from "react-native-uuid";

function App() {
  const [items, setItems] = useState([]);
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };
  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Please enter a text");
    } else {
      setItems((prevItems) => {
        return [{ id: uuid.v4(), text: text }, ...prevItems];
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <Text style={styles.footer}>Develop By DevShawon</Text>
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  footer: {
    position: "absolute",
    bottom: 10,
    right: "30%",
  },
});
