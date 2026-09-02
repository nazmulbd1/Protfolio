/* =========================================================
   Footer.jsx — পেজের নিচের অংশ (প্রোফেশনাল ডিজাইন)
   ---------------------------------------------------------
   � Container pattern: Herosection + About-এর মতো
      → section-এ (py + overflow-hidden + bg) থাকবে
      → Container size="xl" (1440px) সবকিছু center করবে

   🧩 অংশসমূহ:
     • TOP ROW    : Logo + ৩টা Contact Info (Email/Phone/Address)
     • DIVIDER    : পাতলা gray line
     • MIDDLE 4 COLS : About Company | Quick Links | Our Services | Newsletter
     • DIVIDER    : পাতলা gray line
     • BOTTOM ROW : Copyright | Help | Privacy | Terms
   ========================================================= */
import { useState } from 'react';
import Container from '../Layouts/Container';
import { cn } from '../../lib/utils';
import {
  BrandMark,
  MailIcon,
  PhoneIcon,
  LocationPinIcon,
  SendIcon,
  PinterestIcon,
  XIcon,
  FacebookIcon,
  InstagramIcon,
} from '../Icons';

/* =========================================================
   📋 Footer data — এখান থেকে সব লেখা/লিঙ্ক পরিবর্তন করা যাবে
   ========================================================= */
