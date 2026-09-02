/* =========================================================
   Home.jsx — হোমপেজ (route: "/")
   ---------------------------------------------------------
   Home পেজে যতগুলো section থাকবে — এগুলো এখানে লিস্ট আকারে
   রাখা হয়। নতুন যেকোনো section এখানে যোগ করলেই হোমপেজে দেখা যাবে।

   🔢 Section Order:
     1) Navbar + Herosection (combined bg wrapper)
     2) About
     3) Services & Solutions ← নতুন যোগ করা হয়েছে
   ========================================================= */
import Navbar from '../Components/Heading/Navbar';
import Herosection from '../Components/Herosection';
import About from '../Components/About';
import Services from '../Components/Service';
import heroBgImage from '../assets/hero-bg-image-elite.webp';

function Home() {
  return (
    <main>
      {/* 🔴 ১) Navbar + Hero section এর জন্য Combined Wrapper
           — ভেতরে ৩টা layer আছে (নিচ থেকে উপরে):
             1) Background Image (transparent)
             2) Dark Overlay
             3) Content (Navbar + Hero) z-10
      */}
      <div className="relative bg-surface overflow-hidden">
        {/* ---------- 1️⃣ Background Image (transparent) ----------
             • opacity-90 = ৯০% দৃশ্যমান
             • object-cover + w-full h-full = পুরো জায়গা cover করবে */}
        <img
          src={heroBgImage}
          aria-hidden="true"
          alt=""
          className="absolute inset-0 pointer-events-none object-cover object-center w-full h-full opacity-90"
        />

        {/* ---------- 2️⃣ Light Dark Overlay (খুব হালকা টিন্ট) ----------
             • Tailwind arbitrary gradient দিয়ে বানানো */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(10,10,14,0.25)_0%,rgba(10,10,14,0.18)_40%,rgba(10,10,14,0.35)_100%)]"
        />

        {/* ---------- 3️⃣ Wrapper ভেতরের কন্টেন্ট (সবার উপরে) ---------- */}
        <div className="relative z-10">
          {/* Navbar — হোমপেজে হওয়ায় isHeroPage=true দিয়ে bg transparent করা */}
          <Navbar isHeroPage={true} />

          {/* Hero Section — ওয়েবসাইটের প্রথম বড় অংশ */}
          <Herosection />
        </div>
      </div>

      {/* 🔴 ২) About Section — পরিচিতি, অভিজ্ঞতা, যোগাযোগ */}
      <About />

      {/* 🔴 ৩) Services Section — Services & Solutions (৪টা কার্ড) */}
      <Services />
    </main>
  );
}

export default Home;
