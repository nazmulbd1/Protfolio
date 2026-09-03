import Container from './Layouts/Container';
import { cn } from '../lib/utils';
import nazmulsheikh from '../assets/nazmulsheikh1.webp'
import {
  ArrowOutIcon,
  AsteriskIcon,
  ExperienceLogo,
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  PlayIcon,
  XIcon,
} from './Icons';

// ----- Hero এর সব টেক্সট/ডেটা এখানে - (এখান থেকে পরিবর্তন করলে পুরো hero আপডেট হয়ে যাবে)
const HERO = {
  greeting: 'Welcome To My Creative Space',
  name: 'Nazmul Sheikh Nahid',
  headlineLine1: 'Frontend and Backend Developer',
  headlineLine2: 'with Reack & Next.js',
  portraitAlt: 'Darlene Robertson — Designer এর ছবি',
  experience: '10+ Years Experience',
  // পোর্ট্রেট ইমেজের লিঙ্ক (AI-generated)
  portraitImg:
    nazmulsheikh,
};
// সোশ্যাল মিডিয়া লিঙ্কগুলোর তালিকা
const SOCIALS = [
  { label: 'Pinterest',   Icon: PinterestIcon, href: '#' },
  { label: 'X (Twitter)', Icon: XIcon,         href: '#' },
  { label: 'Facebook',    Icon: FacebookIcon,  href: '#' },
  { label: 'Instagram',   Icon: InstagramIcon, href: '#' },
];
// Stats — 4টা সংখ্যা/তথ্যের কলাম
const STATS = [
  {
    heading: 'Dhaka',                  // বড় লেখা
    headingGlitch: true,               // glitch/cyan+orange ইফেক্ট দেবে কিনা
    subtitle: 'Based in Bangladesh',   // ছোট লেখা নিচে
    subtitleArrow: false,
  },
  {
    heading: '5',
    suffix: '+',                       // লাইম গ্রিনে "+" চিহ্ন
    headingGlitch: false,
    subtitle: 'Projects Completed',
    subtitleArrow: false,
  },
  {
    heading: '1.5',
    suffix: '+',
    headingGlitch: false,
    subtitle: 'Years Learning',
    subtitleArrow: false,
  },
  {
    heading: 'React',
    headingGlitch: true,
    subtitle: 'Full Stack',
    subtitleArrow: true,               // subtitle এর আগে "→" arrow
  },
];

// Focus ring — কীবোর্ড দিয়ে navigate করলে দেখা যাবে
const FOCUS_RING =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary';

// ১) Welcome badge (সবার উপরে ছোট্ট কমলা * আইকন সহ)
function WelcomeBadge() {
  return (
    <div
      role="status"
      className={cn(
        'inline-flex items-center gap-2',
        'px-5 py-2.5 rounded-full',
        'bg-white/5 border border-white/10',
        'text-text-inverse text-base font-medium',
      )}>
      <AsteriskIcon className="text-primary shrink-0" size={18} />
      <span>{HERO.greeting}</span>
    </div>
  );
}

// ২) বড় শিরোনাম (Hi, I'm darlene robertson! designing with...)
function Headline() {
  return (
    <h1 className="mt-6 font-bold tracking-tight text-[48px] md:text-[70px] leading-[1.05]">
      <span className="text-text-inverse">Hi, I&apos;m </span>
      <span className="text-primary">{HERO.name}!</span><br />
      <span className="text-text-inverse">{HERO.headlineLine1}</span><br />
      <span className="text-text-inverse">{HERO.headlineLine2}</span>
    </h1>
  );
}

// ৩) পাতলা divider লাইন (headline আর stats এর মাঝে)
function Divider() {
  return (
    <hr
      className="my-10 border-t border-white/10 max-w-full"
      aria-hidden="true"/>
  );
}
// ৪) Glitch/Chromatic heading —  সাইডে cyan + orange shadow এর কারণে "3D color split" হয়
function GlitchHeading({ children }) {
  return (
    <span
      className={cn(
        'font-black text-text-inverse',
        'text-[32px] leading-none tracking-tight',
        // বামে সায়ান, ডানে কমলা — একসাথে glitch ইফেক্ট দেয়
        'drop-shadow-[-2px_0_0_rgba(0,229,255,0.55)] drop-shadow-[2px_0_0_rgba(255,69,0,0.55)]',
      )}>
      {children}
    </span>
  );
}
// ৫) একক Stat কলাম — (Dhaka / 8+ / 1.5+ / React)
function StatsColumn({ item }) {
  return (
    <div className="flex flex-col gap-3 min-w-0">
      {/* উপরের বড় সংখ্যা/লেখা */}
      <div className="flex items-baseline gap-1.5">
        {item.headingGlitch ? (
          // glitch style (Dhaka, React)
          <GlitchHeading>{item.heading}</GlitchHeading>
        ) : (
          // সাধারণ সাদা বোল্ড (8, 1.5)
          <span className="font-black text-text-inverse text-[32px] leading-none tracking-tight">
            {item.heading}
          </span>
        )}
        {/* লাইম গ্রিন "+" চিহ্ন (যদি থাকে) */}
        {item.suffix && (
          <span
            className="font-black text-[22px] leading-none -translate-y-1 text-[#B7FF00]"
            aria-hidden="true"
          >
            {item.suffix}
          </span>
        )}
      </div>
      {/* নিচের ছোট লেখা (subtitle) */}
      <div className="flex items-center gap-2">
        {item.subtitleArrow && (
          <span className="text-white/55 text-[16px] leading-none" aria-hidden="true">
            →
          </span>
        )}
        <span
          className={cn(
            'font-semibold uppercase tracking-[3.3px] text-[15px]',
            'text-[#7f8ea1]',
          )}>
          {item.subtitle}
        </span>
      </div>
    </div>
  );
}
// ৬) 4টা stat কলামের row
function StatsRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-10" aria-label="দ্রুত তথ্য ও পরিসংখ্যান">
      {STATS.map((s) => (
        <StatsColumn key={s.heading} item={s} />
      ))}
    </div>
  );
}

