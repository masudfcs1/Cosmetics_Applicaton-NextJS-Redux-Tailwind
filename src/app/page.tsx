import Image from "next/image";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import NewArrival from "@/components/NewArrival";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <NewArrival />
      <Category />
      <Footer />
    </main>
  );
}
