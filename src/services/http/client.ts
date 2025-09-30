import axios from 'axios';
import { getSession } from 'next-auth/react';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token dynamically
apiClient.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    if (session?.backendToken) {
      config.headers.Authorization = `Bearer ${session.backendToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Request interceptor for debugging (development only)
if (process.env.NODE_ENV === 'development') {
  apiClient.interceptors.request.use(
    (config) => {
      console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`, {
        baseURL: config.baseURL,
        headers: config.headers,
        data: config.data,
        params: config.params,
      });
      return config;
    },
    (error) => {
      console.error('API Request Error:', error);
      return Promise.reject(error);
    }
  );
}

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`API Response: ${response.status}`, response.data);
    }
    return response;
  },
  (error) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('API Response Error:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        message: error.message,
      });
    }

    // Handle common HTTP errors
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login
      if (typeof window !== 'undefined') {
        console.warn('Unauthorized request - token may be expired');
        window.location.href = '/';
      }
    }

    if (error.response?.status >= 500) {
      console.error('Server error occurred');
    }

    return Promise.reject(error);
  }
);

export default apiClient;
