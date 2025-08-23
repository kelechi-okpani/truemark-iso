import { Metadata } from "next";
import Government_Policy from "@/components/Website/Sectors/Government/Government";

export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main>
      <Government_Policy />
    </main>
  );
}
