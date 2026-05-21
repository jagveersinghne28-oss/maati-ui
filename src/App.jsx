import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppProviders from './components/AppProviders';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import About from './pages/About';
import Contact from './pages/Contact';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import './styles/global.scss';

export default function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="collections" element={<Collections />} />
            <Route path="collections/:category" element={<Category />} />
            <Route path="products/:slug" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="account" element={<Account />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<Forgot />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProviders>
  );
}
