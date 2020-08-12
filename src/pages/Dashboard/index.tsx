import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  ActivityIndicator,
  Switch,
  BackHandler,
  Alert
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import axios from 'axios';

import AuthContext from '../../contexts/auth';

import styles from './styles';

interface ResponseRepos {
  full_name: string;
  html_url: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState<ResponseRepos[]>([]);

  const { user, theme: { gradient, text, primary }, handleSelectTheme, isTheme, signOut } = useContext(AuthContext);

  useEffect(() => {
    loadRepos();
  }, []);

  const loadRepos = async () => {
    const { data } = await axios.get<ResponseRepos[]>(user?.repos_url || '');

    setData(data);

    setLoad(false);

  };

  const backAction = () => {
    Alert.alert("Ops!", "Deseja sair do app?", [
      {
        text: "Não",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Sim", onPress: () => signOut() }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <LinearGradient start={{ x: 0, y: 0 }}  end={{ x: 1, y: 1 }} colors={gradient} style={styles.container}>
      <View style={[styles.header, { backgroundColor: primary }]}>
        <Image
          source={{ uri: user?.avatar_url }}
          style={styles.image}
        />

        <Text style={[styles.titleName, { color: text }]}>
          {user?.login}
        </Text>

      <Switch 
        value={isTheme === 'light'}
        onValueChange={handleSelectTheme}
        
      />
        
      </View>

      {load && (
        <View style={{ marginTop: 50 }}>
          <ActivityIndicator
            size="large"
            color="#7159c1"
            animating={true} />
        </View>
      )}

      {!load && (
        <FlatList
          data={data}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.full_name}</Text>
              <Text style={styles.desc}>{item.description}</Text>
            </View>
          )}
        />
      )}

    </LinearGradient>
  );
}

export default Dashboard;