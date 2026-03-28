import TM_Training from "@/components/Website/Services/Outsourcing/TM_Training";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main>
      <TM_Training />
    </main>
  );
}
