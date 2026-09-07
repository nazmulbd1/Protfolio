import { useState } from 'react';
import Container from './Layouts/Container';
import { cn } from '../lib/utils';

/* =========================================================
   Contact Section — "Let's talk." + Briefing Form
   ---------------------------------------------------------
   Layout: ২ কলাম (desktop)
     LEFT :  [06] CONTACT label + বড় "Let's talk." হেডিং
             + ইয়েলো হাইলাইট সহ প্যারাগ্রাফ
             + ২x২ Contact Info Grid
             + "REPLY WITHIN 24H" Badge
     RIGHT:  Form Card — "BRIEFING" + Contact Form
             (First/Last name, Email, Company, Website, Message)
   ========================================================= */

/* =========================================================
   📝 আপনার তথ্য এখান থেকে পরিবর্তন করুন
   ========================================================= */
const CONTACT = {
  sectionLabel: 'CONTACT',
  heading: "Let's talk.",

  // প্যারাগ্রাফের অংশ গুলো — কোন কোন অংশ কমলা highlight হবে
  // highlight: true = কমলা ব্যাকগ্রাউন্ড + সাদা লেখা (ওয়েবসাইট থিম অনুযায়ী)
  paragraphs: [
    { text: 'Direct line to Nazmul — no middleman and no', highlight: true },
    { text: ' unnecessary back-and-forth. Tell me',         highlight: true },
    { text: 'about',                                         highlight: true },
    { text: ' your next web project or ecommerce idea, ',    highlight: true },
    { text: 'and',                                           highlight: true },
    { text: " I'll reply within 24 hours with concrete next",highlight: true },
    { text: ' steps.',                                       highlight: true },
  ],

  // ২x২ গ্রিডে যোগাযোগের তথ্য
  contactInfo: [
    { label: 'EMAIL',    value: 'nazmulsheikhnahid@gmail.com'      },
    { label: 'GITHUB',   value: 'github.com/nazmulbd1'      },
    // { label: 'LINKEDIN', value: 'linkedin.com/in/afsar-riyad' },
    { label: 'BASE',     value: 'Dhaka, Bangladesh'          },
  ],

  replyBadge: 'REPLY WITHIN 24H',

  briefingLabel: 'BRIEFING',
  formHeading: 'Send a short briefing.',

  consentText:
    'I consent to the processing of my data according to the privacy policy.',
  submitLabel: 'Send request',
};

/* 🎨 এই সেকশনের অ্যাক্সেন্ট রঙ = প্রজেক্টের কমলা Primary (#FF4500)
   (ওয়েবসাইটের বাকি সব সেকশনের সাথে মেলানোর জন্য) */

/* focus ring — input/button এর জন্য (কমলা primary) */
const FOCUS_RING =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary';

/* =========================================================
   ১) বাম পাশের Section Header (label + heading + para)
   ========================================================= */
function LeftHeader() {
  return (
    <div>
      {/* [06] CONTACT — ছোট মনোস্পেস লেবেল (ড্যাশ সহ) */}
      <div className="flex items-center gap-3 mb-8">
        <span
          aria-hidden="true"
          className="h-px w-6 bg-white/30"
        />
        <span
          className={cn(
            'font-mono tracking-[0.18em] uppercase',
            'text-[13px] font-bold text-white/60',
          )}
        >
          {CONTACT.sectionLabel}
        </span>
      </div>

      {/* বড় হেডিং — "Let's talk." (কমলা প্রাইমারি রঙে) */}
      <h2
        className={cn(
          'font-bold tracking-tight leading-[0.95]',
          'text-[64px] sm:text-[80px] lg:text-[96px]',
          'text-primary',
        )}
      >
        {CONTACT.heading}
      </h2>

      {/* প্যারাগ্রাফ — অংশ অনুযায়ী কমলা হাইলাইট */}
      <p
        className={cn(
          'mt-10 max-w-xl leading-[1.6]',
          'text-[20px] lg:text-[22px]',
          'text-white/90',
        )}
      >
        {CONTACT.paragraphs.map((part, i) => (
          <span
            key={i}
            className={cn(
              part.highlight && [
                'inline-block px-2 py-[2px] my-[2px]',
                'bg-primary text-text-inverse font-semibold',
              ],
            )}
          >
            {part.text}
          </span>
        ))}
      </p>
    </div>
  );
}

