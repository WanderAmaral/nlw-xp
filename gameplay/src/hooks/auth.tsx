import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { SCOPE, CLIENT_ID, CDN_IMAGE, RESPONSE_TYPE, REDIRECT_URI  } = process.env;

import { COLLECTION_USERS } from '../configs/database';
import { api } from '../services/api';

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  const discovery = {
    authorizationEndpoint: `${api.defaults.baseURL}/oauth2/authorize`,
    tokenEndpoint: `${api.defaults.baseURL}/oauth2/token`,
    revocationEndpoint: `${api.defaults.baseURL}/oauth2/revoke`,
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID!,
      scopes: [SCOPE!],
      redirectUri: makeRedirectUri({
        native: REDIRECT_URI,
      }),
      responseType: RESPONSE_TYPE,
    },
    discovery
  );

  async function signIn() {
    try {
      setLoading(true);
      const result = await promptAsync();

      if (result.type === 'success' && result.params.access_token) {
        api.defaults.headers.authorization = `Bearer ${result.params.access_token}`;

        const userInfo = await api.get('/users/@me');
        const firstName = userInfo.data.username.split(' ')[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        const userData = {
          ...userInfo.data,
          firstName,
          token: result.params.access_token,
        };

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
        setUser(userData);
      }
    } catch {
      throw new Error('Não foi possível autenticar');
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(COLLECTION_USERS);
  }

  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);

    if (storage) {
      const userLogged = JSON.parse(storage) as User;
      api.defaults.headers.authorization = `Bearer ${userLogged.token}`;
      setUser(userLogged);
    }
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
