import { TamaguiProvider, View } from '@tamagui/core'
import { config } from './tamagui.config';

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <View width={200} height={200} backgroundColor="$black" />
    </TamaguiProvider>
  );
}


