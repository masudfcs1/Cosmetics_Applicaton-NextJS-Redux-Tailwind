import Image from "next/image";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import NewArrival from "@/components/NewArrival";
import Category from "@/components/Category";
import BlogSection from "@/components/BlogSection";
export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <NewArrival />
      <Category />
      <BlogSection />
    </main>
  );
}
