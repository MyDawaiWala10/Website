import { Metadata } from "next";
import RefundPolicy from "@/components/RefundPolicy";

export const metadata: Metadata = {
  title: "My DawaiWala",
  description: "Welcome to My Dawai Wala, one stop to all your medine needs",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <RefundPolicy/>
    </main>
  );
}
