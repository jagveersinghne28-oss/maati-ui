import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartOpen: false, searchOpen: false, mobileMenuOpen: false },
  reducers: {
    openCart: (s) => { s.cartOpen = true; },
    closeCart: (s) => { s.cartOpen = false; },
    openSearch: (s) => { s.searchOpen = true; },
    closeSearch: (s) => { s.searchOpen = false; },
    openMobileMenu: (s) => { s.mobileMenuOpen = true; },
    closeMobileMenu: (s) => { s.mobileMenuOpen = false; },
  },
});

export const { openCart, closeCart, openSearch, closeSearch, openMobileMenu, closeMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;
