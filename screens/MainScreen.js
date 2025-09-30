// screens/MainScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import ControlZLogo from '../components/ControlZLogo';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.4;
const PRIMARY_COLOR = '#6a5ae6';
const INACTIVE_CARD_BG = '#1c1c30';

// Card de dispositivo
const DeviceCard = ({ name, icon, value, unit, isActive, onToggle }) => (
  <View
    style={[
      styles.card,
      { backgroundColor: isActive ? PRIMARY_COLOR : INACTIVE_CARD_BG },
    ]}
  >
    <View style={styles.cardHeader}>
      <Ionicons name={icon} size={24} color="#fff" />
      <Switch
        trackColor={{ false: '#767577', true: '#fff' }}
        thumbColor={isActive ? PRIMARY_COLOR : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onToggle}
        value={isActive}
      />
    </View>
    <Text style={styles.cardName}>{name}</Text>
    {value !== undefined && (
      <Text style={styles.cardValue}>
        {value} {unit}
      </Text>
    )}
  </View>
);

const MainScreen = ({ navigation }) => {
  const route = useRoute();
  const userName = route.params?.userName || 'Usuário';

  const [cameraActive, setCameraActive] = useState(true);
  const [lampadaActive, setLampadaActive] = useState(true);
  const [tomadaActive, setTomadaActive] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Cabeçalho */}
        <View style={styles.topHeaderContainer}>
          <ControlZLogo />
          <TouchableOpacity
            style={styles.newDeviceButton}
            onPress={() => navigation.navigate('Cadastro1')}
          >
            <Text style={styles.newDeviceText}>Novo Dispositivo</Text>
            <Ionicons name="add" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Saudação */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Olá, {userName}</Text>
        </View>

        {/* Consumo total */}
        <View style={styles.totalConsumption}>
          <Text style={styles.totalValue}>115.2 kWh</Text>
          <Text style={styles.totalLabel}>Total de Consumo</Text>
        </View>

        {/* Câmeras */}
        <Text style={styles.sectionTitle}>Câmeras</Text>
        <View style={styles.cardRow}>
          <DeviceCard
            name="Câmera Hugo"
            icon="videocam-outline"
            value={0.5}
            unit="kWh"
            isActive={cameraActive}
            onToggle={() => setCameraActive(prev => !prev)}
          />
          <DeviceCard
            name="Câmera 2"
            icon="videocam-outline"
            value={0}
            unit="kWh"
            isActive={false}
            onToggle={() => {}}
          />
        </View>

        {/* Outros dispositivos */}
        <Text style={styles.sectionTitle}>Outros Dispositivos</Text>
        <View style={styles.cardRow}>
          <DeviceCard
            name="Lâmpada Sala"
            icon="bulb-outline"
            value={115.2}
            unit="kWh"
            isActive={lampadaActive}
            onToggle={() => setLampadaActive(prev => !prev)}
          />
          <DeviceCard
            name="Tomada PC"
            icon="power-outline"
            value={15.2}
            unit="kWh"
            isActive={tomadaActive}
            onToggle={() => setTomadaActive(prev => !prev)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#12121e' },
  scrollContent: { paddingHorizontal: 15, paddingBottom: 20 },
  topHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  greetingContainer: { marginBottom: 20 },
  greeting: { fontSize: 24, fontWeight: '600', color: '#fff' },
  newDeviceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c30',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  newDeviceText: { color: '#fff', marginRight: 5, fontSize: 14 },
  totalConsumption: {
    backgroundColor: PRIMARY_COLOR,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 30,
    width: CARD_WIDTH,
    alignSelf: 'center',
  },
  totalValue: { fontSize: 32, fontWeight: 'bold', color: '#fff' },
  totalLabel: { fontSize: 14, color: '#fff' },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 15,
  },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  card: { width: CARD_WIDTH, padding: 15, borderRadius: 10, height: 150, justifyContent: 'space-between' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardName: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  cardValue: { color: '#fff', fontSize: 14 },
});

export default MainScreen;
