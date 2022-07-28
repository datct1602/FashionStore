import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Product from './screens/Product';
import Detail from './screens/Detail';

export default function ProductNavigation() {
  return (
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Product" component={Product} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})