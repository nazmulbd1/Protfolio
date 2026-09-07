import Container from './Layouts/Container';
import { cn } from '../lib/utils';
import { AsteriskIcon, PhoneIcon } from './Icons';

/* =========================================================
   Projects Section — "My Projects / Showcase"
   ---------------------------------------------------------
   Layout:
     উপরে: "My Projects" Badge (black pill + orange asterisk)
            + বড় শিরোনাম + সাবটাইটেল
     মাঝে: ৩টা Project Card (desktop-এ ৩ কলাম, mobile-এ ১ কলাম)
     নিচে: CTA বার — "Let's Transform Your Ideas..." + View link
   ========================================================= */

/* =========================================================
   📝 আপনার তথ্য এখান থেকে পরিবর্তন করুন
   ========================================================= */
const PROJECTS = {
  badge: 'My Projects',
  heading: 'A showcase of my best work',
  subtitle:
    'From branding and UI/UX design to full website solutions, my work focuses on delivering impactful results that enhance user experience.',

  cards: [
    {
      category: 'Web Design',
      title: 'Nova Design Studio',
      description:
        'A modern & creative design project focused',
      image:
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20web%20designer%20working%20on%20laptop%20with%20green%20plants%20in%20background%2C%20modern%20office%2C%20warm%20lighting&image_size=landscape_4_3',
    },
    {
      category: 'Visual Identity',
      title: 'NextGen User Interface',
      description:
        'A modern & creative design project focused',
      image:
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20woman%20in%20red%20blazer%20working%20on%20white%20laptop%20with%20coffee%20cup%2C%20notebook%2C%20modern%20bright%20office%20interior&image_size=landscape_4_3',
    },
    {
      category: 'E-Commerce',
      title: 'E-Commerce Platform UI',
      description:
        'A modern & creative design project focused',
      image:
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20woman%20in%20orange%20blazer%20reviewing%20tablet%20in%20modern%20coworking%20space%2C%20warm%20ambient%20lighting%2C%20furniture%20in%20background&image_size=landscape_4_3',
    },
  ],

  cta: {
    text: "Let's Transform Your Ideas Into Reality",
    linkLabel: 'View Our All Projects.',
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
   Props: { image, category, title, description }
   ========================================================= */
function ProjectCard({ image, category, title, description }) {
  return (
    <div
      className={cn(
        'group relative w-full h-full rounded-[28px]',
        'bg-surface-raised border border-white/5',
        'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]',
        'overflow-hidden',
        'hover:border-primary/30 hover:-translate-y-1',
        'transition-all duration-400 ease-out',
      )}
    >
      {/* -------------------- উপরের ইমেজ অংশ -------------------- */}
      <div className="p-4 pb-0">
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

      {/* -------------------- নিচের টেক্সট অংশ -------------------- */}
      <div className="p-7 pt-6">
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
      </div>
    </div>
  );
}

/* =========================================================
   ৩) নিচের CTA বার
   "Let's Transform Your Ideas Into Reality - View Our All Projects."
   ========================================================= */
function CtaBar() {
  return (
    <div className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
      {/* বামে: ২টা avatar + কমলা Phone ব্যাকগ্রাউন্ড */}
      <div className="flex items-center shrink-0">
        {/* প্রথম avatar (পিছনে) */}
        <div
          aria-hidden="true"
          className={cn(
            'relative z-10 w-11 h-11 rounded-full overflow-hidden',
            'border-2 border-surface bg-surface-raised',
          )}
        >
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20male%20portrait%20avatar%2C%20friendly%20smile%2C%20business%20casual&image_size=square"
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
            href="#projects"
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
