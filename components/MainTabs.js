/*
import { View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { TabView, SceneMap } from "react-native-tab-view";

import SearchScreen from "../Screens/SearchScreen";
import NewsScreen from "../Screens/NewsScreen";
import TopNavigation from "./TopNavigation";
import BottomNavigation from "./BottomNavigation";
import ProfileScreen from "./ProfileScreen";

const Tabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "first", title: "News" },
    { key: "second", title: "Search" },
    { key: "third", title: "Profile" },
  ]);

  const renderScene = SceneMap({
    first: NewsScreen,
    second: SearchScreen,
    third: ProfileScreen,
  });

const getTabKey = () => {
    switch (index) {
      case 0:
        return "home";
      case 1:
        return "search";
      case 2:
        return "profile";
      default:
        return "home";
    }
  };


  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
        swipeEnabled={false}
      />
      <BottomNavigation
        activeTab={getTabKey()}
        setActiveTab={(tab) => {
          if (tab === "home") setIndex(0);
          else if (tab === "search") setIndex(1);
          else if (tab === "profile") setIndex(2);
        }}
      />
    </>
  );
};

export default Tabs;
*/

import React, { useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import NewsScreen from "../Screens/NewsScreen";
import SearchScreen from "../Screens/SearchScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import TopNavigation from "./TopNavigation";

const MainTabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "news", title: "News" },
    { key: "search", title: "Search" },
    { key: "profile", title: "Profile" },
  ]);

  const renderScene = SceneMap({
    news: NewsScreen,
    search: SearchScreen,
    profile: ProfileScreen,
  });

  return (
    <View style={{ flex: 1 }}>
      
      <TopNavigation index={index} setIndex={setIndex} />

   
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={() => null} // Hide default tab bar
        swipeEnabled={false} // Prevent swipe navigation
      />
    </View>
  );
};

export default MainTabs;
