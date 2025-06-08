import React, { createContext, useContext } from "react";
import { ThemeProvider } from "@rneui/themed";
import { mmkvDecryptedStorage } from "@constants/mmkv";

import { Colors, ColorScheme, ThemeColors } from "@constants/colors";
import { darkTheme, lightTheme } from "@constants/themes";


interface ThemeContextType {
    colors: ThemeColors;
    toggleTheme: () => void;
}


const GlobalThemeContext = createContext<ThemeContextType | null>(null)

type Props = {
    children: React.ReactNode
}

const GlobalThemeProvider = ({ children }: Props) => {
    const [colorScheme, setColorScheme] = React.useState<ColorScheme>('light');

    React.useEffect(() => {
        // Load saved theme from storage
        const savedTheme = mmkvDecryptedStorage.getString('@theme') as ColorScheme;
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
            setColorScheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = colorScheme === 'light' ? 'dark' : 'light';
        setColorScheme(newTheme);
        mmkvDecryptedStorage.set('@theme', newTheme);
    };

    const colors = Colors[colorScheme];
    const theme = colorScheme === 'light' ? lightTheme : darkTheme;

    return (
        <GlobalThemeContext.Provider
            value={{
                colors,
                toggleTheme,
            }}
        >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </GlobalThemeContext.Provider>
    )
}

function useGlobalThemeContextContext() {
    const context = useContext(GlobalThemeContext)
    if (!context) {
        throw new Error(
            'useGlobalThemeContextContext must be used within a GlobalThemeContext'
        )
    }
    return context
}

export { GlobalThemeProvider, useGlobalThemeContextContext }