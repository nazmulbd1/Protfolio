import { cn } from '../../lib/utils';

/* =========================================================
   Container — সবচেয়ে সহজ ভার্সন
   ---------------------------------------------------------
   এই কম্পোনেন্টটা পুরো ওয়েবসাইটের কনটেন্টকে সেন্টার করে
   এবং একটা নির্দিষ্ট max-width (প্রজেক্ট রিকোয়ার্ড করা 1440px)
   এর মধ্যে রাখে। বাইরে থেকে padding দেয় যাতে মোবাইলে
   কনটেন্ট স্ক্রিনের প্রান্তে লেগে থাকে না।

   Props:
     - size     : কতটা চওড়া হবে (sm / default / lg / xl / full)
     - className : এক্সট্রা কোনো ক্লাস যোগ করতে চাইলে
     - children : যা এই Container-এর ভিতরে থাকবে
   ========================================================= */

// সাইজ অনুযায়ী max-width নির্ধারণ
const SIZE_MAP = {
  sm:     'max-w-[768px]',
  default: 'max-w-container',  // প্রজেক্টের ফিক্সড 1440px (index.css --width-container থেকে আসে)
  lg:     'max-w-[1280px]',
  xl:     'max-w-[1440px]',    // default এর মতো 1440px (retention প্রসঙ্গে আছে)
  full:   'max-w-full',
};

function Container({ size = 'default', className = '', children }) {
  // সাইজটা ঠিক আছে কিনা দেখে নিচ্ছি; না থাকলে default ব্যবহার করব
  const validSize = Object.keys(SIZE_MAP).includes(size) ? size : 'default';
  const sizeClass = SIZE_MAP[validSize];

  // সব ক্লাস মিলাচ্ছি: সাইজ + width 100% + center + padding + বাএার ক্লাস
  const containerClass = cn(
    sizeClass,
    'w-full mx-auto',          // 100% width + center করা
    'px-4 sm:px-5 lg:px-6',    // মোবাইল/ট্যাব/ডেস্কটপে পাশের padding
    className,
  );

  return (
    <div className={containerClass}>
      {children}
    </div>
  );
}

export default Container;
