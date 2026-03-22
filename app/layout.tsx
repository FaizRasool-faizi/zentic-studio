import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

export const metadata: Metadata = {
  title: "ZENTIC Studio — Premium AI Agency",
  description:
    "We build AI automation, agentic systems, chatbots, and full-stack solutions that scale your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#050810", color: "#f1f5f9", overflowX: "hidden" }}>
        <Navbar />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}