/*
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const TopNavigation = ({ index, setIndex }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282c35" }}>
      {index === 0 ? (
        <TouchableOpacity style={styles.left}>
          <MaterialCommunityIcons
            name="theme-light-dark"
            size={24}
            color="lightblue"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.left} onPress={() => setIndex(0)}>
          <SimpleLineIcons
            style={styles.icon}
            name="arrow-left"
            size={16}
            color="#007FFF"
          />
          <Text style={{ ...styles.text, color: "lightgrey" }}>Discover</Text>
        </TouchableOpacity>
      )}

      <Text style={{ ...styles.center, color: "white" }}>
        {index ? "All News" : "Discover"}
      </Text>
      {index ? (
        <TouchableOpacity
          style={styles.right}
          //onPress={() => fetchNews("general")}
        >
          <AntDesign name="reload1" size={20} color="#007FFF" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.left} onPress={() => setIndex(1)}>
          <Text style={{ ...styles.text, color: "lightgrey" }}> All News </Text>
          <SimpleLineIcons
            style={styles.icon}
            name="arrow-right"
            size={15}
            color="#007FFF"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    //padding: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    marginTop: 0
  },
  right: {
    flexDirection: "row",
    width: 100,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: "700",
  },
  icon: {
    marginRight: 4
  },
});


import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const TopNavigation = ({ index, setIndex }) => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.container}>
        {index === 0 ? (
          <TouchableOpacity style={styles.left}>
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color="lightblue"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.left} onPress={() => setIndex(0)}>
            <SimpleLineIcons name="arrow-left" size={16} color="#007FFF" />
            <Text style={[styles.text, { color: "lightgrey", marginLeft: 5 }]}>
              Discover
            </Text>
          </TouchableOpacity>
        )}

        <View style={styles.centerWrapper}>
          <Text style={styles.centerText}>
            {index ? "All News" : "Discover"}
          </Text>
        </View>

        {index ? (
          <TouchableOpacity style={styles.right}>
            <AntDesign name="reload1" size={20} color="#007FFF" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.right} onPress={() => setIndex(1)}>
            <Text style={[styles.text, { color: "lightgrey" }]}>All News</Text>
            <SimpleLineIcons
              name="arrow-right"
              size={15}
              color="#007FFF"
              style={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  headerWrapper: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight ?? 0 : 0,
    backgroundColor: "#282c35",
  },
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  centerWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    top: 12,
  },
  centerText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    paddingBottom: 4,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 4,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
  },
});
*/

import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Animated,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const TopNavigation = ({ index, setIndex }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-width)).current;

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(slideAnim, {
        toValue: -width,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const navigate = (to) => {
    if (to === "home") setIndex(0);
    else if (to === "search") setIndex(1);
    else if (to === "profile") setIndex(2);
    toggleMenu();
  };

  return (
    <>
      {/* Top Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.statusBarSpacer} />
        <View style={styles.container}>
          {/* Hamburger */}
          <TouchableOpacity onPress={toggleMenu}>
            <Ionicons name="menu" size={28} color="#fff" />
          </TouchableOpacity>

          {/* Center Title */}
          <View style={styles.centerWrapper}>
            <Text style={styles.centerText}>All News</Text>
          </View>

          <View style={{ width: 28 }} />
        </View>
      </View>

      {/* Slide-in Drawer */}
      {menuVisible && (
        <View style={StyleSheet.absoluteFillObject}>
          {/* Dark Overlay - press to close */}
          <Pressable style={styles.overlay} onPress={toggleMenu} />

          <Animated.View style={[styles.drawer, { transform: [{ translateX: slideAnim }] }]}>
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
              <View style={styles.menuHeader}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.logo}
                  resizeMode="contain"
                />
                <Text style={styles.logoText}>NewsApp</Text>
              </View>

              <TouchableOpacity onPress={() => navigate("home")} style={styles.menuItem}>
                <Text style={styles.menuItemText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate("search")} style={styles.menuItem}>
                <Text style={styles.menuItemText}>News</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.menuItem}>
                <Text style={styles.menuItemText}>Subscribe Now</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.menuItem}>
                <Text style={styles.menuItemText}>Sign In</Text>
              </TouchableOpacity>
            </ScrollView>
          </Animated.View>
        </View>
      )}
    </>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: "#282c35",
    zIndex: 10,
  },
  statusBarSpacer: {
    height: Platform.OS === "android" ? StatusBar.currentHeight ?? 24 : 44,
    backgroundColor: "#282c35",
  },
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    backgroundColor: "#282c35",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  centerWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  centerText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    borderBottomColor: "#007FFF",
    borderBottomWidth: 4,
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 15,
  },
  drawer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: width * 0.75,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight ?? 24 : 44,
    paddingHorizontal: 16,
    zIndex: 20,
    elevation: 20,
  },
  menuHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007FFF",
  },
  menuItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuItemText: {
    fontSize: 16,
    color: "black",
  },
});

