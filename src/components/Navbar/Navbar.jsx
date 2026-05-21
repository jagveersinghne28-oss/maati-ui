import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SearchOutlined, HeartOutlined, ShoppingOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { openCart, openSearch, openMobileMenu } from '../../store/slices/uiSlice';
import s from './Navbar.module.scss';

const MEGA = {
  Collections: {
    columns: [
      { title: 'Shop', links: [['All Ceramics', '/collections'], ['Bestsellers', '/collections?filter=bestsellers'], ['Handmade', '/collections/handmade']] },
      { title: 'Category', links: [['Dining', '/collections/dining'], ['Serveware', '/collections/serveware'], ['Decor', '/collections/decor'], ['Handmade Ceramics', '/collections/handmade']] },
    ],
    features: [
      { img: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&q=80', label: 'Dining', to: '/collections/dining' },
      { img: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&q=80', label: 'Decor', to: '/collections/decor' },
    ],
  },
};

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(null);
  const dispatch = useDispatch();
  const loc = useLocation();
  const cartCount = useSelector((s) => s.cart.items.reduce((a, i) => a + i.qty, 0));
  const wishCount = useSelector((s) => s.wishlist.items.length);

  const isActive = (p) => loc.pathname === p;

  return (
    <>
      <div className={s.bar}><span>Free shipping on orders above ₹2,500 · Handcrafted in India</span></div>
      <nav className={s.nav} onMouseLeave={() => setMegaOpen(null)}>
        <div className={s.inner}>
          <div className={s.left}>
            <button className={`${s.iconBtn} ${s.burger}`} aria-label="Menu" onClick={() => dispatch(openMobileMenu())}><MenuOutlined style={{ fontSize: 20 }} /></button>
            <Link to="/" className={`${s.link} ${isActive('/') ? s.active : ''}`}>Home</Link>
            <span className={s.link} onMouseEnter={() => setMegaOpen('Collections')}>Collections</span>
            <Link to="/collections/dining" className={s.link}>Dining</Link>
            <Link to="/collections/serveware" className={s.link}>Serveware</Link>
            <Link to="/collections/decor" className={s.link}>Decor</Link>
          </div>
          <Link to="/" className={s.logo}>Maati<small>by ZerOne Enterprises</small></Link>
          <div className={s.right}>
            <Link to="/about" className={s.link}>About</Link>
            <Link to="/contact" className={s.link}>Contact</Link>
            <button className={s.iconBtn} aria-label="Search" onClick={() => dispatch(openSearch())}><SearchOutlined style={{ fontSize: 18 }} /></button>
            <Link to="/wishlist" className={s.iconBtn} aria-label="Wishlist">
              <HeartOutlined style={{ fontSize: 18 }} />
              {wishCount > 0 && <span className={s.badge}>{wishCount}</span>}
            </Link>
            <Link to="/account" className={`${s.iconBtn} ${s.desktopOnly}`} aria-label="Account"><UserOutlined style={{ fontSize: 18 }} /></Link>
            <button className={s.iconBtn} aria-label="Cart" onClick={() => dispatch(openCart())}>
              <ShoppingOutlined style={{ fontSize: 20 }} />
              {cartCount > 0 && <span className={s.badge}>{cartCount}</span>}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {megaOpen && MEGA[megaOpen] && (
            <motion.div className={s.mega} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
              <div className={s.megaGrid}>
                {MEGA[megaOpen].columns.map((col) => (
                  <div className={s.megaCol} key={col.title}>
                    <h5>{col.title}</h5>
                    {col.links.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}
                  </div>
                ))}
                <div className={s.megaFeature}>
                  {MEGA[megaOpen].features.map((f) => (
                    <Link key={f.to} to={f.to} className={s.card}>
                      <img src={f.img} alt={f.label} loading="lazy" />
                      <span>{f.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
