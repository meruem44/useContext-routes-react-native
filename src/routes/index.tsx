import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthContext from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';


const Routes: React.FC = () => {
    const { signed } = useContext(AuthContext);

    return (
        <NavigationContainer>
           {signed ? <AppRoutes /> : <AuthRoutes/> }
        </NavigationContainer>
    )
};

export default Routes;
