import axios from 'axios';
import {API_BASE_URL, accessToken} from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAuthToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(accessToken, token);
  } catch (e) {}
};

export const api = axios.create({
  baseURL: API_BASE_URL,

  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'ngrok-skip-browser-warning': 'any',
  },
});

api.interceptors.request.use(
  async (config: any) => {
    const value = await AsyncStorage.getItem(accessToken);

    if (value) {
      config.headers.Authorization = `Bearer ${value}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);
