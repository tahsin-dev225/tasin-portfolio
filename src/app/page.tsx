import AboutMe from "@/components/Landing/About";
import Banner from "@/components/Landing/Banner";
import Contact from "@/components/Landing/Contact";
import Services from "@/components/Landing/Service";
import Work from "@/components/Landing/Work";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className=" bitter-font">
      <div className="lg:w-[86%] mx-auto">
        <Banner/>
        <AboutMe/>
        <Work/>
        <Services/>
        <Contact/>
      </div>
      <Footer/>
    </main>
  );
}
