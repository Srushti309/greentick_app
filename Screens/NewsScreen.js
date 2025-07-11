import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
  PanResponder,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import NewsCard from "../components/NewsCard";
import { useNavigation } from "@react-navigation/native";
import TopNavigation from "../components/TopNavigation";

const { height, width } = Dimensions.get("window");

const NewsScreen = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const fetchNews = async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts");
      const json = await response.json();

      const withImages = json.posts.map((post, index) => ({
        title: post.title,
        content: post.body,
        image: `https://source.unsplash.com/random/400x300?sig=${index}`,
      }));

      setNewsData(withImages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const createPanResponder = (item) =>
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 40 && Math.abs(gestureState.dy) < 20,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 50) {
          navigation.navigate("NewsDetail", { item });
        }
      },
    });

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
       <Carousel
        vertical
        width={width}
        height={height}
        data={newsData}
        renderItem={({ item }) => {
          const panResponder = createPanResponder(item);
          return (
            <View {...panResponder.panHandlers}>
              <NewsCard item={item} />
            </View>
          );
        }}
        autoPlay={false}
        pagingEnabled
      />
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});
