import type { Metadata } from "next";
import Providers from "@/components/providers/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cricket Score SaaS - Live Cricket Scoring Platform",
  description: "Real-time cricket scoring platform with tournament management, live scores, and team management.",
  keywords: ["cricket", "live scores", "scoring", "tournament", "IPL"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
