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
import Router from './src/router';
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App(): React.JSX.Element {
	return (
		<NavigationContainer>
			<GluestackUIProvider config={config}>
				<Provider store={store}>
					<Router />
				</Provider>
			</GluestackUIProvider>
		</NavigationContainer>
	);
}
export default App;
