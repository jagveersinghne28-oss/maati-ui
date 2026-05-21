import { Link, useNavigate } from 'react-router-dom';
import { Input, App } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';
import s from '../styles/pages.module.scss';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', pwd: '' });
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { message } = App.useApp();
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.pwd) return message.error('Please fill all fields.');
    dispatch(login({ email: form.email, name: form.name, token: 'demo-token' }));
    message.success('Welcome to Maati.');
    nav('/account');
  };
  return (
    <div className={s.auth}>
      <div className={s.authCard}>
        <div className={s.head}><div className={s.eyebrow}>New here</div><h2>Create account</h2></div>
        <form onSubmit={submit}>
          <div className={s.field}><label>Full name</label><Input size="large" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
          <div className={s.field}><label>Email</label><Input size="large" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
          <div className={s.field}><label>Password</label><Input.Password size="large" value={form.pwd} onChange={(e) => setForm({ ...form, pwd: e.target.value })} /></div>
          <button className={s.btn} type="submit">Create account</button>
        </form>
        <div className={s.alt}>Already have an account? <Link to="/login">Sign in</Link></div>
      </div>
    </div>
  );
}
