import Container from './Layouts/Container';
import { cn } from '../lib/utils';
import {
  CodeBracketIcon,
  GlobeIcon,
  SparkleIcon,
  GaugeIcon,
} from './Icons';

/* =========================================================
   Services Section — "Services & Solutions"
   ---------------------------------------------------------
   Layout:
     উপরে: "// 02. SERVICES" Badge + বড় শিরোনাম + সাবটাইটেল
     নিচে: ২×২ গ্রিডে ৪টা Service Card
   প্রতিটা Card এর ভিতর:
     ১) বামে Icon, ডানে Category Tag Pill
     ২) Title + Description
     ৩) পাতলা Divider
     ৪) ৪টা Bullet Point List (কমলা ডট সহ)
   ========================================================= */

/* =========================================================
   📝 আপনার তথ্য এখান থেকে পরিবর্তন করুন
   ========================================================= */
const SERVICES = {
  badge: '// 02. SERVICES',
  heading: 'Services & Solutions',
  subtitle:
    'End-to-end web engineering, from conceptual design to high-conversion deployment.',

  cards: [
    {
      Icon: CodeBracketIcon,
      tag: 'REACT / NEXT.JS',
      title: 'Full-Stack Web Apps',
      description:
        'Custom full-stack web applications with Next.js, React, modern state management, and real-time features.',
      features: [
        'SSR / Static generation for SEO',
        'Clean modular architecture',
        'Responsive & accessible UI',
        'API integration & database setup',
      ],
    },
    {
      Icon: GlobeIcon,
      tag: 'CMS / E-COMMERCE',
      title: 'Custom WordPress Development',
      description:
        'Bespoke WordPress themes, custom WooCommerce stores, Gutenberg block development, and headless CMS integrations.',
      features: [
        'Pixel-perfect custom themes',
        'Advanced Custom Fields (ACF)',
        'WooCommerce payment gateways',
        'High-security hardening',
      ],
    },
    {
      Icon: SparkleIcon,
      tag: 'GSAP / THREE.JS',
      title: 'Motion & Interactive Web',
      description:
        'Award-worthy creative web experiences featuring smooth scroll triggers, WebGL visual effects, and fluid micro-interactions.',
      features: [
        'GSAP & ScrollTrigger choreography',
        'Custom canvas animations',
        'Zero-lag performance tuning',
        'Accessible reduced-motion fallbacks',
      ],
    },
    {
      Icon: GaugeIcon,
      tag: 'AUDIT / SPEED',
      title: 'Performance & SEO Optimization',
      description:
        'Deep technical audits and optimization to achieve 95+ Google PageSpeed and Lighthouse scores on mobile and desktop.',
      features: [
        'Core Web Vitals remediation',
        'Asset optimization & modern formats',
        'Server-side caching setup',
        'Semantic SEO structured data',
      ],
    },
  ],
};

/* =========================================================
   ১) Section শিরোনাম (Badge + Heading + Subtitle)
   ========================================================= */
function SectionHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
      {/* "// 02. SERVICES" — ছোট কমলা মনোস্পেস টেক্সট */}
      <span
        className={cn(
          'inline-block tracking-[0.18em]',
          'text-primary text-[14px] font-bold',
          'font-mono uppercase',
          'mb-4',
        )}
      >
        {SERVICES.badge}
      </span>

      {/* বড় শিরোনাম: Services & Solutions */}
      <h2
        className={cn(
          'font-bold tracking-tight leading-tight',
          'text-text-inverse',
          'text-[40px] sm:text-[48px] lg:text-[56px]',
        )}
      >
        {SERVICES.heading}
      </h2>

      {/* সাবটাইটেল */}
      <p
        className={cn(
          'mt-5 text-[17px] lg:text-[18px] leading-relaxed',
          'text-text-muted max-w-2xl mx-auto',
        )}
      >
        {SERVICES.subtitle}
      </p>
    </div>
  );
}

/* =========================================================
   ২) একক Service Card
   Props: { Icon, tag, title, description, features }
   ========================================================= */
function ServiceCard({ Icon, tag, title, description, features }) {
  return (
    <div
      className={cn(
        'group relative w-full h-full rounded-[28px] p-8',
        'bg-surface-raised border border-white/5',
        'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]',
        'hover:border-primary/30 hover:-translate-y-1',
        'transition-all duration-400 ease-out',
      )}
    >
      {/* -------------------- টপ রো: Icon + Tag Pill -------------------- */}
      <div className="flex items-start justify-between gap-4">
        {/* বামে Icon বক্স */}
        <span
          className={cn(
            'flex items-center justify-center shrink-0',
            'w-12 h-12 rounded-xl',
            'bg-black/40 text-primary',
            'transition-colors duration-400 ease-out',
            'group-hover:bg-primary group-hover:text-white',
          )}
        >
          <Icon size={26} strokeWidth={2.2} />
        </span>

        {/* ডানে Tag Pill (REACT / NEXT.JS) */}
        <span
          className={cn(
            'shrink-0',
            'px-4 py-1.5 rounded-full',
            'border border-white/10 bg-white/5',
            'text-[12px] font-bold uppercase tracking-wider',
            'font-mono text-text-muted',
            'transition-colors duration-400 ease-out',
            'group-hover:border-primary/40 group-hover:text-primary/90',
          )}
        >
          {tag}
        </span>
      </div>

      {/* -------------------- Title + Description -------------------- */}
      <h3
        className={cn(
          'mt-7 font-bold leading-tight tracking-tight',
          'text-text-inverse',
          'text-[24px] lg:text-[26px]',
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          'mt-3 text-[15px] leading-relaxed',
          'text-text-muted',
        )}
      >
        {description}
      </p>

      {/* -------------------- পাতলা Divider -------------------- */}
      <div className="mt-6 border-t border-white/10" aria-hidden="true" />

      {/* -------------------- ৪টা Feature List -------------------- */}
      <ul className="mt-5 flex flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            {/* কমলা রঙের বুলেট ডট */}
            <span
              aria-hidden="true"
              className={cn(
                'shrink-0 mt-2',
                'w-[6px] h-[6px] rounded-full',
                'bg-primary',
              )}
            />
            <span
              className={cn(
                'text-[14px] leading-relaxed',
                'text-text-muted',
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =========================================================
   ⭐️ মূল Services কম্পোনেন্ট
   📌 Layout: <section> → <Container size="xl"> → Header + Grid
   (Herosection, About, Footer এর মতো একই pattern)
   ========================================================= */
function Services() {
  return (
    <section
      className={cn(
        'relative py-16 lg:py-24 overflow-hidden',
        'bg-surface',
      )}
    >
      {/* 📌 Container max-w-xl (1440px) — About/Hero এর মতো */}
      <Container size="xl">
        {/* ১) উপরের শিরোনাম অংশ */}
        <SectionHeader />

        {/* ২) নিচের ২×২ Service Card Grid */}
        <div
          className={cn(
            'mt-16 lg:mt-20',
            'grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8',
          )}
        >
          {SERVICES.cards.map((cardData) => (
            <ServiceCard key={cardData.title} {...cardData} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;
