import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // or any other icon library

const BottomNavBar = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => setActiveTab("search")}
      >
        <Ionicons
          name="search"
          size={24}
          color={activeTab === "search" ? "white" : "lightgrey"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => setActiveTab("home")}
      >
        <Ionicons
          name="home"
          size={28}
          color={activeTab === "home" ? "white" : "lightgrey"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => setActiveTab("profile")}
      >
        <Ionicons
          name="person"
          size={24}
          color={activeTab === "profile" ? "white" : "lightgrey"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#282c35",
    position: "absolute",
    bottom: 40,
    width: "100%",
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
