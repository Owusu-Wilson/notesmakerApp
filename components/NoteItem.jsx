import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../theme";

const NoteItem = ({ title, info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>Icon</Text>
      <View style={styles.textSection}>
        <Text>{title}</Text>
        <Text>NoteItem</Text>
      </View>
    </View>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginRight: 20,
    marginLeft: 20,
    height: 60,
    backgroundColor: theme.bgWhite(0.5),
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
  },
  icon: {
    flex: 2 / 10,
  },
  textSection: {
    flex: 6 / 10,
  },
});
