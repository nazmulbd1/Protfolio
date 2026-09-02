/* =========================================================
   cn() — ClassName মিলানোর Helper (সহজ ভার্সন)
   ---------------------------------------------------------
   Tailwind class গুলো বারবার শর্ত অনুযায়ী যোগ/বাদ দিতে
   এই ফাংশনটা ব্যবহার করা হয়।

   এটা কি ধরার ইনপুট নেয়:
     • স্ট্রিং            → 'px-4 py-2'
     • অবজেক্ট (শর্তসাপেক্ষ)
                          → { 'bg-red': error, 'bg-green': success }
     • অ্যারে             → ['px-4', condition && 'py-8']
     • false / null / undefined → এগুলো auto-ইগনোর হয়

   বিশেষ ফিচার: একই ধরনের Tailwind utility বারবার দিলে
   শেষেরটা win করে (প্রথমেরটা বাদ যায়)।
   যেমন: cn('px-2', 'px-8')  → শুধু 'px-8' (last wins!)

   === উদাহরণ ===
   cn('px-4', 'py-2');
     // → 'px-4 py-2'

   const isLarge = true;
   cn('px-2', isLarge && 'px-6');
     // → 'px-2 px-6' কিন্তু dedupe-এর পর শুধু 'px-6'

   cn('rounded', { 'bg-blue': true, 'text-white': true });
     // → 'rounded bg-blue text-white'
   ========================================================= */

export function cn(...inputs) {
  const classes = [];

  // ভেতরে ঢুকে প্রতিটা input-কে ভেঙে classes array-তে পুশ করা
  function walk(value) {
    // ভ্যালু যদি falsy হয় (false/0/''/null/undefined) — কিছু করা না
    if (!value) return;

    // যদি সরাসরি স্ট্রিং/সংখ্যা হয়
    if (typeof value === 'string' || typeof value === 'number') {
      classes.push(String(value));
      return;
    }

    // যদি অ্যারে হয় — প্রতিটা আইটেম আবার walk()-এ পাঠানো
    if (Array.isArray(value)) {
      value.forEach(walk);
      return;
    }

    // যদি অবজেক্ট হয় — key-গুলোর মান যদি truthy হয়, key-কেই class হিসেবে নেওয়া
    if (typeof value === 'object') {
      for (const key of Object.keys(value)) {
        if (value[key]) classes.push(key);
      }
    }
  }

  // সব ইনপুটকে walk() করে classes array-তে রাখা
  inputs.forEach(walk);

  // একই রকম Tailwind utility দুটো থাকলে (px-2 vs px-6) শেষেরটা রাখা
  return dedupeTailwindClasses(classes).join(' ');
}

/* ---------------------------------------------------------
   dedupeTailwindClasses()
   ---------------------------------------------------------
   একই ধরনের utility (যেমন: px-2 ও px-6 দুটো) থাকলে
   শেষেরটাই রাখবো। "Prefix" ধরে match করা হয়।

   উদাহরণ: classes = ['px-2', 'py-4', 'px-6']
   prefix: px → ২বার আছে, শেষের 'px-6' রাখব
   ফলাফল: ['py-4', 'px-6']
   --------------------------------------------------------- */
function dedupeTailwindClasses(classes) {
  const seen = new Map();      // কোন কোন prefix আগে এসেছে
  const result = [];

  // শেষ থেকে শুরু করে iterate করছি, কারণ "last wins"
  for (let i = classes.length - 1; i >= 0; i--) {
    const cls = classes[i].trim();
    if (!cls) continue;

    // একটা className-এর ভেতরেও মাঝে মাঝে স্পেস থাকতে পারে
    const tokens = cls.split(/\s+/);
    for (let j = tokens.length - 1; j >= 0; j--) {
      const token = tokens[j];
      const key = tailwindKey(token);   // utility-এর prefix/আইডেন্টিফায়ার
      if (seen.has(key)) continue;      // আগে দেখা গেছলে skip
      seen.set(key, true);
      result.unshift(token);            // result-এর শুরুতে যোগ (ক্রম ঠিক রাখতে)
    }
  }

  return result;
}

/* ---------------------------------------------------------
   tailwindKey() — একটা class থেকে এটা কোন ধরনের তা বের করে
   ---------------------------------------------------------
   উদাহরণ:
     'hover:text-red-500/50'  → key = 'hover:text'
     'px-4'                   → key = ':px'
     'rounded-full'           → key = ':rounded'

   মূলে: "prefix" বের করা হয় যাতে একই ধরনের ক্লাস চেনা যায়।
   (বিগিনারদের জন্য: এই অংশটা এডভান্সড, সামান্য ধারণা রাখলেই চলবে)
   --------------------------------------------------------- */
function tailwindKey(cls) {
  const bang    = cls.lastIndexOf('!');
  const slash   = cls.lastIndexOf('/');
  const stripped = slash > bang ? cls.slice(0, slash) : cls;

  const bracket = stripped.indexOf('[');
  const cutoff  = bracket !== -1 ? bracket : stripped.length;
  const core    = stripped.slice(0, cutoff);

  const lastColon = core.lastIndexOf(':');
  const base      = lastColon !== -1 ? core.slice(lastColon + 1) : core;
  const prefix    = base.includes('-') ? base.slice(0, base.lastIndexOf('-')) : base;

  return `${lastColon !== -1 ? core.slice(0, lastColon) : ''}:${prefix}`;
}
