import React from 'react';
import { View, Text, Button } from 'react-native';

type Room = {
  id: string;
  name: string;
};

type RoomSelectorProps = {
  onSelectRoom: (room: Room) => void;
};

const RoomSelector: React.FC<RoomSelectorProps> = ({ onSelectRoom }) => {
  const rooms: Room[] = [
    { id: '101', name: 'Sala 101' },
    { id: '102', name: 'Sala 102' },
    // Adicione mais salas conforme necessário
  ];

  return (
    <View>
      <Text>Selecione uma Sala:</Text>
      {rooms.map((room) => (
        <Button key={room.id} title={room.name} onPress={() => onSelectRoom(room)} />
      ))}
    </View>
  );
};

export default RoomSelector;
