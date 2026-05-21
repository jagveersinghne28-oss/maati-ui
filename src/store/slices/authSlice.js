import { createSlice } from '@reduxjs/toolkit';

const load = () => {
  if (typeof window === 'undefined') return null;
  try { return JSON.parse(localStorage.getItem('maati_user') || 'null'); } catch { return null; }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: load() },
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
      if (typeof window !== 'undefined') localStorage.setItem('maati_user', JSON.stringify(payload));
    },
    logout: (state) => {
      state.user = null;
      if (typeof window !== 'undefined') localStorage.removeItem('maati_user');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
