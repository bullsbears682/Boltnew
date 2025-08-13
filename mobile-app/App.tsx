import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [householdSize, setHouseholdSize] = useState(2);
  const [city, setCity] = useState('Toronto');
  const [lifestyle, setLifestyle] = useState('moderate');

  const cities = ['Vancouver', 'Toronto', 'Montreal', 'Calgary', 'Halifax'];
  const lifestyles = ['budget', 'moderate', 'comfortable'];

  const calculateCosts = () => {
    const baseCosts = {
      Vancouver: { housing: 2400, food: 850, transport: 180 },
      Toronto: { housing: 2200, food: 820, transport: 170 },
      Montreal: { housing: 1450, food: 720, transport: 95 },
      Calgary: { housing: 1650, food: 780, transport: 160 },
      Halifax: { housing: 1350, food: 750, transport: 140 }
    };

    const cityData = baseCosts[city] || baseCosts.Toronto;
    const multiplier = lifestyle === 'budget' ? 0.8 : lifestyle === 'comfortable' ? 1.3 : 1.0;
    
    const housing = Math.round(cityData.housing * multiplier);
    const food = Math.round(cityData.food * householdSize * multiplier);
    const transport = Math.round(cityData.transport * multiplier);
    
    return { housing, food, transport };
  };

  const costs = calculateCosts();
  const total = costs.housing + costs.food + costs.transport;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#dc2626" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🍁 Canada Cost Analyzer</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Controls */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Settings</Text>
          
          {/* Household Size */}
          <Text style={styles.label}>Household Size: {householdSize}</Text>
          <View style={styles.buttonRow}>
            {[1,2,3,4,5,6].map(size => (
              <TouchableOpacity 
                key={size}
                style={[styles.button, householdSize === size && styles.activeButton]}
                onPress={() => setHouseholdSize(size)}
              >
                <Text style={[styles.buttonText, householdSize === size && styles.activeButtonText]}>
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* City */}
          <Text style={styles.label}>City: {city}</Text>
          <View style={styles.buttonRow}>
            {cities.map(c => (
              <TouchableOpacity 
                key={c}
                style={[styles.cityButton, city === c && styles.activeButton]}
                onPress={() => setCity(c)}
              >
                <Text style={[styles.buttonText, city === c && styles.activeButtonText]}>
                  {c}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Lifestyle */}
          <Text style={styles.label}>Lifestyle: {lifestyle}</Text>
          <View style={styles.buttonRow}>
            {lifestyles.map(l => (
              <TouchableOpacity 
                key={l}
                style={[styles.button, lifestyle === l && styles.activeButton]}
                onPress={() => setLifestyle(l)}
              >
                <Text style={[styles.buttonText, lifestyle === l && styles.activeButtonText]}>
                  {l.charAt(0).toUpperCase() + l.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Results */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Monthly Costs in {city}</Text>
          
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>🏠 Housing:</Text>
            <Text style={styles.costValue}>${costs.housing}</Text>
          </View>
          
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>🛒 Food:</Text>
            <Text style={styles.costValue}>${costs.food}</Text>
          </View>
          
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>🚗 Transport:</Text>
            <Text style={styles.costValue}>${costs.transport}</Text>
          </View>
          
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Monthly:</Text>
            <Text style={styles.totalValue}>${total}</Text>
          </View>
          
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Annual:</Text>
            <Text style={styles.totalValue}>${total * 12}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#dc2626',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#555',
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  cityButton: {
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 6,
    marginBottom: 8,
  },
  activeButton: {
    backgroundColor: '#dc2626',
  },
  buttonText: {
    color: '#333',
    fontWeight: '500',
  },
  activeButtonText: {
    color: '#fff',
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  costLabel: {
    fontSize: 16,
    color: '#555',
  },
  costValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopWidth: 2,
    borderTopColor: '#dc2626',
    marginTop: 8,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dc2626',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dc2626',
  },
});
