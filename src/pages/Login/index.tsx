import React, { useState, useCallback, useContext } from 'react';
import {
    View,
    Image,
    Text,
    ActivityIndicator,
    TouchableOpacity,
    TextInput
} from 'react-native';

import AuthContext from '../../contexts/auth';

import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

import logo from '../../assets/logo.png';

const Login: React.FC = () => {

    const { handleSubmit } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [error, setError] = useState(false);
    const [load, setLoad] = useState(false);

    const handleLogin = async () => {
        setLoad(true);
        setError(false);

        const response = await handleSubmit(username);

        if (!response) {
            setError(true);
        }

        setLoad(false);

        console.log(response);
        console.log('Foi')
    }

    return (
        <View style={styles.container}>
            <Image
                style={{ width: '60%', height: '20%', alignSelf: 'center' }}
                source={logo}
                resizeMode="contain"
            />

            <View style={[styles.contentInput,
                error && {
                    borderColor: '#ff0000'
                }
            ]}>
                <AntDesign
                    name="github"
                    color="#444"
                    size={20}
                />

                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Usuário do Github"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>

            <TouchableOpacity activeOpacity={0.9} onPress={handleLogin} style={styles.button}>
                {!load && (
                    <>
                        <AntDesign
                            name="login"
                            color="#fff"
                            size={20}
                        />

                        <Text style={styles.textButton}>
                            Pesquisar
                </Text>
                    </>
                )}

                {load && (
                    <ActivityIndicator
                        color="#fff"
                        size="small"
                        animating={true}
                    />
                )}

            </TouchableOpacity>
        </View>
    );
}

export default Login;