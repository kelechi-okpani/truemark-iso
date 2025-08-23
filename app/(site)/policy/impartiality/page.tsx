import { Metadata } from "next";
import ImpartialityPolicy from "@/components/Website/Who_we_are(cont1)/ImpartialityPolicy";

export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main>
    <ImpartialityPolicy/>
    </main>
  );
}
