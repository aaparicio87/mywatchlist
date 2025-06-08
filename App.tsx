import { NavigationContainer } from '@react-navigation/native';
import { KeyboardProvider } from "react-native-keyboard-controller";

import { AuthProvider } from '@/contexts/AuthContext/AuthContext';
import { GlobalThemeProvider } from '@/contexts/ThemeContext/ThemeContext';
import { MainNavigation } from '@/navigation/MainNavigation/MainNavigation';



export default function App() {

  return (
    <GlobalThemeProvider>
      <KeyboardProvider>
        <AuthProvider>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </AuthProvider>
      </KeyboardProvider>
    </GlobalThemeProvider>
  );
}


