import { Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeMobileMenu } from '../../store/slices/uiSlice';
import s from './MobileMenu.module.scss';

const links = [
  ['Home', '/'], ['Collections', '/collections'], ['Dining', '/collections/dining'],
  ['Serveware', '/collections/serveware'], ['Decor', '/collections/decor'],
  ['Handmade Ceramics', '/collections/handmade'], ['About Us', '/about'], ['Contact', '/contact'],
  ['Wishlist', '/wishlist'], ['Account', '/account'],
];

export default function MobileMenu() {
  const dispatch = useDispatch();
  const open = useSelector((st) => st.ui.mobileMenuOpen);
  const close = () => dispatch(closeMobileMenu());
  return (
    <Drawer placement="left" width="86%" open={open} onClose={close} title={<span className={s.logo}>Maati</span>} styles={{ body: { padding: 0 } }}>
      <nav className={s.nav}>
        {links.map(([label, to]) => (
          <Link key={to} to={to} onClick={close} className={s.link}>{label}</Link>
        ))}
      </nav>
      <div className={s.foot}>
        <small>by ZerOne Enterprises</small>
        <a href="tel:+917017735070">+91 7017735070</a>
      </div>
    </Drawer>
  );
}
