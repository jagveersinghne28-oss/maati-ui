import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CartDrawer from '../components/CartDrawer/CartDrawer';
import SearchDrawer from '../components/SearchDrawer/SearchDrawer';
import MobileMenu from '../components/MobileMenu/MobileMenu';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <SearchDrawer />
      <MobileMenu />
    </>
  );
}
