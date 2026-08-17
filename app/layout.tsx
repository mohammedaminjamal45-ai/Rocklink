import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body" });

export const metadata: Metadata = { title: "ROCKLINK - A link in bio built for you.", description: "One link to share everything you create, curate, and sell." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={display.variable + " " + body.variable + " " + "font-body"}>{children}</body></html>);
}
