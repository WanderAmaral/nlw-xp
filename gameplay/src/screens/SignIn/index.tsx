import React from "react";
import { View, Text,  Image  } from "react-native";

import { styles } from "./style";
import illustration from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export const SignIn = () => {
  return (
    <View style={styles.container}>
      
      <Image source={illustration} style={styles.image} resizeMode="stretch" />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{`\n`} e organize suas{"\n"} Jogatinas
        </Text>
        <Text style={styles.subtitles}>
          Crie grupos para jogar seus games {"\n"} favoritos com seus amigos
        </Text>
        <ButtonIcon>Entre Com seu discord</ButtonIcon>
      </View>
    </View>
  );
};
