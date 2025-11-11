// screens/MainScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ControlZLogo from '../components/ControlZLogo';

// Importe os componentes de controle
import LampControl from '../components/controls/LampControl';
import AcControl from '../components/controls/AcControl';
import CoffeeControl from '../components/controls/CoffeeControl';
import GenericSwitchControl from '../components/controls/GenericSwitchControl';

// TODO: Suas cores
const BACKGROUND_COLOR = '#000000';
const TEXT_COLOR = '#FFFFFF';

// --- NOSSA LISTA DE DISPOSITIVOS "MOCK" ---
// Estes são os dados que vão aparecer na tela
const MOCK_DATA = [
  {
    id: '1',
    name: 'Luz da Sala',
    type: 'LAMP',
    state: { isOn: false, brightness: 'medium', color: '#FFFFFF', mode: 'normal' }
  },
  {
    id: '2',
    name: 'Ar Condicionado',
    type: 'AC',
    state: { isOn: false, temperature: 22 }
  },
  {
    id: '3',
    name: 'Cafeteira',
    type: 'COFFEE_MAKER',
    state: { isBrewing: false, drinkType: 'espresso' }
  },
  {
    id: '4',
    name: 'Portão da Garagem',
    type: 'GATE',
    state: { isOpen: false }
  },
  {
    id: '5',
    name: 'Câmera da Entrada',
    type: 'CAMERA',
    state: { isOn: true }
  },
];
// ---------------------------------------------

export default function MainScreen() {
  // --- O NOVO "CÉREBRO" ---
  // Usamos useState para guardar nossa lista de dispositivos
  const [devices, setDevices] = useState(MOCK_DATA);
  const loading = false; // Nunca está "carregando"

  // Esta função agora atualiza o estado local (o useState)
  const updateDeviceState = (deviceId, newState) => {
    setDevices(currentDevices => 
      currentDevices.map(device => {
        if (device.id === deviceId) {
          // Encontramos o dispositivo, retornamos ele com o novo estado
          return { ...device, state: newState };
        }
        // Se não for o dispositivo, apenas o retornamos como estava
        return device;
      })
    );
  };
  // -------------------------

  // O "Roteador" de Componentes (permanece igual)
  const renderDevice = ({ item }) => {
    const onUpdate = (newState) => updateDeviceState(item.id, newState);

    switch (item.type) {
      case 'LAMP':
        return <LampControl device={item} onUpdate={onUpdate} />;
      case 'AC':
        return <AcControl device={item} onUpdate={onUpdate} />;
      case 'COFFEE_MAKER':
        return <CoffeeControl device={item} onUpdate={onUpdate} />;
      case 'BATHTUB':
        return <GenericSwitchControl device={item} onUpdate={onUpdate} stateKey="isOn" />;
      case 'CAMERA':
        return <GenericSwitchControl device={item} onUpdate={onUpdate} stateKey="isOn" />;
      case 'GATE':
        return <GenericSwitchControl device={item} onUpdate={onUpdate} stateKey="isOpen" />;
      default:
        return (
          <View style={styles.card}>
            <Text style={styles.title}>Dispositivo desconhecido: {item.name}</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ControlZLogo />
      </View>

      {/* Não precisamos mais do "loading" */}
      <FlatList
        data={devices}
        renderItem={renderDevice}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View style={styles.centered}>
            <Text style={styles.emptyText}>Nenhum dispositivo cadastrado.</Text>
          </View>
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

// Copie os estilos do seu MainScreen.js antigo aqui
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#333',
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 15,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: TEXT_COLOR,
  }
});