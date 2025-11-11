// components/controls/LampControl.js
import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

// TODO: Suas cores
const CARD_COLOR = '#1A1A1A';
const TEXT_COLOR = '#FFFFFF';
const ACTIVE_COLOR = '#007BFF';

export default function LampControl({ device, onUpdate }) {
  const { name, state } = device;

  const handleChange = (field, value) => {
    const newState = {
      ...state,
      [field]: value,
    };
    onUpdate(newState);
  };

  const brightnessValues = ['low', 'medium', 'high'];
  const brightnessIndex = brightnessValues.indexOf(state.brightness);

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

      {/* Mostra o resto dos controles SÓ se estiver ligada */}
      {state.isOn && (
        <View style={styles.controls}>
          <Text style={styles.label}>Brilho</Text>
          <SegmentedControl
            values={['Baixo', 'Médio', 'Alto']}
            selectedIndex={brightnessIndex}
            onChange={(event) => {
              const val = brightnessValues[event.nativeEvent.selectedSegmentIndex];
              handleChange('brightness', val);
            }}
            tintColor={ACTIVE_COLOR}
            fontStyle={{ color: TEXT_COLOR }}
            activeFontStyle={{ color: CARD_COLOR }}
            backgroundColor="#555"
          />
          {/* TODO: Adicionar controle de Cor e Modo Economia aqui */}
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
  controls: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 15,
  },
  label: {
    color: TEXT_COLOR,
    marginBottom: 10,
    fontSize: 14,
  },
});