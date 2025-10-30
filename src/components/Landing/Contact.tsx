"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import { FaFacebook } from "react-icons/fa";
import Ribbons from "../AnimateComponent/AnimatedCursor";
import SectionHeader from "../shared/SectionHeader";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const notify = (str: string) => toast(str);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      notify("✅ Message sent successfully!");
      setEmail("");
      setMessage("");
    } else {
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <section
      className="py-7 md:py-10 mb-2 md:mb-8 bg-[#72a7f503]  xl:py-16 relative font-sans text-gray-200"
      id="contact"
    >
      <ToastContainer />
      <div className="absolute -z-30 rounded-full blur-3xl bg-gradient-to-r from-sky-500/10 via-cyan-800/20 to-purple-400/10 size-48 md:size-72 top-1/2 right-5/12"></div>

      <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1380px] mx-auto px-2 smm:px-3 sm:px-4 md:px-6">
        <SectionHeader
          title="Get In Touch"
          subtitle="I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
        />

        <div className="grid sm:grid-cols-2 z-40 gap-10 items-center">
          {/* Contact info */}
          <div className="flex flex-col justify-between px-3 rounded-2xl bg-white/5 border-[1px] border-sky-300/10 p-2.5 h-full lg:h-[100%] mt-auto">
            <div className="space-y-6 py-2 md:py-4 px-1.5 md:px-3.5">
              <div className="flex text-[13px] xsm:text-[14px] smm:text-[15px] sm:text-base items-center gap-2 sm:gap-4">
                <Mail className="w-6 h-6 text-blue-500" />
                <span className="text-gray-300">ahmedtasin225@gmail.com</span>
              </div>
              <div className="flex text-[13px] xsm:text-[14px] smm:text-[15px] sm:text-base items-center gap-2 sm:gap-4">
                <Phone className="w-6 h-6 text-green-600" />
                <span className="text-gray-300">+880 01331224641</span>
              </div>
              <div className="flex text-[13px] xsm:text-[14px] smm:text-[15px] sm:text-base items-center gap-2 sm:gap-4">
                <MapPin className="w-6 h-6 text-red-800" />
                <span className="text-gray-300">
                  Kuchiamora, Munshigonj, Dhaka, Bangladesh
                </span>
              </div>
            </div>
            <div className=" py-4 px-2.5 shadow-sky-400/5">
              <div className=" border-b border-sky-600/30 w-[100%]"></div>

              <h3 className="text-sm sm:text-lg mt-2! font-medium bg-gradient-to-r from-indigo-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Also contact with social media.
              </h3>

              <div className="flex gap-6 mt-6">
                <a
                  href="https://github.com/tahsin-dev225"
                  target="_blank"
                  className="hover:text-white"
                >
                  <BsGithub className="w-6 h-6 text-gray-400 hover:text-white transition" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tasin57"
                  target="_blank"
                  className="hover:text-white"
                >
                  <FaLinkedin className="w-6 h-6 text-blue-800 bg-white  transition" />
                </a>
                <a
                  href="https://www.facebook.com/md.tasin.102750"
                  target="_blank"
                  className=""
                >
                  <FaFacebook className="text-[26px] border border-blue-700 shadow-blue-950 shadow bg-white rounded-full text-blue-700 transition" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 p-3 smm:p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border border-sky-300/10"
          >
            <div>
              <label className="block text-sm mb-2 text-gray-400">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-md bg-[#1e1e2d64] border border-gray-700 text-gray-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-md bg-[#1e1e2d45] border border-gray-700 text-gray-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 cursor-pointer rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center mt-3 text-sm text-gray-400">{status}</p>
            )}
          </form>
        </div>
      </div>
      {/* <div className="w-full top-0 h-full absolute overflow-hidden">
         <div className="relative h-full overflow-hidden " >
           <Ribbons
             baseThickness={20}
             colors={["#505add"]}
             speedMultiplier={0.5}
             maxAge={550}
             enableFade={false}
             enableShaderEffect={true}
           >
           </Ribbons>
         </div>
       </div>  */}
    </section>
  );
}
