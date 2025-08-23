import { Metadata } from "next";
import EnergyAndMining from "@/components/Website/Sectors/Energy/Energy";

export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main>
      <EnergyAndMining />
    </main>
  );
}
