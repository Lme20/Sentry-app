import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'react-native';

// Importing screens
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import SettingsScreen from './screens/SettingsScreen';
import EventsScreen from './screens/EventsScreen';

//Screen names
const HomeName = 'Home';
const MapName = 'Map';
const SettingsName = 'Settings';
const EventsName = 'Events';

//Tab navigator
const Tab = createBottomTabNavigator();

export default function MainNavigation(){
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#171717" barStyle="light-content" />
            <Tab.Navigator
                initialRouteName={HomeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        //ICONS - https://oblador.github.io/react-native-vector-icons/
                        if (rn === HomeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === EventsName) {
                            iconName = focused ? 'md-list' : 'md-list-outline'
                        } else if (rn === SettingsName) {
                            iconName = focused ? 'settings' : 'settings-outline'
                        } else if (rn === MapName) {
                            iconName = focused ? 'map' : 'map-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
   
                    tabBarActiveTintColor: '#009e3e',
                    tabBarInactiveTintColor: '#E3E3E3',
                    tabBarActiveBackgroundColor: '#171717',
                    tabBarInactiveBackgroundColor: '#171717',
                    tabBarLabelStyle: {marginBottom:5, fontSize: 12},
                    tabBarStyle: {
                        height:80, 
                        backgroundColor: '#171717', 
                        borderTopColor: 'transparent',
                        paddingTop: 5,
                    },
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#171717',
                        shadowOpacity: 0,
                    }
                })}
            >

                <Tab.Screen name={HomeName} component={HomeScreen} />
                <Tab.Screen name={MapName} component={MapScreen} />
                <Tab.Screen name={SettingsName} component={SettingsScreen} />
                <Tab.Screen name={EventsName} component={EventsScreen} />

            </Tab.Navigator>

        </NavigationContainer>

    );
}