const FOOTER = {
  brandName: 'Weblance.',

  contacts: [
    { label: 'info@domainname.com',        href: 'mailto:info@domainname.com' },
    { label: '+(1) 123 – 456 – 789',       href: 'tel:+1123456789' },
    { label: '123 Business Street, Your City', href: '#' },
  ],

  aboutTitle: 'About Company',
  aboutText:
    'A creative professional dedicated to designing & developing modern digital experiences.',

  quickLinksTitle: 'Quick Links',
  quickLinks: [
    { label: 'Home',         href: '#' },
    { label: 'About Us',     href: '#' },
    { label: 'Our Services', href: '#' },
    { label: 'Blog',         href: '#' },
  ],

  servicesTitle: 'Our Services',
  services: [
    { label: 'Brand Strategy & Identity', href: '#' },
    { label: 'Frontend Development',      href: '#' },
    { label: 'Backend Development',       href: '#' },
    { label: 'Performance Optimization',  href: '#' },
  ],

  newsletterTitle: 'Subscribe To Our Newsletter',
  newsletterText:
    'Stay updated with my latest projects, design insights, and creative ideas.',
  newsletterPlaceholder: 'Enter Email Address*',

  copyright: 'Copyright © 2026 All Rights Reserved.',
  bottomLinks: [
    { label: 'Help',               href: '#' },
    { label: 'Privacy Policy',     href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ],

  socials: [
    { label: 'Pinterest',  Icon: PinterestIcon, href: '#' },
    { label: 'X',          Icon: XIcon,         href: '#' },
    { label: 'Facebook',   Icon: FacebookIcon,  href: '#' },
    { label: 'Instagram',  Icon: InstagramIcon, href: '#' },
  ],
};

/* =========================================================
   🟠 LOGO AREA
   → কমলা বৃত্তের ভিতর W brand mark, পাশে "Weblance."
   ========================================================= */
function FooterLogo() {
  return (
    <a href="#home" className="flex items-center gap-3 shrink-0 group">
      <div
        className={cn(
          'w-14 h-14 rounded-full bg-primary grid place-items-center',
          'shadow-[0_8px_30px_rgba(255,69,0,0.35)]',
          'transition-transform duration-300 ease-out group-hover:scale-105'
        )}
      >
        <BrandMark size={32} />
      </div>
      <span className="text-white text-3xl font-bold tracking-tight">
        {FOOTER.brandName}
      </span>
    </a>
  );
}

/* =========================================================
   📞 Contact Items (email, phone, address) — Icon + Label
   ========================================================= */
function ContactRow() {
  const IconList = [MailIcon, PhoneIcon, LocationPinIcon];

  return (
    <div className="flex flex-col pb-10 md:flex-row flex-wrap items-center justify-center gap-8 md:gap-14 w-full">
      {FOOTER.contacts.map((c, i) => {
        const Icon = IconList[i];
        return (
          <a
            key={i}
            href={c.href}
            className="group flex items-center gap-3 transition-colors duration-300"
          >
            <span
              className={cn(
                'w-10 h-10 grid place-items-center rounded-full',
                'bg-primary/10 text-primary',
                'transition-colors duration-300 group-hover:bg-primary group-hover:text-white'
              )}
            >
              <Icon size={22} />
            </span>
            <span className="text-white text-xl font-semibold group-hover:text-primary transition-colors duration-300">
              {c.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}

/* =========================================================
   🏢 About Company column
   → Title + description + social icons row
   ========================================================= */
function AboutColumn() {
  return (
    <div className="flex flex-col py-10 gap-6">
      <h4 className="text-white text-xl font-bold tracking-wide">
        {FOOTER.aboutTitle}
      </h4>
      <p className="text-white/70 text-base leading-7 max-w-sm">
        {FOOTER.aboutText}
      </p>
      <div className="flex items-center gap-4 pt-2">
        {FOOTER.socials.map(({ label, Icon, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className={cn(
              'w-11 h-11 rounded-full border border-white/15',
              'grid place-items-center text-white/75',
              'transition-all duration-300 ease-out',
              'hover:bg-primary hover:border-primary hover:text-white'
            )}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   ⚡️ Link List Component (Quick Links + Services)
   ========================================================= */
function LinkColumn({ title, items }) {
  return (
    <div className="flex flex-col py-10 gap-6">
      <h4 className="text-white text-xl font-bold tracking-wide">{title}</h4>
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="group flex items-start gap-3 text-white/75 text-base transition-colors duration-300 hover:text-white"
            >
              <span
                className={cn(
                  'mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0',
                  'transition-transform duration-300 group-hover:translate-x-1'
                )}
              />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =========================================================
   📬 Newsletter Column
   → Underline-style ইনপুট + ডান পাশে 🟠 Send বাটন
   ========================================================= */
function NewsletterColumn() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('📬 Subscribed email:', email);
    setEmail('');
  };

  return (
    <div className="flex flex-col py-10 gap-6">
      <h4 className="text-white text-xl font-bold tracking-wide">
        {FOOTER.newsletterTitle}
      </h4>
      <p className="text-white/70 text-base leading-7 max-w-sm">
        {FOOTER.newsletterText}
      </p>
      <form onSubmit={handleSubmit} className="pt-2">
        <div className="flex items-end gap-3 border-b border-white/20 pb-3 focus-within:border-primary transition-colors duration-300">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={FOOTER.newsletterPlaceholder}
            className={cn(
              'flex-1 bg-transparent outline-none text-white text-base',
              'placeholder:text-white/50 caret-primary py-1'
            )}
          />
          <button
            type="submit"
            className={cn(
              'shrink-0 w-11 h-11 grid place-items-center rounded-lg bg-primary text-white',
              'transition-all duration-300 ease-out',
              'hover:shadow-[0_8px_25px_rgba(255,69,0,0.45)] hover:-translate-y-0.5'
            )}
            aria-label="Subscribe newsletter"
          >
            <SendIcon size={22} />
          </button>
        </div>
      </form>
    </div>
  );
}

/* =========================================================
   ⬇️ BOTTOM ROW
   বাম: Copyright  |  ডান: Help | Privacy Policy | Terms
   ========================================================= */
function BottomBar() {
  return (
    <div className="flex flex-col pt-10 md:flex-row items-center justify-between gap-4 pt-2 pb-2">
      <p className="text-white/65 text-base">{FOOTER.copyright}</p>
      <nav className="flex flex-wrap items-center gap-5 text-white/65 text-base">
        {FOOTER.bottomLinks.map((l, idx) => (
          <span key={l.label} className="flex items-center gap-5">
            <a
              href={l.href}
              className="hover:text-white transition-colors duration-300"
            >
              {l.label}
            </a>
            {idx < FOOTER.bottomLinks.length - 1 && (
              <span aria-hidden="true" className="text-white/25">|</span>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}

/* =========================================================
   ⭐️ মূল Footer কম্পোনেন্ট (সবকিছু একসাথে)
   📌 Container pattern = Herosection / About-এর মতো
   ========================================================= */
function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative py-16 overflow-hidden bg-surface"
    >
      <Container size="xl" className="flex flex-col gap-12">
        {/* 1️⃣ TOP ROW — Logo + Contact Row */}
        <div className="flex flex-col items-center gap-10">
          <FooterLogo />
          <ContactRow />
        </div>

        {/* 2️⃣ DIVIDER */}
        <div aria-hidden="true" className="border-t border-white/10" />

        {/* 3️⃣ MIDDLE 4 কলাম */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <AboutColumn />
          <LinkColumn title={FOOTER.quickLinksTitle} items={FOOTER.quickLinks} />
          <LinkColumn title={FOOTER.servicesTitle} items={FOOTER.services} />
          <NewsletterColumn />
        </div>

        {/* 4️⃣ DIVIDER */}
        <div aria-hidden="true" className="border-t border-white/10" />

        {/* 5️⃣ BOTTOM ROW */}
        <BottomBar />
      </Container>
    </footer>
  );
}

export default Footer;
