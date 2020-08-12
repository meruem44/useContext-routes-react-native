import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../pages/Dashboard';
import WebView from '../pages/WebView';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomRoutes: React.FC = () => {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 1,
                    heigth: 64
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20
                },
                labelStyle: {
                    fontSize: 13,
                    marginLeft: 16
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}
        >
            <Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarLabel: 'Repos',
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons
                            name="home"
                            size={size}
                            color={focused ? '#8227ed' : color}
                        />
                    )
                }}
            />

            <Screen
                name="WebView"
                component={WebView}
                options={{
                    tabBarLabel: 'GitHub',
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons
                            name="web"
                            size={size}
                            color={focused ? '#8227ed' : color}
                        />
                    )
                }}
            />
        </Navigator>
    )
};

export default BottomRoutes;