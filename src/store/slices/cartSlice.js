import { createSlice } from '@reduxjs/toolkit';

const load = () => {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem('maati_cart') || '[]'); } catch { return []; }
};
const save = (items) => {
  if (typeof window !== 'undefined') localStorage.setItem('maati_cart', JSON.stringify(items));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: load() },
  reducers: {
    addToCart: (state, { payload }) => {
      const existing = state.items.find((i) => i.id === payload.id);
      if (existing) existing.qty += payload.qty || 1;
      else state.items.push({ ...payload, qty: payload.qty || 1 });
      save(state.items);
    },
    updateQty: (state, { payload }) => {
      const item = state.items.find((i) => i.id === payload.id);
      if (item) item.qty = Math.max(1, payload.qty);
      save(state.items);
    },
    removeFromCart: (state, { payload }) => {
      state.items = state.items.filter((i) => i.id !== payload);
      save(state.items);
    },
    clearCart: (state) => { state.items = []; save([]); },
  },
});

export const { addToCart, updateQty, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
