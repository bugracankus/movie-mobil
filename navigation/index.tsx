import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ---- SCREENS ---- // 
import HomePage from '../screens/HomePage';
import MovieDetailPage from '../screens/MovieDetailPage';
import FamousDetailPage from '../screens/FamousDetailPage';
import SearchPage from '../screens/SearchPage';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName='HomePage'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='HomePage'
                component={HomePage}
            />
            <Stack.Screen
                name='MovieDetailPage'
                component={MovieDetailPage}
            />
            <Stack.Screen
                name='FamousDetailPage'
                component={FamousDetailPage}
            />
              <Stack.Screen
                name='SearchPage'
                component={SearchPage}
            />
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}