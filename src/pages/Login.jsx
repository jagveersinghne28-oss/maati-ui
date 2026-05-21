import { Link, useNavigate } from 'react-router-dom';
import { Input, App } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';
import s from '../styles/pages.module.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { message } = App.useApp();
  const submit = (e) => {
    e.preventDefault();
    if (!email || !pwd) return message.error('Please fill all fields.');
    dispatch(login({ email, name: email.split('@')[0], token: 'demo-token' }));
    message.success('Welcome back.');
    nav('/account');
  };
  return (
    <div className={s.auth}>
      <div className={s.authCard}>
        <div className={s.head}><div className={s.eyebrow}>Account</div><h2>Sign in</h2></div>
        <form onSubmit={submit}>
          <div className={s.field}><label>Email</label><Input size="large" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div className={s.field}><label>Password</label><Input.Password size="large" value={pwd} onChange={(e) => setPwd(e.target.value)} /></div>
          <div style={{ textAlign: 'right', fontSize: 12 }}><Link to="/forgot-password" style={{ color: '#8B6B4A' }}>Forgot password?</Link></div>
          <button className={s.btn} type="submit">Sign in</button>
        </form>
        <div className={s.alt}>New to Maati? <Link to="/register">Create an account</Link></div>
      </div>
    </div>
  );
}
