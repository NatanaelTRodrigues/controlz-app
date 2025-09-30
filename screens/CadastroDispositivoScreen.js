// screens/CadastroDispositivoScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'; // NOVO: ScrollView para o corpo
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const PRIMARY_COLOR = '#6a5ae6';
const TEXT_COLOR = '#fff';
const ARROW_COLOR = '#888';

const ListItem = ({ name, iconName, onPress }) => (
  <TouchableOpacity style={styles.listItem} onPress={onPress}> 
    <View style={styles.itemContent}>
        <Ionicons name={iconName} size={24} color={PRIMARY_COLOR} style={{ marginRight: 15 }} />
        <Text style={styles.itemText}>{name}</Text>
    </View>
    <Ionicons name="arrow-forward" size={24} color={ARROW_COLOR} />
  </TouchableOpacity>
);

const CadastroDispositivoScreen = ({ navigation }) => {
  const navigateToCadastro2 = () => navigation.navigate('Cadastro2');

  return (
    <SafeAreaView style={styles.container}>
      {/* CORREÇÃO: Envolvemos o conteúdo da tela em ScrollView para fluxo seguro */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.subtitle}>Cadastre seu Novo Dispositivo</Text>
          <Text style={styles.label}>Selecione o Dispositivo</Text>

          <View style={styles.listContainer}>
            <ListItem name="Câmera" iconName="videocam-outline" onPress={navigateToCadastro2} />
            <ListItem name="Lâmpada" iconName="bulb-outline" onPress={navigateToCadastro2} />
            <ListItem name="Tomada" iconName="power-outline" onPress={navigateToCadastro2} />
            <ListItem name="Interruptor" iconName="toggle-outline" onPress={navigateToCadastro2} />
            <ListItem name="Smart TV" iconName="tv-outline" onPress={navigateToCadastro2} />
            <ListItem name="Ar Condicionado" iconName="snow-outline" onPress={navigateToCadastro2} />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12121e',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: TEXT_COLOR,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    color: ARROW_COLOR,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  listContainer: {
    borderTopWidth: 1,
    borderTopColor: '#3a3a50',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#3a3a50',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: TEXT_COLOR,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default CadastroDispositivoScreen;