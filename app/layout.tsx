import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const barlow = Barlow({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Dhruv Sharma — Data Analyst",
  description:
    "Revenue-Focused Data Analyst. Turning ambiguity into measurable business outcomes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${barlow.variable}`}>
        {children}
      </body>
    </html>
  );
}
