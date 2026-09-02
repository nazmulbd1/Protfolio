import Container from './Layouts/Container';
import { cn } from '../lib/utils';
import { ArrowRight, AsteriskIcon } from './Icons';

/* =========================================================
   About Section — "Turning idea into impactful visual..."
   ---------------------------------------------------------
   Layout: ২টা কলাম
     LEFT :  ছবি + নিচে experience card (10+ Years / 4.9★ Reviews)
     RIGHT: "About Me" pill badge + শিরোনাম + বর্ণনা
            + ৪টা info card (Name / Role / Email / Phone)
            + নিচে "More About Me" বাটন + Worldwide clients
   ========================================================= */

/* =========================================================
   📝 আপনার তথ্য এখান থেকে পরিবর্তন করুন (সব উপরে রাখা হয়েছে)
   ========================================================= */
const ABOUT = {
  heading: 'Turning idea into impactful visual experiences',
  description:
    "I am a passionate creative professional dedicated to transforming ideas meaningful digital experiences. My journey began with a deep curiosity for design and has grown into a strong foundation of skills in graphic design, UI/UX, and storytelling. Over time, I have worked on diverse projects.",

  name: 'Darlene Robertson',
  role: 'Graphic Designer',
  email: 'info@example.com',
  phone: '+91 987647 432',

  experienceYears: '10+',
  reviewScore: '4.9',
  reviewCount: 'Over 3000 Reviews',

  // পোর্ট্রেট ইমেজ — AI দিয়ে জেনারেটেড
  portraitImg:
    'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20lifestyle%20photo%20of%20a%20confident%20young%20woman%20with%20long%20wavy%20light%20brown%20hair%2C%20sitting%20at%20a%20light%20brown%20wooden%20desk%20in%20a%20warm%20modern%20office%2C%20wearing%20a%20vibrant%20red%20buttoned%20blouse%2C%20holding%20a%20black%20pen%2C%20smiling%20gently%20at%20camera%2C%20cozy%20background%20with%20leafy%20green%20plants%2C%20wooden%20bookshelves%20with%20decor%2C%20natural%20sunlight%20from%20large%20windows%2C%20warm%20toned%2C%208k%20portrait%20photography&image_size=portrait_4_3',
  portraitAlt: 'Darlene Robertson — Graphic Designer এর ছবি',

  // ৩জন ক্লায়েন্টের অ্যাভাটার
  clientAvatars: [
    'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Friendly%20close%2Dup%20headshot%20of%20a%20professional%20young%20man%20with%20dark%20hair%20and%20glasses%2C%20warm%20smile%2C%20soft%20solid%20peach%20studio%20background%2C%20circular%20crop&image_size=square',
    'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Friendly%20close%2Dup%20headshot%20of%20a%20professional%20young%20woman%20with%20long%20dark%20straight%20hair%2C%20warm%20smile%2C%20soft%20solid%20light%20purple%20studio%20background%2C%20circular%20crop&image_size=square',
    'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Friendly%20close%2Dup%20headshot%20of%20a%20professional%20woman%20with%20short%20curly%20dark%20hair%2C%20warm%20smile%2C%20soft%20solid%20mint%20green%20studio%20background%2C%20circular%20crop&image_size=square',
  ],

  /* ========================================================
     🆕 Technical Expertise — ৮টা স্কিল + ক্যাটাগরি + %
     (ছবির জায়গায় এই কার্ডটা দেখানো হবে)
     ======================================================== */
  skillsTitle: 'Technical Expertise',
  skills: [
    { name: 'React',                    percent: 95, category: 'Frontend'    },
    { name: 'Next.js',                  percent: 90, category: 'Frontend'    },
    { name: 'JavaScript',               percent: 92, category: 'Frontend'    },
    { name: 'TypeScript',               percent: 90, category: 'Frontend'    },
    { name: 'Tailwind CSS',             percent: 96, category: 'Frontend'    },
    { name: 'Node.js',                  percent: 88, category: 'Backend'     },
    { name: 'Express.js',               percent: 89, category: 'Backend'     },
    { name: 'MongoDB',                  percent: 84, category: 'Performance' },
  ],
};

// focus ring — কীবোর্ড নেভিগেশনে দেখা যাবে
const FOCUS_RING =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary';

/* =========================================================
   ১) ছোট-ছোট নতুন আইকন (About Section-এ ব্যবহৃত)
   এগুলো সম্পূর্ণ SVG — inline-এ রাখা হয়েছে সহজে বোঝার জন্য
   ========================================================= */
