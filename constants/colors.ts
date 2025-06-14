export const Colors = {
  light: {
    primary: '#2196F3',
    secondary: '#009688',
    primaryContainer: '#c8f0ff',
    accent: '#FF9800',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#212121',
    textSecondary: '#757575',
    border: '#E0E0E0',
    success: '#4CAF50',
    warning: '#FFC107',
    error: '#F44336',
    white: '#FFFFFF',
    black: '#000000',
    positive: '#00d4aa',
    negative: '#ff4757',
    star: '#ffd700'
  },
  dark: {
    primary: '#2196F3',
    secondary: '#009688',
    accent: '#FF9800',
    background: '#121212',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    textSecondary: '#B0B0B0',
    border: '#333333',
    success: '#4CAF50',
    warning: '#FFC107',
    error: '#F44336',
    white: '#F4F3F4',
    black: '#000000',
    primaryContainer: '#91e1ff',
    positive: '#00d4aa',
    negative: '#ff4757',
    star: '#ffd700'
  },
}

export type ColorScheme = 'light' | 'dark';
export type ThemeColors = typeof Colors.light;