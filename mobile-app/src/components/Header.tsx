import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <View style={styles.iconContainer}>
            <Ionicons name="location-outline" size={24} color="#fee2e2" />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Canada Cost Analyzer</Text>
            <Text style={styles.subtitle}>Smart Living Decisions for Every Province</Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.maple}>🍁</Text>
          <Text style={styles.powered}>Powered by Statistics Canada</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#dc2626',
    paddingTop: 50, // Account for status bar
    paddingBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 12,
    color: '#fee2e2',
    marginTop: 2,
  },
  rightSection: {
    alignItems: 'center',
  },
  maple: {
    fontSize: 20,
  },
  powered: {
    fontSize: 10,
    color: '#fee2e2',
    marginTop: 2,
  },
});