import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from './src/components/Header';
import { CostCalculator } from './src/components/CostCalculator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#dc2626" />
      <Header />
      <CostCalculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
});
