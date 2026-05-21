import { Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { closeCart } from '../../store/slices/uiSlice';
import { updateQty, removeFromCart } from '../../store/slices/cartSlice';
import s from './CartDrawer.module.scss';

export default function CartDrawer() {
  const dispatch = useDispatch();
  const open = useSelector((st) => st.ui.cartOpen);
  const items = useSelector((st) => st.cart.items);
  const total = items.reduce((a, i) => a + i.price * i.qty, 0);

  return (
    <Drawer title="Your Bag" placement="right" width={460} open={open} onClose={() => dispatch(closeCart())} styles={{ body: { padding: 0, display: 'flex', flexDirection: 'column' }, header: { padding: '20px 24px', fontFamily: "'Cormorant Garamond', serif", fontSize: 22, letterSpacing: '0.04em' } }}>
      {items.length === 0 ? (
        <div className={s.empty}>
          <h4>Your bag is empty</h4>
          <p>Discover our handcrafted ceramic collection.</p>
          <Link to="/collections" onClick={() => dispatch(closeCart())} className={s.btn}>Shop now</Link>
        </div>
      ) : (
        <>
          <div className={s.list}>
            {items.map((i) => (
              <div className={s.item} key={i.id}>
                <div className={s.itemImg}><img src={i.image} alt={i.name} /></div>
                <div className={s.itemInfo}>
                  <h5>{i.name}</h5>
                  <div className={s.meta}>Ceramic</div>
                  <div className={s.qty}>
                    <button onClick={() => dispatch(updateQty({ id: i.id, qty: i.qty - 1 }))}>−</button>
                    <span>{i.qty}</span>
                    <button onClick={() => dispatch(updateQty({ id: i.id, qty: i.qty + 1 }))}>+</button>
                  </div>
                </div>
                <div className={s.itemRight}>
                  <div className={s.price}>₹{(i.price * i.qty).toLocaleString('en-IN')}</div>
                  <button className={s.remove} onClick={() => dispatch(removeFromCart(i.id))}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className={s.footer}>
            <div className={s.row}><span>Subtotal</span><span>₹{total.toLocaleString('en-IN')}</span></div>
            <div className={s.row}><span>Shipping</span><span>Calculated at checkout</span></div>
            <div className={s.total}><span>Total</span><span>₹{total.toLocaleString('en-IN')}</span></div>
            <Link to="/checkout" className={s.btn} onClick={() => dispatch(closeCart())}>Checkout</Link>
            <Link to="/cart" className={s.btnOutline} onClick={() => dispatch(closeCart())}>View bag</Link>
          </div>
        </>
      )}
    </Drawer>
  );
}
