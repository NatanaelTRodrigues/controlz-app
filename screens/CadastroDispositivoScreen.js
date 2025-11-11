// screens/CadastroDispositivoScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';

// TODO: Use suas cores
const PRIMARY_COLOR = '#007BFF';
const BACKGROUND_COLOR = '#000000';
const CARD_COLOR = '#1A1A1A';
const TEXT_COLOR = '#FFFFFF';
const INPUT_COLOR = '#333333';

export default function CadastroDispositivoScreen({ navigation }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('LAMP'); // Tipo padrão

  // REMOVEMOS a chamada ao 'useDevices' e 'addDevice'

  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert("Erro", "Por favor, dê um nome ao dispositivo.");
      return;
    }

    // --- LÓGICA VISUAL ---
    // Em vez de salvar no Firebase, apenas mostramos um alerta
    // e limpamos o formulário.
    Alert.alert(
      "Sucesso! (Modo Visual)",
      `O dispositivo "${name}" (${type}) foi "cadastrado".`
    );

    setName(''); // Limpa o formulário
    setType('LAMP'); // Reseta o picker
    navigation.navigate('Controlar'); // Volta para a tela principal
    // ---------------------
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Cadastrar Dispositivo</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Nome do Dispositivo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Luz do Quarto"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Tipo de Dispositivo</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              itemStyle={styles.pickerItem}
              selectedValue={type}
              onValueChange={(itemValue) => setType(itemValue)}
              dropdownIconColor={TEXT_COLOR}
            >
              <Picker.Item label="Lâmpada Inteligente" value="LAMP" />
              <Picker.Item label="Ar Condicionado" value="AC" />
              <Picker.Item label="Cafeteira" value="COFFEE_MAKER" />
              <Picker.Item label="Banheira" value="BATHTUB" />
              <Picker.Item label="Portão" value="GATE" />
              <Picker.Item label="Câmera" value="CAMERA" />
            </Picker>
          </View>

          <Button title="Salvar Dispositivo" onPress={handleSave} color={PRIMARY_COLOR} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Estilos (Mantenha os seus ou use estes)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: TEXT_COLOR,
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: CARD_COLOR,
    borderRadius: 12,
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: TEXT_COLOR,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: INPUT_COLOR,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: TEXT_COLOR,
  },
  pickerContainer: {
    backgroundColor: INPUT_COLOR,
    borderRadius: 8,
    marginBottom: 30,
    overflow: 'hidden', // Para o picker arredondar
  },
  picker: {
    color: TEXT_COLOR,
  },
  pickerItem: {
    color: TEXT_COLOR,
  }
});