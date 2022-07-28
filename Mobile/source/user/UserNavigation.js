import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Login from './screens/Login';
import Register from './screens/Register';
import { NavigationContainer } from '@react-navigation/native';

export default function UserNavigation() {
    return (
            <Stack.Navigator screenOptions={{ headerShown : false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})