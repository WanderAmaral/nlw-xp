import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import Profile from "../../components/Profile";

const Home = () => {
  return (
    <View>
      <View style={styles.header}>
        {/* <Text></Text> */}
        <Profile />
      </View>
    </View>
  );
};

export default Home;
