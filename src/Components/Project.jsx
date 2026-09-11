import Container from './Layouts/Container';
import { cn } from '../lib/utils';
import { AsteriskIcon, PhoneIcon } from './Icons';
import project1 from '../assets/Frontendproject1.png'
import project2 from '../assets/Frontendproject2.png'
import project3 from '../assets/Frontendproject3.jpg'

/* =========================================================
   Projects Section — Full-Stack Developer এর প্রজেক্ট শোকেস
   ---------------------------------------------------------
   Layout:
     উপরে: "My Projects" Badge (black pill + orange asterisk)
            + বড় শিরোনাম + সাবটাইটেল (full-stack focus)
     মাঝে: ৩টা Project Card (desktop-এ ৩ কলাম, mobile-এ ১ কলাম)
           প্রতিটা Card এ: Image + Category + Title + Description
                           + Tech Stack Badges (React/Node/MongoDB ইত্যাদি)
     নিচে: CTA বার — "Got a project in mind?" + Contact link
   ========================================================= */

/* =========================================================
   📝 আপনার তথ্য এখান থেকে পরিবর্তন করুন
   ---------------------------------------------------------
   💡 Tips: একজন Full-Stack Dev হিসেবে আপনার সেরা ৩-৪টা
   real-world project এখানে রাখুন। প্রতিটার:
   - category: কি ধরনের প্রজেক্ট (E-Commerce / SaaS / Real-Time)
   - title: প্রজেক্টের নাম
   - description: ১-২ লাইনে কাজ + কোন সমস্যা সমাধান করেছে
   - techStack: ব্যবহৃত টেকনোলজি লিস্ট (badge হিসেবে দেখাবে)
   - image: প্রজেক্টের screenshot / preview image URL
   ========================================================= */
const PROJECTS = {
  badge: 'My Projects',
  heading: 'Full-Stack Projects I Built End-to-End',
  subtitle:
    'From pixel-perfect React frontends to scalable Node.js backends and databases — these projects showcase my complete stack expertise in building production-ready web apps.',

  /* ---------- 📁 ৩টা প্রজেক্ট: Frontend + Backend + Full-Stack ---------- */
  cards: [
    /* =====================================================
       ১) Frontend Development Project
       ===================================================== */
    {
      category: 'Frontend Development',
      title: 'Premium E-Commerce UI',
      description:
        'A pixel-perfect, fully responsive frontend with 50+ reusable React components, smooth animations, dark/light mode, and SEO-optimized product pages with 98+ Lighthouse performance score.',
      techStack: [
        'React',
        'Next.js 14',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Shadcn UI',
        'Figma',
      ],
      image: project1,
    },

    /* =====================================================
       ২) Backend & API Development Project
       ===================================================== */
    {
      category: 'Backend & API Development',
      title: 'TaskFlow API — Enterprise Task Backend',
      description:
        'Production-grade RESTful API with role-based auth, real-time collaboration via WebSockets, Redis caching for 3x faster responses, 90%+ test coverage with Jest, and Dockerized AWS deployment.',
      techStack: [
        'Node.js',
        'Express',
        'MongoDB',
        'JWT Auth',
        'Redis',
        'Jest',
        'Docker',
        'AWS S3',
      ],
      image: project2,
    },

    /* =====================================================
       ৩) Full-Stack E-Commerce Project
       ===================================================== */
    {
      category: 'Full-Stack E-Commerce',
      title: 'Complete E-Commerce Platform',
      description:
        'A complete multi-vendor marketplace with Stripe payments, admin dashboard, product reviews, inventory tracking, and role-based authentication for customers & sellers.',
      techStack: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Stripe',
        'JWT',
        'Tailwind',
      ],
      image: project3,
    },
  ],

  cta: {
    text: 'Got a full-stack project in mind?',
    linkLabel: "Let's build it together.",
  },
};

/* =========================================================
   ১) Section শিরোনাম (Badge + Heading + Subtitle)
   ========================================================= */
function SectionHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
      {/* "My Projects" — কালো pill + কমলা asterisk */}
      <span
        className={cn(
          'inline-flex items-center gap-2',
          'px-5 py-2.5 rounded-full',
          'bg-black border border-white/10',
          'text-text-inverse text-[15px] font-semibold',
          'mb-6',
        )}
      >
        <AsteriskIcon className="text-primary" size={18} />
        {PROJECTS.badge}
      </span>

      {/* বড় শিরোনাম */}
      <h2
        className={cn(
          'font-bold tracking-tight leading-tight',
          'text-text-inverse',
          'text-[40px] sm:text-[48px] lg:text-[64px]',
        )}
      >
        {PROJECTS.heading}
      </h2>

      {/* সাবটাইটেল */}
      <p
        className={cn(
          'mt-6 text-[17px] lg:text-[19px] leading-relaxed',
          'text-text-muted max-w-3xl mx-auto',
        )}
      >
        {PROJECTS.subtitle}
      </p>
    </div>
  );
}

/* =========================================================
   ২) একক Project Card
   Props: { image, category, title, description, techStack }
   ========================================================= */
