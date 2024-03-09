import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
<main class="w-full md:flex flex-col justify-center items-center">
<div className="w-full max-w-[2000px]">
  <Header/>
  <Footer/>
</div>
 </main>
  );
}
