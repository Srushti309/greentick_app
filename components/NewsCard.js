/*
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";

const { height } = Dimensions.get("window");

const NewsCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content} numberOfLines={6}>
          {item.content}
        </Text>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  card: {
    height,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
    color: "grey",
    marginTop: 10,
  },
});
*/

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

const NewsCard = ({ item }) => {
  const navigation = useNavigation();

  const openDetail = () => {
    navigation.navigate("NewsDetail", { item });
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={openDetail}>
      <View style={styles.card}>
        {/* TOP IMAGE */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* TITLE */}
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>

        {/* DATE */}
        <View style={styles.dateRow}>
          <Ionicons name="calendar-outline" size={16} color="green" />
          <Text style={styles.dateText}>Jul 11, 2025</Text> {/* Replace with item.date if dynamic */}
        </View>

        {/* CONTENT */}
        <Text style={styles.content} numberOfLines={7}>
          {item.content}
        </Text>

        {/* READ MORE */}
        <Text style={styles.readMore}>Read full story →</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  card: {
    minHeight: height * 0.82,
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  imageContainer: {
    height: 250,
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#ccc",
    marginBottom: 12,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    color: "gray",
    marginLeft: 6,
  },
  content: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
    marginBottom: 10,
  },
  readMore: {
    fontSize: 14,
    color: "#007FFF",
    fontStyle: "italic",
  },
});


