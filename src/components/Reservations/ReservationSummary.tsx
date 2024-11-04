import React from 'react';
import { View, Text, Button } from 'react-native';

type Room = {
  id: string;
  name: string;
};

type ReservationSummaryProps = {
  date: Date | null;
  room: Room | null; // Alterado para Room | null
  time: string | null;
  onConfirm: () => void;
};

const ReservationSummary: React.FC<ReservationSummaryProps> = ({ date, room, time, onConfirm }) => {
  return (
    <View>
      <Text>Data: {date ? date.toLocaleDateString() : 'Nenhuma Data Selecionada'}</Text>
      <Text>Sala: {room ? room.name : 'Nenhuma Sala Selecionada'}</Text>
      <Text>Horário: {time || 'Nenhum Horário Selecionado'}</Text>
      <Button title="Confirmar Reserva" onPress={onConfirm} />
    </View>
  );
};

export default ReservationSummary;
