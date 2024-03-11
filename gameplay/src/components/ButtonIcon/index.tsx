import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style";

import Discord from "../../assets/discord.png";

interface ButtonIconProps {
  children: string;
}

export const ButtonIcon = ({ children }: ButtonIconProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={Discord} style={styles.icon} />
      </View>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
};
