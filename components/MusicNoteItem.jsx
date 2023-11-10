import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MusicNoteItem = ({ title, songKey }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>MusicNoteItem</Text>
    </View>
  );
};

export default MusicNoteItem;

const styles = StyleSheet.create({});
