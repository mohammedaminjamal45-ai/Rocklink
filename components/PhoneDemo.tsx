"use client";

import { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Preset Pack Vol. 3", price: "$18", tag: "Digital" },
  { id: 2, name: "1:1 Feedback Call", price: "$65", tag: "Booking" },
  { id: 3, name: "Studio Hoodie", price: "$48", tag: "Merch" },
];

export default function PhoneDemo() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [paidId, setPaidId] = useState<number | null>(null);

  const open = PRODUCTS.find((p) => p.id === openId);

  function handlePay() {
    setPaidId(openId);
    setTimeout(() => {
      setOpenId(null);
      setTimeout(() => setPaidId(null), 400);
    }, 900);
  }

  return (
    <div className="relative mx-auto w-[280px] select-none sm:w-[300px]">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-[#0c0c0c] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
        <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-[#050505]" />
        <div className="relative h-[560px] w-full overflow-hidden bg-[#0c0c0c] pt-9">
          <div className="flex flex-col items-center gap-2 px-6 pb-4 text-center">
            <div className="h-14 w-14 rounded-full bg-[#ff4d2e]" />
            <p className="text-sm font-semibold text-white">@mayaedits</p>
            <p className="text-[10px] uppercase tracking-widest text-white/40">rocklink.co/mayaedits</p>
          </div>

          <div className="flex flex-col gap-2 px-4">
            {PRODUCTS.map((p) => (
              <button
                key={p.id}
                onClick={() => setOpenId(p.id)}
                className="flex w-full items-center justify-between border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:border-white/25"
              >
                <span>
                  <span className="block text-sm font-medium text-white">{p.name}</span>
                  <span className="block text-[10px] uppercase tracking-widest text-white/40">{p.tag}</span>
                </span>
                <span className="text-sm text-[#ff4d2e]">{p.price}</span>
              </button>
            ))}
          </div>

          <p className="mt-6 px-6 text-center text-[10px] uppercase tracking-widest text-white/30">
            tap a product - checkout opens here, no redirect
          </p>

          <div
            className={
              "absolute inset-x-0 bottom-0 z-30 rounded-t-3xl border-t border-white/10 bg-[#0c0c0c] px-5 pb-6 pt-4 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out " +
              (open ? "translate-y-0" : "translate-y-full")
            }
          >
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/15" />
            {open && (
              <>
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">{open.name}</p>
                    <p className="text-xs text-white/40">{open.price}</p>
                  </div>
                  <button onClick={() => setOpenId(null)} className="text-xs text-white/40 hover:text-white">
                    close
                  </button>
                </div>
                <button
                  onClick={handlePay}
                  disabled={paidId === open.id}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-white/90 disabled:bg-[#ff4d2e] disabled:text-white"
                >
                  {paidId === open.id ? "Paid" : "Pay - one tap"}
                </button>
                <p className="mt-2 text-center text-[10px] uppercase tracking-widest text-white/30">
                  Apple Pay . Google Pay
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