// 👤 User/Profile আইকন — "Name:" কার্ডে
function UserIcon({ className = '', size = 20 }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      className={className} aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="12" cy="7" r="4"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

// 🏅 Award/Badge আইকন — "Role:" কার্ডে
function AwardIcon({ className = '', size = 20 }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      className={className} aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ✉️ Envelope/Mail আইকন — "E-mail:" কার্ডে
function MailIcon({ className = '', size = 20 }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      className={className} aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="5" width="18" height="14" rx="2"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="m3 7 9 6 9-6"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

// 📞 Phone/Telephone আইকন — "Phone:" কার্ডে
function PhoneIcon({ className = '', size = 20 }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      className={className} aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

// ⭐ Star আইকন — 4.9 rating এর পাশে
function StarIcon({ className = '', size = 16 }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="currentColor"
      className={className} aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 17.3 6.18 21l1.64-6.81L2.6 9.74l7-.6L12 2l2.4 7.14 7 .6-5.22 4.45L17.82 21z"/>
    </svg>
  );
}

/* =========================================================
   ২) "About Me" pill badge (শিরোনামের উপরে)
   ========================================================= */
function AboutBadge() {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2',
        'px-5 py-2 rounded-full',
        'bg-white/5 border border-white/10',
        'text-text-inverse text-base font-semibold',
      )}
    >
      <AsteriskIcon className="text-primary shrink-0" size={18} />
      <span>About Me</span>
    </div>
  );
}

/* =========================================================
   ৩) Info Card — ৪টা একই স্টাইলের কার্ড
      (Name, Role, E-mail, Phone)
   Props:
     Icon     = বাম পাশের ছবি
     label    = "Name:" / "Role:" বোল্ড লেখা
     value    = এর পরের মান (Darlene Robertson...)
   ========================================================= */
function InfoCard({ Icon, label, value }) {
  return (
    <div
      className={cn(
        'flex items-center gap-3',
        'px-5 py-4 rounded-xl',
        'bg-white/5 border border-white/5',
        'text-text-inverse',
      )}
    >
      {/* বামে আইকন এরিয়া */}
      <span
        className={cn(
          'w-10 h-10 rounded-lg flex items-center justify-center shrink-0',
          'bg-black/40 text-primary',
        )}
      >
        <Icon size={20} />
      </span>

      {/* ডানে লেবেল + ভ্যালু */}
      <span className="flex items-baseline gap-2 min-w-0">
        <span className="font-bold text-lg whitespace-nowrap">{label}</span>
        <span className="text-base font-medium text-white/80 truncate">{value}</span>
      </span>
    </div>
  );
}

/* =========================================================
   ৪) ৪টা InfoCard-এর Grid (২×২)
   ========================================================= */
function InfoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <InfoCard Icon={UserIcon}  label="Name:"  value={ABOUT.name} />
      <InfoCard Icon={AwardIcon} label="Role:"  value={ABOUT.role} />
      <InfoCard Icon={MailIcon}  label="E-mail:" value={ABOUT.email} />
      <InfoCard Icon={PhoneIcon} label="Phone:"  value={ABOUT.phone} />
    </div>
  );
}

/* =========================================================
   ৫) Technical Expertise — ৮টা স্কিল (Progress Bar + Category)
   📌 আগের Portrait (ছবি) এর জায়গায় এই কার্ডটা বসানো হয়েছে
   ========================================================= */
