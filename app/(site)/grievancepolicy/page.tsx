import { Metadata } from "next";
import GrievancePolicy from "@/components/GrievancePolicy";

export const metadata: Metadata = {
  title: "My DawaiWala",
  description: "Welcome to My Dawai Wala, one stop to all your medine needs",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <GrievancePolicy/>
    </main>
  );
}
