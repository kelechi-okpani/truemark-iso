import { Metadata } from "next";
import VerificationAndValidation from "@/components/Website/Services/Verification_Validation/VerificationAndValidation";

export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main>
      <VerificationAndValidation />
    </main>
  );
}
