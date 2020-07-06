import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './screens/AuthNavigator';
import HomeScreen from './screens/Home';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDzE6TjEKpqAwaCD7DUQHuu0udEe4JoRQ8",
  authDomain: "expo-firebase-auth-718eb.firebaseapp.com",
  databaseURL: "https://expo-firebase-auth-718eb.firebaseio.com",
  projectId: "expo-firebase-auth-718eb",
  storageBucket: "expo-firebase-auth-718eb.appspot.com",
  messagingSenderId: "104778066778",
  appId: "1:104778066778:web:875cbdddacd671d2046163"
};

firebase.initializeApp(firebaseConfig);

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthNavigator,
      App: HomeScreen,
    },
    {
      initialRouteName: 'Auth'
    }
  )
);