/* =========================================================
   ২) ২x২ Contact Info Grid + Reply Badge
   ========================================================= */
function ContactInfoBlock() {
  return (
    <div className="mt-14">
      {/* পাতলা Divider */}
      <div className="border-t border-white/15" aria-hidden="true" />

      {/* ২x২ গ্রিড — EMAIL / GITHUB / LINKEDIN / BASE */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
        {CONTACT.contactInfo.map((item) => (
          <div key={item.label} className="flex flex-col gap-2">
            {/* Label (uppercase, muted) */}
            <span
              className={cn(
                'font-mono tracking-[0.12em] uppercase',
                'text-[12px] font-bold text-white/50',
              )}
            >
              {item.label}
            </span>
            {/* Value (সাদা, bold) */}
            <span
              className={cn(
                'text-[15px] lg:text-[16px] font-semibold',
                'text-white/90 break-all',
              )}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* "REPLY WITHIN 24H" কমলা pill ব্যাজ */}
      <div className="mt-12">
        <span
          className={cn(
            'inline-block px-3 py-[6px]',
            'bg-primary text-text-inverse',
            'font-mono tracking-[0.1em] uppercase text-[12px] font-bold',
          )}
        >
          {CONTACT.replyBadge}
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   ৩) ডান পাশের ফর্ম Card
   ========================================================= */
function BriefingForm() {
  /* ---------- 📝 বিগিনারদের জন্য Form State ----------
     প্রতিটা input এর value এখানে track করা হয়। */
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
    message: '',
    consent: false,
  });

  // কোনো input এ টাইপ করলে state আপডেট হবে
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  // ফর্ম সাবমিট (শুধু console-এ প্রিন্ট, beginner-friendly demo)
  function handleSubmit(e) {
    e.preventDefault();
    console.log('📨 Contact Form Submitted:', form);
    alert('✅ Request sent! I will reply within 24 hours.');
  }

  return (
    <div
      className={cn(
        'w-full rounded-[2px] p-8 lg:p-10',
        'bg-surface-raised/60 border border-white/10',
      )}
    >
      {/* BRIEFING লেবেল + হেডিং (লেবেল = কমলা primary) */}
      <div>
        <span
          className={cn(
            'font-mono tracking-[0.15em] uppercase',
            'text-[12px] font-bold',
            'text-primary',
          )}
        >
          {CONTACT.briefingLabel}
        </span>
        <h3
          className={cn(
            'mt-4 font-bold tracking-tight leading-tight',
            'text-[28px] lg:text-[34px] text-white',
          )}
        >
          {CONTACT.formHeading}
        </h3>
      </div>

      {/* Divider */}
      <div className="mt-6 border-t border-white/15" aria-hidden="true" />

      {/* ফর্ম */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-8" noValidate>
        {/* Row ১: FIRST NAME + LAST NAME */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            label="FIRST NAME"
            required
          >
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Anna"
              required
              className={STYLES.input}
            />
          </FormField>

          <FormField
            label="LAST NAME"
            required
          >
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Smith"
              required
              className={STYLES.input}
            />
          </FormField>
        </div>

        {/* Row ২: EMAIL (full width) */}
        <FormField label="EMAIL" required>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="anna@company.com"
            required
            className={STYLES.input}
          />
        </FormField>

        {/* Row ৩: COMPANY + WEBSITE (optional) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField label="COMPANY" optional>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Studio Inc."
              className={STYLES.input}
            />
          </FormField>

          <FormField label="WEBSITE" optional>
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              placeholder="https://..."
              className={STYLES.input}
            />
          </FormField>
        </div>

        {/* Row ৪: MESSAGE textarea (optional) */}
        <FormField label="MESSAGE" optional>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Idea, industry, timeline — what we should know."
            className={cn(STYLES.input, 'resize-y min-h-[140px]')}
          />
        </FormField>

        {/* Checkbox: Consent */}
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
            className={cn(
              'mt-[2px] shrink-0 w-5 h-5 rounded-none',
              'bg-white/5 border border-white/30',
              'accent-primary',
              'cursor-pointer',
            )}
          />
          <span
            className={cn(
              'text-[13px] lg:text-[14px] leading-relaxed',
              'text-white/60',
            )}
          >
            {CONTACT.consentText}
          </span>
        </label>

        {/* Submit Button: outlined border style, → arrow */}
        <button
          type="submit"
          disabled={!form.consent}
          className={cn(
            'group relative w-full flex items-center justify-center gap-2',
            'px-6 py-5 rounded-none',
            'border border-white/25',
            'text-[15px] font-bold text-white',
            'transition-all duration-300 ease-out',
            FOCUS_RING,

            // hover হলে কমলা primary ভরে যাবে + সাদা লেখা
            'hover:bg-primary hover:text-text-inverse hover:border-primary',

            // consent না থাকলে disabled স্টাইল
            'disabled:opacity-40 disabled:cursor-not-allowed hover:disabled:bg-transparent hover:disabled:text-white hover:disabled:border-white/25',
          )}
        >
          {CONTACT.submitLabel}
          {/* ডান তীর → */}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>
      </form>
    </div>
  );
}

/* =========================================================
   ৪) ছোট FormField wrapper (Label + children input)
   ========================================================= */
function FormField({ label, required, optional, children }) {
  return (
    <label className="block">
      {/* উপরের Label + "*" required চিহ্ন */}
      <span className="mb-3 flex items-center gap-2">
        <span
          className={cn(
            'font-mono tracking-[0.1em] uppercase',
            'text-[12px] font-bold text-white/55',
          )}
        >
          {label}
        </span>
        {required && (
          <span className="text-[14px] font-bold text-primary leading-none">
            *
          </span>
        )}
        {optional && (
          <span
            className={cn(
              'font-mono tracking-[0.08em] uppercase',
              'text-[11px] font-semibold text-white/35',
            )}
          >
            (OPTIONAL)
          </span>
        )}
      </span>
      {/* input/textarea নিচে */}
      {children}
    </label>
  );
}

/* =========================================================
   Input স্টাইল — সব input/textarea একই স্টাইল পাবে
   ========================================================= */
const STYLES = {
  input: cn(
    'w-full px-4 py-[14px] rounded-[2px]',
    'bg-white/[0.04] border border-white/15',
    'text-[15px] text-white placeholder:text-white/30',
    'transition-all duration-200',
    'hover:border-white/30',
    FOCUS_RING,
    // focus হলে border কমলা primary
    'focus:border-primary',
  ),
};

/* =========================================================
   ⭐️ মূল Contact কম্পোনেন্ট
   📌 ২ কলাম Layout: বামে info (৬) + ডানে form (৬)
   ========================================================= */
function Contact() {
  return (
    <section
      id="contact"
      className={cn(
        'relative py-16 lg:py-24 overflow-hidden',
        'bg-surface',
      )}
    >
      <Container size="xl">
        <div
          className={cn(
            'grid grid-cols-1 lg:grid-cols-12',
            'gap-12 lg:gap-16 xl:gap-20',
            'items-start',
          )}
        >
          {/* বাম ৬ কলাম: Header + Contact Info */}
          <div className="lg:col-span-6">
            <LeftHeader />
            <ContactInfoBlock />
          </div>

          {/* ডান ৬ কলাম: Briefing Form */}
          <div className="lg:col-span-6">
            <BriefingForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
