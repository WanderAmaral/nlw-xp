import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  user: { flexDirection: "row", alignItems: 'center' },
  greeting: {
    fontFamily: theme.fonts.text500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 5,
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
    
  },
  message: { fontFamily: theme.fonts.text400, color: theme.colors.highlight },
});
