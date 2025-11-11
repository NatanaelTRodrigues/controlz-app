// components/controls/AcControl.js
import React from 'react';
import { View, Text, StyleSheet, Switch, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// TODO: Suas cores
const CARD_COLOR = '#1A1A1A';
const TEXT_COLOR = '#FFFFFF';
const ACTIVE_COLOR = '#007BFF';

export default function AcControl({ device, onUpdate }) {
  const { name, state } = device;

  const handleChange = (field, value) => {
    const newState = {
      ...state,
      [field]: value,
    };
    onUpdate(newState);
  };

  const adjustTemp = (amount) => {
    handleChange('temperature', state.temperature + amount);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Switch
          value={state.isOn}
          onValueChange={(value) => handleChange('isOn', value)}
          trackColor={{ false: '#767577', true: ACTIVE_COLOR }}
          thumbColor={state.isOn ? '#f4f3f4' : '#f4f3f4'}
        />
      </View>

      {state.isOn && (
        <View style={styles.controls}>
          <Text style={styles.label}>Temperatura</Text>
          <View style={styles.tempControl}>
            <TouchableOpacity style={styles.tempButton} onPress={() => adjustTemp(-1)}>
              <Ionicons name="remove" size={24} color={ACTIVE_COLOR} />
            </TouchableOpacity>
            <Text style={styles.tempText}>{state.temperature}°C</Text>
            <TouchableOpacity style={styles.tempButton} onPress={() => adjustTemp(1)}>
              <Ionicons name="add" size={24} color={ACTIVE_COLOR} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {     
    backgroundColor: CARD_COLOR,
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 20,
    borderRadius: 12,}, 
  controls: {   
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 15,}, 
  tempControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  tempText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: TEXT_COLOR,
    marginHorizontal: 20,
  },
  tempButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
  },
  // Copie os estilos que faltam
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