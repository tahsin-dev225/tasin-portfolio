import AboutMe from "@/components/Landing/About";
import Banner from "@/components/Landing/Banner";
import Contact from "@/components/Landing/Contact";
import Services from "@/components/Landing/Service";
import Work from "@/components/Landing/Work";
import SkillsSection from "@/components/Landing/Skills";
import Footer from "@/components/shared/Footer";
import MyJourny from "@/components/OptionalUi/MyJourny";

export default function Home() {
  return (
    <main className=" bitter-font">
      <div className="lg:w-[86%] mx-auto">
        <Banner />
        <AboutMe />
        <SkillsSection />
        <Work />
      </div>
      <MyJourny />
      <div className="lg:w-[86%] mx-auto">
        <Services />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
