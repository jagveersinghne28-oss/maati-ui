import { useState } from 'react';
import { Input, App } from 'antd';
import { motion } from 'framer-motion';
import s from '../styles/pages.module.scss';

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const { message } = App.useApp();
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return message.error('Please complete the form.');
    message.success('Thank you. We will be in touch soon.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={s.page}>
      <div className={s.pageHead}>
        <div className={s.eyebrow}>Contact</div>
        <h1>Say hello</h1>
        <p>For orders, custom commissions or studio visits — we would love to hear from you.</p>
      </div>
      <div className={s.contact}>
        <motion.div {...fade} className={s.contactInfo}>
          <div className={s.eyebrow}>Reach the studio</div>
          <h2>Maati</h2>
          <p>A ZerOne Enterprises Brand. Handcrafted ceramic pieces, shipped across India.</p>
          <div className={s.block}>
            <h5>Phone</h5>
            <a href="tel:+917017735070">+91 7017735070</a>
          </div>
          <div className={s.block}>
            <h5>Email</h5>
            <a href="mailto:hello@maati.in">hello@maati.in</a>
          </div>
          <div className={s.block}>
            <h5>Business Hours</h5>
            <p>Monday — Saturday<br />10:00 AM — 7:00 PM IST</p>
          </div>
          <div className={s.block}>
            <h5>Follow</h5>
            <div className={s.social}>
              <a href="#">Instagram</a><a href="#">Pinterest</a><a href="#">Facebook</a>
            </div>
          </div>
        </motion.div>
        <motion.div {...fade} className={s.contactForm}>
          <h3>Send a message</h3>
          <form onSubmit={submit}>
            <div className={s.grid}>
              <Input size="large" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input size="large" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <div className={s.full}><Input size="large" placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} /></div>
              <div className={s.full}><Input.TextArea rows={5} placeholder="Your message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></div>
            </div>
            <button type="submit" className={s.btn}>Send message</button>
          </form>
        </motion.div>
      </div>
      <div className={s.map}>
        <iframe title="Maati Studio Location" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1754.6249877568591!2d77.83431124665569!3d28.41171313298565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI0JzQyLjIiTiA3N8KwNTAnMDcuNyJF!5e0!3m2!1sen!2sin!4v1779366215705!5m2!1sen!2sin" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  );
}
