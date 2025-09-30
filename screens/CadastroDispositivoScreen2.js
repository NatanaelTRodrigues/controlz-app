// screens/CadastroDispositivoScreen2.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'; // NOVO: ScrollView
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const PRIMARY_COLOR = '#6a5ae6';
const TEXT_COLOR = '#fff';
const CARD_BG = '#1c1c30';
const ARROW_COLOR = '#888';

const ListItem = ({ name, iconName }) => (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.itemContent}>
          <Ionicons name={iconName} size={24} color={PRIMARY_COLOR} style={{ marginRight: 15 }} />
          <Text style={styles.itemText}>{name}</Text>
      </View>
      <Ionicons name="arrow-forward" size={24} color={ARROW_COLOR} />
    </TouchableOpacity>
  );

const CadastroDispositivoScreen2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* CORREÇÃO: Envolvemos o conteúdo da tela em ScrollView para fluxo seguro */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.subtitle}>Cadastre seu Novo Dispositivo</Text>
          <Text style={styles.label}>Selecione o Dispositivo</Text>

          {/* Cards de Opções de Conexão */}
          <View style={styles.connectionCardsContainer}>
            <TouchableOpacity style={styles.connectionCard}>
                <MaterialCommunityIcons name="wifi" size={40} color={TEXT_COLOR} />
                <Text style={styles.connectionCardText}>Adicionar Automaticamente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.connectionCard}>
                <MaterialCommunityIcons name="sync" size={40} color={TEXT_COLOR} />
                <Text style={styles.connectionCardText}>Adicionar Manualmente</Text>
            </TouchableOpacity>
          </View>

          {/* Lista de Dispositivos (Exemplo) */}
          <View style={styles.listContainer}>
            <ListItem name="Câmera" iconName="videocam-outline" />
            <ListItem name="Lâmpada" iconName="bulb-outline" />
            <ListItem name="Interruptor" iconName="toggle-outline" />
            <ListItem name="Smart TV" iconName="tv-outline" />
            <ListItem name="Ar Condicionado" iconName="snow-outline" />
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
      connectionCardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 30,
      },
      connectionCard: {
        backgroundColor: CARD_BG,
        width: '48%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      connectionCardText: {
        color: TEXT_COLOR,
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
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

export default CadastroDispositivoScreen2;