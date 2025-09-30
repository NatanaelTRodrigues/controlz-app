// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import MainTabNavigator from './navigation/MainTabNavigator'; 
import CadastroDispositivoScreen from './screens/CadastroDispositivoScreen';
import CadastroDispositivoScreen2 from './screens/CadastroDispositivoScreen2';
// ControlZLogo é importado nas telas, não mais aqui.

const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: true, 
          headerStyle: {
              backgroundColor: '#12121e', 
          },
          headerTitleStyle: { color: '#fff' },
          headerTintColor: '#fff', 
          contentStyle: { backgroundColor: '#12121e' }, 
        }}
      >
        {/* 1. LoginScreen: Sem cabeçalho */}
        <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
        /> 
        
        {/* 2. Main (Tab Navigator): Sem cabeçalho do Stack para mostrar a barra inferior */}
        <Stack.Screen 
            name="Main" 
            component={MainTabNavigator} 
            options={{ headerShown: false }} 
        /> 

        {/* 3. Cadastro 1 e 2: Usam o cabeçalho Stack padrão */}
        <Stack.Screen 
          name="Cadastro1" 
          component={CadastroDispositivoScreen} 
          options={{ headerTitle: 'Cadastro de Dispositivo' }} 
        />
        <Stack.Screen 
          name="Cadastro2" 
          component={CadastroDispositivoScreen2} 
          options={{ headerTitle: 'Cadastro de Dispositivo 2' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;