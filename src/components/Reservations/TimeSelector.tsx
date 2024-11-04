import React from 'react';
import { View, Text, Button } from 'react-native';

type TimeSelectorProps = {
  onSelectTime: (time: string) => void;
};

const TimeSelector: React.FC<TimeSelectorProps> = ({ onSelectTime }) => {
  const timeSlots = [
    '08h-09h', '09h-10h', '10h-11h', '11h-12h', '13h-14h', '14h-15h', '15h-16h', '16h-17h'
  ];

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
