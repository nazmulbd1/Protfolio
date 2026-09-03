import { useEffect, useRef, useState } from 'react';
import Container from '../Layouts/Container';
import { cn } from '../../lib/utils';
import {
  ArrowRight,
  BrandMark,
  ChevronDown,
  CloseIcon,
  MenuIcon,
} from '../Icons';


// ----- Brand / Menu Items (এখান থেকে পরিবর্তন করা যাবে easily) -----
const BRAND = { name: 'NS', homeHref: '/' };

const NAV_ITEMS = [
  { label: 'Home',      href: '/',         hasDropdown: true },
  { label: 'About Us',  href: '/about',    hasDropdown: false },
  { label: 'Services',  href: '/services', hasDropdown: false },
  { label: 'Blog',      href: '/blog',     hasDropdown: false },
  { label: 'Pages',     href: '/pages',    hasDropdown: true },
  { label: 'Contact Us',href: '/contact',  hasDropdown: false },
];

// Focus ring যাতে কীবোর্ড দিয়ে navigate করলে দেখা যায় (accessibility)
const FOCUS_RING =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary';

// ১) BRAND LOGO অংশ (বাম পাশে)
function Brand() {
  return (
    <a
      href={BRAND.homeHref}
      aria-label={`${BRAND.name} — হোমপেজে যান`}
      className={cn(
        'flex items-center gap-3 shrink-0',
        FOCUS_RING,
        'rounded-lg p-1 -m-1',
      )}
    >
      {/* কমলা রঙের বৃত্তের ভিতরে ডাবল অ্যারো লোগো */}
      <span
        className={cn(
          'w-10 h-10 rounded-full flex items-center justify-center',
          'bg-primary hover:scale-[1.03]',
          'shadow-[0_6px_18px_-4px_rgba(255,69,0,0.5)] transition-transform duration-300',
        )}
        aria-hidden="true"
      >
        <BrandMark size={22} />
      </span>

      {/* ব্র্যান্ডের নাম — Weblance. */}
      <span className="text-text-inverse text-3xl font-bold tracking-tight select-none">
        {BRAND.name}
        <span className="text-primary">.</span>
      </span>
    </a>
  );
}

// ২) একক Menu Link
function NavLink({ item }) {
  return (
    <li className="relative">
      <a
        href={item.href}
        aria-haspopup={item.hasDropdown ? 'menu' : undefined}
        aria-expanded={item.hasDropdown ? 'false' : undefined}
        className={cn(
          'inline-flex items-center gap-1',
          'text-text-inverse text-lg font-medium',
          'transition-colors duration-300 ease-out',
          'hover:text-primary focus-visible:text-primary',
          FOCUS_RING,
          'rounded-md px-1',
        )}
      >
        {item.label}
        {/* ড্রপডাউন আছে হলে নিচে ক্যারেট দেখাবে */}
        {item.hasDropdown && <ChevronDown className="mt-0.5" />}
      </a>
    </li>
  );
}

// ৩) Contact Us বাটন

function ContactButton({ className = '', onClick }) {
  return (
    <a
      href="/contact"
      role="button"
      onClick={onClick}
      className={cn(
        // বাটনের basic দৃশ্য
        'group relative overflow-hidden z-0',
        'inline-flex items-center gap-3',
        'px-3 py-1 rounded-pill',
        'text-lg font-semibold text-text-inverse',
        'transition-colors duration-400 ease-out',
        'bg-primary hover:text-primary focus-visible:text-primary',
        FOCUS_RING,
        'focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
        'active:translate-y-[1px]',

        // ----- Hover এ সাদা রঙ বাম → ডান slide -----
        `before:content-[''] before:absolute before:inset-y-0 before:-left-full before:w-full before:h-full`,
        'before:bg-text-inverse before:transition-[left] before:duration-400 before:ease-out before:-z-10',
        'hover:before:left-0 focus-visible:before:left-0',

        className,
      )}
    >
      {/* লেখা + আইকন z-10 করা হয়েছে যাতে before layer এদের উপরে না আসে */}
      <span className="relative z-10">Contact Us</span>
      <span
        className={cn(
          'relative z-10',
          'w-10 h-10 rounded-pill flex items-center justify-center',
          'transition-colors duration-400 ease-out',
          'bg-text-inverse group-hover:bg-primary group-focus-visible:bg-primary',
        )}
      >
        <ArrowRight
          className={cn(
            'transition-colors duration-400 ease-out',
            'text-primary group-hover:text-text-inverse group-focus-visible:text-text-inverse',
          )}
        />
      </span>
    </a>
  );
}