function TechnicalExpertiseCard() {
  return (
    <div
      className={cn(
        'w-full rounded-[28px] p-8 lg:p-10',
        'bg-surface-raised border border-white/5',
        'shadow-[0_30px_80px_-20px_rgba(255,69,0,0.25)]',
      )}
    >
      {/* শিরোনাম */}
      <h3 className="font-bold text-text-inverse text-[32px] lg:text-[36px] leading-tight tracking-tight mb-10">
        {ABOUT.skillsTitle}
      </h3>

      {/* স্কিল লিস্ট (gap বাড়ানো হয়েছে) */}
      <div className="flex flex-col gap-7">
        {ABOUT.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col gap-3"
            style={{ ['--skill-width']: `${skill.percent}%` }}
          >
            {/* ১ম লাইন: নাম + % + ক্যাটাগরি */}
            <div className="flex items-center justify-between gap-4">
              {/* বামে স্কিল নাম (সাদা) */}
              <span className="font-bold text-text-inverse text-xl truncate">
                {skill.name}
              </span>

              {/* ডানে % (কমলা primary) + category pill */}
              <div className="flex items-center gap-3 shrink-0">
                {/* কমলা primary % */}
                <span className="font-bold text-primary text-lg leading-none">
                  {skill.percent}%
                </span>
                {/* Category pill (rounded border, সাম-পাড়া) */}
                <span
                  className={cn(
                    'px-4 py-1.5 rounded-full text-base font-semibold',
                    'border border-white/15 text-text-muted',
                  )}
                >
                  {skill.category}
                </span>
              </div>
            </div>

            {/* ২য় লাইন: Progress Bar (Track + Fill) */}
            <div
              className={cn(
                'relative w-full h-2.5 rounded-full overflow-hidden',
                'bg-white/10',
              )}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={skill.percent}
              aria-label={`${skill.name} ${skill.percent}%`}
            >
              {/* কমলা primary fill + শেষ দিকে glow */}
              <div
                className={cn(
                  'h-full rounded-full bg-primary w-[var(--skill-width)]',
                  'transition-[width] duration-700 ease-out',
                  'relative after:content-[""] after:absolute after:top-0 after:bottom-0 after:-right-1',
                  'after:w-3 after:rounded-full after:bg-primary after:blur-[2px] after:opacity-60',
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   ৬) More About Me — কমলা বাটন
      ডান পাশে কালো বৃত্তে সাদা ডান তীর
      hover: আগের বাটনের মতো white slide left→right
   ========================================================= */
function MoreAboutButton() {
  return (
    <a
      href="/about"
      role="button"
      className={cn(
        'group relative overflow-hidden z-0',
        'inline-flex items-center gap-3',
        'px-6 py-3.5 rounded-pill',
        'text-lg font-bold text-text-inverse',
        'bg-primary transition-colors duration-400 ease-out',
        'hover:text-primary focus-visible:text-primary',
        FOCUS_RING,
        'focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
        'active:translate-y-[1px]',

        // hover এ সাদা রঙ বাম থেকে ডান slide
        `before:content-[''] before:absolute before:inset-y-0 before:-left-full before:w-full before:h-full`,
        'before:bg-text-inverse before:transition-[left] before:duration-400 before:ease-out before:-z-10',
        'hover:before:left-0 focus-visible:before:left-0',
      )}
    >
      <span className="relative z-10">More About Me</span>
      <span
        className={cn(
          'relative z-10',
          'w-10 h-10 rounded-full flex items-center justify-center',
          'bg-black transition-colors duration-400 ease-out',
          'group-hover:bg-primary-hover',
        )}
      >
        <ArrowRight
          className={cn(
            'transition-colors duration-400 ease-out',
            'text-text-inverse',
          )}
          size={18}
        />
      </span>
    </a>
  );
}

/* =========================================================
   ৮) Satisfied Clients Worldwide
      ৩টা avatar overlap করে + ৪র্থটা "+" কমলা বৃত্ত
      ডানে দুই লাইন লেখা
   ========================================================= */
function SatisfiedClients() {
  return (
    <div className="flex items-center gap-4">
      {/* Avatar স্ট্যাক (৩+১) */}
      <div className="flex items-center" aria-hidden="true">
        {ABOUT.clientAvatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            // প্রতিটা পরেরটা আগেরটার উপর 10px ওভারলেপ
            className={cn(
              'w-11 h-11 rounded-full object-cover ring-2 ring-surface',
              i > 0 && '-ml-2.5',
            )}
          />
        ))}
        {/* ৪র্থ বৃত্ত: কমলা, ভেতরে "+" */}
        <span
          className={cn(
            'w-11 h-11 rounded-full -ml-2.5 ring-2 ring-surface',
            'flex items-center justify-center',
            'bg-primary text-white font-bold text-xl leading-none',
          )}
        >
          +
        </span>
      </div>

      {/* দুই লাইন লেখা */}
      <div className="flex flex-col leading-tight">
        <span className="text-white font-bold text-[17px]">
          Satisfied Clients
        </span>
        <span className="text-white/80 font-semibold text-[16px]">
          Worldwide
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   ⭐️ মূল About কম্পোনেন্ট — সব উপাংশ একসাথে
   📌 Container pattern: Herosection.jsx-এর মতো একই
      → section-এ (py + overflow-hidden + bg) থাকবে
      → Container শুধু max-width+center করবে
   ========================================================= */
function About() {
  return (
    // 📌 Herosection-এর মতো — সব spacing + overflow section-এ
    <section className="relative py-16 lg:py-24 overflow-hidden bg-surface">
      {/* 📌 Container = max-w-xl (1440px) + center + padding
           Herosection-এর মতো same size="xl" ব্যবহার করা হয়েছে */}
      <Container size="xl">
        {/* Grid: মোবাইলে ১ কলাম, lg+ এ ১২ কলাম (বাম ৫ / ডান ৭) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* 🆕 বাম পাশ: Technical Expertise কার্ড (ছবি সরানো হয়েছে) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <TechnicalExpertiseCard />
          </div>

          {/* ডান পাশ: টেক্সট + infocard + বাটন + clients */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <AboutBadge />

            <h2 className="mt-6 font-bold text-[52px] lg:text-[56px] leading-[1.1] tracking-tight text-text-inverse">
              {ABOUT.heading}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/75 max-w-2xl">
              {ABOUT.description}
            </p>

            <div className="mt-10">
              <InfoGrid />
            </div>

            {/* পাতলা divider — infocard আর নিচের row এর মাঝে */}
            <div className="mt-10 border-t border-white/10" aria-hidden="true" />

            {/* নিচের row: More About Me বাটন + Satisfied Clients */}
            <div className="mt-10 flex flex-wrap items-center gap-6 lg:gap-10">
              <MoreAboutButton />
              <SatisfiedClients />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
