import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const reservations = [
  { id: '1', date: '2024-11-04', time: '10:00', room: 'Sala A' },
  { id: '2', date: '2024-11-05', time: '14:00', room: 'Sala B' },
  { id: '3', date: '2024-11-06', time: '09:00', room: 'Sala C' },
];

const ReservationsListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Reservas</Text>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Data: {item.date}</Text>
            <Text style={styles.itemText}>Horário: {item.time}</Text>
            <Text style={styles.itemText}>Sala: {item.room}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#8fd3f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  item: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#555',
  },
});

export default ReservationsListScreen;
