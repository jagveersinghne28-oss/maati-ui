import { createSlice } from '@reduxjs/toolkit';

const load = () => {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem('maati_wishlist') || '[]'); } catch { return []; }
};
const save = (items) => {
  if (typeof window !== 'undefined') localStorage.setItem('maati_wishlist', JSON.stringify(items));
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: { items: load() },
  reducers: {
    toggleWishlist: (state, { payload }) => {
      const exists = state.items.find((i) => i.id === payload.id);
      if (exists) state.items = state.items.filter((i) => i.id !== payload.id);
      else state.items.push(payload);
      save(state.items);
    },
    removeFromWishlist: (state, { payload }) => {
      state.items = state.items.filter((i) => i.id !== payload);
      save(state.items);
    },
  },
});

export const { toggleWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
