import api from './api';

interface RegisterData {
  nome: string;
  email: string;
  password: string;
}

export const registerUser = async (userData: RegisterData) => {
  try {
    const response = await api.post('/usuarios', { usuario: userData }); // Envia os dados aninhados em "usuario"
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Erro ao cadastrar usuário:', error.message);
    } else {
      console.error('Erro ao cadastrar usuário:', 'Ocorreu um erro desconhecido.');
    }
    throw new Error('Erro ao cadastrar usuário. Tente novamente.');
  }
};
