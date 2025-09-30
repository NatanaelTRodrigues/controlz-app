// navigation/MainTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import MainScreen from '../screens/MainScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, 
        tabBarStyle: {
          backgroundColor: '#12121e', 
          borderTopColor: 'transparent',
          height: 70, 
          paddingBottom: 10,
        },
        tabBarActiveTintColor: '#6a5ae6', 
        tabBarInactiveTintColor: '#888', 
        tabBarShowLabel: false, 
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainScreen} // FUNCIONALIDADE: Volta para a tela principal
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Estatisticas"
        component={MainScreen} // FUNCIONALIDADE: Volta para a tela principal
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-bar" size={30} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Add"
        component={MainScreen} // FUNCIONALIDADE: Volta para a tela principal
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="microphone-outline" size={35} color={'#fff'} />
          ),
          tabBarIconStyle: {
            backgroundColor: '#6a5ae6', 
            borderRadius: 50,
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -15,
          }
        }}
      />
       <Tab.Screen
        name="Favoritos" 
        component={MainScreen} // FUNCIONALIDADE: Volta para a tela principal
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={30} color={color} /> // Coração
          ),
        }}
      />
      <Tab.Screen
        name="Config" 
        component={MainScreen} // FUNCIONALIDADE: Volta para a tela principal
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={30} color={color} /> // Configurações
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;