// ৭) Download CV বাটন — Hover: white রঙ বাম → ডান slide করে আসে — Icon: ছবি বাইরে যাওয়ার (download) আইকন
function DownloadCvButton() {
  return (
    <a
      href="#"
      role="button"
      aria-label="Resume PDF আকারে ডাউনলোড করুন"
      download
      className={cn(
        // basic look
        'group relative overflow-hidden z-0',
        'inline-flex items-center gap-3',
        'px-6 py-3.5 rounded-pill',
        'text-lg font-semibold text-text-inverse',
        'bg-primary transition-colors duration-400 ease-out',
        'hover:text-primary focus-visible:text-primary',
        FOCUS_RING,
        'focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
        'active:translate-y-[1px]',
        // white slide (left → right) using before pseudo-element
        `before:content-[''] before:absolute before:inset-y-0 before:-left-full before:w-full before:h-full`,
        'before:bg-text-inverse before:transition-[left] before:duration-400 before:ease-out before:-z-10',
        'hover:before:left-0 focus-visible:before:left-0',
      )}>
      <span className="relative z-10">Download CV</span>
      <span
        className={cn(
          'relative z-10',
          'w-10 h-10 rounded-xl flex items-center justify-center',
          'bg-text-inverse transition-colors duration-400 ease-out',
          // Hover/focus: white → orange
          'group-hover:bg-primary group-focus-visible:bg-primary',
        )}
        aria-hidden="true">
        <ArrowOutIcon
          className={cn(
            'transition-colors duration-400 ease-out',
            'text-primary',
            // Hover/focus: orange → white (so arrow is visible on orange bg)
            'group-hover:text-text-inverse group-focus-visible:text-text-inverse',
          )}
        />
      </span>
    </a>
  );
}
// ৮) See My Work বাটন — বামে বৃত্তের ভিতরে play আইকন — Hover: বৃত্তটা বড় হয় এবং গাঢ় কমলা হয়
function SeeMyWorkButton() {
  return (
    <a
      href="#work"
      role="button"
      className={cn(
        'group inline-flex items-center gap-3',
        'px-2 py-3.5',
        'text-lg font-semibold text-text-inverse',
        'transition-colors duration-300 ease-out',
        'hover:text-primary focus-visible:text-primary',
        FOCUS_RING,
        'rounded-md px-2',
      )}>
      <span
        className={cn(
          'w-11 h-11 rounded-full flex items-center justify-center',
          'bg-primary text-text-inverse ring-1 ring-primary/20',
          'transition-transform duration-300 ease-out',
          'group-hover:scale-110 group-hover:bg-primary-hover',
        )}
        aria-hidden="true"
      >
        <PlayIcon size={16} />
      </span>
      <span>See My Work</span>
    </a>
  );
}
// ৯) দুটো বাটনের row
function ActionRow() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <DownloadCvButton />
      <SeeMyWorkButton />
    </div>
  );
}
// ১০) সোশ্যাল আইকন গুলো (4টা বৃত্ত)
function Socials() {
  return (
    <ul className="flex items-center gap-4 mt-12" aria-label="Social links">
      {SOCIALS.map(({ label, Icon, href }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            className={cn(
              'flex items-center justify-center',
              'w-11 h-11 rounded-full',
              'border border-white/10 text-text-inverse',
              'transition-colors duration-300 ease-out',
              'hover:text-primary hover:border-primary/40 hover:bg-white/5',
              'focus-visible:text-primary focus-visible:border-primary/40',
              FOCUS_RING,
            )}>
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
// ১১) "10+ Years Experience" — ঘূর্ণায়মান ব্যাজ- ছবির নিচে ডান দিকে অবস্থান করে। - ৩টা লেয়ার (নিচ থেকে উপরে): 1) কালো/ব্লার করা বৃত্ত (bg হিসেবে) 2) SVG text-on-a-path — 20s এ একবার ঘুরে 3) মাঝে কমলা বৃত্ত + ExperienceLogo (স্থির থাকে)
function ExperienceBadge() {
  // ---------- SVG পরিমাপ ----------
  const viewBox = 220;           // SVG box-এর আকার
  const cx = viewBox / 2;        // মাঝখানের x (110)
  const cy = viewBox / 2;        // মাঝখানের y (110)
  const textRadius = 82;         // ঘূর্ণায়মান টেক্সট কতদূরে বসবে

  // - টেক্সট প্রস্তুত -- বৃত্ত পূর্ণভাবে পুরো করার জন্য 4বার লিখছি
  const repeated = `* ${HERO.experience} `;
  const curvedText = (repeated + repeated + repeated + repeated).trim();

  // - SVG-এর জন্য বৃত্তের path -- এটা দিয়ে বোঝায় কোন পথ ধরে টেক্সটটা বসবে
  const circlePathD =
    `M ${cx} ${cy} m -${textRadius} 0 ` +
    `a ${textRadius},${textRadius} 0 1,1 ${textRadius * 2},0 ` +
    `a ${textRadius},${textRadius} 0 1,1 -${textRadius * 2},0`;

  return (
    <div
      className="absolute -right-3 bottom-6 sm:-right-5 sm:bottom-8 lg:-right-8 lg:bottom-12 select-none"
      aria-label={`${HERO.experience} in design`}
    >
      {/* ব্যাজের আকার — মোবাইলে ছোট, ডেস্কটপে বড় */}
      <div className="relative w-30 h-30 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
        {/* 1) ট্রান্সপারেন্ট কালো বৃত্ত + blur (bg disk) */}
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0 rounded-full bg-black/45 backdrop-blur-sm',
            'ring-1 ring-white/10 shadow-[0_10px_30px_-6px_rgba(0,0,0,0.55)]',
          )}
        />

        {/* 2) ঘূর্ণায়মান SVG টেক্সট (slow-spin animation) */}
        <svg
          viewBox={`0 0 ${viewBox} ${viewBox}`}
          className="absolute inset-0 w-full h-full animate-spin-slow"
          aria-hidden="true"
        >
          <defs>
            {/* invisible path — টেক্সট এই path-এর উপর বসবে */}
            <path id="hero-badge-path" d={circlePathD} fill="none" />
          </defs>
          <text
            fill="#ffffff"
            fontSize="14.5"
            fontWeight="700"
            letterSpacing="1.2"
          >
            <textPath href="#hero-badge-path" startOffset="0">
              {curvedText}
            </textPath>
          </text>
        </svg>

        {/* 3) মাঝে কমলা বৃত্ত + ExperienceLogo (স্থির) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              'relative w-[58%] h-[58%] rounded-full',
              'bg-primary flex items-center justify-center',
              'shadow-[0_8px_24px_-4px_rgba(255,69,0,0.55)]',
              'ring-[6px] ring-black/40',
            )}
          >
            <ExperienceLogo size={44} />
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// ১২) ছবি (Portrait) — উপরে experience ব্যাজও থাকে
// =========================================================
function Portrait() {
  return (
    <div className="relative">
      {/* ছবির ফ্রেম */}
      <div className="relative overflow-hidden rounded-[32px] bg-surface-raised border border-white/5">
        {/* ফ্রেমের ভিতরে সাবটল কমলা গ্লো গ্র্যাডিয়েন্ট
            • ২টা radial gradient (টপ-লেফট + বটম-রাইট)
            • Tailwind arbitrary value দিয়ে বানানো */}
        <div
          className="absolute inset-0 -z-0 opacity-80 bg-[radial-gradient(ellipse_at_20%_10%,rgba(255,69,0,0.08),transparent_55%),radial-gradient(ellipse_at_80%_90%,rgba(255,69,0,0.06),transparent_55%)]"
          aria-hidden="true"
        />
        {/* আসল ছবি */}
        <img
          src={HERO.portraitImg}
          alt={HERO.portraitAlt}
          loading="eager"
          className="relative w-full h-[480px] lg:h-[620px] object-cover object-center"
          draggable={false}
        />
      </div>

      {/* ছবির উপরে experience ব্যাজ */}
      <ExperienceBadge />
    </div>
  );
}

// =========================================================
// ⭐️ মূল Herosection কম্পোনেন্ট
// =========================================================
function Herosection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-transparent">
      {/* ছবির পিছনে খুব হালকা কমলা গ্লো (ডান উপরের দিকে)
          • opacity কমানো হয়েছে যাতে background image ঢাকে না
          • Tailwind arbitrary radial gradient দিয়ে বানানো */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[736px] h-[736px] rounded-full blur-3xl opacity-15 bg-[radial-gradient(closest-side,rgba(255,69,0,0.12),transparent_70%)]"
      />
      <Container size="xl">
        {/* Grid: মোবাইলে 1 কলাম, lg+ এ 12 কলাম */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: সব টেক্সট + বাটন + socials */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <WelcomeBadge />
            <Headline />
            <Divider />
            <StatsRow />
            <div className="mt-10">
              <ActionRow />
            </div>
            <Socials />
          </div>
          {/* RIGHT: ছবি + experience ব্যাজ */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <Portrait />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Herosection;