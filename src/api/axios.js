import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('maati_user');
    if (user) {
      try { config.headers.Authorization = `Bearer ${JSON.parse(user)?.token || ''}`; } catch {}
    }
  }
  return config;
});

export default api;
