import React from 'react';
import {StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
//navigate
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//redux
import {Provider} from 'react-redux';
import store from './src/redux/store';
//import screen
import Post from './src/screen/Post';
import Detail from './src/screen/Detail';
import SavedPost from './src/screen/SavedPost';

const Stack = createStackNavigator();

export default class App extends React.Component{

  render(){
    return(
      <Provider store = {store}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Post" component={Post} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="SavedPost" component={SavedPost} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

