"use client";
import PaymentVerification from "@/components/dashboard/Course_Cart/PaymentVerification";
import React, { Suspense } from "react";


export default function Payment() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<div>Loading payment details...</div>}>
        <PaymentVerification/>
      </Suspense>

    </div>
  );
}
