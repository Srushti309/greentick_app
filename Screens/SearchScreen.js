/*import { View, Text, StyleSheet } from "react-native";
import React from "react";

const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Discover Screen</Text>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 39
  },
});
*/

import React from "react";
import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for news"
        style={styles.searchBar}
        placeholderTextColor="#888"
      />
      <Text style={styles.title}>Top Categories</Text>
      <FlatList
        data={["All News", "Finance", "Health", "Technology", "India"]}
        renderItem={({ item }) => (
          <Text style={styles.category}>{item}</Text>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  searchBar: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
});
