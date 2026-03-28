import AboutOutsourcing from "@/components/Website/Services/Outsourcing/About-Outsourcing";
import TM_Outsourcing from "@/components/Website/Services/Outsourcing/Outsourcing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main>
      <AboutOutsourcing />
      <TM_Outsourcing />
    </main>
  );
}
