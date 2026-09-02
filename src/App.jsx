/* =========================================================
   App.jsx — সব route-এর মাঝে কে কী দেখাবে তা নির্ধারণ করা
   ---------------------------------------------------------
   React Router দিয়ে এখানে বলা হয়:
     • "/" (হোমপেজ) এ গেলে Mainlayout এর ভিতরে Home দেখাবে
     • Mainlayout = Footer (নিচে) সব page-এ থাকবে
     • Navbar প্রতিটা পেজে আলাদাভাবে import করা লাগবে
       (কারণ হোমপেজে Hero-এর সাথে combined background লাগে)
   ========================================================= */
import './App.css';
import { Routes, Route } from 'react-router';
import Mainlayout from './Components/Layouts/Mainlayout';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        {/* Mainlayout = Navbar + Outlet (page content) + Footer */}
        <Route element={<Mainlayout />}>
          {/* হোমপেজ — localhost:5173/ */}
          <Route path="/" element={<Home />} />

          {/* 🔴 NOTE: About, Services, Blog... এখানে আরো যোগ করা যাবে
               Example:
               <Route path="/about" element={<About />} />
          */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
