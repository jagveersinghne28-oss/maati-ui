import { Link } from 'react-router-dom';
import { App } from 'antd';
import s from './Footer.module.scss';

export default function Footer() {
  const { message } = App.useApp();
  const onSub = (e) => { e.preventDefault(); message.success('Welcome to Maati. Check your inbox.'); e.currentTarget.reset(); };
  return (
    <footer className={s.footer}>
      <div className={s.top}>
        <div className={s.brand}>
          <h3>Maati</h3>
          <p>Handcrafted ceramic objects rooted in earth and quiet ritual. Made slowly, in small batches, by artisans across India.</p>
          <small>A ZerOne Enterprises Brand</small>
          <form className={s.news} onSubmit={onSub}>
            <input type="email" required placeholder="Enter your email" aria-label="Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className={s.col}>
          <h5>Shop</h5>
          <Link to="/collections/dining">Dining</Link>
          <Link to="/collections/serveware">Serveware</Link>
          <Link to="/collections/decor">Decor</Link>
          <Link to="/collections/handmade">Handmade</Link>
        </div>
        <div className={s.col}>
          <h5>Company</h5>
          <Link to="/about">About Maati</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/account">My Account</Link>
          <Link to="/wishlist">Wishlist</Link>
        </div>
        <div className={s.col}>
          <h5>Reach Us</h5>
          <p>+91 7017735070</p>
          <p>hello@maati.in</p>
          <p>Mon — Sat · 10am to 7pm</p>
        </div>
      </div>
      <div className={s.bottom}>
        <span>© {new Date().getFullYear()} Maati · ZerOne Enterprises. All rights reserved.</span>
        <div className={s.social}>
          <a href="#">Instagram</a><a href="#">Pinterest</a><a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
