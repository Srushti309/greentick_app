import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar,
  Share,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

const NewsDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;
  const [bookmarked, setBookmarked] = useState(false);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${item.title}\n\n${item.content}\n\nShared via Inshorts Clone`,
      });
    } catch (error) {
      console.error("Sharing error:", error);
    }
  };

  const fullArticle = `
${item.content}

In a surprising turn of events, recent updates from official sources have indicated a shift in public opinion. Experts suggest this may be a result of evolving global narratives.

Meanwhile, authorities are calling for calm and continued cooperation. Efforts are underway to ensure transparency and reinforce trust in community initiatives.

Stay tuned as we follow this developing story with expert interviews and on-ground reports.

— End of article —
`;

  const relatedArticles = [
    {
      title: "Rising Trends in Global Tech",
      image: "https://source.unsplash.com/random/400x300?sig=90",
    },
    {
      title: "Public Reactions to Policy Changes",
      image: "https://source.unsplash.com/random/400x300?sig=91",
    },
    {
      title: "How Social Media Influences Youth",
      image: "https://source.unsplash.com/random/400x300?sig=92",
    },
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#007FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>All News</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={handleShare} style={styles.iconBtn}>
            <Feather name="share" size={22} color="#007FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setBookmarked(!bookmarked)}
            style={styles.iconBtn}
          >
            <MaterialIcons
              name={bookmarked ? "bookmark" : "bookmark-outline"}
              size={24}
              color="#007FFF"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{fullArticle}</Text>

        <Text style={styles.relatedHeading}>Related Articles</Text>
        {relatedArticles.map((related, index) => (
          <View key={index} style={styles.relatedCard}>
            <Image source={{ uri: related.image }} style={styles.relatedImage} />
            <Text style={styles.relatedTitle}>{related.title}</Text>
          </View>
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight ?? 0 : 0,
  },
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#282c35",
    paddingHorizontal: 16,
  },
  backBtn: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  iconBtn: {
    marginLeft: 12,
  },
  container: {
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#000",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
    textAlign: "justify",
    marginBottom: 20,
  },
  relatedHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#333",
  },
  relatedCard: {
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
  },
  relatedImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  relatedTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#222",
    flex: 1,
    flexWrap: "wrap",
  },
});
