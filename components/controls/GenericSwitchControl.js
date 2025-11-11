// components/controls/GenericSwitchControl.js
import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

// TODO: Suas cores
const CARD_COLOR = '#1A1A1A';
const TEXT_COLOR = '#FFFFFF';
const ACTIVE_COLOR = '#007BFF';

export default function GenericSwitchControl({ device, onUpdate, stateKey }) {
  const { name, state } = device;
  const isOn = state[stateKey]; // Pega o valor (seja 'isOn' ou 'isOpen')

  const handleToggle = () => {
    const newState = {
      ...state,
      [stateKey]: !isOn, // Inverte o valor
    };
    onUpdate(newState); // Envia o NOVO objeto state completo
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Switch
          value={isOn}
          onValueChange={handleToggle}
          trackColor={{ false: '#767577', true: ACTIVE_COLOR }}
          thumbColor={isOn ? '#f4f3f4' : '#f4f3f4'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: CARD_COLOR,
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 20,
    borderRadius: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: TEXT_COLOR,
  },
});