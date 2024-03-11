import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import { styles } from "./style";

export const SignIn = () => {

  const [state, setState] = useState()

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <TextInput style={styles.input} />
    </View>
  );
};
