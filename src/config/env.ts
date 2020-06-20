declare global {
  interface Window {
    ENV: {
      APP_ENV: string;
      API_URL: string;
    };
  }
}

export type Envs = 'localhost' | 'stage' | 'prod';

export const APP_ENV = 'localhost'
export const API_URL = 'http://localhost:1337/'
