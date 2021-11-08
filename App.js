/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/scenes/home';
import Login from './src/scenes/login';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
            } else if (route.name === 'Login') {
              iconName = focused
              ? 'ios-earth-sharp'
              : 'ios-earth-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'black',
          tabBarActiveTintColor: 'black',
        })}
        >
          <Tab.Screen name="Home" component={Home} options={{ 
            title:'Home', 
            headerStyle: { backgroundColor: '#212121'}, 
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 20, fontWeight: '800', fontFamily: 'arial'}
            }}/>
          <Tab.Screen name="Login" component={Login} options={{
            title:'Login', 
            headerStyle: { backgroundColor: '#212121'}, 
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 20, fontWeight: '800', fontFamily: 'arial'}
          }} />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 24
  },
});

export default App;