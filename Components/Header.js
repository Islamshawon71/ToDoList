import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>To Do List</Text>
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 20,
    backgroundColor: "darkslateblue",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
