import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createNativeStackNavigator();

const App = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent'
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home Screen' }} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;