/* =========================================================
   Icons — সব আইকন এক জায়গায়
   ---------------------------------------------------------
   প্রতিটা আইকনই SVG দিয়ে বানানো।
   Props:
     - className  : Tailwind class (যেমন: color, margin)
     - size       : প্রস্থ + উচ্চতা (পিক্সেল)
     - strokeWidth: লাইনের মোটা (শুধু stroke-based আইকনের জন্য)

   baseProps() = প্রতিটা SVG-এর জন্য কমন প্রপার্টি (viewBox, width, height ইত্যাদি)
   ========================================================= */

// সব আইকনে যে প্রপার্টি গুলো একরকম থাকে — বারবার না লিখে এখান থেকে নিচ্ছি
function baseProps(className = '', size = 24) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true, // স্ক্রিন রিডার এটা উপেক্ষা করবে
    className,
  };
}

/* ---------- নিচে ছোট থেকে বড় সব আইকন ---------- */

// ⌄ নিচে নামা (Chevron) — ড্রপডাউন মেনুতে ব্যবহৃত
export function ChevronDown({ className = '', size = 16, strokeWidth = 2 }) {
  return (
    <svg {...baseProps(className, size)} stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// → ডান দিকে তীর
export function ArrowRight({ className = '', size = 20, strokeWidth = 2.5 }) {
  return (
    <svg {...baseProps(className, size)} stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

// ☰ হামবার্গার মেনু (মোবাইলে ৩টা লাইন)
export function MenuIcon({ className = '', size = 24, strokeWidth = 2 }) {
  return (
    <svg {...baseProps(className, size)} stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

// ✕ ক্রস/বন্ধ আইকন
export function CloseIcon({ className = '', size = 24, strokeWidth = 2 }) {
  return (
    <svg {...baseProps(className, size)} stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// ⇱⇲ Weblance-এর লোগো (নেভবারের কমলা বৃত্তে)
export function BrandMark({ className = '', size = 28 }) {
  return (
    <svg {...baseProps(className, size)}>
      <path d="M13 4 5 12l8 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 4l-8 8 8 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* =========================================================
   Experience Badge-এর মাঝের লোগো
   ৪টা পাতলা পাপড়ি (পুষ্পাকার) রম্বস আকৃতির
   ========================================================= */
export function ExperienceLogo({ className = '', size = 32 }) {
  return (
    <svg {...baseProps(className, size)} viewBox="0 0 48 48" fill="#fff">
      {/* উপরের পাপড়ি */}
      <path d="M24 4c-2 6-5 8-9 8 0 4 2 7 6 10 3-3 5-6 6-10 4 0 7-2 9-8-2 0-5 2-6 0-1-2-3-2-6 0z" />
      {/* ডান পাপড়ি */}
      <path d="M44 24c-6-2-8-5-8-9-4 0-7 2-10 6 3 3 6 5 10 6 0 4 2 7 8 9 0-2-2-5-0-6 2-1 2-3 0-6z" />
      {/* নিচের পাপড়ি */}
      <path d="M24 44c2-6 5-8 9-8 0-4-2-7-6-10-3 3-5 6-6 10-4 0-7 2-9 8 2 0 5-2 6 0 1 2 3 2 6 0z" />
      {/* বাম পাপড়ি */}
      <path d="M4 24c6 2 8 5 8 9 4 0 7-2 10-6-3-3-6-5-10-6 0-4-2-7-8-9 0 2 2 5 0 6-2 1-2 3 0 6z" />
    </svg>
  );
}

/* =========================================================
   Hero Section-এর ছোট আইকন
   ========================================================= */

// * তারকা/অ্যাস্টেরিস্ক — welcome badge-এ
export function AsteriskIcon({ className = '', size = 18 }) {
  return (
    <svg {...baseProps(className, size)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.39 6.93h7.28l-5.88 4.27 2.25 6.93L12 15.86 5.96 20.13l2.25-6.93L2.33 8.93h7.28L12 2z" />
    </svg>
  );
}

// ▶️ প্লে আইকন — See My Work বাটনে
export function PlayIcon({ className = '', size = 18 }) {
  return (
    <svg {...baseProps(className, size)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

// ⇱ বাইরে যাওয়া (Download CV বাটনে)
export function ArrowOutIcon({ className = '', size = 20 }) {
  return (
    <svg {...baseProps(className, size)} stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

/* =========================================================
   Social Icons — সব ফিল করা SVG (এক রঙে পূর্ণ)
   ========================================================= */

export function PinterestIcon({ className = '', size = 18 }) {
  return (
    <svg {...baseProps(className, size)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.63 7.85 6.35 9.3-.09-.83-.17-2.1.04-3 .18-.81 1.17-5.1 1.17-5.1s-.3-.6-.3-1.48c0-1.39.8-2.42 1.8-2.42.85 0 1.26.63 1.26 1.39 0 .85-.54 2.11-.82 3.28-.23 1 .5 1.81 1.48 1.81 1.78 0 3.15-1.88 3.15-4.58 0-2.39-1.72-4.07-4.18-4.07-2.85 0-4.53 2.14-4.53 4.36 0 .87.33 1.8.75 2.3.08.1.1.18.07.28l-.29 1.17c-.05.19-.15.23-.34.14-1.26-.58-2.05-2.43-2.05-3.91 0-3.19 2.31-6.12 6.68-6.12 3.51 0 6.23 2.5 6.23 5.85 0 3.49-2.2 6.3-5.25 6.3-1.03 0-1.99-.53-2.32-1.16l-.63 2.4c-.23.87-.85 1.96-1.27 2.63.96.29 1.97.45 3.02.45 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
    </svg>
  );
}

export function XIcon({ className = '', size = 18 }) {
  return (
    <svg {...baseProps(className, size)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-7.6 8.7L23 22h-7l-5.5-7.3L4.2 22H1.1l8.1-9.3L1 2h7.2l5 6.7L18.9 2zm-1.2 18h2L6.5 4h-2l13.2 16z"/>
    </svg>
  );
}

export function FacebookIcon({ className = '', size = 18 }) {
  return (
    <svg {...baseProps(className, size)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.24-1.46 1.49-1.46H16.6V4.4C16 4.3 15.4 4.3 14.8 4.3c-2.3 0-3.9 1.4-3.9 3.97v2.23H8.4v3h2.5V21h2.6z"/>
    </svg>
  );
}

export function InstagramIcon({ className = '', size = 18 }) {
  return (
    <svg {...baseProps(className, size)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.2c3.2 0 3.6 0 4.8.07 1.2.06 1.8.25 2.2.41.6.2 1 .45 1.5.94.5.5.74.9.94 1.5.16.42.35 1 .41 2.2.07 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.06 1.2-.25 1.8-.41 2.2-.2.6-.45 1-.94 1.5-.5.5-.9.74-1.5.94-.42.16-1 .35-2.2.41-1.2.07-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.2-.06-1.8-.25-2.2-.41-.6-.2-1-.45-1.5-.94-.5-.5-.74-.9-.94-1.5-.16-.42-.35-1-.41-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.06-1.2.25-1.8.41-2.2.2-.6.45-1 .94-1.5.5-.5.9-.74-1.5-.94.42-.16-1-.35-2.1-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.2 0-3.5.01-4.7.07-1.1.05-1.7.24-2.1.4-.5.18-.85.4-1.2.75-.35.35-.57.7-.75 1.2-.16.4-.35 1-.4 2.1C2.8 8.5 2.8 8.8 2.8 12s.01 3.5.07 4.7c.05 1.1.24 1.7.4 2.1.18.5.4.85.75 1.2.35.35.7.57 1.2.75.4.16 1 .35 2.1.4 1.2.06 1.5.07 4.7.07s3.5-.01 4.7-.07c1.1-.05 1.7-.24 2.1-.4.5-.18.85-.4 1.2-.75.35-.35.57-.7.75-1.2.16-.4.35-1 .4-2.1.06-1.2.07-1.5.07-4.7s-.01-3.5-.07-4.7c-.05-1.1-.24-1.7-.4-2.1a3.2 3.2 0 00-.75-1.2 3.2 3.2 0 00-1.2-.75c-.4-.16-1-.35-2.1-.4C15.5 4 15.2 4 12 4zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 8.1a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zm5.15-8.35a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z"/>
    </svg>
  );
}

/* =========================================================
   About Section-এর জন্য নতুন আইকনগুলো
   (User, Award, Mail, Phone, Star)
   ========================================================= */

// 👤 User/Profile — About InfoCard "Name:" এ
export function UserIcon({ className = '', size = 20 }) {
  return (
    <svg {...baseProps(className, size)} stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// 🏅 Award/Badge — About InfoCard "Role:" এ
export function AwardIcon({ className = '', size = 20 }) {
  return (
    <svg {...baseProps(className, size)} stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="6" strokeLinecap="round" strokeLinejoin="round"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}

// ✉️ Envelope/Mail — About InfoCard "E-mail:" এ
export function MailIcon({ className = '', size = 20 }) {
  return (
    <svg {...baseProps(className, size)} stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6"/>
    </svg>
  );
}

// 📞 Phone — About InfoCard "Phone:" এ
export function PhoneIcon({ className = '', size = 20 }) {
  return (
    <svg {...baseProps(className, size)} stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

// ⭐ Star — 4.9★ rating এর পাশে
export function StarIcon({ className = '', size = 16 }) {
  return (
    <svg {...baseProps(className, size)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.3 6.18 21l1.64-6.81L2.6 9.74l7-.6L12 2l2.4 7.14 7 .6-5.22 4.45L17.82 21z"/>
    </svg>
  );
}

/* =========================================================
   Footer Section-এর জন্য নতুন আইকনগুলো
   (Send, LocationPin)
   ========================================================= */

// ✈️ Paper Plane / Send — Newsletter submit বাটনে
export function SendIcon({ className = '', size = 20 }) {
  return (
    <svg {...baseProps(className, size)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"/>
    </svg>
  );
}

// 📍 Location / Pin — ঠিকানা লেখার পাশে
export function LocationPinIcon({ className = '', size = 22 }) {
  return (
    <svg {...baseProps(className, size)} stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 22s-8-7.58-8-13a8 8 0 1 1 16 0c0 5.42-8 13-8 13z"/>
      <circle cx="12" cy="9" r="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* =========================================================
   Service Section-এর জন্য নতুন আইকনগুলো
   (CodeBracket, Globe, Sparkle, Gauge)
   ========================================================= */

// 🧑‍💻 Code Brackets / Angle — Full-Stack Web Apps কার্ডে
export function CodeBracketIcon({ className = '', size = 24, strokeWidth = 2.2 }) {
  return (
    <svg {...baseProps(className, size)} stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 6l-6 6 6 6"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 4l-5 16"/>
    </svg>
  );
}

// 🌐 Globe / World — Custom WordPress Development কার্ডে
export function GlobeIcon({ className = '', size = 24, strokeWidth = 2.2 }) {
  return (
    <svg {...baseProps(className, size)} stroke="currentColor" strokeWidth={strokeWidth}>
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20"/>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20z"/>
    </svg>
  );
}

// ✨ Sparkle / Stars — Motion & Interactive Web কার্ডে
export function SparkleIcon({ className = '', size = 24, strokeWidth = 2 }) {
  return (
    <svg {...baseProps(className, size)} fill="currentColor" stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 3l1.8 4.8L18.6 9.6l-4.8 1.8L12 16.2l-1.8-4.8L5.4 9.6l4.8-1.8L12 3z"/>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M19 14l.9 2.4L22.3 17.3l-2.4.9L19 20.6l-.9-2.4-2.4-.9 2.4-.9L19 14z"/>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M5 16l.6 1.6L7.2 18.2l-1.6.6L5 20.4l-.6-1.6L2.8 18.2l1.6-.6L5 16z"/>
    </svg>
  );
}

// ⏱️ Gauge / Speedometer — Performance & SEO Optimization কার্ডে
export function GaugeIcon({ className = '', size = 24, strokeWidth = 2.2 }) {
  return (
    <svg {...baseProps(className, size)} stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 14l4-4"/>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M20.01 15.3A8.99 8.99 0 1 0 3.99 15.3"/>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M3.99 15.3C4.79 17.5 6.97 19 9.5 19h5c2.53 0 4.71-1.5 5.51-3.7"/>
    </svg>
  );
}
