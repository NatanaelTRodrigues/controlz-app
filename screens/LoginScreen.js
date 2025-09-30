// screens/LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ControlZLogo from '../components/ControlZLogo';

const { width } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');

  const handleLogin = () => {
    const nameToPass = userName.trim() || 'Usuário';
    navigation.replace('Main', { userName: nameToPass });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Login</Text>

      <View style={styles.logoContainer}>
        <ControlZLogo style={styles.logoSize} />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuário/E-mail"
          placeholderTextColor="#888"
          keyboardType="email-address"
          onChangeText={setUserName}
          value={userName}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Registre-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12121e',
    paddingTop: 50,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 50,
  },
  logoContainer: {
    marginBottom: 100,
  },
  logoSize: {
    transform: [{ scale: 1.5 }],
  },
  formContainer: {
    width: width * 0.8,
  },
  input: {
    backgroundColor: '#1c1c30',
    color: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#6a5ae6',
  },
  loginButton: {
    backgroundColor: '#6a5ae6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    marginTop: 40,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3a3a50',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;
