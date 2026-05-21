import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { App } from 'antd';
import { removeFromWishlist } from '../store/slices/wishlistSlice';
import { addToCart } from '../store/slices/cartSlice';
import { openCart } from '../store/slices/uiSlice';
import s from '../styles/pages.module.scss';

export default function Wishlist() {
  const items = useSelector((st) => st.wishlist.items);
  const dispatch = useDispatch();
  const { message } = App.useApp();

  if (items.length === 0) {
    return (
      <div className={s.page}>
        <div className={s.empty}>
          <h3>Your wishlist is empty.</h3>
          <p>Save pieces you love for later.</p>
          <Link to="/collections" style={{ display: 'inline-block', marginTop: 16, padding: '16px 36px', background: '#1C1C1C', color: '#F8F5F1', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Browse ceramics</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={s.page}>
      <div className={s.pageHead}><div className={s.eyebrow}>Saved</div><h1>Your wishlist</h1></div>
      <div className={s.grid}>
        {items.map((p) => (
          <div key={p.id}>
            <Link to={`/products/${p.slug}`} style={{ display: 'block', aspectRatio: '4/5', overflow: 'hidden', background: '#EEE5DA', marginBottom: 16 }}>
              <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Link>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, marginBottom: 4 }}>{p.name}</div>
            <div style={{ fontSize: 14, marginBottom: 12 }}>₹{p.price.toLocaleString('en-IN')}</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => { dispatch(addToCart({ id: p.id, slug: p.slug, name: p.name, price: p.price, image: p.image })); dispatch(removeFromWishlist(p.id)); dispatch(openCart()); }} style={{ flex: 1, padding: '12px', background: '#1C1C1C', color: '#F8F5F1', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Move to bag</button>
              <button onClick={() => { dispatch(removeFromWishlist(p.id)); message.success('Removed'); }} style={{ padding: '12px 16px', border: '1px solid #1C1C1C', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
