import Image from "next/image";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import NewArrival from "@/components/NewArrival";
export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <NewArrival />
    </main>
  );
}
