import { useColorScheme } from "react-native";

export const getTheme = () => {
  const colorscheme = useColorScheme();
  return colorscheme ?? 'light';
};
