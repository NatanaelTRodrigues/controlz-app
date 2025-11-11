// components/controls/CoffeeControl.js
import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

// TODO: Suas cores
const CARD_COLOR = '#1A1A1A';
const TEXT_COLOR = '#FFFFFF';
const ACTIVE_COLOR = '#007BFF';

export default function CoffeeControl({ device, onUpdate }) {
  const { name, state } = device;

  const handleChange = (field, value) => {
    const newState = {
      ...state,
      [field]: value,
    };
    onUpdate(newState);
  };

  const drinkValues = ['espresso', 'pingado', 'cappuccino'];
  const drinkIndex = drinkValues.indexOf(state.drinkType);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Switch
          value={state.isBrewing}
          onValueChange={(value) => handleChange('isBrewing', value)}
          trackColor={{ false: '#767577', true: ACTIVE_COLOR }}
          thumbColor={state.isBrewing ? '#f4f3f4' : '#f4f3f4'}
        />
      </View>

      <View style={styles.controls}>
        <Text style={styles.label}>Tipo de Bebida</Text>
        <SegmentedControl
          values={['Espresso', 'Pingado', 'Cappuccino']}
          selectedIndex={drinkIndex}
          onChange={(event) => {
            const val = drinkValues[event.nativeEvent.selectedSegmentIndex];
            handleChange('drinkType', val);
          }}
          tintColor={ACTIVE_COLOR}
          fontStyle={{ color: TEXT_COLOR }}
          activeFontStyle={{ color: CARD_COLOR }}
          backgroundColor="#555"
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