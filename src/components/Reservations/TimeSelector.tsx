import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import api from '../../services/api';

type TimeSelectorProps = {
  onSelectTime: (time: string) => void;
};

const TimeSelector: React.FC<TimeSelectorProps> = ({ onSelectTime }) => {
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        const response = await api.get('/reservas/horas_predefinidas'); // Ajuste a rota para a sua API
        // Acessa a lista de slots dentro do objeto retornado
        const validTimeSlots = response.data.slots || []; // Verifica se slots existe, senão define como []
        setTimeSlots(validTimeSlots);
      } catch (error) {
        console.error('Erro ao carregar horários:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTimeSlots();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      <Text>Selecione um Horário:</Text>
      {timeSlots.map((time) => (
        <Button key={time} title={time} onPress={() => onSelectTime(time)} />
      ))}
    </View>
  );
};

export default TimeSelector;
