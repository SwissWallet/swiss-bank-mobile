/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { config } from '@gluestack-ui/config';
import { GluestackUIProvider} from '@gluestack-ui/themed';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      
    </GluestackUIProvider>
  );
}
export default App;
