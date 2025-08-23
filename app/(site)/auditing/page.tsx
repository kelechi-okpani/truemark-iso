import { Metadata } from "next";
import AboutAuditing from "@/components/Website/Services/Auditing/About-Auditing";
import TM_Auditing from "@/components/Website/Services/Auditing/Auditing";

export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main>
      <AboutAuditing />
      <TM_Auditing />
    </main>
  );
}
