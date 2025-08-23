import { Metadata } from "next";
import CertificationProcess from "@/components/Website/Who_we_are/CertificationProcess";

export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main>
    <CertificationProcess/>
    </main>
  );
}
