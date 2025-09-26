"use client";
import React, { useState, useMemo } from "react";
import Analytics from "@/components/dashboard/Overview";



export default function OverviewPage() {

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#387467] text-white px-6 py-8 rounded-md mb-5">
        <h1 className="text-3xl font-bold">Overview</h1>
      </header>
      <Analytics/>
    </div>
  );
}


