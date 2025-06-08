import { color } from "@rneui/base";
import { createTheme } from "@rneui/themed";

export const lightTheme = createTheme({
  lightColors: {
    ...color.ligh
  },
  mode: 'light',
  components: {
    Text: {
      h1Style: {
        fontSize: 80,
      },
    },
    Button: {
      buttonStyle: {
        borderRadius: 8,
      },
    },
  },
});


export const darkTheme = createTheme({
  darkColors: {
    ...color.dark
  },
  mode: 'dark',
  components: {
    Text: {
      h1Style: {
        fontSize: 80,
        color: '#ffffff',
      },
    },
    Button: {
      buttonStyle: {
        borderRadius: 8,
      },
    },
  },
});