function ProjectCard({
  image,
  category,
  title,
  description,
  techStack,
}) {
  return (
    <div
      className={cn(
        'group relative flex flex-col w-full h-full rounded-[28px]',
        'bg-surface-raised border border-white/5',
        'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]',
        'overflow-hidden',
        'hover:border-primary/30 hover:-translate-y-1',
        'transition-all duration-400 ease-out',
      )}
    >
      {/* -------------------- উপরের ইমেজ অংশ -------------------- */}
      <div className="p-4 pb-0 shrink-0">
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[20px]">
          <img
            src={image}
            alt={title}
            className={cn(
              'w-full h-full object-cover',
              'transition-transform duration-500 ease-out',
              'group-hover:scale-105',
            )}
          />
        </div>
      </div>

      {/* -------------------- নিচের টেক্সট অংশ (flex-1 = সমান উচ্চতা) -------------------- */}
      <div className="p-7 pt-6 flex flex-col flex-1">
        {/* ক্যাটাগরি (কমলা বুলেট + টেক্সট) */}
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'w-[8px] h-[8px] rounded-full',
              'bg-primary',
            )}
          />
          <span
            className={cn(
              'text-[15px] font-semibold',
              'text-primary',
            )}
          >
            {category}
          </span>
        </div>

        {/* প্রজেক্ট টাইটেল */}
        <h3
          className={cn(
            'mt-4 font-bold leading-tight tracking-tight',
            'text-text-inverse',
            'text-[24px] lg:text-[26px]',
          )}
        >
          {title}
        </h3>

        {/* ডেসক্রিপশন */}
        <p
          className={cn(
            'mt-3 text-[15px] leading-relaxed',
            'text-text-muted',
          )}
        >
          {description}
        </p>

        {/* 🔧 Tech Stack Badges — শেষের দিকে নিচে push করার জন্য mt-auto */}
        {techStack && techStack.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className={cn(
                  'inline-flex items-center px-3 py-[6px] rounded-full',
                  'text-[12px] font-semibold leading-none',
                  'bg-primary/10 text-primary',
                  'border border-primary/20',
                  'transition-colors duration-200',
                  'group-hover:bg-primary group-hover:text-text-inverse group-hover:border-primary',
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   ৩) নিচের CTA বার
   "Got a full-stack project in mind? Let's build it together."
   ========================================================= */
function CtaBar() {
  return (
    <div className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
      {/* বামে: ২টা avatar + কমলা Phone ব্যাকগ্রাউন্ড */}
      <div className="flex items-center shrink-0">
        {/* প্রথম avatar (পিছনে) — developer প্রোফাইল */}
        <div
          aria-hidden="true"
          className={cn(
            'relative z-10 w-11 h-11 rounded-full overflow-hidden',
            'border-2 border-surface bg-surface-raised',
          )}
        >
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Ultra-realistic%20professional%20headshot%20portrait%20of%20a%20young%20friendly%20male%20full-stack%20developer%2C%20soft%20smile%2C%20casual%20black%20tech%20t-shirt%2C%20modern%20minimal%20dark%20background%20with%20warm%20orange%20rim%20lighting%2C%20studio%20photography%2C%208K%20high%20detail%2C%20social%20media%20profile%20picture%20aesthetic&image_size=square"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* দ্বিতীয় avatar (কমলা ব্যাকগ্রাউন্ডে Phone icon, সামান্য overlap) */}
        <div
          aria-hidden="true"
          className={cn(
            'relative z-20 -ml-3',
            'w-11 h-11 rounded-full flex items-center justify-center',
            'bg-primary text-white border-2 border-surface',
          )}
        >
          <PhoneIcon size={18} />
        </div>
      </div>

      {/* ডানে: CTA টেক্সট + লিংক */}
      <p className="text-[16px] lg:text-[18px] text-text-inverse">
        {PROJECTS.cta.text}{' '}
        <span className="text-primary">
          <a
            href="#contact"
            className={cn(
              'font-bold underline underline-offset-4',
              'decoration-primary decoration-2',
              'hover:text-primary-hover transition-colors duration-200',
            )}
          >
            {PROJECTS.cta.linkLabel}
          </a>
        </span>
      </p>
    </div>
  );
}

/* =========================================================
   ⭐️ মূল Projects কম্পোনেন্ট
   📌 Layout: <section> → <Container size="xl"> → Header + Grid + CTA
   (Service, About, Footer এর মতো একই pattern)
   ========================================================= */
function Projects() {
  return (
    <section
      id="projects"
      className={cn(
        'relative py-16 lg:py-24 overflow-hidden',
        'bg-surface',
      )}
    >
      {/* 📌 Container max-w-xl (1440px) — About/Service এর মতো */}
      <Container size="xl">
        {/* ১) উপরের শিরোনাম অংশ */}
        <SectionHeader />

        {/* ২) মাঝের ৩ কলাম Project Card Grid */}
        <div
          className={cn(
            'mt-16 lg:mt-20',
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8',
          )}
        >
          {PROJECTS.cards.map((cardData) => (
            <ProjectCard key={cardData.title} {...cardData} />
          ))}
        </div>

        {/* ৩) নিচের CTA বার */}
        <CtaBar />
      </Container>
    </section>
  );
}

export default Projects;
