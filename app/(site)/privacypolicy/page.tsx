import { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "My DawaiWala",
  description: "Welcome to My Dawai Wala, one stop to all your medine needs",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <PrivacyPolicy/>
    </main>
  );
}
