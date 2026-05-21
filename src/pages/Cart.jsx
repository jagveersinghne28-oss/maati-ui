import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { App } from 'antd';
import { updateQty, removeFromCart } from '../store/slices/cartSlice';
import s from '../styles/pages.module.scss';

export default function Cart() {
  const items = useSelector((st) => st.cart.items);
  const dispatch = useDispatch();
  const { message } = App.useApp();
  const subtotal = items.reduce((a, i) => a + i.price * i.qty, 0);

  if (items.length === 0) {
    return (
      <div className={s.page}>
        <div className={s.empty}>
          <h3>Your bag is empty.</h3>
          <p>Discover our handcrafted ceramic pieces.</p>
          <Link to="/collections" style={{ display: 'inline-block', marginTop: 16, padding: '16px 36px', background: '#1C1C1C', color: '#F8F5F1', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Start shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={s.page}>
      <div className={s.pageHead}>
        <div className={s.eyebrow}>Shopping Bag</div>
        <h1>Your selection</h1>
      </div>
      <div className={s.cartPage}>
        <table className={s.cartTable}>
          <thead><tr><th>Product</th><th>Quantity</th><th style={{ textAlign: 'right' }}>Total</th></tr></thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.id}>
                <td>
                  <div className={s.cellProd}>
                    <img src={i.image} alt={i.name} />
                    <div>
                      <h5>{i.name}</h5>
                      <small>₹{i.price.toLocaleString('en-IN')}</small>
                      <div><button style={{ marginTop: 8, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666' }} onClick={() => dispatch(removeFromCart(i.id))}>Remove</button></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'inline-flex', border: '1px solid #1C1C1C' }}>
                    <button onClick={() => dispatch(updateQty({ id: i.id, qty: i.qty - 1 }))} style={{ width: 36, height: 36 }}>−</button>
                    <span style={{ width: 36, lineHeight: '36px', textAlign: 'center' }}>{i.qty}</span>
                    <button onClick={() => dispatch(updateQty({ id: i.id, qty: i.qty + 1 }))} style={{ width: 36, height: 36 }}>+</button>
                  </div>
                </td>
                <td style={{ textAlign: 'right', fontWeight: 500 }}>₹{(i.price * i.qty).toLocaleString('en-IN')}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <aside className={s.summary}>
          <h4>Order Summary</h4>
          <div className={s.row}><span>Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div>
          <div className={s.row}><span>Shipping</span><span>{subtotal >= 2500 ? 'Free' : '₹150'}</span></div>
          <div className={s.row}><span>Tax (incl.)</span><span>—</span></div>
          <div className={s.total}><span>Total</span><span>₹{(subtotal + (subtotal >= 2500 ? 0 : 150)).toLocaleString('en-IN')}</span></div>
          <div className={s.promo}>
            <input placeholder="Promo code" />
            <button onClick={() => message.info('Invalid code.')}>Apply</button>
          </div>
          <Link to="/checkout" className={s.btn}>Proceed to checkout</Link>
        </aside>
      </div>
    </div>
  );
}
