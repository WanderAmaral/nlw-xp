import { View } from "react-native";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { Image } from "react-native";

interface AvataProps {
  imageUrl: string;
}

const Avatar = ({ imageUrl }: AvataProps) => {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      <Image source={{ uri: imageUrl }} style={styles.avatar} />
    </LinearGradient>
  );
};

export default Avatar;