// ৪) Desktop-এর মেনু (md বা তার উপরে screen-এ দেখা যায়)
function DesktopNav() {
  return (
    <nav
      className="hidden md:flex items-center justify-end flex-1 gap-8"
      aria-label="Primary"
    >
      <ul className="flex items-center gap-8" role="menubar">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.label} item={item} role="none" />
        ))}
      </ul>
      <ContactButton />
    </nav>
  );
}

// ৫) Mobile Menu Toggle বাটন (হামবার্গার / ক্রস আইকন)
function MobileMenuToggle({ open, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={open ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
      aria-expanded={open}
      aria-controls="mobile-nav"
      className={cn(
        'md:hidden inline-flex items-center justify-center',
        'w-11 h-11 rounded-md',
        'text-text-inverse hover:text-primary',
        'transition-colors duration-200',
        FOCUS_RING,
      )}
    >
      {open ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}


// ৬) Mobile মেনু (md এর নিচে — মোবাইল/ট্যাবে)
function MobileNav({ open, onNavigate }) {
  if (!open) return null;

  return (
    <nav
      id="mobile-nav"
      className="md:hidden pt-6 pb-2 mt-5 border-t border-white/10"
      aria-label="Mobile"
    >
      <ul className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={onNavigate}
              className={cn(
                'block px-3 py-2.5 rounded-lg',
                'text-text-inverse font-medium',
                'transition-colors duration-200',
                'hover:bg-surface-hover hover:text-primary',
                'focus-visible:bg-surface-hover focus-visible:text-primary',
                FOCUS_RING,
              )}
            >
              {item.label}
              {item.hasDropdown && <span aria-hidden="true"> ▾</span>}
            </a>
          </li>
        ))}
        {/* সবার নিচে Contact Us বাটন */}
        <li className="pt-3">
          <ContactButton onClick={onNavigate} className="w-full justify-center" />
        </li>
      </ul>
    </nav>
  );
}
// ⭐️ মূল Navbar কম্পোনেন্ট (সব উপাংশ একসাথে এখানে)
function Navbar({ isHeroPage = false }) {
  // মোবাইল মেনু open/close-এর state (useBoolean এর সহজ alternative)
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);
  useEffect(() => {
    if (!menuOpen) return undefined;
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup: useEffect return করা ফাংশনটা component unmount হলে চলে
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]); // menuOpen পরিবর্তন হলে effect re-run হবে

  // -------- Effect 2: বাইরে ক্লিক করলে মেনু বন্ধ করা --------
  useEffect(() => {
    if (!menuOpen) return undefined;

    function handleClickOutside(e) {
      // current আছে কিনা + ক্লিক করা জায়গা navbar-এর ভিতরে কিনা
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header
      ref={navRef}
      className={cn(
        'sticky top-0 z-50',
        // 👇 Full-width gray-400 bottom border (পুরো স্ক্রিন জুড়ে)
        'border-b border-b-[1px] border-gray-400',
        isHeroPage
          ? 'bg-transparent shadow-none'
          : 'bg-surface shadow-nav',
      )}
    >
      {/* 📌 Container size="xl" = 1440px (Hero/About/Services এর সাথে একদম মিল)
           → Navbar-এর শুধুমাত্র কনটেন্ট (Brand, Menu, MobileNav) এই Container-এর ভিতরে
              আর border উপরের header-এ → full width */}
      <Container size="xl">
        {/* --------------- উপরের মূল Navbar Row (Brand + Menu + Toggle) --------------- */}
        <div className="flex items-center justify-between gap-6 py-5">
          {/* বাম পাশে Brand — Container-এর প্যাডিং-এর ভিতরে (1440px) */}
          <Brand />

          {/* ডান পাশে Desktop মেনু */}
          <DesktopNav />

          {/* মোবাইলে Toggle বাটন */}
          <MobileMenuToggle
            open={menuOpen}
            onToggle={() => setMenuOpen((prev) => !prev)}
          />
        </div>

        {/* --------------- নিচে Mobile মেনু (খোলা থাকলে দেখাবে) ---------------
             → MobileNav ও Container-এর ভিতরে থাকছে → 1440px এর মধ্যে */}
        <MobileNav open={menuOpen} onNavigate={() => setMenuOpen(false)} />
      </Container>
    </header>
  );
}

export default Navbar;
