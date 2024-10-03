/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
	return (
		<NavigationContainer>
			<GluestackUIProvider config={config}>
				
			</GluestackUIProvider>
		</NavigationContainer>
	);
}
export default App;
