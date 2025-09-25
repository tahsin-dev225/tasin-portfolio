import Banner from "@/components/Landing/Banner";
import Work from "@/components/Landing/Work";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" lg:w-[86%] mx-auto">
      {/* <Navbar/> */}
      <Banner/>
      <Work/>
    </main>
  );
}
