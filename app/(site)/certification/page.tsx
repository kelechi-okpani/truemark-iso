import { Metadata } from "next";
import TM_Certifications from "@/components/Website/Services/Certification/Certifications";
import AboutCertification from "@/components/Website/Services/Certification/About-Certification";

export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main>
      <AboutCertification />
      <TM_Certifications />
    </main>
  );
}
