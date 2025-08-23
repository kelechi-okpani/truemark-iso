"use client";
import { useState } from "react";
import Cart from "@/components/dashboard/Course_Cart/Cart";


export default function MyLearningPage() {
  const [activeTab, setActiveTab] = useState("All courses");

  return (
    <div className="min-h-screen bg-white">
        {/*<Course_Cart/>*/}
        <Cart/>
    </div>
  );
}
