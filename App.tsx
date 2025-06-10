import { NavigationContainer } from '@react-navigation/native';
import { KeyboardProvider } from "react-native-keyboard-controller";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AuthProvider } from '@/contexts/AuthContext/AuthContext';
import { GlobalThemeProvider } from '@/contexts/ThemeContext/ThemeContext';
import { MainNavigation } from '@/navigation/MainNavigation/MainNavigation';


export default function App() {

  return (
    <GlobalThemeProvider>
      <KeyboardProvider>
        <AuthProvider>
          <NavigationContainer>
            <GestureHandlerRootView>
              <BottomSheetModalProvider>
                <MainNavigation />
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </NavigationContainer>
        </AuthProvider>
      </KeyboardProvider>
    </GlobalThemeProvider>
  )
}


