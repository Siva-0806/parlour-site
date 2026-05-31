import { useState, useEffect, useRef } from 'react';
import '../styles/Booking.css';

const timeSlots = ['9:00 AM – 10:00 AM','10:00 AM – 11:00 AM','11:00 AM – 12:00 PM','12:00 PM – 1:00 PM','2:00 PM – 3:00 PM','3:00 PM – 4:00 PM','4:00 PM – 5:00 PM','5:00 PM – 6:00 PM','6:00 PM – 7:00 PM'];
const serviceOptions = ['Bridal Makeup','Party Makeup','Hair Styling','Hair Coloring','Facial & Skin Care','Eyebrow Threading & Shaping','Permanent Treatments','Advanced Skin Treatments','Pre-Bridal Package','Other'];

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', time: '', guests: '', msg: '' });
  const [success, setSuccess] = useState(false);
  const dateRef = useRef(null);

  useEffect(() => {
    if (dateRef.current) {
      const today = new Date();
      today.setDate(today.getDate() + 1);
      dateRef.current.min = today.toISOString().split('T')[0];
    }
  }, []);

  const handle = () => {
    if (!form.name) { alert('Please enter your name.'); return; }
    if (!form.phone) { alert('Please enter your phone number.'); return; }
    if (!form.service) { alert('Please select a service.'); return; }

    let text = "Hello N DREAM'S PARLOUR!%0A%0A";
    text += `*Name:* ${encodeURIComponent(form.name)}%0A`;
    text += `*Phone:* ${encodeURIComponent(form.phone)}%0A`;
    text += `*Service:* ${encodeURIComponent(form.service)}%0A`;
    if (form.date) text += `*Date:* ${encodeURIComponent(form.date)}%0A`;
    if (form.time) text += `*Time:* ${encodeURIComponent(form.time)}%0A`;
    if (form.guests) text += `*Guests:* ${encodeURIComponent(form.guests)}%0A`;
    if (form.msg) text += `*Message:* ${encodeURIComponent(form.msg)}%0A`;
    text += '%0AI would like to book an appointment. Please confirm!';

    window.open(`https://wa.me/918695551665?text=${text}`, '_blank');
    setSuccess(true);
    setTimeout(() => { setForm({ name: '', phone: '', service: '', date: '', time: '', guests: '', msg: '' }); setSuccess(false); }, 10000);
  };

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <section id="booking" className="booking-section section-pad">
      <div className="booking-inner">
        <div className="booking-header reveal">
          <span className="eyebrow">Reserve Your Experience</span>
          <h2 className="section-heading">Book an <em>Appointment</em></h2>
          <span className="ornament" />
          <p className="section-lead center">Your transformation begins with a single step. Let us know how we can serve you — we'll confirm within 2 hours.</p>
        </div>
        <div className="form-wrap reveal" style={{ transitionDelay: '.2s' }}>
          {success ? (
            <div className="form-success show">
              <div className="success-icon">✦</div>
              <div className="success-title">Appointment Requested!</div>
              <div className="success-text">
                Thank you! We'll call you within 2 hours to confirm your booking.<br /><br />
                📞 Or call us directly: <a href="tel:+918695551665" style={{ color: 'var(--orange)' }}>+91 86955 51665</a><br />
                💬 WhatsApp: <a href="https://wa.me/918695551665" style={{ color: 'var(--orange)' }} target="_blank" rel="noreferrer">Chat Now</a>
              </div>
            </div>
          ) : (
            <div className="form-grid">
              <div className="form-group">
                <label className="lbl">Full Name</label>
                <input className="finput" type="text" placeholder="Your beautiful name" value={form.name} onChange={set('name')} />
              </div>
              <div className="form-group">
                <label className="lbl">Phone Number</label>
                <input className="finput" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={set('phone')} />
              </div>
              <div className="form-group">
                <label className="lbl">Service</label>
                <select className="fselect" value={form.service} onChange={set('service')}>
                  <option value="">Choose your service</option>
                  {serviceOptions.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="lbl">Preferred Date</label>
                <input className="finput" type="date" ref={dateRef} value={form.date} onChange={set('date')} />
              </div>
              <div className="form-group">
                <label className="lbl">Preferred Time</label>
                <select className="fselect" value={form.time} onChange={set('time')}>
                  <option value="">Select time slot</option>
                  {timeSlots.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="lbl">No. of Guests</label>
                <select className="fselect" value={form.guests} onChange={set('guests')}>
                  <option value="">Just me</option>
                  <option>2 guests</option>
                  <option>3–5 guests</option>
                  <option>Group (5+)</option>
                </select>
              </div>
              <div className="form-group full">
                <label className="lbl">Message / Special Requests</label>
                <textarea className="ftextarea" placeholder="Tell us about your vision, special requirements, occasion details, or any questions..." value={form.msg} onChange={set('msg')} />
              </div>
              <button className="fsub" onClick={handle}>✦ Confirm My Appointment</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
