'use client'
import React, { useState } from 'react';

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] 
        ${isFlipped ? '[transform:rotateY(180deg)]' : ''} 
        group sm:group-hover:[transform:rotateY(180deg)]`}
      onClick={() => {
        // Only allow tap-to-flip for small screens
        if (window.innerWidth < 640) setIsFlipped((prev) => !prev);
      }}
    >
      {/* Front Side (image side) */}
      <div className="absolute inset-0 h-full w-full rounded-xl bg-red-600 text-white p-6 [backface-visibility:hidden]">
        <div className="flex flex-col h-full w-full items-center justify-center">
          <div className="w-64 h-64">
            <img
              src="/images/icon/medicine.svg"
              alt="MDW Medicines"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Back Side (text/details side) */}
      <div className="absolute inset-0 h-full w-full rounded-xl bg-red-600 text-white p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <div className="flex flex-col h-full w-full items-start justify-start">
          <h2 className="text-3xl font-bold mb-4 font-bricolage tracking-tight">MDW Medicine</h2>
          <p className="text-base mb-4 font-semibold">20mins Medicine Delivery</p>
          <ul className="list-disc pl-5">
            <li className="mb-2">Prescription medications & OTC drugs</li>
            <li>Fast delivery for urgent medical needs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}