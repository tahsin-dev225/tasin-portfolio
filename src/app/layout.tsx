import "@ant-design/v5-patch-for-react-19";
import "antd/dist/reset.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Bitter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/Ui/SmothScroll";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // যেসব weight দরকার
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tasin Ahmed",
  description:
    "tasin portfolio tasinahmed-dev tahsin tahsin-ahmed tasin ahmed tasin-dev tasin-ahmed developer tasin-developer tasin-ahmed-webdeveloper webdeveloper web develper tasinahmed-dev.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bitter.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
