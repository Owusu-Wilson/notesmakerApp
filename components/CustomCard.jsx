import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { theme } from "../theme";

const CustomCard = ({ primaryText, secondaryText }) => {
  return (
    <ImageBackground
      style={styles.container}
      blurRadius={70}
      // source={require("../assets/images/bg.png")}
    >
      <Text style={styles.primaryText}>{primaryText}</Text>
      <Text style={styles.secondaryText}>{secondaryText}</Text>
    </ImageBackground>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginLeft: 20,
    height: 200,
    backgroundColor: theme.primaryColor,
    borderRadius: 20,
    padding: 20,
  },
  primaryText: {
    fontSize: 25,
    fontWeight: "900",
    color: "white",
  },
  secondaryText: {
    color: "white",
  },
});
