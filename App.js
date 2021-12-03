/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/login';
import OTP from './src/screens/otp';
import Signup from './src/screens/signup';
import Products from './src/screens/products';
import ProductDetails from './src/screens/productdetails';
import SplashScreen from './src/screens/splashscreen';


const Stack = createNativeStackNavigator();
const App = () => {
 
  return (
    // <Login />
    <SafeAreaView style={styles.body}>
      <NavigationContainer>
           <Stack.Navigator>
           <Stack.Screen name='splashscreen' component = {SplashScreen} 
             options ={{
               headerShown : false
              }}
             />
             <Stack.Screen name='Login' component = {Login} 
             options ={{
               headerShown : false
              }}
             />
             <Stack.Screen name='Signup' component = {Signup} 
                options ={{headerShown : false}}
             />
             <Stack.Screen 
             name='Products' 
             component = {Products} 
             options ={{
              headerShown : false
             }}
             />
            <Stack.Screen 
             name='Productdetails' 
             component = {ProductDetails}
             options={{
               //headerStyle : styles.header
               headerShown : false
             }}
             />

           </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body : {
     flex : 1,
     justifyContent : 'center', // along primary axis
     //alignItems : 'center' , // along secondary axis
     backgroundColor : '#dadde1'

  },
  header : {
    backgroundColor : '#D27D2D'
  }
});

export default App;
