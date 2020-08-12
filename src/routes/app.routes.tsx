import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomRoutes from './bottom.routes';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="Dashboard"
                component={BottomRoutes}
            />
        </Navigator>
    )
};

export default AppRoutes;