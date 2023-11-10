import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import CustomCard from "../components/CustomCard";
import ActionButton from "../components/ActionButton";
import NoteItem from "../components/NoteItem";
import { BellIcon, Cog8ToothIcon } from "react-native-heroicons/solid";

const dummyData = [
  {
    key: 1,
    title: "Web Design",
    note: "Create the design for the slabsgh squad",
  },
  {
    key: 2,
    title: "Graphic Design",
    note: "Create the design for the slabsgh squad",
  },
  {
    key: 3,
    title: "dance Lesson",
    note: "Create the design for the slabsgh squad",
  },
  {
    key: 4,
    title: "dance Lesson",
    note: "Create the design for the slabsgh squad",
  },
  {
    key: 5,
    title: "dance Lesson",
    note: "Create the design for the slabsgh squad",
  },
  {
    key: 6,
    title: "dance Lesson",
    note: "Create the design for the slabsgh squad",
  },
  {
    key: 7,
    title: "dance Lesson",
    note: "Create the design for the slabsgh squad",
  },
];
const Home = ({ navigation }) => {
  const [notes, setNotes] = useState(dummyData);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.top}>
        <View style={styles.icon}>
          <BellIcon size={20} />
        </View>
        <Text style={styles.heading}>HomePage</Text>

        <View style={styles.icon}>
          <Cog8ToothIcon size={20} />
        </View>
      </View>

      <CustomCard
        style={styles.card}
        primaryText="Set Reminder"
        secondaryText="12 tasks"
      />
      <FlatList
        // style={{ backgroundColor: "gray" }}
        data={notes}
        renderItem={({ item }) => (
          <NoteItem title={item.title} info={item.note} />
        )}
      />

      {/* <Text style={styles.taskHeading}>Today's Tasks</Text> */}
      <ActionButton
        text="Add Task"
        onPress={() => navigation.navigate("AddNote")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    padding: 10,
    marginTop: 30,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    alignSelf: "center",
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: "pink",
    borderRadius: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: "600",
  },
  taskHeading: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "left",
  },
});
