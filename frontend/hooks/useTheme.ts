import { Colors } from '@/constants/Colors';
import { Appearance } from "react-native";

export function useTheme() {
    const colorScheme = Appearance.getColorScheme();
    return colorScheme === 'dark' ? Colors.dark : Colors.light;
}