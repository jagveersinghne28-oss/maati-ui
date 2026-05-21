import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Input, App } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../store/slices/cartSlice';
import s from '../styles/pages.module.scss';

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [pay, setPay] = useState('upi');
  const items = useSelector((st) => st.cart.items);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { message } = App.useApp();
  const subtotal = items.reduce((a, i) => a + i.price * i.qty, 0);
  const shipping = subtotal >= 2500 ? 0 : 150;
  const total = subtotal + shipping;

  const placeOrder = () => {
    message.success('Order placed. We will be in touch.');
    dispatch(clearCart());
    nav('/account');
  };

  return (
    <div className={s.page}>
      <div className={s.pageHead}><div className={s.eyebrow}>Checkout</div><h1>Complete your order</h1></div>
      <div className={s.checkout}>
        <div>
          <div className={s.steps}>
            <div className={`${s.step} ${step >= 1 ? s.active : ''}`}>1 · Address</div>
            <div className={`${s.step} ${step >= 2 ? s.active : ''}`}>2 · Delivery</div>
            <div className={`${s.step} ${step >= 3 ? s.active : ''}`}>3 · Payment</div>
          </div>

          {step === 1 && (
            <div className={s.formGrid}>
              <div><label>First name</label><Input size="large" /></div>
              <div><label>Last name</label><Input size="large" /></div>
              <div className={s.full}><label>Email</label><Input size="large" type="email" /></div>
              <div className={s.full}><label>Phone</label><Input size="large" /></div>
              <div className={s.full}><label>Address</label><Input size="large" /></div>
              <div><label>City</label><Input size="large" /></div>
              <div><label>State</label><Input size="large" /></div>
              <div><label>PIN</label><Input size="large" /></div>
              <div><label>Country</label><Input size="large" defaultValue="India" /></div>
              <div className={s.full}><button onClick={() => setStep(2)} style={{ padding: '16px 36px', background: '#1C1C1C', color: '#F8F5F1', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 12 }}>Continue to delivery</button></div>
            </div>
          )}
          {step === 2 && (
            <div className={s.payMethods}>
              {[{ id: 'std', name: 'Standard delivery', sub: '3–5 business days', price: shipping }, { id: 'exp', name: 'Express delivery', sub: '1–2 business days', price: shipping + 250 }].map((d) => (
                <label key={d.id}>
                  <input type="radio" name="delivery" defaultChecked={d.id === 'std'} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18 }}>{d.name}</div>
                    <div style={{ fontSize: 12, color: '#666' }}>{d.sub}</div>
                  </div>
                  <span style={{ fontWeight: 500 }}>{d.price === 0 ? 'Free' : `₹${d.price}`}</span>
                </label>
              ))}
              <button onClick={() => setStep(3)} style={{ padding: '16px 36px', background: '#1C1C1C', color: '#F8F5F1', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 12 }}>Continue to payment</button>
            </div>
          )}
          {step === 3 && (
            <>
              <div className={s.payMethods}>
                {[{ id: 'upi', name: 'UPI', icon: 'UPI' }, { id: 'card', name: 'Credit / Debit Card', icon: 'CARD' }, { id: 'cod', name: 'Cash on Delivery', icon: 'COD' }].map((m) => (
                  <label key={m.id} className={pay === m.id ? s.sel : ''}>
                    <input type="radio" checked={pay === m.id} onChange={() => setPay(m.id)} name="pay" />
                    <span style={{ width: 48, height: 30, background: '#EEE5DA', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, letterSpacing: '0.12em', fontWeight: 600 }}>{m.icon}</span>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18 }}>{m.name}</span>
                  </label>
                ))}
              </div>
              {pay === 'upi' && <Input size="large" placeholder="yourname@upi" style={{ marginBottom: 16 }} />}
              {pay === 'card' && (
                <div className={s.formGrid}>
                  <div className={s.full}><label>Card number</label><Input size="large" placeholder="1234 5678 9012 3456" /></div>
                  <div><label>Expiry</label><Input size="large" placeholder="MM/YY" /></div>
                  <div><label>CVV</label><Input size="large" placeholder="•••" /></div>
                </div>
              )}
              <button onClick={placeOrder} style={{ padding: '18px 36px', background: '#1C1C1C', color: '#F8F5F1', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 16 }}>Place order · ₹{total.toLocaleString('en-IN')}</button>
            </>
          )}
        </div>

        <aside className={s.summary}>
          <h4>Order Summary</h4>
          {items.map((i) => (
            <div key={i.id} className={s.row}><span>{i.name} × {i.qty}</span><span>₹{(i.price * i.qty).toLocaleString('en-IN')}</span></div>
          ))}
          <div className={s.row}><span>Shipping</span><span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span></div>
          <div className={s.total}><span>Total</span><span>₹{total.toLocaleString('en-IN')}</span></div>
          <Link to="/cart" style={{ display: 'block', textAlign: 'center', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666' }}>← Back to bag</Link>
        </aside>
      </div>
    </div>
  );
}
