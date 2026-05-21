import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { App } from 'antd';
import { logout } from '../store/slices/authSlice';
import s from '../styles/pages.module.scss';

export default function Account() {
  const user = useSelector((st) => st.auth.user);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { message } = App.useApp();
  const [tab, setTab] = useState('profile');

  useEffect(() => { if (!user) nav('/login'); }, [user, nav]);
  if (!user) return null;

  const tabs = [['profile', 'Profile'], ['orders', 'Orders'], ['wishlist', 'Wishlist'], ['addresses', 'Addresses']];

  return (
    <div className={s.page}>
      <div className={s.pageHead}><div className={s.eyebrow}>My Account</div><h1>Hello, {user.name}</h1></div>
      <div className={s.acc}>
        <aside className={s.accNav}>
          <h4>Menu</h4>
          {tabs.map(([id, label]) => (
            <button key={id} className={tab === id ? s.active : ''} onClick={() => setTab(id)}>{label}</button>
          ))}
          <button onClick={() => { dispatch(logout()); message.success('Signed out.'); nav('/'); }}>Logout</button>
        </aside>
        <div className={s.accPanel}>
          {tab === 'profile' && (<><h3>Profile</h3><p>Name: {user.name}</p><p>Email: {user.email}</p></>)}
          {tab === 'orders' && (<><h3>Recent orders</h3><p>You have no orders yet. <Link to="/collections" style={{ color: '#8B6B4A' }}>Start shopping</Link></p></>)}
          {tab === 'wishlist' && (<><h3>Saved pieces</h3><p>View your saved ceramic pieces on the <Link to="/wishlist" style={{ color: '#8B6B4A' }}>wishlist page</Link>.</p></>)}
          {tab === 'addresses' && (<><h3>Saved addresses</h3><p>No saved addresses yet.</p></>)}
        </div>
      </div>
    </div>
  );
}
