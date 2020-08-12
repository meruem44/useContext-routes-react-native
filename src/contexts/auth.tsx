import React, { useState } from 'react';
import { createContext } from 'react';
import api from '../services/api';

interface User {
    login: string;
    avatar_url: string;
    html_url: string;
    repos_url: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null,
    handleSubmit(username: string): Promise<boolean | object>,
    signOut(): void;
    theme: ThemeInterface;
    handleSelectTheme(): void;
    isTheme: string;
}

const Themes =  {
    light: ['#12c2e9', '#c471ed', '#f64f59'],
    dark: ['#0f0c29', '#302b63','#24243e']
}

interface ThemeInterface {
    gradient: string[],
    primary: string;
    text: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    
    const [user, setUser] = useState<User | null>(null);
    const [isTheme, setIsTheme] = useState<'light' | 'dark'>('dark')

    const handleSelectTheme = () => {
        setIsTheme(isTheme === 'light' ? 'dark': 'light')
    };

    const handleSubmit = async (username: string) => {

       try {
        const { data } = await api.get<User>(`/${username}`);

        const { avatar_url, login, html_url, repos_url } = data;

        setUser({
            avatar_url,
            login,
            html_url,
            repos_url
        });

        return true

       }catch(err) {
           return false;
       }
    };

    const signOut = () => {
        setUser(null);
    }
    
    return (
        <AuthContext.Provider value={{ 
            signed: !!user, 
            user, 
            handleSubmit,
            isTheme,
            theme: { 
                gradient: Themes[isTheme],
                 primary: isTheme === 'light' ? '#fff' : '#0f0c29',
                 text: isTheme === 'light' ? '#444' : '#fff'
                 },
            handleSelectTheme,
             signOut  }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;