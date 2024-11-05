import api from './api';

type ReservationData = {
  date: string;
  roomId: string;
  timeSlot: string;
};

export const createReservation = async (data: ReservationData) => {
  try {
    const response = await api.post('/reservas', data);
    return response.data;
  } catch (error) {
    throw new Error('Não foi possível criar a reserva. Tente novamente.');
  }
};

export const getReservations = async () => {
  try {
    const response = await api.get('/reservas');
    return response.data;
  } catch (error) {
    throw new Error('Não foi possível carregar as reservas.');
  }
};
