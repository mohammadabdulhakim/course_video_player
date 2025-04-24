import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"

import "./globals.css";

const spartan = League_Spartan({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Course Page",
  description: "Responsive Course page with topics, comments, ask question, leaderboard, video player, add new comments, exams and pdf viewer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spartan.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
