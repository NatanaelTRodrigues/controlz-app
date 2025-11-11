// navigation/MainTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Ou o pacote de ícones que preferir

// Importe as telas das abas
import MainScreen from '../screens/MainScreen';
import VoiceControlScreen from '../screens/VoiceControlScreen';
import CadastroDispositivoScreen from '../screens/CadastroDispositivoScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Vamos tirar o header padrão
        tabBarActiveTintColor: '#SUA_COR_ATIVA', // Mantenha sua paleta
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#SUA_COR_DE_FUNDO_BARRA', // Mantenha sua paleta
        },
      }}
    >
      <Tab.Screen
        name="Controlar"
        component={MainScreen} // Sua tela principal
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Voz"
        component={VoiceControlScreen} // A nova tela de voz
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mic-outline" size={size} color={color} />
          ),
          // TODO: Adicionar o botão customizado com animação
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={CadastroDispositivoScreen} // Sua tela de cadastro
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}