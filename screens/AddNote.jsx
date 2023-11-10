import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActionButton from "../components/ActionButton";

const AddNote = () => {
  return (
    <View>
      <Text>AddNote</Text>
      <ActionButton text="Save" />
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({});
