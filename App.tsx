import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginSrc from './src/screens/Login'
import HomeSrc from './src/screens/Home'
import FormSrc from './src/screens/Form'

const Stack = createStackNavigator();
const App = () => {

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name='HomeSrc' component={HomeSrc}></Stack.Screen>
          <Stack.Screen name='LoginSrc' component={LoginSrc}></Stack.Screen>
          <Stack.Screen name='FormSrc' component={FormSrc}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App