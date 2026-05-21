import { Link } from 'react-router-dom';
import { Input, App } from 'antd';
import { useState } from 'react';
import s from '../styles/pages.module.scss';

export default function Forgot() {
  const [email, setEmail] = useState('');
  const { message } = App.useApp();
  return (
    <div className={s.auth}>
      <div className={s.authCard}>
        <div className={s.head}><div className={s.eyebrow}>Reset</div><h2>Forgot password</h2></div>
        <form onSubmit={(e) => { e.preventDefault(); message.success('Reset link sent to ' + email); }}>
          <div className={s.field}><label>Email</label><Input size="large" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
          <button className={s.btn} type="submit">Send reset link</button>
        </form>
        <div className={s.alt}>Back to <Link to="/login">sign in</Link></div>
      </div>
    </div>
  );
}
