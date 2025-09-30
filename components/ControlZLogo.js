// components/ControlZLogo.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ControlZLogo = ({ style }) => (
    <View style={[styles.container, style]}>
        <Text style={styles.controlText}>Control</Text>
        <Text style={styles.zText}>Z</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    controlText: {
        fontSize: 24,
        fontWeight: '500',
        color: '#c4e0ff',
    },
    zText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#6a5ae6',
        marginLeft: 2,
        borderBottomWidth: 2,
        borderBottomColor: '#6a5ae6',
        paddingBottom: 2,
    },
});

export default ControlZLogo;