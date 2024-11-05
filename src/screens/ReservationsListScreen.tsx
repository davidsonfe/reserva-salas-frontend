import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { getReservations } from '../services/reservationService'; // Ajuste o caminho conforme necessário

const ReservationsListScreen: React.FC = () => {
  const [reservations, setReservations] = useState<any[]>([]); // Altere 'any' para um tipo mais específico se necessário
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
  const [error, setError] = useState<string | null>(null); // Estado de erro

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const data = await getReservations();
        setReservations(data);
      } catch (error) {
        setError('Não foi possível carregar as reservas.');
      } finally {
        setLoading(false); // Fim do carregamento
      }
    };

    fetchReservations();
  }, []); // Chama apenas na montagem do componente

  if (loading) {
    return <ActivityIndicator size="large" color="#00796b" />; // Exibe um indicador de carregamento
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Reservas</Text>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.id.toString()} // Assegure-se que 'id' é uma string
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Data: {item.data}</Text>
            <Text style={styles.itemText}>Horário: {item.hora}</Text>
            <Text style={styles.itemText}>Sala: {item.sala_id}</Text>
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
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default ReservationsListScreen;
