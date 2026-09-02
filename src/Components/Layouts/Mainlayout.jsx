/* =========================================================
   Mainlayout.jsx — প্রতিটা পেজের "কব্জা" বা Shell
   ---------------------------------------------------------
   প্রতিটা পেজে সাধারণ যা থাকে (শুধু Footer এখানে) — এগুলো
   এখানে রাখা হয়েছে। যাতে নতুন পেজ বানালে শুধু ভেতরের অংশ লিখতে হয়।

   ⭐️ গুরুত্বপূর্ণ: Navbar এখানে নেই!
   কারণ:
     • হোমপেজে Navbar + Hero section মিলে একটা combined
       background image থাকে (একসাথে wrap করতে হয়)
     • অন্য পেজগুলোতে Navbar আলাদাভাবে লাগবে
   তাই প্রতিটা পেজে নিজের প্রয়োজন অনুযায়ী Navbar import
   করে ব্যবহার করুন।
     • হোমপেজে: <Navbar isHeroPage={true} />
     • অন্য পেজে: <Navbar isHeroPage={false} />

   <Outlet /> = React Router-এর placeholder — নিজের জায়গাটা
                বর্তমান route-এর কম্পোনেন্টকে দিয়ে দেয়।
   ========================================================= */
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

function Mainlayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Mainlayout;
