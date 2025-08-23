import { Metadata } from "next";
import HealthCare_Sector from "@/components/Website/Sectors/HealthCare/HealthCare";

export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main>
      <HealthCare_Sector />
    </main>
  );
}
