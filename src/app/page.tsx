import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto my-auto p-2">
        <NavBar />
        <HeroSection />
      </div>
    </main>
  );
}
