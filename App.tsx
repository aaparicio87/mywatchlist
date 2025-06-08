import { MainNavigation } from '@/navigation/MainNavigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function App() {
  return (
    <NavigationContainer>
      <KeyboardProvider>
        <MainNavigation />
      </KeyboardProvider>
    </NavigationContainer>
  );
}


