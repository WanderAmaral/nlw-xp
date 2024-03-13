import React from "react";
import { useFonts } from "expo-font";

import { SignIn } from "./src/screens/SignIn";
import AppLoading from "expo-app-loading";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import { StatusBar } from "react-native";
import BackGround from "./src/components/Background";
import Home from "./src/screens/Home";

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_700Bold,
    Rajdhani_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <BackGround>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      {/* <SignIn /> */}
      <Home />
    </BackGround>
  );
};

export default App;
