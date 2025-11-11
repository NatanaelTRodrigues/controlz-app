// screens/VoiceControlScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  interpolateColor,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

// TODO: Use suas cores
const BACKGROUND_COLOR = '#000000';
const BUTTON_COLOR = '#007BFF';
const RECORDING_COLOR = '#FF4136';

// Crie um componente animado
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function VoiceControlScreen() {
  const [isRecording, setIsRecording] = useState(false);
  const scale = useSharedValue(1);

  // Estilo animado
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    const wasRecording = isRecording;
    setIsRecording(!wasRecording);

    if (!wasRecording) {
      // Inicia a animação de "pulsar"
      scale.value = withRepeat(withSpring(1.2, { stiffness: 100 }), -1, true);
      // Aqui você iniciaria a lógica de gravação de voz
      console.log("Iniciando gravação...");
    } else {
      // Para a animação
      scale.value = withSpring(1);
      // Aqui você pararia a gravação
      console.log("Parando gravação...");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Controle por Voz</Text>
      <Text style={styles.subtitle}>
        {isRecording ? "Ouvindo..." : "Pressione para começar"}
      </Text>
      <AnimatedPressable style={[styles.micButton, animatedStyle]} onPress={handlePress}>
        <Ionicons name="mic" size={80} color="white" />
      </AnimatedPressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR, // TODO: Sua cor
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 80,
  },
  micButton: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: BUTTON_COLOR, // TODO: Sua cor
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
});