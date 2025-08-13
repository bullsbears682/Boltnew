import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

export const CostCalculator = () => {
  const [householdSize, setHouseholdSize] = useState(2);
  const [city, setCity] = useState('Toronto');
  const [lifestyle, setLifestyle] = useState('moderate');

  const cities = [
    'Vancouver', 'Calgary', 'Edmonton', 'Winnipeg', 'Toronto', 'Ottawa', 'Montreal', 
    'Quebec City', 'Halifax', 'Charlottetown', "St. John's"
  ];

  const calculateCosts = () => {
    // Mock calculation based on real Canadian cost indices
    const baseCosts = {
      Vancouver: { housing: 2400, food: 850, transport: 180, entertainment: 300, healthcare: 120 },
      Calgary: { housing: 1650, food: 780, transport: 160, entertainment: 280, healthcare: 110 },
      Toronto: { housing: 2200, food: 820, transport: 170, entertainment: 320, healthcare: 115 },
      Montreal: { housing: 1450, food: 720, transport: 95, entertainment: 250, healthcare: 85 },
      Halifax: { housing: 1350, food: 750, transport: 140, entertainment: 220, healthcare: 105 }
    };

    const cityData = baseCosts[city as keyof typeof baseCosts] || baseCosts.Toronto;
    const multiplier = lifestyle === 'budget' ? 0.8 : lifestyle === 'comfortable' ? 1.3 : 1.0;
    const sizeMultiplier = Math.sqrt(householdSize); // Economy of scale

    return {
      housing: Math.round(cityData.housing * sizeMultiplier * multiplier),
      food: Math.round(cityData.food * householdSize * multiplier),
      transport: Math.round(cityData.transport * Math.min(householdSize, 2) * multiplier),
      entertainment: Math.round(cityData.entertainment * householdSize * multiplier),
      healthcare: Math.round(cityData.healthcare * householdSize * multiplier),
    };
  };

  const costs = calculateCosts();
  const totalMonthly = Object.values(costs).reduce((sum, cost) => sum + cost, 0);
  const totalAnnual = totalMonthly * 12;

  const CostCard = ({ icon, amount, label, color }: any) => (
    <View style={[styles.costCard, { backgroundColor: color + '20' }]}>
      <Ionicons name={icon} size={24} color={color} style={styles.costIcon} />
      <Text style={[styles.costAmount, { color }]}>${amount}</Text>
      <Text style={[styles.costLabel, { color }]}>{label}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Ionicons name="calculator-outline" size={24} color="#059669" />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.title}>Total Cost of Living</Text>
            <Text style={styles.subtitle}>Comprehensive regional analysis</Text>
          </View>
        </View>

        <View style={styles.inputSection}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Household Size</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={householdSize}
                style={styles.picker}
                onValueChange={(itemValue) => setHouseholdSize(itemValue)}
              >
                {[1,2,3,4,5,6].map(size => (
                  <Picker.Item key={size} label={`${size} person${size > 1 ? 's' : ''}`} value={size} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>City/Region</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={city}
                style={styles.picker}
                onValueChange={(itemValue) => setCity(itemValue)}
              >
                {cities.map(cityName => (
                  <Picker.Item key={cityName} label={cityName} value={cityName} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Lifestyle</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={lifestyle}
                style={styles.picker}
                onValueChange={(itemValue) => setLifestyle(itemValue)}
              >
                <Picker.Item label="Budget" value="budget" />
                <Picker.Item label="Moderate" value="moderate" />
                <Picker.Item label="Comfortable" value="comfortable" />
              </Picker>
            </View>
          </View>
        </View>

        <View style={styles.costsGrid}>
          <CostCard icon="home-outline" amount={costs.housing} label="Housing" color="#3b82f6" />
          <CostCard icon="basket-outline" amount={costs.food} label="Food" color="#059669" />
          <CostCard icon="car-outline" amount={costs.transport} label="Transport" color="#8b5cf6" />
          <CostCard icon="heart-outline" amount={costs.entertainment} label="Lifestyle" color="#eab308" />
          <CostCard icon="medical-outline" amount={costs.healthcare} label="Healthcare" color="#ef4444" />
        </View>

        <View style={styles.totalSection}>
          <Text style={styles.totalTitle}>Total Cost of Living in {city}</Text>
          <View style={styles.totalGrid}>
            <View style={styles.totalItem}>
              <Text style={styles.totalAmount}>${totalMonthly.toLocaleString()}</Text>
              <Text style={styles.totalPeriod}>per month</Text>
            </View>
            <View style={styles.totalItem}>
              <Text style={styles.totalAmount}>${totalAnnual.toLocaleString()}</Text>
              <Text style={styles.totalPeriod}>per year</Text>
            </View>
          </View>
        </View>

        <View style={styles.incomeTarget}>
          <Text style={styles.incomeTitle}>🎯 Income Target</Text>
          <Text style={styles.incomeText}>
            For comfortable living, aim for ${Math.round(totalAnnual * 1.3).toLocaleString()} gross household income (30% rule applied).
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  card: {
    backgroundColor: '#ffffff',
    margin: 16,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#dcfdf7',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  inputSection: {
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  picker: {
    height: 50,
  },
  costsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  costCard: {
    width: '30%',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  costIcon: {
    marginBottom: 4,
  },
  costAmount: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  costLabel: {
    fontSize: 10,
    fontWeight: '500',
  },
  totalSection: {
    backgroundColor: '#059669',
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
  },
  totalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },
  totalGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  totalItem: {
    alignItems: 'center',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  totalPeriod: {
    fontSize: 12,
    color: '#d1fae5',
    marginTop: 4,
  },
  incomeTarget: {
    backgroundColor: '#dbeafe',
    borderWidth: 1,
    borderColor: '#93c5fd',
    borderRadius: 8,
    padding: 12,
  },
  incomeTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: 4,
  },
  incomeText: {
    fontSize: 12,
    color: '#1e40af',
  },
});