import { useGlobalThemeContextContext } from "@/contexts/ThemeContext/ThemeContext";
import { globalStyles } from "@styles/global-styled";

export const useGlobalStyles = () => {
    const { colors } = useGlobalThemeContextContext();
    const styledGlobal = globalStyles(colors);

    return {
        styledGlobal,
        colors
    };
}