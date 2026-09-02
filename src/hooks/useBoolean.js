import { useState } from 'react';

/* =========================================================
   useBoolean Hook — সহজ ভার্সন
   ---------------------------------------------------------
   এটা একটা ছোট "helper" যা true/false state সহজে ম্যানেজ করতে দেয়।

   ধরুন, একটা মোডাল/মেনু আছে যা open/close করতে হয়।
   সাধারণত আমরা এইভাবে লিখতাম:
     const [open, setOpen] = useState(false);
     const openIt   = () => setOpen(true);
     const closeIt  = () => setOpen(false);
     const toggleIt = () => setOpen(v => !v);

   এই hook দিয়ে এক লাইনে সব পাওয়া যায়:
     const { value: open, on, off, toggle } = useBoolean(false);

   Returns:
     value  — বর্তমান মান (true/false)
     setValue — সরাসরি কাস্টম মান সেট করার জন্য
     on()   — value = true করে
     off()  — value = false করে
     toggle() — true → false বা false → true করে
   ========================================================= */

export function useBoolean(initialValue = false) {
  // সরাসরি useState ব্যবহার (আগের useCallback মুছে দিয়ে সহজ করা হয়েছে)
  const [value, setValue] = useState(Boolean(initialValue));

  const on     = () => setValue(true);
  const off    = () => setValue(false);
  const toggle = () => setValue((v) => !v);

  return { value, setValue, on, off, toggle };
}

export default useBoolean;
