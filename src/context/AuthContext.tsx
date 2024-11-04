import React, { createContext, useState, ReactNode } from 'react';

// Define o tipo para o contexto de autenticação
interface AuthContextType {
  isSignedIn: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  errorMessage: string | null;
}

// Cria o contexto de autenticação com um valor padrão
export const AuthContext = createContext<AuthContextType>({
  isSignedIn: false,
  signIn: () => {},
  signOut: () => {},
  errorMessage: null,
});

// Provedor do contexto de autenticação
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const signIn = (email: string, password: string) => {
    // Implementar lógica de autenticação (ex.: verificar credenciais)
    if (email === 'test@example.com' && password === 'password') {
      setIsSignedIn(true);
      setErrorMessage(null); // Limpa qualquer mensagem de erro
      console.log('Usuário autenticado');
    } else {
      setErrorMessage('Credenciais inválidas');
      console.log('Credenciais inválidas');
    }
  };

  const signOut = () => {
    setIsSignedIn(false);
    console.log('Usuário deslogado');
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, signIn, signOut, errorMessage }}>
      {children}
    </AuthContext.Provider>
  );
};
