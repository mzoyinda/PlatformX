import About from "@/components/About";
import EventSchedule from "@/components/EventSchedule";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Speaker from "@/components/Speaker";

export default function Home() {
  return (
    <main class="w-full md:flex flex-col justify-center items-center">
      <div className="w-full max-w-[1800px]">
        <Header />
        <About />
        <Speaker />
        <EventSchedule />
        <Footer />
      </div>
    </main>
  );
}
