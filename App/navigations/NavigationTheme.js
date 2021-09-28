import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.ghostWHite,
  },
};
export default Theme;
